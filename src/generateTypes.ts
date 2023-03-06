/* eslint-disable import/no-nodejs-modules */
/* eslint-disable fp-ts/no-module-imports */
/* eslint-disable fp-ts/no-lib-imports */
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { readonlyRecord, task } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function.js';
import type { Task } from 'fp-ts/lib/Task.js';

import { reactAttributes } from './reactAttributes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const parentDir = resolve(__dirname, '..');
const generatedFilesDir = join(parentDir, 'generated');

export type Env = {
  readonly writeFile: (fileName: string, fileContent: string) => Task<unknown>;
};

export const generateTypes = (env: Env) =>
  pipe(
    { reactAttributes },
    readonlyRecord.traverseWithIndex(task.ApplicativePar)((fileName, fileContent) =>
      env.writeFile(join(generatedFilesDir, `${fileName}.ts`), fileContent)
    )
  );
