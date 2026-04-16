#!/usr/bin/env node
/**
 * Ensures .venv exists with dependencies from requirements.txt, then runs mkdocs.
 * Works on macOS/Linux (.venv/bin) and Windows (.venv/Scripts).
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const isWin = process.platform === "win32";
const venvDir = join(root, ".venv");
const binDir = isWin ? join(venvDir, "Scripts") : join(venvDir, "bin");
const mkdocsBin = isWin ? join(binDir, "mkdocs.exe") : join(binDir, "mkdocs");
const pipBin = isWin ? join(binDir, "pip.exe") : join(binDir, "pip");
const python = isWin ? "python" : "python3";

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      stdio: "inherit",
      cwd: root,
      env: process.env,
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited with code ${code}`));
    });
  });
}

async function ensureVenv() {
  if (existsSync(mkdocsBin)) return;

  if (!existsSync(venvDir)) {
    await run(python, ["-m", "venv", venvDir]);
  }
  await run(pipBin, ["install", "-r", "requirements.txt"]);

  if (!existsSync(mkdocsBin)) {
    throw new Error(
      `mkdocs not found at ${mkdocsBin} after install. Try deleting .venv and run again.`,
    );
  }
}

const passThrough = process.argv.slice(2);
if (passThrough[0] === "--setup-only") {
  await ensureVenv();
  process.exit(0);
}

await ensureVenv();

const child = spawn(mkdocsBin, passThrough, {
  stdio: "inherit",
  cwd: root,
  env: process.env,
});
child.on("close", (code) => process.exit(code ?? 0));
