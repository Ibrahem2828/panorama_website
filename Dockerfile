# syntax=docker/dockerfile:1.7
# Production image for the Panorama Next.js standalone server.
# Node is pinned to a patch release so CI, local Docker, and Coolify build
# against the same runtime. Update it deliberately as part of maintenance.
ARG NODE_IMAGE=node:22.23.1-bookworm-slim

FROM ${NODE_IMAGE} AS base
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS dependencies

# Copy dependency manifests first to keep this layer cacheable between source changes.
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

FROM base AS build

# These are public, build-time values. Never pass credentials or private keys
# through ARG/ENV: configure sensitive runtime variables in Coolify instead.
ARG NEXT_PUBLIC_SITE_URL=https://xn--mgbaab0cxheq.tech
ARG NEXT_PUBLIC_CONTACT_EMAIL=panoramacompany31@gmail.com
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL} \
    NEXT_PUBLIC_CONTACT_EMAIL=${NEXT_PUBLIC_CONTACT_EMAIL}

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# A Docker image is only produced when the exact release gates pass.
RUN npm run type-check \
    && npm run lint \
    && npm run test \
    && npm run build

FROM ${NODE_IMAGE} AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    PORT=3000

RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs --create-home nextjs

# Standalone output intentionally contains only production runtime files.
COPY --from=build --chown=nextjs:nodejs /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "const http=require('node:http');const request=http.get('http://127.0.0.1:'+process.env.PORT+'/',(response)=>process.exit(response.statusCode>=200&&response.statusCode<400?0:1));request.setTimeout(3000,()=>{request.destroy();process.exit(1)});request.on('error',()=>process.exit(1));"

CMD ["node", "server.js"]
