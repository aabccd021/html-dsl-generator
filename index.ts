import { html } from './aab.js';
import { withLiveReload } from './reload.js';

// eslint-disable-next-line import/no-default-export
export default withLiveReload({
  fetch: () => new Response(html, { headers: { 'Content-Type': 'text/html' } }),
});
