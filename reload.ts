import {Serve, Server, ServerWebSocket} from 'bun';

declare global {
  var ws: ServerWebSocket;
}

globalThis.ws?.send('reload');

type ResponseType = {
  readonly type: 'stringHTML';
  readonly body: string;
  readonly options?: ResponseInit
} | {
  readonly type: 'nonHTML';
  readonly value: Response
}

export const serveHTML = (param: {
  fetch: (req: Request) => ResponseType
  port ?: string, 
  hostname ?:string,
  wsPath ?: string,
}): Serve => { 

  const hostname = param?.hostname ?? '0.0.0.0';
  const port = param?.port ?? '8080';
  const wsPath = param?.wsPath ?? '__live_reload__'
  const wsUrl = `${hostname}:${port}/${wsPath}`;

  return {
    fetch: (req, server: Server)=> {

      if (req.url === `http://${wsUrl}`) {
        const upgraded = server.upgrade(req);

        if (!upgraded) {
          return new Response("Upgrade failed", { status: 400 });
        }
        return;
      }


      const response = param.fetch(req);

      if (response.type !== 'stringHTML') {
        return response.value;
      }

      const injectWs = `
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
      `

      const injectedHtml = response.body + injectWs;

      const options: ResponseInit = { 
        ...response.options, 
        headers: {
          ...response.options?.headers,
          'Content-Type': 'text/html'
        }
      }

      return new Response(injectedHtml, options);

    },
    websocket: {
      message: () => {},
      open: (ws) => {
        globalThis.ws = ws;
      }
    },
    port: port ?? "8080",
    hostname: hostname ?? "0.0.0.0"
  } 
};


