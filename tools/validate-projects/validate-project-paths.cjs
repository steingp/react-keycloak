const fs = require('fs');
const path = require('path');

const workspaceRoot = process.cwd();

function walkDirs(dir, callback) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDirs(fullPath, callback);
    } else if (entry.name === 'project.json') {
      callback(fullPath);
    }
  });
}

function validatePath(key, value, file) {
  if (typeof value !== 'string') return;

  if (value.startsWith('./') || value.includes('..\\') || value.includes('../')) {
    console.warn(`🚨 Invalid path in ${file}: "${key}": "${value}"`);
  }
}

function validateProjectJson(file) {
  const content = fs.readFileSync(file, 'utf-8');
  const json = JSON.parse(content);

  ['root', 'sourceRoot'].forEach((key) => {
    if (json[key]) validatePath(key, json[key], file);
  });

  const targets = json.targets || {};
  for (const [targetName, target] of Object.entries(targets)) {
    const options = target.options || {};
    for (const [key, val] of Object.entries(options)) {
      validatePath(`targets.${targetName}.options.${key}`, val, file);
    }
  }
}

walkDirs(workspaceRoot, validateProjectJson);
