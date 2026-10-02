const reply = (status, body) => Response.json(body, {status, headers:{'Cache-Control':'no-store'}});
export async function contact(request, env) {
  if (request.method !== 'POST') return reply(405, {error:'Method not allowed.'});
  if (request.headers.get('Origin') !== new URL(request.url).origin) return reply(403, {error:'Please submit from this website.'});
  if (!request.headers.get('Content-Type')?.includes('application/json')) return reply(415, {error:'Invalid request format.'});
  const raw = await request.text();
  if (raw.length > 12000) return reply(413, {error:'Please shorten your message.'});
  let body;
  try { body = JSON.parse(raw); } catch { return reply(400, {error:'Invalid request.'}); }
  if (!body || typeof body !== 'object') return reply(400, {error:'Invalid request.'});
  const limits = {id:36,name:120,email:254,organization:180,topic:80,message:4000};
  const data = {};
  for (const [key,max] of Object.entries(limits)) {
    if (typeof body[key] !== 'string' || body[key].trim().length > max) return reply(400, {error:'Please check the form fields.'});
    data[key] = body[key].trim();
  }
  if (body.website || !/^[0-9a-f-]{36}$/i.test(data.id) || !data.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || !data.message || !['Clinical partnership','Research collaboration','International programs','Supporting YTI','General inquiry','Privacy request'].includes(data.topic)) return reply(400, {error:'Please complete all required fields with valid information.'});
  try {
    const result = await env.DB.prepare('INSERT INTO inquiries (id,name,email,organization,topic,message,created_at) VALUES (?,?,?,?,?,?,?) ON CONFLICT(id) DO NOTHING').bind(data.id,data.name,data.email,data.organization,data.topic,data.message,new Date().toISOString()).run();
    if (!result.success) throw new Error('Save failed');
    return reply(201, {ok:true});
  } catch { return reply(503, {error:'Your message could not be saved. Please try again. Your text is still here.'}); }
}
