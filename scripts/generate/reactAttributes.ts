import { htmlTagNames } from 'html-tag-names';

export const customAttributeTagNames = [
  'a',
  'audio',
  'area',
  'base',
  'blockquote',
  'button',
  'canvas',
  'col',
  'colgroup',
  'data',
  'details',
  'del',
  'dialog',
  'embed',
  'fieldset',
  'form',
  'html',
  'iframe',
  'img',
  'ins',
  'input',
  'keygen',
  'label',
  'li',
  'link',
  'map',
  'menu',
  'meta',
  'meter',
  'q',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'param',
  'progress',
  'slot',
  'script',
  'select',
  'source',
  'style',
  'table',
  'textarea',
  'td',
  'th',
  'time',
  'track',
  'video',
];

export const customPrefixMap: Record<string, string> = {
  a: 'anchor',
  q: 'quote',
};

const usableNameMap: Record<string, string> = {
  var: 'var_',
  object: 'object_',
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
  const prefix = makePrefix(usableTagName);
  return `export type ${usableTagName} = OmitReactFields<React.${prefix}HTMLAttributes<unknown>>;`;
};

const tagTypesString = htmlTagNames.map(makeTagTypeString).join('\n');

export const reactAttributes =
  `import type * as React from 'react';\n\n` +
  `import type { OmitReactFields } from './internalUtilTypes.js';\n\n` +
  `${tagTypesString}\n`;
