import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  if (import.meta.env.PROD && context.url.pathname.startsWith('/keystatic')) {
    return new Response('Not found', { status: 404 });
  }
  return next();
});
