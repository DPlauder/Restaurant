(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n\n}\nbody {\n    border: 5px solid rgb(65, 64, 64);\n}\n.kopf {\n    height: 100px;\n    width: 70vw;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgb(65, 64, 64) ;\n    display: grid;\n    text-align: center;\n    justify-items: center;\n    align-content: center;\n}\n.kopf h1 {\n    color: white;\n    font-weight: bold;\n}\n.nav_bar {\n    height: 50px;\n    width: 70vw;\n    border: 5px solid rgb(65, 64, 64);\n    margin-left: auto;\n    margin-right: auto;\n    background-color: rgb(65, 64, 64);\n}\n\n.nav_list{\n    height: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    list-style: none;\n    padding: 0;\n    column-gap: 5px;\n}\n.btn{\n    width: 100%;\n    border-style: none;\n    font-size: 1.5em;\n    letter-spacing: 5px;\n    cursor: pointer;\n    font-weight:bolder;\n    background-color: white;\n}\n.btn_one:hover{\n    background-color: rgb(169, 169, 252);\n    color: white;\n}\n.btn_two:hover{\n    background-color: rgb(252, 137, 137);\n    color: white;\n}\n.btn_three:hover{\n    background-color: rgb(104, 141, 104);\n    color: white;\n}\n.btn:hover{\n    animation: bigger 0.2s forwards ;\n}\n.container {\n    height: calc(100vh - 160px);\n    width: 70vw;\n    border-left: 5px solid rgb(65, 64, 64);\n    border-right: 5px solid rgb(65, 64, 64);\n    margin-left: auto;\n    margin-right: auto;\n    background: white;\n    text-align: center;\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n.tabcontent {\n    display: none;\n    height: 100%;\n    font-size: 140%;\n}\n.pick_one {\n    display: block;\n}\n.pick_two {\n    display: block;\n}\n.pick_three {\n    display: block;\n}\n.container h2 {\n    padding-top: 60px;\n    margin-bottom: 20px;\n}\n.container p {\n    padding-bottom: 30px;\n    \n}\n\nbody {\n    --s: 100px; /* control the size */\n    \n    --_g: #0000 83%,#b09f79 85% 99%,#0000 101%;\n    background:\n      radial-gradient(27% 29% at right ,var(--_g)) calc(var(--s)/ 2) var(--s),\n      radial-gradient(27% 29% at left  ,var(--_g)) calc(var(--s)/-2) var(--s),\n      radial-gradient(29% 27% at top   ,var(--_g)) 0 calc(var(--s)/ 2),\n      radial-gradient(29% 27% at bottom,var(--_g)) 0 calc(var(--s)/-2)\n      #476074;\n    background-size: calc(2*var(--s)) calc(2*var(--s));\n  }\n\n@keyframes bigger {\n    0% {font-size: 1.5em;}\n    100%{font-size:1.6em;}\n}\n  ",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,m="".concat(l," ").concat(d);a[l]=d+1;var u=t(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var h=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:m,updater:h,references:1})}i.push(m)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),m=t(589),u=t.n(m),p=t(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;class v{constructor(e,n,t,r,o){this.tagName=e,this.parent=n,this.className=t,this.id=r,this.text=o}createHtmlElement(){const e=document.createElement(this.tagName);if(document.getElementById(this.parent).appendChild(e),this.className)for(let n of this.className)e.classList.add(n);this.id&&(e.id=this.id),this.text&&(e.textContent=this.text)}}new v("header","content",["kopf"],"kopf").createHtmlElement(),new v("h1","kopf","","","RESTAURANT").createHtmlElement(),new v("nav","content",["nav_bar"],"nav_bar").createHtmlElement(),new v("ul","nav_bar",["nav_list"],"nav_list").createHtmlElement(),new v("button","nav_list",["btn","btn_one","tablink","pick_one"],"btn_home","HOME").createHtmlElement(),new v("button","nav_list",["btn","btn_two","tablink"],"btn_menu","MENU").createHtmlElement(),new v("button","nav_list",["btn","btn_three","tablink"],"btn_res","RESERVATION").createHtmlElement(),new v("section","content",["container"],"container").createHtmlElement(),new v("footer","content",["fuss"],"fuss").createHtmlElement(),new v("div","container",["tabcontent","pick_one"],"home").createHtmlElement(),new v("h2","home","","","WELCOME").createHtmlElement(),new v("p","home","","","Happy to see you").createHtmlElement(),new v("div","container",["tabcontent"],"menu").createHtmlElement(),new v("h2","menu","","","MENU").createHtmlElement(),new v("p","menu","","","Good food here").createHtmlElement(),new v("div","container",["tabcontent"],"reservation").createHtmlElement(),new v("h2","reservation","","","RESERVATION").createHtmlElement(),new v("p","reservation","","","Choose your table").createHtmlElement(),document.getElementById("nav_bar").addEventListener("click",(e=>{let n=e.target;"HOME"===n.innerHTML?(()=>{const e=document.getElementById("btn_home"),n=document.getElementById("btn_menu"),t=document.getElementById("btn_res"),r=document.getElementById("home"),o=document.getElementById("menu"),a=document.getElementById("reservation");e.classList.add("pick_one"),r.classList.add("pick_one"),n.classList.remove("pick_two"),o.classList.remove("pick_two"),t.classList.remove("pick_three"),a.classList.remove("pick_three")})():"MENU"===n.innerHTML?(()=>{const e=document.getElementById("btn_home"),n=document.getElementById("btn_menu"),t=document.getElementById("btn_res"),r=document.getElementById("home"),o=document.getElementById("menu"),a=document.getElementById("reservation");e.classList.remove("pick_one"),r.classList.remove("pick_one"),n.classList.add("pick_two"),o.classList.add("pick_two"),t.classList.remove("pick_three"),a.classList.remove("pick_three")})():"RESERVATION"===n.innerHTML&&(()=>{const e=document.getElementById("btn_home"),n=document.getElementById("btn_menu"),t=document.getElementById("btn_res"),r=document.getElementById("home"),o=document.getElementById("menu"),a=document.getElementById("reservation");e.classList.remove("pick_one"),r.classList.remove("pick_one"),n.classList.remove("pick_two"),o.classList.remove("pick_two"),t.classList.add("pick_three"),a.classList.add("pick_three")})()}))})()})();