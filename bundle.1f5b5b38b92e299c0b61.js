(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},d=[],i=0;i<n.length;i++){var c=n[i],l=r.base?c[0]+r.base:c[0],s=o[l]||0,u="".concat(l," ").concat(s);o[l]=s+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=a(f,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:m,references:1})}d.push(u)}return d}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var d=0;d<o.length;d++){var i=t(o[d]);e[i].references--}for(var c=r(n,a),l=0;l<o.length;l++){var s=t(o[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}o=c}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var d={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(d[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);r&&d[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),e.push(s))}},e}},365:(n,e,t)=>{t.d(e,{A:()=>i});var r=t(601),a=t.n(r),o=t(314),d=t.n(o)()(a());d.push([n.id,"body {\n    margin: 0;\n    font-family: Arial, sans-serif;\n}\n\n.board {\n    display: flex;\n    gap: 20px;\n    margin: 20px;\n}\n\n.column {\n    background-color: #f4f5f7;\n    width: 300px;\n    border-radius: 3px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.column-header {\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\n.cards {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.card {\n    background-color: #fff;\n    border-radius: 3px;\n    padding: 10px;\n    position: relative;\n    cursor: pointer;\n    box-shadow: 0 1px 2px rgba(0,0,0,0.2);\n}\n\n.card:hover .delete-card {\n    display: block;\n}\n\n.delete-card {\n    display: none;\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    cursor: pointer;\n}\n\n.add-card-container {\n    margin-top: 10px;\n}\n\n.add-card-button {\n    background-color: #aebbf3;\n    border: none;\n    cursor: pointer;\n    padding: 8px;\n    width: 100%;\n    text-align: left;\n    border-radius: 3px;\n}\n\n.add-card-form {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.dragging {\n    opacity: 0.5;\n    cursor: grabbing;\n}\n",""]);const i=d},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),a=t.n(r),o=t(825),d=t.n(o),i=t(659),c=t.n(i),l=t(56),s=t.n(l),u=t(540),p=t.n(u),f=t(113),m=t.n(f),v=t(365),y={};function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}y.styleTagTransform=m(),y.setAttributes=s(),y.insert=c().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=p(),a()(v.A,y),v.A&&v.A.locals&&v.A.locals;var g="myTrelloData",b={columns:[{id:"todo",title:"TODO",cards:["test"]},{id:"in-progress",title:"IN PROGRESS",cards:["test2"]},{id:"done",title:"DONE",cards:["test3"]}]};function x(n){localStorage.setItem(g,JSON.stringify(n))}var E=function(){var n=localStorage.getItem(g);if(!n)return b;try{return JSON.parse(n)}catch(n){return b}}();function C(){var n=document.getElementById("app");n.innerHTML="";var e=document.createElement("div");e.classList.add("board"),E.columns.forEach((function(n){var t=document.createElement("div");t.classList.add("column"),t.dataset.columnId=n.id;var r=document.createElement("div");r.classList.add("column-header"),r.textContent=n.title,t.appendChild(r);var a=document.createElement("div");a.classList.add("cards"),n.cards.forEach((function(e,t){var r=function(n,e,t){var r=document.createElement("div");r.classList.add("card"),r.draggable=!0,r.textContent=t;var a=document.createElement("span");return a.classList.add("delete-card"),a.textContent="×",r.appendChild(a),a.addEventListener("click",(function(t){t.stopPropagation(),function(n,e){var t=E.columns.find((function(e){return e.id===n}));t&&(t.cards.splice(e,1),x(E),C())}(n,e)})),r.addEventListener("dragstart",(function(t){t.dataTransfer.setData("text/plain",JSON.stringify({fromColumn:n,fromIndex:e}));var a=r.cloneNode(!0);a.style.position="absolute",a.style.top="-9999px",a.style.left="-9999px",a.style.opacity="0.8",document.body.appendChild(a);var o=r.getBoundingClientRect(),d=t.clientX-o.left,i=t.clientY-o.top;t.dataTransfer.setDragImage(a,d,i),document.body.style.cursor="grabbing"})),r.addEventListener("dragend",(function(n){document.body.style.cursor="default",document.querySelectorAll('.card[style*="-9999px"]').forEach((function(n){return n.remove()}))})),r}(n.id,t,e);a.appendChild(r)})),t.appendChild(a);var o=document.createElement("div");o.classList.add("add-card-container");var d=document.createElement("button");d.classList.add("add-card-button"),d.textContent="+ Add card",o.appendChild(d),d.addEventListener("click",(function(){L(o,n.id)})),t.appendChild(o),e.appendChild(t)})),n.appendChild(e)}function L(n,e){n.innerHTML="";var t=document.createElement("div");t.classList.add("add-card-form");var r=document.createElement("textarea");r.placeholder="Enter a test text for this card...",t.appendChild(r);var a=document.createElement("button");a.textContent="Add Card",t.appendChild(a);var o=document.createElement("button");o.textContent="Cancel",t.appendChild(o),n.appendChild(t),a.addEventListener("click",(function(){var n=r.value.trim();if(n){var t=E.columns.find((function(n){return n.id===e}));t&&(t.cards.push(n),x(E),C())}})),o.addEventListener("click",(function(){n.innerHTML="";var t=document.createElement("button");t.classList.add("add-card-button"),t.textContent="+ Add card",n.appendChild(t),t.addEventListener("click",(function(){L(n,e)}))}))}document.addEventListener("dragover",(function(n){n.preventDefault(),n.target})),document.addEventListener("drop",(function(n){n.preventDefault();var e=n.target,t=n.dataTransfer.getData("text/plain");if(t){var r=JSON.parse(t),a=r.fromColumn,o=r.fromIndex,d=E.columns.find((function(n){return n.id===a}));if(d){var i=function(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,a,o,d,i=[],c=!0,l=!1;try{if(o=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=o.call(t)).done)&&(i.push(r.value),i.length!==e);c=!0);}catch(n){l=!0,a=n}finally{try{if(!c&&null!=t.return&&(d=t.return(),Object(d)!==d))return}finally{if(l)throw a}}return i}}(n,e)||function(n,e){if(n){if("string"==typeof n)return h(n,e);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?h(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(d.cards.splice(o,1),1)[0],c=e.closest(".column");if(!c)return d.cards.splice(o,0,i),x(E),void C();var l=c.dataset.columnId,s=E.columns.find((function(n){return n.id===l})),u=s.cards.length;e.classList.contains("card")&&(u=Array.from(c.querySelectorAll(".card")).indexOf(e)),s.cards.splice(u,0,i),x(E),C()}}})),document.addEventListener("DOMContentLoaded",(function(){C()}))})();