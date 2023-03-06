#!/usr/bin/env bun
/// <reference types="bun-types" />

import type { Env } from '../src/generate.js';
import { generateTypes } from '../src/generate.js';

const env: Env = {
  writeFile: (fileUrl, fileContent) => () => Bun.write(fileUrl, fileContent),
};

const run = generateTypes(env);

// eslint-disable-next-line functional/no-expression-statement
void run();
