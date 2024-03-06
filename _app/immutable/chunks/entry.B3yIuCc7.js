import{v as e}from"./scheduler.QzJ_vLde.js";import{w as t}from"./index.CoAgsKKR.js";function r(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function n({href:e}){return e.split("#")[0]}new URL("sveltekit-internal://");const a=["href","pathname","search","toString","toJSON"];function o(e,t,r){const n=new URL(e);Object.defineProperty(n,"searchParams",{value:new Proxy(n.searchParams,{get(e,n){if("get"===n||"getAll"===n||"has"===n)return t=>(r(t),e[n](t));t();const a=Reflect.get(e,n);return"function"==typeof a?a.bind(e):a}}),enumerable:!0,configurable:!0});for(const o of a)Object.defineProperty(n,o,{get:()=>(t(),e[o]),enumerable:!0,configurable:!0});return n}const s="/__data.json",i=".html__data.json";const l=window.fetch;window.fetch=(e,t)=>("GET"!==(e instanceof Request?e.method:t?.method||"GET")&&c.delete(f(e)),l(e,t));const c=new Map;function u(e,t){const r=f(e,t),n=document.querySelector(r);if(n?.textContent){let{body:e,...t}=JSON.parse(n.textContent);const a=n.getAttribute("data-ttl");a&&c.set(r,{body:e,init:t,ttl:1e3*Number(a)});return null!==n.getAttribute("data-b64")&&(e=function(e){const t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r.buffer}(e)),Promise.resolve(new Response(e,t))}return window.fetch(e,t)}function f(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const e=[];t.headers&&e.push([...new Headers(t.headers)].join(",")),t.body&&("string"==typeof t.body||ArrayBuffer.isView(t.body))&&e.push(t.body),r+=`[data-hash="${function(...e){let t=5381;for(const r of e)if("string"==typeof r){let e=r.length;for(;e;)t=33*t^r.charCodeAt(--e)}else{if(!ArrayBuffer.isView(r))throw new TypeError("value must be a string or TypedArray");{const e=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let n=e.length;for(;n;)t=33*t^e[--n]}}return(t>>>0).toString(36)}(...e)}"]`}return r}const d=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function p(e){const t=[];var r;return{pattern:"/"===e?/^\/$/:new RegExp(`^${(r=e,r.slice(1).split("/").filter(h)).map((e=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(e);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const n=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(e);if(n)return t.push({name:n[1],matcher:n[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!e)return;const a=e.split(/\[(.+?)\](?!\])/);return"/"+a.map(((e,r)=>{if(r%2){if(e.startsWith("x+"))return m(String.fromCharCode(parseInt(e.slice(2),16)));if(e.startsWith("u+"))return m(String.fromCharCode(...e.slice(2).split("-").map((e=>parseInt(e,16)))));const n=d.exec(e),[,o,s,i,l]=n;return t.push({name:i,matcher:l,optional:!!o,rest:!!s,chained:!!s&&(1===r&&""===a[0])}),s?"(.*?)":o?"([^/]*)?":"([^/]+?)"}return m(e)})).join("")})).join("")}/?$`),params:t}}function h(e){return!/^\([^)]+\)$/.test(e)}function m(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function g({nodes:e,server_loads:t,dictionary:r,matchers:n}){const a=new Set(t);return Object.entries(r).map((([t,[r,a,i]])=>{const{pattern:l,params:c}=p(t),u={id:t,exec:e=>{const t=l.exec(e);if(t)return function(e,t,r){const n={},a=e.slice(1),o=a.filter((e=>void 0!==e));let s=0;for(let i=0;i<t.length;i+=1){const e=t[i];let l=a[i-s];if(e.chained&&e.rest&&s&&(l=a.slice(i-s,i+1).filter((e=>e)).join("/"),s=0),void 0!==l)if(e.matcher&&!r[e.matcher](l)){if(!e.optional||!e.chained)return;s++}else{n[e.name]=l;const r=t[i+1],c=a[i+1];r&&!r.rest&&r.optional&&c&&e.chained&&(s=0),r||c||Object.keys(n).length!==o.length||(s=0)}else e.rest&&(n[e.name]="")}if(!s)return n}(t,c,n)},errors:[1,...i||[]].map((t=>e[t])),layouts:[0,...a||[]].map(s),leaf:o(r)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u}));function o(t){const r=t<0;return r&&(t=~t),[r,e[t]]}function s(t){return void 0===t?t:[a.has(t),e[t]]}}function y(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function w(e,t,r=JSON.stringify){const n=r(t);try{sessionStorage[e]=n}catch{}}const v=globalThis.__sveltekit_qxw8ew?.base??"",b=globalThis.__sveltekit_qxw8ew?.assets??v,k="sveltekit:snapshot",E="sveltekit:scroll",_="sveltekit:states",S="sveltekit:pageurl",x="sveltekit:history",R="sveltekit:navigation",A={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},L=location.origin;function P(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const e=document.getElementsByTagName("base");t=e.length?e[0].href:document.URL}return new URL(e,t)}function U(){return{x:pageXOffset,y:pageYOffset}}function j(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const O={...A,"":A.hover};function $(e){let t=e.assignedSlot??e.parentNode;return 11===t?.nodeType&&(t=t.host),t}function I(e,t){for(;e&&e!==t;){if("A"===e.nodeName.toUpperCase()&&e.hasAttribute("href"))return e;e=$(e)}}function T(e,t){let r;try{r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const n=e instanceof SVGAElement?e.target.baseVal:e.target;return{url:r,external:!r||!!n||V(r,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),target:n,download:r?.origin===L&&e.hasAttribute("download")}}function C(e){let t=null,r=null,n=null,a=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)null===n&&(n=j(i,"preload-code")),null===a&&(a=j(i,"preload-data")),null===t&&(t=j(i,"keepfocus")),null===r&&(r=j(i,"noscroll")),null===o&&(o=j(i,"reload")),null===s&&(s=j(i,"replacestate")),i=$(i);function l(e){switch(e){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:O[n??"off"],preload_data:O[a??"off"],keepfocus:l(t),noscroll:l(r),reload:l(o),replace_state:l(s)}}function N(e){const r=t(e);let n=!0;return{notify:function(){n=!0,r.update((e=>e))},set:function(e){n=!1,r.set(e)},subscribe:function(e){let t;return r.subscribe((r=>{(void 0===t||n&&r!==t)&&e(t=r)}))}}}function D(){const{set:e,subscribe:r}=t(!1);let n;return{subscribe:r,check:async function(){clearTimeout(n);try{const t=await fetch(`${b}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!t.ok)return!1;const r="1709691090511"!==(await t.json()).version;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}}}function V(e,t){return e.origin!==L||!e.pathname.startsWith(t)}const q=-1,B=-2,M=-3,F=-4,J=-5,W=-6;const G=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);class H{constructor(e,t){this.status=e,this.body="string"==typeof t?{message:t}:t||{message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class K{constructor(e,t){this.status=e,this.location=t}}class z extends Error{constructor(e,t,r){super(r),this.status=e,this.text=t}}const X="x-sveltekit-invalidated",Y="x-sveltekit-trailing-slash";function Q(e){return e instanceof H||e instanceof z?e.status:500}const Z=y(E)??{},ee=y(k)??{},te={url:N({}),page:N({}),navigating:t(null),updated:D()};function re(e){Z[e]=U()}function ne(e){return location.href=e.href,new Promise((()=>{}))}function ae(){}let oe,se,ie,le,ce,ue;const fe=[],de=[];let pe=null;const he=[],me=[];let ge,ye,we,ve,be,ke=[],Ee={branch:[],error:null,url:null},_e=!1,Se=!1,xe=!0,Re=!1,Ae=!1,Le=!1,Pe=!1;async function Ue(e,t,r){document.URL!==location.href&&(location.href=location.href),ue=e,oe=g(e),le=document.documentElement,ce=t,se=e.nodes[0],ie=e.nodes[1],se(),ie(),ye=history.state?.[x],we=history.state?.[R],ye||(ye=we=Date.now(),history.replaceState({...history.state,[x]:ye,[R]:we},""));const a=Z[ye];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),r?await async function(e,{status:t=200,error:r,node_ids:n,params:a,route:o,data:s,form:i}){_e=!0;const l=new URL(location.href);let c;({params:a={},route:o={id:null}}=Je(l,!1)||{});try{const e=n.map((async(t,r)=>{const n=s[r];return n?.uses&&(n.uses=Ye(n.uses)),De({loader:ue.nodes[t],url:l,params:a,route:o,parent:async()=>{const t={};for(let n=0;n<r;n+=1)Object.assign(t,(await e[n]).data);return t},server_data_node:qe(n)})})),u=await Promise.all(e),f=oe.find((({id:e})=>e===o.id));if(f){const e=f.layouts;for(let t=0;t<e.length;t++)e[t]||u.splice(t,0,void 0)}c=await Ne({url:l,params:a,branch:u,status:t,error:r,form:i,route:f??null})}catch(u){if(u instanceof K)return void(await ne(new URL(u.location,location.href)));c=await Fe({status:Q(u),error:await ze(u,{url:l,params:a,route:o}),url:l,route:o})}c.props.page&&(c.props.page.state={});Ce(c,e)}(ce,r):function(e,t={}){if((e=P(e)).origin!==L)return Promise.reject(new Error("goto: invalid URL"));Ie(e,t,0)}(location.href,{replaceState:!0}),function(){history.scrollRestoration="manual",addEventListener("beforeunload",(e=>{let t=!1;if($e(),!Re){const e=Qe(Ee,void 0,null,"leave"),r={...e.navigation,cancel:()=>{t=!0,e.reject(new Error("navigation cancelled"))}};he.forEach((e=>e(r)))}t?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"})),addEventListener("visibilitychange",(()=>{"hidden"===document.visibilityState&&$e()})),navigator.connection?.saveData||function(){let e;function t(e){n(e.composedPath()[0],1)}le.addEventListener("mousemove",(t=>{const r=t.target;clearTimeout(e),e=setTimeout((()=>{n(r,2)}),20)})),le.addEventListener("mousedown",t),le.addEventListener("touchstart",t,{passive:!0});const r=new IntersectionObserver((e=>{for(const t of e)t.isIntersecting&&(Te(t.target.href),r.unobserve(t.target))}),{threshold:0});function n(e,t){const r=I(e,le);if(!r)return;const{url:n,external:a,download:o}=T(r,v);if(a||o)return;const s=C(r);if(!s.reload)if(t<=s.preload_data){const e=Je(n,!1);e&&async function(e){pe={id:e.id,promise:Be(e).then((e=>("loaded"===e.type&&e.state.error&&(pe=null),e)))},pe.promise}(e)}else t<=s.preload_code&&Te(n.pathname)}function a(){r.disconnect();for(const e of le.querySelectorAll("a")){const{url:t,external:n,download:a}=T(e,v);if(n||a)continue;const o=C(e);o.reload||(o.preload_code===A.viewport&&r.observe(e),o.preload_code===A.eager&&Te(t.pathname))}}ke.push(a),a()}();le.addEventListener("click",(t=>{if(t.button||1!==t.which)return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const r=I(t.composedPath()[0],le);if(!r)return;const{url:a,external:o,target:s,download:i}=T(r,v);if(!a)return;if("_parent"===s||"_top"===s){if(window.parent!==window)return}else if(s&&"_self"!==s)return;const l=C(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&"https:"!==a.protocol&&"http:"!==a.protocol)return;if(i)return;if(o||l.reload)return void(Ge({url:a,type:"link"})?Re=!0:t.preventDefault());const[c,u]=a.href.split("#");if(void 0!==u&&c===n(location)){const[,n]=Ee.url.href.split("#");if(n===u)return t.preventDefault(),void(""===u||"top"===u&&null===r.ownerDocument.getElementById("top")?window.scrollTo({top:0}):r.ownerDocument.getElementById(u)?.scrollIntoView());if(Ae=!0,re(ye),e(a),!l.replace_state)return;Ae=!1}t.preventDefault(),He({type:"link",url:a,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??a.href===location.href})})),le.addEventListener("submit",(e=>{if(e.defaultPrevented)return;const t=HTMLFormElement.prototype.cloneNode.call(e.target),r=e.submitter;if("get"!==(r?.formMethod||t.method))return;const n=new URL(r?.hasAttribute("formaction")&&r?.formAction||t.action);if(V(n,v))return;const a=e.target,o=C(a);if(o.reload)return;e.preventDefault(),e.stopPropagation();const s=new FormData(a),i=r?.getAttribute("name");i&&s.append(i,r?.getAttribute("value")??""),n.search=new URLSearchParams(s).toString(),He({type:"form",url:n,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??n.href===location.href})})),addEventListener("popstate",(async t=>{if(t.state?.[x]){const r=t.state[x];if(be={},r===ye)return;const a=Z[r],o=t.state[_]??{},s=new URL(t.state[S]??location.href),i=t.state[R],l=n(location)===n(Ee.url);if(i===we&&(Le||l))return e(s),Z[ye]=U(),a&&scrollTo(a.x,a.y),o!==ve.state&&(ve={...ve,state:o},ge.$set({page:ve})),void(ye=r);const c=r-ye;await He({type:"popstate",url:s,popped:{state:o,scroll:a,delta:c},accept:()=>{ye=r,we=i},block:()=>{history.go(-c)},nav_token:be})}else if(!Ae){e(new URL(location.href))}})),addEventListener("hashchange",(()=>{Ae&&(Ae=!1,history.replaceState({...history.state,[x]:++ye,[R]:we},"",location.href))}));for(const t of document.querySelectorAll("link"))"icon"===t.rel&&(t.href=t.href);function e(e){Ee.url=e,te.page.set({...ve,url:e}),te.page.notify()}addEventListener("pageshow",(e=>{e.persisted&&te.navigating.set(null)}))}()}function je(e){de.some((e=>e?.snapshot))&&(ee[e]=de.map((e=>e?.snapshot?.capture())))}function Oe(e){ee[e]?.forEach(((e,t)=>{de[t]?.snapshot?.restore(e)}))}function $e(){re(ye),w(E,Z),je(we),w(k,ee)}async function Ie(e,t,r,n){return He({type:"goto",url:P(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:r,nav_token:n,accept:()=>{t.invalidateAll&&(Pe=!0)}})}async function Te(e){const t=oe.find((t=>t.exec(We(e))));t&&await Promise.all([...t.layouts,t.leaf].map((e=>e?.[1]())))}function Ce(e,t){Ee=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),ve=e.props.page,ge=new ue.root({target:t,props:{...e.props,stores:te,components:de},hydrate:!0}),Oe(we);const n={from:null,to:{params:Ee.params,route:{id:Ee.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};ke.forEach((e=>e(n))),Se=!0}async function Ne({url:e,params:t,branch:r,status:n,error:a,route:o,form:s}){let i="never";if(!v||e.pathname!==v&&e.pathname!==v+"/")for(const m of r)void 0!==m?.slash&&(i=m.slash);else i="always";var l,c;e.pathname=(l=e.pathname,c=i,"/"===l||"ignore"===c?l:"never"===c?l.endsWith("/")?l.slice(0,-1):l:"always"!==c||l.endsWith("/")?l:l+"/"),e.search=e.search;const u={type:"loaded",state:{url:e,params:t,branch:r,error:a,route:o},props:{constructors:(f=r,f.filter((e=>null!=e))).map((e=>e.node.component)),page:ve}};var f;void 0!==s&&(u.props.form=s);let d={},p=!ve,h=0;for(let m=0;m<Math.max(r.length,Ee.branch.length);m+=1){const e=r[m],t=Ee.branch[m];e?.data!==t?.data&&(p=!0),e&&(d={...d,...e.data},p&&(u.props[`data_${h}`]=d),h+=1)}return(!Ee.url||e.href!==Ee.url.href||Ee.error!==a||void 0!==s&&s!==ve.form||p)&&(u.props.page={error:a,params:t,route:{id:o?.id??null},state:{},status:n,url:new URL(e),form:s??null,data:p?d:ve.data}),u}async function De({loader:e,parent:t,url:r,params:n,route:a,server_data_node:s}){let i=null,l=!0;const d={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},p=await e();if(p.universal?.load){let e=function(...e){for(const t of e){const{href:e}=new URL(t,r);d.dependencies.add(e)}};const h={route:new Proxy(a,{get:(e,t)=>(l&&(d.route=!0),e[t])}),params:new Proxy(n,{get:(e,t)=>(l&&d.params.add(t),e[t])}),data:s?.data??null,url:o(r,(()=>{l&&(d.url=!0)}),(e=>{l&&d.search_params.add(e)})),async fetch(t,n){let a;t instanceof Request?(a=t.url,n={body:"GET"===t.method||"HEAD"===t.method?void 0:await t.blob(),cache:t.cache,credentials:t.credentials,headers:t.headers,integrity:t.integrity,keepalive:t.keepalive,method:t.method,mode:t.mode,redirect:t.redirect,referrer:t.referrer,referrerPolicy:t.referrerPolicy,signal:t.signal,...n}):a=t;const o=new URL(a,r);return l&&e(o.href),o.origin===r.origin&&(a=o.href.slice(r.origin.length)),Se?function(e,t,r){if(c.size>0){const t=f(e,r),n=c.get(t);if(n){if(performance.now()<n.ttl&&["default","force-cache","only-if-cached",void 0].includes(r?.cache))return new Response(n.body,n.init);c.delete(t)}}return window.fetch(t,r)}(a,o.href,n):u(a,n)},setHeaders:()=>{},depends:e,parent:()=>(l&&(d.parent=!0),t()),untrack(e){l=!1;try{return e()}finally{l=!0}}};i=await p.universal.load.call(null,h)??null}return{node:p,loader:e,server:s,universal:p.universal?.load?{type:"data",data:i,uses:d}:null,data:i??s?.data??null,slash:p.universal?.trailingSlash??s?.slash}}function Ve(e,t,r,n,a,o){if(Pe)return!0;if(!a)return!1;if(a.parent&&e)return!0;if(a.route&&t)return!0;if(a.url&&r)return!0;for(const s of a.search_params)if(n.has(s))return!0;for(const s of a.params)if(o[s]!==Ee.params[s])return!0;for(const s of a.dependencies)if(fe.some((e=>e(new URL(s)))))return!0;return!1}function qe(e,t){return"data"===e?.type?e:"skip"===e?.type?t??null:null}async function Be({id:e,invalidating:t,url:r,params:n,route:a}){if(pe?.id===e)return pe.promise;const{errors:o,layouts:s,leaf:i}=a,l=[...s,i];o.forEach((e=>e?.().catch((()=>{})))),l.forEach((e=>e?.[1]().catch((()=>{}))));let c=null;const u=!!Ee.url&&e!==Ee.url.pathname+Ee.url.search,f=!!Ee.route&&a.id!==Ee.route.id,d=function(e,t){if(!e)return new Set(t.searchParams.keys());const r=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const n of r){const a=e.searchParams.getAll(n),o=t.searchParams.getAll(n);a.every((e=>o.includes(e)))&&o.every((e=>a.includes(e)))&&r.delete(n)}return r}(Ee.url,r);let p=!1;const h=l.map(((e,t)=>{const r=Ee.branch[t],a=!!e?.[0]&&(r?.loader!==e[1]||Ve(p,f,u,d,r.server?.uses,n));return a&&(p=!0),a}));if(h.some(Boolean)){try{c=await Xe(r,h)}catch(v){return Fe({status:Q(v),error:await ze(v,{url:r,params:n,route:{id:a.id}}),url:r,route:a})}if("redirect"===c.type)return c}const m=c?.nodes;let g=!1;const y=l.map((async(e,t)=>{if(!e)return;const o=Ee.branch[t],s=m?.[t];if(!(s&&"skip"!==s.type||e[1]!==o?.loader||Ve(g,f,u,d,o.universal?.uses,n)))return o;if(g=!0,"error"===s?.type)throw s;return De({loader:e[1],url:r,params:n,route:a,parent:async()=>{const e={};for(let r=0;r<t;r+=1)Object.assign(e,(await y[r])?.data);return e},server_data_node:qe(void 0===s&&e[0]?{type:"skip"}:s??null,e[0]?o?.server:void 0)})}));for(const k of y)k.catch((()=>{}));const w=[];for(let k=0;k<l.length;k+=1)if(l[k])try{w.push(await y[k])}catch(b){if(b instanceof K)return{type:"redirect",location:b.location};let e,t=Q(b);if(m?.includes(b))t=b.status??t,e=b.error;else if(b instanceof H)e=b.body;else{if(await te.updated.check())return await ne(r);e=await ze(b,{params:n,url:r,route:{id:a.id}})}const s=await Me(k,w,o);return s?await Ne({url:r,params:n,branch:w.slice(0,s.idx).concat(s.node),status:t,error:e,route:a}):await Ke(r,{id:a.id},e,t)}else w.push(void 0);return await Ne({url:r,params:n,branch:w,status:200,error:null,route:a,form:t?void 0:null})}async function Me(e,t,r){for(;e--;)if(r[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch(n){continue}}}async function Fe({status:e,error:t,url:r,route:n}){const a={};let o=null;if(0===ue.server_loads[0])try{const e=await Xe(r,[!0]);if("data"!==e.type||e.nodes[0]&&"data"!==e.nodes[0].type)throw 0;o=e.nodes[0]??null}catch{(r.origin!==L||r.pathname!==location.pathname||_e)&&await ne(r)}const s=await De({loader:se,url:r,params:a,route:n,parent:()=>Promise.resolve({}),server_data_node:qe(o)}),i={node:await ie(),loader:ie,universal:null,server:null,data:null};return await Ne({url:r,params:a,branch:[s,i],status:e,error:t,route:null})}function Je(e,t){if(!e)return;if(V(e,v))return;let n;try{n=ue.hooks.reroute({url:new URL(e)})??e.pathname}catch(o){return}const a=We(n);for(const s of oe){const n=s.exec(a);if(n){return{id:e.pathname+e.search,invalidating:t,route:s,params:r(n),url:e}}}}function We(e){return function(e){return e.split("%25").map(decodeURI).join("%25")}(e.slice(v.length)||"/")}function Ge({url:e,type:t,intent:r,delta:n}){let a=!1;const o=Qe(Ee,r,e,t);void 0!==n&&(o.navigation.delta=n);const s={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return Re||he.forEach((e=>e(s))),a?null:o}async function He({type:t,url:r,popped:n,keepfocus:a,noscroll:o,replace_state:s,state:i={},redirect_count:l=0,nav_token:c={},accept:u=ae,block:f=ae}){const d=Je(r,!1),p=Ge({url:r,type:t,delta:n?.delta,intent:d});if(!p)return void f();const h=ye,m=we;u(),Re=!0,Se&&te.navigating.set(p.navigation),be=c;let g=d&&await Be(d);if(!g){if(V(r,v))return await ne(r);g=await Ke(r,{id:null},await ze(new z(404,"Not Found",`Not found: ${r.pathname}`),{url:r,params:{},route:{id:null}}),404)}if(r=d?.url||r,be!==c)return p.reject(new Error("navigation aborted")),!1;if("redirect"===g.type){if(!(l>=20))return Ie(new URL(g.location,r).href,{},l+1,c),!1;g=await Fe({status:500,error:await ze(new Error("Redirect loop"),{url:r,params:{},route:{id:null}}),url:r,route:{id:null}})}else if(g.props.page.status>=400){await te.updated.check()&&await ne(r)}if(fe.length=0,Pe=!1,re(h),je(m),g.props.page.url.pathname!==r.pathname&&(r.pathname=g.props.page.url.pathname),i=n?n.state:i,!n){const e=s?0:1,t={[x]:ye+=e,[R]:we+=e,[_]:i};(s?history.replaceState:history.pushState).call(history,t,"",r),s||function(e,t){let r=e+1;for(;Z[r];)delete Z[r],r+=1;for(r=t+1;ee[r];)delete ee[r],r+=1}(ye,we)}if(pe=null,g.props.page.state=i,Se){Ee=g.state,g.props.page&&(g.props.page.url=r);const e=(await Promise.all(me.map((e=>e(p.navigation))))).filter((e=>"function"==typeof e));if(e.length>0){let t=function(){ke=ke.filter((t=>!e.includes(t)))};e.push(t),ke.push(...e)}ge.$set(g.props),Le=!0}else Ce(g,ce);const{activeElement:y}=document;await e();const w=n?n.scroll:o?U():null;if(xe){const e=r.hash&&document.getElementById(decodeURIComponent(r.hash.slice(1)));w?scrollTo(w.x,w.y):e?e.scrollIntoView():scrollTo(0,0)}const b=document.activeElement!==y&&document.activeElement!==document.body;a||b||function(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),null!==t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex");const r=getSelection();if(r&&"None"!==r.type){const e=[];for(let t=0;t<r.rangeCount;t+=1)e.push(r.getRangeAt(t));setTimeout((()=>{if(r.rangeCount===e.length){for(let t=0;t<r.rangeCount;t+=1){const n=e[t],a=r.getRangeAt(t);if(n.commonAncestorContainer!==a.commonAncestorContainer||n.startContainer!==a.startContainer||n.endContainer!==a.endContainer||n.startOffset!==a.startOffset||n.endOffset!==a.endOffset)return}r.removeAllRanges()}}))}}}(),xe=!0,g.props.page&&(ve=g.props.page),Re=!1,"popstate"===t&&Oe(we),p.fulfil(void 0),ke.forEach((e=>e(p.navigation))),te.navigating.set(null)}async function Ke(e,t,r,n){return e.origin!==L||e.pathname!==location.pathname||_e?await ne(e):await Fe({status:n,error:r,url:e,route:t})}function ze(e,t){if(e instanceof H)return e.body;const r=Q(e),n=function(e){return e instanceof z?e.text:"Internal Error"}(e);return ue.hooks.handleError({error:e,event:t,status:r,message:n})??{message:n}}async function Xe(e,t){const r=new URL(e);var n;r.pathname=(n=e.pathname).endsWith(".html")?n.replace(/\.html$/,i):n.replace(/\/$/,"")+s,e.pathname.endsWith("/")&&r.searchParams.append(Y,"1"),r.searchParams.append(X,t.map((e=>e?"1":"0")).join(""));const a=await l(r.href);if(!a.ok){let e;throw a.headers.get("content-type")?.includes("application/json")?e=await a.json():404===a.status?e="Not Found":500===a.status&&(e="Internal Error"),new H(a.status,e)}return new Promise((async e=>{const t=new Map,r=a.body.getReader(),n=new TextDecoder;function o(e){return function(e,t){if("number"==typeof e)return a(e,!0);if(!Array.isArray(e)||0===e.length)throw new Error("Invalid input");const r=e,n=Array(r.length);function a(e,o=!1){if(e===q)return;if(e===M)return NaN;if(e===F)return 1/0;if(e===J)return-1/0;if(e===W)return-0;if(o)throw new Error("Invalid input");if(e in n)return n[e];const s=r[e];if(s&&"object"==typeof s)if(Array.isArray(s))if("string"==typeof s[0]){const r=s[0],o=t?.[r];if(o)return n[e]=o(a(s[1]));switch(r){case"Date":n[e]=new Date(s[1]);break;case"Set":const t=new Set;n[e]=t;for(let e=1;e<s.length;e+=1)t.add(a(s[e]));break;case"Map":const o=new Map;n[e]=o;for(let e=1;e<s.length;e+=2)o.set(a(s[e]),a(s[e+1]));break;case"RegExp":n[e]=new RegExp(s[1],s[2]);break;case"Object":n[e]=Object(s[1]);break;case"BigInt":n[e]=BigInt(s[1]);break;case"null":const i=Object.create(null);n[e]=i;for(let e=1;e<s.length;e+=2)i[s[e]]=a(s[e+1]);break;default:throw new Error(`Unknown type ${r}`)}}else{const t=new Array(s.length);n[e]=t;for(let e=0;e<s.length;e+=1){const r=s[e];r!==B&&(t[e]=a(r))}}else{const t={};n[e]=t;for(const e in s){const r=s[e];t[e]=a(r)}}else n[e]=s;return n[e]}return a(0)}(e,{Promise:e=>new Promise(((r,n)=>{t.set(e,{fulfil:r,reject:n})}))})}let s="";for(;;){const{done:a,value:i}=await r.read();if(a&&!s)break;for(s+=!i&&s?"\n":n.decode(i,{stream:!0});;){const r=s.indexOf("\n");if(-1===r)break;const n=JSON.parse(s.slice(0,r));if(s=s.slice(r+1),"redirect"===n.type)return e(n);if("data"===n.type)n.nodes?.forEach((e=>{"data"===e?.type&&(e.uses=Ye(e.uses),e.data=o(e.data))})),e(n);else if("chunk"===n.type){const{id:e,data:r,error:a}=n,s=t.get(e);t.delete(e),a?s.reject(o(a)):s.fulfil(o(r))}}}}))}function Ye(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function Qe(e,t,r,n){let a,o;const s=new Promise(((e,t)=>{a=e,o=t}));s.catch((()=>{}));return{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:r&&{params:t?.params??null,route:{id:t?.route?.id??null},url:r},willUnload:!t,type:n,complete:s},fulfil:a,reject:o}}export{Ue as a,te as s};
