import { cp, mkdir, stat } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const standalone = resolve(root, ".next", "standalone");
const copies = [
  [resolve(root, "public"), resolve(standalone, "public")],
  [resolve(root, ".next", "static"), resolve(standalone, ".next", "static")],
];

for (const [source, destination] of copies) {
  await stat(source);
  await mkdir(dirname(destination), { recursive: true });
  await cp(source, destination, { recursive: true, force: true });
}
