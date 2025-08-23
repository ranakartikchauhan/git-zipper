#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

function getChangedFiles() {
  try {
    const modified = execSync("git diff --name-only HEAD")
      .toString()
      .trim()
      .split("\n")
      .filter(Boolean);

    const untracked = execSync("git ls-files --others --exclude-standard")
      .toString()
      .trim()
      .split("\n")
      .filter(Boolean);

    return Array.from(new Set([...modified, ...untracked]));
  } catch (err) {
    console.error("❌ Git error:", err.message);
    process.exit(1);
  }
}

function createZip(fileList, zipPath) {
  const output = fs.createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  output.on("close", () => {
    console.log(`✅ Created zip: ${zipPath} (${archive.pointer()} bytes)`);
  });

  archive.on("error", (err) => {
    console.error("❌ Archiving error:", err.message);
    process.exit(1);
  });

  archive.pipe(output);

  fileList.forEach((file) => {
    const fullPath = path.resolve(file);
    if (fs.existsSync(fullPath)) {
      archive.file(fullPath, { name: file });
    }
  });

  archive.finalize();
}

function main() {
  const files = getChangedFiles();

  if (files.length === 0) {
    console.log("🚫 No modified or untracked files found.");
    return;
  }

  const args = process.argv.slice(2);
  let fileName = args[0] || "modified.zip";

  if (!fileName.endsWith(".zip")) {
    fileName += ".zip";
  }

  const zipPath = path.resolve(fileName);
  createZip(files, zipPath);
}

main();
