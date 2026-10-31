/* Mundo SENAI 2026 | offline release 1 */
'use strict';
const CACHE='mundo-senai-equipes-v1-20261031';
const PRECACHE=["./", "./index.html", "./manifest.webmanifest", "./assets/logo.webp", "./assets/solar.webp", "./assets/wind.webp", "./assets/emulator.webp", "./assets/pump.webp", "./assets/icon-192.png", "./assets/icon-512.png"];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(PRECACHE)));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('mundo-senai-equipes-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('message',event=>{if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;
 if(event.request.mode==='navigate'){
  event.respondWith(fetch(event.request).then(response=>{if(!response.ok)throw new Error('network-response');return response;}).catch(()=>caches.open(CACHE).then(cache=>cache.match(new URL('./index.html',self.registration.scope).href))));return;
 }
 event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
