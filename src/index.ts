/* eslint-disable functional/no-conditional-statement */
/* eslint-disable fp-ts/no-lib-imports */
import { htmlTagNames } from 'html-tag-names';

import { customAttributeTagNames } from './react/data.js';

const usableNameMap: Record<string, string> = {
  var: 'var_',
  object: 'object_',
};

const customPrefixMap: Record<string, string> = {
  a: 'anchor',
  q: 'quote',
};

const makePrefix = (tagName: string) => {
  if (!customAttributeTagNames.includes(tagName)) {
    return '';
  }

  const prefix = customPrefixMap[tagName] ?? tagName;
  const capitalizedPrefix = prefix.charAt(0).toUpperCase() + prefix.slice(1);
  return capitalizedPrefix;
};

const makeTagTypeString = (tagName: string) => {
  const usableTagName = usableNameMap[tagName] ?? tagName;
  const tagTypePrefix = makePrefix(usableTagName);
  return (
    `export type ${usableTagName} = ` +
    `OmitReactFields<React.${tagTypePrefix}HTMLAttributes<unknown>>;`
  );
};

const tagTypesString = htmlTagNames.map(makeTagTypeString).join('\n');

export const reactTypesString = `import type * as React from 'react';

type OmitReactFields<T> = T extends React.HTMLAttributes<infer K>
  ? Omit<
      T,
      | keyof React.DOMAttributes<K>
      | 'defaultChecked'
      | 'defaultValue'
      | 'onCancel'
      | 'onClose'
      | 'onToggle'
      | 'suppressContentEditableWarning'
      | 'suppressHydrationWarning'
    >
  : never;

${tagTypesString}
`;
