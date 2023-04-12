#!/usr/bin/env node

import { lint } from './linter';
console.log('inside cli.ts');
const filePath = process.argv[2];

if (!filePath) {
  console.error('Path to yaml AsyncAPI schema file is required. Usage: npx @ingka/lint-asyncapi PATH');
} else {
  lint([filePath]);
}
