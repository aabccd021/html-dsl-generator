/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-conditional-statement */
/* eslint-disable no-var */
/* eslint-disable functional/no-expression-statement */
import type { Serve, Server, ServerWebSocket } from 'bun';

declare global {
  var ws: ServerWebSocket | undefined;
}

globalThis.ws?.send('reload');

type ResponseType =
  | {
      readonly type: 'nonHTML';
      readonly value: Response;
    }
  | {
      readonly type: 'stringHTML';
      readonly body: string;
      readonly options?: ResponseInit;
    };

const makeLiveReloadScript = (wsUrl: string) => `
<!-- start bun live reload script -->
<script type="text/javascript">
  (function() {
    const socket = new WebSocket("ws://${wsUrl}");
      socket.onmessage = function(msg) {
      if(msg.data === 'reload') {
        location.reload()
      }
    };
    console.log('Live reload enabled.');
  })();
</script>
<!-- end bun live reload script -->
`;

export const serveHTML = (param: {
  readonly fetch: (req: Request) => Promise<ResponseType> | ResponseType;
  readonly port?: string;
  readonly hostname?: string;
  readonly wsPath?: string;
  readonly liveReloadScriptUrl?: string;
}): Serve => {
  const hostname = param.hostname ?? '0.0.0.0';
  const port = param.port ?? '8080';
  const wsPath = param.wsPath ?? '__bun_live_reload_websocket__';
  const wsUrl = `${hostname}:${port}/${wsPath}`;

  return {
    port,
    hostname,
    fetch: async (req, server: Server) => {
      if (req.url === `http://${wsUrl}`) {
        const upgraded = server.upgrade(req);

        if (!upgraded) {
          return new Response('Upgrade failed', { status: 400 });
        }
        return;
      }

      const response = await param.fetch(req);

      if (response.type === 'nonHTML') {
        return response.value;
      }

      const liveReloadScript = makeLiveReloadScript(wsUrl);
      const injectedHtml = response.body + liveReloadScript;

      return new Response(injectedHtml, response.options);
    },
    websocket: {
      message: () => {},
      open: (ws) => {
        globalThis.ws = ws;
      },
    },
  };
};
