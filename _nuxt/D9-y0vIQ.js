import{N as l}from"./D0HqSjCW.js";import{d as f,L as v,E as m,t as p,v as R,z as a,x as g,M as w,N as S}from"./F6ShdNnK.js";var _="@vercel/speed-insights",h="1.1.0",b=()=>{window.si||(window.si=function(...r){(window.siq=window.siq||[]).push(r)})};function y(){return typeof window<"u"}function $(){try{const e="production"}catch{}return"production"}function c(){return $()==="development"}function k(e,r){if(!e||!r)return e;let n=e;try{const o=Object.entries(r);for(const[s,t]of o)if(!Array.isArray(t)){const i=d(t);i.test(n)&&(n=n.replace(i,`/[${s}]`))}for(const[s,t]of o)if(Array.isArray(t)){const i=d(t.join("/"));i.test(n)&&(n=n.replace(i,`/[...${s}]`))}return n}catch{return e}}function d(e){return new RegExp(`/${E(e)}(?=[/?#]|$)`)}function E(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var u="https://va.vercel-scripts.com/v1/speed-insights",C=`${u}/script.js`,I=`${u}/script.debug.js`,j="/_vercel/speed-insights/script.js";function x(e={}){var r;if(!y()||e.route===null)return null;b();const o=!!e.dsn?C:j,s=e.scriptSrc||(c()?I:o);if(document.head.querySelector(`script[src*="${s}"]`))return null;e.beforeSend&&((r=window.si)==null||r.call(window,"beforeSend",e.beforeSend));const t=document.createElement("script");return t.src=s,t.defer=!0,t.dataset.sdkn=_+(e.framework?`/${e.framework}`:""),t.dataset.sdkv=h,e.sampleRate&&(t.dataset.sampleRate=e.sampleRate.toString()),e.route&&(t.dataset.route=e.route),e.endpoint&&(t.dataset.endpoint=e.endpoint),e.dsn&&(t.dataset.dsn=e.dsn),c()&&e.debug===!1&&(t.dataset.debug="false"),t.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${s}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(t),{setRoute:i=>{t.dataset.route=i??void 0}}}function P(e="vue"){return f({props:["dsn","sampleRate","beforeSend","debug","scriptSrc","endpoint"],setup(r){const n=v(),o=x({...r,framework:e});if(n&&o){const s=()=>{o.setRoute(k(n.path,n.params))};s(),m(n,s)}},render(){return null}})}var B=P("nuxt");const L={class:"pt-16"},V={__name:"default",setup(e){return(r,n)=>(p(),R("div",null,[a(l),g("main",L,[w(r.$slots,"default")]),a(S(B))]))}};export{V as default};
