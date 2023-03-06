// eslint-disable-next-line import/no-nodejs-modules
import { fileURLToPath } from 'node:url';

import * as es from '../es/generate.js';

const env: es.Env = {
  writeFile: (fileUrl, fileContent) => () => Bun.write(fileUrl, fileContent),
  absoluteScriptPath: fileURLToPath(import.meta.url),
};

export const generate = es.generate(env);
