#!/usr/bin/env node

/**
 * Syncs version across all workspace packages
 * Usage: node scripts/sync-versions.js <version>
 */

const fs = require('fs');
const path = require('path');

const version = process.argv[2];

if (!version) {
  console.error('Error: Version argument is required');
  process.exit(1);
}

console.log(`Syncing all packages to version ${version}`);

const packagesDir = path.join(__dirname, '../packages');
const packages = ['core', 'react', 'vue', 'react-table', 'vue-table', 'docs'];

for (const pkg of packages) {
  const packageJsonPath = path.join(packagesDir, pkg, 'package.json');

  if (!fs.existsSync(packageJsonPath)) {
    console.warn(`Warning: ${packageJsonPath} does not exist, skipping`);
    continue;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.version = version;

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`✓ Updated ${pkg} to ${version}`);
}

console.log('Version sync complete!');
