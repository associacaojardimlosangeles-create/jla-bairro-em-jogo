/* Service worker do Bairro em Jogo: deixa instalar como aplicativo e abrir rápido.
   - Jogo: guardado no celular; a versão nova é baixada em segundo plano quando a tela inicial pede.
   - Modelos 3D, imagens, sons e bibliotecas: guardados na primeira vez e usados direto do celular depois.
   - Firebase (login, ranking, recados): sempre pela internet, nunca guardado. */
const CACHE="bairro-v2",ASSETS="bairro-assets-v1",LIBS="bairro-libs-v1";
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["/","/icon-192.png"])).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k==="bairro-v1").map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("message",e=>{const d=e.data||{};if(d.tipo!=="atualizar"||!d.src)return;
  e.waitUntil(fetch(d.src+"?t="+Date.now(),{cache:"no-store"}).then(r=>{if(!r.ok)throw 0;return r.text()}).then(h=>caches.open(d.cache||"jogo-v1").then(c=>c.put(d.key||"/__jogo.html",new Response(h,{headers:{"Content-Type":"text/html; charset=utf-8"}})))).catch(()=>{}))});
function cacheFirst(req,name){return caches.open(name).then(c=>c.match(req).then(m=>m||fetch(req).then(res=>{if(res.ok||res.type==="opaque")c.put(req,res.clone());return res})))}
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
  if(u.hostname.endsWith("github.io")&&u.pathname.includes("/assets/")){e.respondWith(cacheFirst(r,ASSETS));return}
  if(u.hostname==="cdnjs.cloudflare.com"||u.hostname==="cdn.jsdelivr.net"||u.hostname==="unpkg.com"||u.hostname==="fonts.gstatic.com"){e.respondWith(cacheFirst(r,LIBS));return}
  if(u.origin!==location.origin)return;
  e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(m=>m||caches.match("/"))))});
