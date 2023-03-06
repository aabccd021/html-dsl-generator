/* eslint-disable fp-ts/no-module-imports */
/* eslint-disable fp-ts/no-lib-imports */

import { readonlyRecord, task } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function.js';
import type { Task } from 'fp-ts/lib/Task.js';

import { reactAttributes } from './reactAttributes/generate.js';

const removeLastPath = (url: string) => url.substring(0, url.lastIndexOf('/'));

const dirName = removeLastPath(import.meta.url);

export type Env = {
  readonly writeFile: (fileUrl: URL, fileContent: string) => Task<unknown>;
};

export const generateTypes = (env: Env) =>
  pipe(
    { reactAttributes },
    readonlyRecord.traverseWithIndex(task.ApplicativePar)((typeName, fileContent) => {
      const filePath = `${dirName}/${typeName}/generated.ts`;
      const fileUrl = new URL(filePath);
      return env.writeFile(fileUrl, fileContent);
    })
  );
