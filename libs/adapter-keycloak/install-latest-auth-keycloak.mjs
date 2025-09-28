import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const libDir = 'libs/adapter-keycloak';
const appName = 'auth-demo';

console.log('🔍 Ser etter siste .tgz i', libDir);

// Finn alle .tgz-filer i lib-mappen
const tgzFiles = fs.readdirSync(libDir)
  .filter(file => file.endsWith('.tgz'))
  .sort((a, b) => fs.statSync(path.join(libDir, b)).mtime - fs.statSync(path.join(libDir, a)).mtime);

if (tgzFiles.length === 0) {
  console.error('🚨 Ingen .tgz-filer funnet!');
  process.exit(1);
}

const latestTgz = tgzFiles[0];
const tgzPath = path.join(libDir, latestTgz);
console.log(`📦 Fant siste pakke: ${latestTgz}`);

// Kjør pnpm add mot appen
console.log(`📥 Installerer i ${appName}...`);
execSync(`pnpm add ../../${tgzPath} --filter ${appName}`, {
  cwd: `apps/${appName}`,
  stdio: 'inherit'
});

console.log('✅ Ferdig! Pakken er lagt til.');
