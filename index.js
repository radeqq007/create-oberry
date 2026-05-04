#!/usr/bin/env node

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Plop, run } from 'plop';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const argv = process.argv.slice(2);

Plop.prepare({
  cwd: process.cwd(),
  configPath: path.join(__dirname, 'plopfile.js'),
  preload: [],
  completion: argv.includes('--completion'),
}, env => {
  const options = {
    ...env,
    dest: process.cwd()
  }
  run(options, argv, true)
});

