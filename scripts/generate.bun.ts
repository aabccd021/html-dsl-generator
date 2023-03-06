#!/usr/bin/env bun
/// <reference types="bun-types" />

import type { Env } from '../src/generateTypes.js';
import { generateTypes } from '../src/generateTypes.js';

const env: Env = {
  writeFile: (fileName, fileContent) => () => Bun.write(fileName, fileContent),
};

const run = generateTypes(env);

// eslint-disable-next-line functional/no-expression-statement
void run();
