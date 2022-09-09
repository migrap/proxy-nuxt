import { createProxyMiddleware, debugProxyErrorsPlugin, loggerPlugin, errorResponsePlugin, proxyEventsPlugin } from "http-proxy-middleware";

const proxyMiddleware = createProxyMiddleware({
  autoRewrite: true,
  changeOrigin: true,
  target: "https://jsonplaceholder.typicode.com",
  ejectPlugins: true,
  plugins: [debugProxyErrorsPlugin, loggerPlugin, errorResponsePlugin, proxyEventsPlugin],
  logger: console,
  followRedirects: true,
  pathFilter: ["/users"],
});

//@ts-ignore
export default defineEventHandler(async (event: CompatibilityEvent) => {
  await new Promise((resolve, reject) => {
    //@ts-ignore
    proxyMiddleware(event.req, event.res, (err?: unknown) => {
      if (err) reject(err);
      else resolve(true);
    });
  });
});
