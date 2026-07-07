# Panorama Production Deployment Guide

This guide deploys the Panorama public marketing website to a private Linux server using Next.js standalone output, Docker Compose, Nginx, and HTTPS.

The production domain is `https://بانوراما.tech`.

For server configuration, use the Punycode form where required:

```text
بانوراما.tech
xn--mgbaab0cxheq.tech
```

## Server Requirements

- Linux server with SSH access
- Docker Engine
- Docker Compose v2
- Nginx
- Certbot, or an existing SSL certificate
- A DNS A record pointing the domain to the server IP

Node.js is not required on the host when Docker is used.

## DNS Setup

Create an A record:

```text
Host: @
Value: <server IPv4 address>
```

If your DNS provider asks for the ASCII domain, use `xn--mgbaab0cxheq.tech`. Some control panels display `بانوراما.tech` but store the Punycode form internally.

## Environment Setup

Create a production `.env` file from the example:

```bash
cp .env.example .env
```

Expected values:

```bash
NEXT_PUBLIC_SITE_URL=https://بانوراما.tech
NEXT_PUBLIC_CONTACT_EMAIL=panoramacompany31@gmail.com
```

These values are public and are used during the Docker image build for static metadata, sitemap, robots, and visible contact links.

## Build and Run with Docker Compose

From the project root:

```bash
docker compose build
docker compose up -d
docker compose ps
docker compose logs -f panorama-website
```

The app binds to `127.0.0.1:3000` so it is available to Nginx on the host but not exposed publicly without the reverse proxy.

Validate locally on the server:

```bash
curl -I http://127.0.0.1:3000
```

## Nginx Setup

Copy the provided example:

```bash
sudo cp nginx.conf /etc/nginx/sites-available/panorama-website
sudo ln -s /etc/nginx/sites-available/panorama-website /etc/nginx/sites-enabled/panorama-website
sudo nginx -t
sudo systemctl reload nginx
```

The Nginx config uses:

- HTTP to HTTPS redirect
- reverse proxy to `127.0.0.1:3000`
- gzip compression
- long-term caching for `/_next/static/`
- security headers
- HSTS in the HTTPS server block only

A strict Content-Security-Policy is intentionally not enabled by default. Add CSP only after staging tests confirm it does not break Next.js scripts, fonts, images, analytics, or future embeds.

## SSL Setup

With Certbot:

```bash
sudo certbot --nginx -d xn--mgbaab0cxheq.tech
```

If you use an existing certificate, update the `ssl_certificate`, `ssl_certificate_key`, and `ssl_trusted_certificate` paths in `nginx.conf`.

After issuing or changing certificates:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Updating the Website

Pull or copy the new source code, then rebuild:

```bash
docker compose build --no-cache
docker compose up -d
docker compose logs -f panorama-website
```

Validate:

```bash
curl -I https://xn--mgbaab0cxheq.tech
curl -I https://xn--mgbaab0cxheq.tech/sitemap.xml
curl -I https://xn--mgbaab0cxheq.tech/robots.txt
```

## Rollback Notes

Keep a copy of the previous working source archive or Git revision. To roll back:

```bash
git checkout <previous-good-revision>
docker compose build --no-cache
docker compose up -d
```

If the issue is Nginx-only, restore the previous Nginx site file, then run:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Logs and Troubleshooting

Application logs:

```bash
docker compose logs -f panorama-website
```

Container status:

```bash
docker compose ps
docker inspect panorama-website --format='{{json .State.Health}}'
```

Nginx logs:

```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

Common checks:

- DNS resolves to the server IP.
- Nginx uses `xn--mgbaab0cxheq.tech` in `server_name`.
- Docker container is healthy.
- Port `3000` is bound to `127.0.0.1`.
- SSL certificate paths exist and match the configured domain.
- `NEXT_PUBLIC_SITE_URL` is set before building the Docker image.

## Production Validation Checklist

- `npm run lint` passes.
- `npm run build` passes.
- `docker compose build` succeeds.
- `docker compose up -d` starts a healthy container.
- `https://بانوراما.tech` loads (English homepage).
- `https://بانوراما.tech/ar` loads (Arabic homepage).
- `/privacy` (English) and `/ar/privacy` (Arabic) load.
- `/terms` (English) and `/ar/terms` (Arabic) load.
- `/robots.txt` and `/sitemap.xml` load.
- HTTP redirects to HTTPS.
- `/_next/static/` assets have long-term cache headers.
- Security headers are present.
- OpenGraph image exists at `public/og/opengraph-image.png`.
- Final legal copy has been reviewed.

## Google Search Console

1. Add a Domain property for `بانوراما.tech` or the Punycode equivalent.
2. Verify ownership with the DNS TXT record provided by Google.
3. Submit the sitemap:

```text
https://بانوراما.tech/sitemap.xml
```

4. Request indexing for the home page after launch.
5. Recheck indexing and coverage after Google has crawled the site.
