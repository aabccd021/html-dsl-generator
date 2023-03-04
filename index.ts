import { html } from './aab.js';
import { serveHTML2 } from './reload.js';

// eslint-disable-next-line import/no-default-export
export default serveHTML2({
  fetch: () => new Response(html, { headers: { 'Content-Type': 'text/html' } }),
});
