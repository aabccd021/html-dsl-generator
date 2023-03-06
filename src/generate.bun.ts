#!/usr/bin/env bun
/* eslint-disable import/no-nodejs-modules */
/* eslint-disable functional/no-expression-statement */
/// <reference types="bun-types" />

import { fileURLToPath } from 'node:url';

import { dirname } from 'path';

import { reactTypesString } from './index.js';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
Bun.write(`${fileURLToPath(dirname(import.meta.url))}/react-type.ts`, reactTypesString);
