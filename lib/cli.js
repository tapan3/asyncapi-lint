#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linter_1 = require("./linter");
console.log("inside cli.ts");
const filePath = process.argv[2];
if (!filePath) {
    console.error('Path to yaml AsyncAPI schema file is required. Usage: npx @ingka/lint-asyncapi PATH');
}
else {
    (0, linter_1.lint)([filePath]);
}
