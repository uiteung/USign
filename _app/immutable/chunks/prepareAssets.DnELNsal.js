const e=[{name:"pdfjsLib",module:!0,src:"https://cdn.jsdelivr.net/npm/pdfjs-dist@4.0.379/build/pdf.min.mjs"},{name:"PDFLib",module:!1,src:"https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"},{name:"download",module:!1,src:"https://cdn.jsdelivr.net/npm/downloadjs@1.4.7/download.min.js"},{name:"makeTextPDF",module:!1,src:"/makeTextPDF.js"}],n={};function o(o){if(n[o])return n[o];const r=e.find((e=>e.name===o));if(!r)throw new Error(`Script ${o} not exists.`);return t(r)}function t({name:e,src:o,module:t}){return n[e]||(n[e]=new Promise(((n,r)=>{const s=document.createElement("script");t&&(s.type="module"),s.src=o,s.onload=()=>{n(window[e]),console.log(`${e} is loaded.`)},s.onerror=()=>{r(`The script ${e} didn't load correctly.`),alert("Some scripts did not load correctly. Please reload and try again.")},document.body.appendChild(s)}))),n[e]}function r(){Promise.all(e.map(t))}const s={Courier:{correction:(e,n)=>(e*n-e)/2+e/6},Helvetica:{correction:(e,n)=>(e*n-e)/2+e/10},"Times-Roman":{correction:(e,n)=>(e*n-e)/2+e/7}},d={...s,"標楷體":{src:"/CK.ttf",correction:(e,n)=>(e*n-e)/2}};function c(e){if(s[e])return s[e];const n=d[e];if(!n)throw new Error(`Font '${e}' not exists.`);return s[e]=fetch(n.src).then((e=>e.arrayBuffer())).then((o=>{const t=new FontFace(e,o);return t.display="swap",t.load().then((()=>document.fonts.add(t))),{...n,buffer:o}})),s[e]}export{d as F,c as f,o as g,r as p};
