import { createProxyMiddleware, debugProxyErrorsPlugin, loggerPlugin, errorResponsePlugin, proxyEventsPlugin } from "http-proxy-middleware";

const proxyMiddleware = createProxyMiddleware({
  autoRewrite: true,
  changeOrigin: true,
  target: "https://picsum.photos",
  ejectPlugins: true,
  plugins: [debugProxyErrorsPlugin, loggerPlugin, errorResponsePlugin, proxyEventsPlugin],
  logger: console,
  followRedirects: true,
  pathFilter: ["/id"],
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
