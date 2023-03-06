/* eslint-disable functional/no-throw-statement */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-expression-statement */
/* eslint-disable functional/no-conditional-statement */
import { htmlTagNames } from 'html-tag-names';

import { customAttributeTagNames } from './react/data.js';

customAttributeTagNames.forEach((tagName) => {
  if (!htmlTagNames.includes(tagName)) {
    throw new Error(`Unknown tag name: ${tagName}`);
  }
});
