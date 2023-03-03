import { html } from "./aab.js";
import { serveHTML } from "./reload.js";

export default serveHTML({ fetch: () => ({type: 'stringHTML', body: html}) })
