import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const bumpType = process.argv[2] || 'patch'; // patch | minor | major
const libPath = 'libs/auth';
const appPath = 'apps/auth-demo';

// 1. Bump version
console.log(`🔧 Bumper ${bumpType} versjon...`);
execSync(`npm version ${bumpType}`, { cwd: libPath, stdio: 'inherit' });

// 2. Lag .tgz
console.log(`📦 Kjører pnpm pack...`);
const packOutput = execSync(`pnpm pack`, { cwd: libPath }).toString().trim();
const tgzName = packOutput.split('\n').pop();
const tgzPath = path.join(libPath, tgzName);

// 3. Legg til i app som lokal pakke
console.log(`➕ Legger til ${tgzName} i ${appPath}...`);
execSync(`pnpm add ../../${tgzPath} --filter ${path.basename(appPath)}`, {
  cwd: appPath,
  stdio: 'inherit',
});

// 4. Git commit
console.log(`📁 Git commit...`);
execSync(`git add .`, { stdio: 'inherit' });
execSync(`git commit -m "chore: bump ${bumpType} for auth-lib + linked to app"`, {
  stdio: 'inherit',
});

console.log(`✅ Alt klart! 🚀`);
