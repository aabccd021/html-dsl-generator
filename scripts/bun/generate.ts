/* eslint-disable import/no-nodejs-modules */
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import * as es from '../../src/es/generate.js';

const env: es.Env = {
  writeFile: (fileUrl, fileContent) => () => {
    console.log(fileUrl);
    return Bun.write(fileUrl, fileContent);
  },
  absoluteScriptPath: resolve(fileURLToPath(import.meta.url), '..'),
};

const generate = es.generate(env);

// eslint-disable-next-line functional/no-expression-statement
void generate();
