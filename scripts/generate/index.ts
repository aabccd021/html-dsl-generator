#!/usr/bin/env bun
/* eslint-disable import/no-nodejs-modules */
/* eslint-disable functional/no-expression-statement */
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { reactAttributes } from './reactAttributes.js';

const files = { reactAttributes };

const writeFiles = Object.entries(files).map(([fileName, fileContent]) => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const projectRoot = resolve(currentFilePath, '..', '..', '..');
  const filePath = join(projectRoot, 'src', `${fileName}.ts`);
  return Bun.write(filePath, fileContent);
});

await Promise.all(writeFiles);
