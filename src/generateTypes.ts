/* eslint-disable fp-ts/no-module-imports */
/* eslint-disable fp-ts/no-lib-imports */

import { readonlyRecord, task } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function.js';
import type { Task } from 'fp-ts/lib/Task.js';

import { reactAttributes } from './reactAttributes.js';

const removeLastPath = (url: string) => url.substring(0, url.lastIndexOf('/'));

const generatedFilesDir = pipe(
  import.meta.url,
  removeLastPath,
  removeLastPath,
  (path) => `${path}/generated`
);

export type Env = {
  readonly writeFile: (fileUrl: URL, fileContent: string) => Task<unknown>;
};

export const generateTypes = (env: Env) =>
  pipe(
    { reactAttributes },
    readonlyRecord.traverseWithIndex(task.ApplicativePar)((fileName, fileContent) => {
      const filePath = `${generatedFilesDir}/${fileName}.ts`;
      const fileUrl = new URL(filePath);
      return env.writeFile(fileUrl, fileContent);
    })
  );
