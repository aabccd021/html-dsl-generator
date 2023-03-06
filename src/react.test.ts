import { htmlTagNames } from 'html-tag-names';

import { reactCustomAttributeTags } from './index.js';

reactCustomAttributeTags.forEach((k) => {
  if (!htmlTagNames.includes(k)) {
    throw new Error(k);
  }
});
