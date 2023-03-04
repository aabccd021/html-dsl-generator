/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/no-method-signature */
/* eslint-disable functional/no-this-expression */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-return-void */
/* eslint-disable functional/no-conditional-statement */
/* eslint-disable no-var */
/* eslint-disable functional/no-expression-statement */
import type { Server, ServerWebSocket, WebSocketHandler, WebSocketServeOptions } from 'bun';

declare global {
  var ws: ServerWebSocket<unknown> | undefined;
}

const reloadCommand = 'reload';

globalThis.ws?.send(reloadCommand);

const makeLiveReloadScript = (wsUrl: string) => `
<!-- start bun live reload script -->
<script type="text/javascript">
  (function() {
    const socket = new WebSocket("ws://${wsUrl}");
      socket.onmessage = function(msg) {
      if(msg.data === '${reloadCommand}') {
        location.reload()
      }
    };
    console.log('Live reload enabled.');
  })();
</script>
<!-- end bun live reload script -->
`;

type PureWebSocketServeOptions<WebSocketDataType> = Omit<
  WebSocketServeOptions<WebSocketDataType>,
  'fetch' | 'websocket'
> & {
  fetch(request: Request, server: Server): Promise<Response> | Response;
  websocket?: WebSocketHandler<WebSocketDataType>;
};

export const withLiveReload = <
  WebSocketDataType,
  T extends PureWebSocketServeOptions<WebSocketDataType>
>(
  serveOptions: T,
  options?: {
    readonly wsPath?: string;
  }
): WebSocketServeOptions<WebSocketDataType> => {
  const hostname = serveOptions.hostname ?? '0.0.0.0';
  const port = serveOptions.port ?? '3000';
  const wsPath = options?.wsPath ?? '__bun_live_reload_websocket__';
  const wsUrl = `${hostname}:${port}/${wsPath}`;

  return {
    ...serveOptions,
    fetch: async (req, server) => {
      if (req.url === `http://${wsUrl}`) {
        const upgraded = server.upgrade(req);

        if (!upgraded) {
          return new Response('Failed to upgrade websocket connection for live reload', {
            status: 400,
          });
        }
        return;
      }

      const response = await serveOptions.fetch(req, server);

      if (response.headers.get('Content-Type') !== 'text/html') {
        return response;
      }

      const originalHtml = await response.text();
      const liveReloadScript = makeLiveReloadScript(wsUrl);
      const htmlWithLiveReload = originalHtml + liveReloadScript;

      return new Response(htmlWithLiveReload, response);
    },
    websocket: {
      ...serveOptions.websocket,
      open: async (ws) => {
        globalThis.ws = ws;
        await serveOptions.websocket?.open?.(ws);
      },
    },
  };
};
