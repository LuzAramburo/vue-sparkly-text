const __vite__fileDeps=["./VueSparklyText.stories-BBGGjylE.js","./vue.esm-bundler-B1uTA8k1.js","./VueSparklyText-CAG48Xnx.css","./entry-preview-Cjxp0xVN.js","./entry-preview-docs-CHhbaUkJ.js","./index-D16O5h3a.js","./preview-TCN6m6T-.js","./index-DXimoRZY.js","./preview-CwqMn10d.js","./index-DrFu-skq.js","./preview-BAz7FMXc.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f="modulepreload",R=function(_,s){return new URL(_,s).href},E={},o=function(s,c,l){let e=Promise.resolve();if(c&&c.length>0){const t=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),O=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.all(c.map(i=>{if(i=R(i,l),i in E)return;E[i]=!0;const u=i.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!l)for(let a=t.length-1;a>=0;a--){const m=t[a];if(m.href===i&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${p}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":f,u||(n.as="script",n.crossOrigin=""),n.href=i,O&&n.setAttribute("nonce",O),document.head.appendChild(n),u)return new Promise((a,m)=>{n.addEventListener("load",a),n.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}return e.then(()=>s()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,d=P({page:"preview"});T.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const w={"./src/components/VueSparklyText.stories.ts":async()=>o(()=>import("./VueSparklyText.stories-BBGGjylE.js"),__vite__mapDeps([0,1,2]),import.meta.url)};async function L(_){return w[_]()}const{composeConfigs:v,PreviewWeb:h,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-Cjxp0xVN.js"),__vite__mapDeps([3,1]),import.meta.url),o(()=>import("./entry-preview-docs-CHhbaUkJ.js"),__vite__mapDeps([4,5,1]),import.meta.url),o(()=>import("./preview-TCN6m6T-.js"),__vite__mapDeps([6,7]),import.meta.url),o(()=>import("./preview-DGJi2KJO.js"),[],import.meta.url),o(()=>import("./preview-UNaZQn6M.js"),[],import.meta.url),o(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([8,9]),import.meta.url),o(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),o(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),o(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([10,9]),import.meta.url),o(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),o(()=>import("./preview-BcrGd3F6.js"),[],import.meta.url),o(()=>import("./preview-CIRcjyVj.js"),[],import.meta.url)]);return v(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new h(L,S);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};
