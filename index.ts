import { html } from './aab.js';
import { serveHTML } from './reload.js';

// eslint-disable-next-line import/no-default-export
export default serveHTML({
  fetch: () => ({
    type: 'stringHTML',
    body: html,
    options: {
      headers: { 'Content-Type': 'text/html' },
    },
  }),
});
