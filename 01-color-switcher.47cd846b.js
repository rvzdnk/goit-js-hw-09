const t=document.querySelector("[data-start]");t.addEventListener("click",(function(){const a=document.body.style;a.backgroundColor=r(),e=setInterval((()=>{a.backgroundColor=r()}),1e3),o(t),c(n)}));const n=document.querySelector("[data-stop]");n.addEventListener("click",(function(){clearInterval(e),o(n),c(t)})),o(n);let e=null;function o(t){t.disabled=!0}function c(t){t.disabled=!1}function r(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.47cd846b.js.map
