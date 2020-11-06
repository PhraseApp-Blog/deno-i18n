import { createApp } from 'https://servestjs.org/@v1.1.6/mod.ts'
import { handle } from './services/i18next.ts';
// @deno-types="https://servestjs.org/@v1.1.6/types/react/index.d.ts"
import React from 'https://dev.jspm.io/react/index.js';
// @deno-types="https://servestjs.org/@v1.1.6/types/react-dom/server/index.d.ts"
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server.js';
import App from './components/App.tsx';
const app = createApp();

import {DirectionContext} from './contexts/DirectionContext.ts';

app.use(handle);
app.get(new RegExp("^/(.+)"), async (req: any) => {
    const [_, name] = req.match;
    const dir = req.i18n.dir();
    await req.respond({
        status: 200,
        headers: new Headers({
            "content-type": "text/html; charset=UTF-8",
        }),
        body: ReactDOMServer.renderToString(
            <html>
                <head>
                    <meta charSet="utf-8" />
                <title>Hello</title>
                </head>
                <body>
                    <DirectionContext.Provider value={dir}>
                        <App message={req.t('welcome')}/>
                    </DirectionContext.Provider>
                </body>
            </html>,
        ),
    })
})
await app.listen({ port: 8000 })
