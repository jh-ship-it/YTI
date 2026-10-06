import { build as viteBuild } from 'vite';
import { build } from 'esbuild';
import { cp, readdir, readFile, rm } from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await viteBuild({build:{outDir:'dist/client'}});
await cp('dist/client/index.html', 'dist/client/404.html');
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon','.txt':'text/plain','.xml':'application/xml','.webp':'image/webp','.json':'application/json'};
const assets = {};
async function scan(dir, prefix='') {
 for (const file of await readdir(dir,{withFileTypes:true})) {
  const path = `${dir}/${file.name}`, key = `${prefix}/${file.name}`;
  if (file.isDirectory()) await scan(path,key);
  else assets[key] = {type:types[file.name.slice(file.name.lastIndexOf('.'))] || 'application/octet-stream',data:(await readFile(path)).toString('base64')};
 }
}
await scan('dist/client');
await build({entryPoints:['worker/index.js'],outfile:'dist/server/index.js',bundle:true,format:'esm',platform:'browser',minify:true,plugins:[{name:'site-assets',setup(b){b.onResolve({filter:/^site-assets$/},()=>({path:'site-assets',namespace:'embedded'}));b.onLoad({filter:/.*/,namespace:'embedded'},()=>({contents:JSON.stringify(assets),loader:'json'}));}}]});
