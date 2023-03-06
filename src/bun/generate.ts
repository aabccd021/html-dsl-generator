/* eslint-disable import/no-nodejs-modules */
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import * as es from '../es/generate.js';

const env: es.Env = {
  writeFile: (fileUrl, fileContent) => () => {
    console.log(fileUrl);
    return Bun.write(fileUrl, fileContent);
  },
  absoluteScriptPath: resolve(fileURLToPath(import.meta.url), '..'),
};

export const generate = es.generate(env);
