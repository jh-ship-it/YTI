import assets from 'site-assets';
import { contact } from './contact.js';
export default {
 async fetch(request, env) {
  const url = new URL(request.url);
  if (url.pathname === '/api/contact') return contact(request, env);
  if (!['GET','HEAD'].includes(request.method)) return new Response('Method not allowed',{status:405});
  const asset = assets[url.pathname] || (!url.pathname.startsWith('/api/') && request.headers.get('Accept')?.includes('text/html') ? assets['/index.html'] : null);
  if (!asset) return new Response('Not found',{status:404});
  const bytes = Uint8Array.from(atob(asset.data), c => c.charCodeAt(0));
  return new Response(request.method === 'HEAD' ? null : bytes, {headers:{'Content-Type':asset.type,'X-Content-Type-Options':'nosniff','Cache-Control':url.pathname.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'no-cache'}});
 }
};
