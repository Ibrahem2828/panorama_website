import { readdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const testDirectory = join(root, "test");
const testFiles = (await readdir(testDirectory))
  .filter((name) => name.endsWith(".test.mjs"))
  .sort()
  .map((name) => join(testDirectory, name));

if (!testFiles.length) {
  throw new Error("No Node.js contract tests were found in the test directory.");
}

const testProcess = spawn(process.execPath, ["--test", ...testFiles], {
  stdio: "inherit",
  windowsHide: true,
});

const exitCode = await new Promise((resolve, reject) => {
  testProcess.once("error", reject);
  testProcess.once("exit", (code, signal) => {
    if (signal) {
      reject(new Error(`Node.js contract tests were terminated by ${signal}.`));
      return;
    }
    resolve(code ?? 1);
  });
});

process.exitCode = exitCode;
