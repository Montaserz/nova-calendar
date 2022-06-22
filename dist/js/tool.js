(()=>{"use strict";var e,t={971:(e,t,n)=>{const r=Vue;var o={id:"nc-control"},a=[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})],-1)],l=[(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"})],-1)],s={style:{width:"100%",overflow:"scroll"}},c={class:"nova-calendar noselect"},i={class:"nc-header"},d={class:"border-gray-200 dark:border-gray-900 dark:text-gray-300"},u={class:"nc-content"},m={class:"week"},f={class:"dayheader text-gray-400 noselect"},v={class:"daylabel"},p={class:"week-events"},h=["onClick"],y={class:"name noscrollbar"},g={class:"badges noscrollbar"},k={class:"badge-bg text-gray-200"},E={class:"badge"},b={class:"content noscrollbar"},B={key:0,class:"time"},N={key:1,class:"notes"},w=["onClick"],C={class:"name noscrollbar"},V={class:"badges"},x={class:"badge-bg text-gray-200"},S={class:"badge"},M={class:"content noscrollbar"},D={key:0,class:"time"},F={key:1,class:"time"},O={class:"notes"};const T={mounted:function(){var e=this;this.reset(),Nova.addShortcut("alt+right",(function(t){e.nextMonth()})),Nova.addShortcut("alt+left",(function(t){e.prevMonth()})),Nova.addShortcut("alt+h",(function(t){e.reset()}))},methods:{reset:function(){this.month=null,this.year=null,this.reload()},prevMonth:function(){this.month-=1,this.reload()},nextMonth:function(){this.month+=1,this.reload()},reload:function(){var e=this;Nova.request().get("/nova-vendor/wdelfuego/nova-calendar/calendar-data/"+e.year+"/"+e.month).then((function(t){e.year=t.data.year,e.month=t.data.month,e.title=t.data.title,e.columns=t.data.columns,e.weeks=t.data.weeks,e.styles=t.data.styles}))},open:function(e){Nova.visit(e)},stylesForEvent:function(e){var t=this;if(e.options.styles){var n=[this.styles.default];return e.options.styles.forEach((function(e){void 0===t.styles[e]?console.log("[nova-calendar] Unknown custom style name '"+e+"'; does the eventStyles method of your CalendarDataProvider define it properly?"):n.push(t.styles[e])})),n}return this.styles.default}},data:function(){return{year:null,month:null,title:"",columns:Array(7).fill("-"),weeks:Array(6).fill(Array(7).fill({})),styles:{default:{color:"#fff","background-color":"rgba(var(--colors-primary-500), 0.9)"}}}}};var j=n(379),L=n.n(j),_=n(773),R={insert:"head",singleton:!1};L()(_.Z,R);_.Z.locals;const A=(0,n(744).Z)(T,[["render",function(e,t,n,T,j,L){var _=this,R=(0,r.resolveComponent)("Head"),A=(0,r.resolveComponent)("Card");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[(0,r.createVNode)(R,{title:"Nova Calendar"}),(0,r.createElementVNode)("div",o,[(0,r.createElementVNode)("h1",{onClick:t[0]||(t[0]=function(){return L.reset&&L.reset.apply(L,arguments)}),class:"text-90 font-normal text-xl md:text-2xl noselect"},[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(e.$data.title),1)]),(0,r.createElementVNode)("a",{onClick:t[1]||(t[1]=function(){return L.prevMonth&&L.prevMonth.apply(L,arguments)}),class:"left",href:"#"},a),(0,r.createElementVNode)("a",{onClick:t[2]||(t[2]=function(){return L.nextMonth&&L.nextMonth.apply(L,arguments)}),class:"right",href:"#"},l)]),(0,r.createElementVNode)("div",s,[(0,r.createVNode)(A,{class:"flex flex-col items-center justify-center dark:bg-gray-800",style:{"min-height":"300px","min-width":"800px","background-color":"var(--bg-gray-800)"}},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",i,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.$data.columns,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("div",d,[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(e),1)])})),256))]),(0,r.createElementVNode)("div",u,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.$data.weeks,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",m,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:(0,r.normalizeClass)(["day dark:bg-gray-900 dark:border-gray-800",["nc-col-"+e.weekdayColumn],{withinRange:e.isWithinRange,today:e.isToday}])},[(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("span",v,(0,r.toDisplayString)(e.label),1)])],2)})),256)),(0,r.createElementVNode)("div",p,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.eventsMultiDay,(function(t){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:(0,r.normalizeClass)([["nc-event","multi","nc-col-"+e.weekdayColumn,"span-"+t.spansDaysN],{clickable:t.url,starts:t.startsEvent,ends:t.endsEvent,withinRange:t.isWithinRange}]),onClick:function(e){return L.open(t.url)},style:(0,r.normalizeStyle)(_.stylesForEvent(t))},[(0,r.createElementVNode)("div",y,(0,r.toDisplayString)(t.name),1),(0,r.createElementVNode)("div",g,[t.startsEvent?((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,{key:0},(0,r.renderList)(t.badges,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("span",k,[(0,r.createElementVNode)("span",E,(0,r.toDisplayString)(e),1)])})),256)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",b,[t.startsEvent&&t.options.displayTime?((0,r.openBlock)(),(0,r.createElementBlock)("span",B,(0,r.toDisplayString)(t.startTime),1)):(0,r.createCommentVNode)("",!0),t.startsEvent?((0,r.openBlock)(),(0,r.createElementBlock)("span",N,(0,r.toDisplayString)(t.notes),1)):(0,r.createCommentVNode)("",!0)])],14,h)})),256))],64)})),256)),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:(0,r.normalizeClass)(["single-day-events","nc-col-"+e.weekdayColumn])},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.eventsSingleDay,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:(0,r.normalizeClass)([["nc-event"],{clickable:e.url,starts:e.startsEvent,ends:e.endsEvent,withinRange:e.isWithinRange}]),onClick:function(t){return L.open(e.url)},style:(0,r.normalizeStyle)(_.stylesForEvent(e))},[(0,r.createElementVNode)("div",C,(0,r.toDisplayString)(e.name),1),(0,r.createElementVNode)("div",V,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.badges,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("span",x,[(0,r.createElementVNode)("span",S,(0,r.toDisplayString)(e),1)])})),256))]),(0,r.createElementVNode)("div",M,[e.options.displayTime?((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:0},[e.endTime?((0,r.openBlock)(),(0,r.createElementBlock)("span",D,(0,r.toDisplayString)(e.startTime)+" - "+(0,r.toDisplayString)(e.endTime),1)):((0,r.openBlock)(),(0,r.createElementBlock)("span",F,(0,r.toDisplayString)(e.startTime),1))],64)):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("span",O,(0,r.toDisplayString)(e.notes),1)])],14,w)})),256))],2)})),256))])])})),256))])])]})),_:1})])])}]]);Nova.booting((function(e,t){Nova.inertia("NovaCalendar",A)}))},773:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},762:()=>{},379:(e,t,n)=>{var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),l=[];function s(e){for(var t=-1,n=0;n<l.length;n++)if(l[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],i=n[c]||0,d="".concat(c," ").concat(i);n[c]=i+1;var u=s(d),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(l[u].references++,l[u].updater(m)):l.push({identifier:d,updater:h(m,t),references:1}),r.push(d)}return r}function i(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var l=a(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}function f(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,p=0;function h(e,t){var n,r,o;if(t.singleton){var a=p++;n=v||(v=i(t)),r=m.bind(null,n,a,!1),o=m.bind(null,n,a,!0)}else n=i(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);l[o].references--}for(var a=c(e,t),i=0;i<n.length;i++){var d=s(n[i]);0===l[d].references&&(l[d].updater(),l.splice(d,1))}n=a}}}},744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var l=1/0;for(d=0;d<e.length;d++){for(var[n,o,a]=e[d],s=!0,c=0;c<n.length;c++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,a<l&&(l=a));if(s){e.splice(d--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={103:0,990:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[l,s,c]=n,i=0;if(l.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var d=c(r)}for(t&&t(n);i<l.length;i++)a=l[i],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},n=self.webpackChunkwdelfuego_nova_calendar=self.webpackChunkwdelfuego_nova_calendar||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[990],(()=>r(971)));var o=r.O(void 0,[990],(()=>r(762)));o=r.O(o)})();