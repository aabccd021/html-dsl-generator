/* eslint-disable fp-ts/no-module-imports */
/* eslint-disable fp-ts/no-lib-imports */

import { readonlyRecord, task } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function.js';
import type { Task } from 'fp-ts/lib/Task.js';

import { reactAttributes } from './reactAttributes/generate.js';

export type Env = {
  readonly writeFile: (fileUrl: string, fileContent: string) => Task<unknown>;
  readonly absoluteScriptPath: string;
};

export const generate = (env: Env) =>
  pipe(
    { reactAttributes },
    readonlyRecord.traverseWithIndex(task.ApplicativePar)((typeName, fileContent) => {
      const filePath = `${env.absoluteScriptPath}/../../es/${typeName}/generated.ts`;
      console.log(filePath);
      return env.writeFile(filePath, fileContent);
    })
  );
