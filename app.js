!function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([31,0]),n()}({31:function(e,t,n){e.exports=n(54)},44:function(e,t,n){"use strict";n.r(t),function(e){const{isArray:n}=Array,{getPrototypeOf:r,create:o,defineProperty:a,defineProperties:i,isExtensible:s,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:u,preventExtensions:d,hasOwnProperty:p}=Object,{push:b,concat:h,map:f}=Array.prototype,g={}.toString;function y(e){return void 0===e}function m(e){return"function"==typeof e}const v=new WeakMap;function x(e,t){v.set(e,t)}const w=e=>v.get(e)||e;function k(e,t){return e.valueIsObservable(t)?e.getProxy(t):t}function O(e,t,n){h.call(c(n),u(n)).forEach(r=>{let o=l(n,r);o.configurable||(o=$(e,o,k)),a(t,r,o)}),d(t)}class j{constructor(e,t){this.originalTarget=t,this.membrane=e}get(e,t){const{originalTarget:n,membrane:r}=this,o=n[t],{valueObserved:a}=r;return a(n,t),r.getProxy(o)}set(e,t,r){const{originalTarget:o,membrane:{valueMutated:a}}=this;return o[t]!==r?(o[t]=r,a(o,t)):"length"===t&&n(o)&&a(o,t),!0}deleteProperty(e,t){const{originalTarget:n,membrane:{valueMutated:r}}=this;return delete n[t],r(n,t),!0}apply(e,t,n){}construct(e,t,n){}has(e,t){const{originalTarget:n,membrane:{valueObserved:r}}=this;return r(n,t),t in n}ownKeys(e){const{originalTarget:t}=this;return h.call(c(t),u(t))}isExtensible(e){const t=s(e);if(!t)return t;const{originalTarget:n,membrane:r}=this,o=s(n);return o||O(r,e,n),o}setPrototypeOf(e,t){throw new Error(`Invalid setPrototypeOf invocation for reactive proxy ${n=this.originalTarget,n&&n.toString?n.toString():"object"==typeof n?g.call(n):n+""}. Prototype of reactive objects cannot be changed.`);var n}getPrototypeOf(e){const{originalTarget:t}=this;return r(t)}getOwnPropertyDescriptor(e,t){const{originalTarget:n,membrane:r}=this,{valueObserved:o}=this.membrane;o(n,t);let i=l(n,t);if(y(i))return i;const s=l(e,t);return y(s)?((i=$(r,i,k)).configurable||a(e,t,i),i):s}preventExtensions(e){const{originalTarget:t,membrane:n}=this;return O(n,e,t),d(t),!0}defineProperty(e,t,n){const{originalTarget:r,membrane:o}=this,{valueMutated:i}=o,{configurable:s}=n;if(p.call(n,"writable")&&!p.call(n,"value")){const e=l(r,t);n.value=e.value}return a(r,t,function(e){return p.call(e,"value")&&(e.value=w(e.value)),e}(n)),!1===s&&a(e,t,$(o,n,k)),i(r,t),!0}}function T(e,t){return e.valueIsObservable(t)?e.getReadOnlyProxy(t):t}class P{constructor(e,t){this.originalTarget=t,this.membrane=e}get(e,t){const{membrane:n,originalTarget:r}=this,o=r[t],{valueObserved:a}=n;return a(r,t),n.getReadOnlyProxy(o)}set(e,t,n){{const{originalTarget:e}=this;throw new Error(`Invalid mutation: Cannot set "${t.toString()}" on "${e}". "${e}" is read-only.`)}}deleteProperty(e,t){{const{originalTarget:e}=this;throw new Error(`Invalid mutation: Cannot delete "${t.toString()}" on "${e}". "${e}" is read-only.`)}}apply(e,t,n){}construct(e,t,n){}has(e,t){const{originalTarget:n,membrane:{valueObserved:r}}=this;return r(n,t),t in n}ownKeys(e){const{originalTarget:t}=this;return h.call(c(t),u(t))}setPrototypeOf(e,t){{const{originalTarget:e}=this;throw new Error(`Invalid prototype mutation: Cannot set prototype on "${e}". "${e}" prototype is read-only.`)}}getOwnPropertyDescriptor(e,t){const{originalTarget:n,membrane:r}=this,{valueObserved:o}=r;o(n,t);let i=l(n,t);if(y(i))return i;const s=l(e,t);return y(s)?(i=$(r,i,T),p.call(i,"set")&&(i.set=void 0),i.configurable||a(e,t,i),i):s}preventExtensions(e){{const{originalTarget:e}=this;throw new Error(`Invalid mutation: Cannot preventExtensions on ${e}". "${e} is read-only.`)}}defineProperty(e,t,n){{const{originalTarget:e}=this;throw new Error(`Invalid mutation: Cannot defineProperty "${t.toString()}" on "${e}". "${e}" is read-only.`)}}}const _={header:e=>{const t=w(e);return t&&t!==e?["object",{object:function e(t){if(n(t))return t.map(t=>{const n=w(t);return n!==t?e(n):t});const a=o(r(t)),i=c(t);return h.call(i,u(t)).reduce((n,r)=>{const o=t[r],a=w(o);return n[r]=a!==o?e(a):o,n},a)}(e)}]:null},hasBody:()=>!1,body:()=>null};function M(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{}}function S(e){let t=void 0;return n(e)?t=[]:"object"==typeof e&&(t={}),t}(function(){const e=M(),t=e.devtoolsFormatters||[];b.call(t,_),e.devtoolsFormatters=t})();const C=Object.prototype;function E(e){if(null===e)return!1;if("object"!=typeof e)return!1;if(n(e))return!0;const t=r(e);return t===C||null===t||null===r(t)}const A=(e,t)=>{},I=(e,t)=>{},L=e=>e;function $(e,t,n){const{set:r,get:o}=t;return p.call(t,"value")?t.value=n(e,t.value):(y(o)||(t.get=function(){return n(e,o.call(w(this)))}),y(r)||(t.set=function(t){r.call(w(this),e.unwrapProxy(t))})),t}t.default=class{constructor(e){if(this.valueDistortion=L,this.valueMutated=I,this.valueObserved=A,this.valueIsObservable=E,this.objectGraph=new WeakMap,!y(e)){const{valueDistortion:t,valueMutated:n,valueObserved:r,valueIsObservable:o}=e;this.valueDistortion=m(t)?t:L,this.valueMutated=m(n)?n:I,this.valueObserved=m(r)?r:A,this.valueIsObservable=m(o)?o:E}}getProxy(e){const t=w(e),n=this.valueDistortion(t);if(this.valueIsObservable(n)){const r=this.getReactiveState(t,n);return r.readOnly===e?e:r.reactive}return n}getReadOnlyProxy(e){e=w(e);const t=this.valueDistortion(e);return this.valueIsObservable(t)?this.getReactiveState(e,t).readOnly:t}unwrapProxy(e){return w(e)}getReactiveState(e,t){const{objectGraph:n}=this;let r=n.get(t);if(r)return r;const o=this;return r={get reactive(){const n=new j(o,t),r=new Proxy(S(t),n);return x(r,e),a(this,"reactive",{value:r}),r},get readOnly(){const n=new P(o,t),r=new Proxy(S(t),n);return x(r,e),a(this,"readOnly",{value:r}),r}},n.set(t,r),r}}}.call(this,n(45))},45:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},54:function(e,t,n){"use strict";n.r(t);var r=n(0);var o=[function(e,t,n){return".container"+t+" {display: flex;flex-flow: row wrap;justify-content: center;}\nnav"+t+" {display: flex;}\n@media all and (max-width: 1250px) {.container"+t+" {justify-content: center;}\n}@media all and (max-width: 600px) {.container"+t+" {justify-content: center;}\n}"}];var a=[function(e,t,n){return"*"+t+" {box-sizing: border-box;}\nbody"+t+" {font-family: 'Montserrat', sans-serif;line-height: 1.6;margin: 0;min-height: 100vh;}\nul"+t+" {margin: 0;padding: 0;list-style: none;}\nh2"+t+",\rh3"+t+",\ra"+t+" {color: #34495e;}\na"+t+" {text-decoration: none;}\n.logo"+t+" {margin: 0;font-size: 1.45em;}\n.main-nav"+t+"{text-align: center;width: 100%;}\n.logo"+t+" a"+t+" {position: absolute;}\n.logo"+t+" a"+t+",\r.main-nav"+t+" a"+t+" {padding: 0rem 1rem;text-transform: uppercase;text-align: center;display: block;}\n.main-nav"+t+" a"+t+" {color: #34495e;font-size: 0.99em;}\n.main-nav"+t+" a:hover"+t+" {color: #718daa;}\n.header"+t+" {position: fixed;padding-top: 0.5em;padding-bottom: 0.5em;background-color: #fff;-webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.33);-moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.33);box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.33);display: flex;flex-direction: row;justify-content: space-between;width: 100%;}\n.nav-item"+t+" {display: none;flex-direction: row;justify-content: space-between;}\n@media (min-width: 600px) {.header"+t+",\r .main-nav"+t+" {display: flex;}\n.header"+t+" {flex-direction: row;justify-content: space-between;}\n.nav-item"+t+"{display: flex;}\n.main-nav"+t+"{text-align: left;width: none;justify-content: flex-end;}\n}@media (min-width: 1250px) {.header"+t+" {flex-direction: row;justify-content: space-between;}\n}"}];var i=[function(e,t,n){return"@-webkit-keyframes slideInLeft {0%"+t+" {-webkit-transform: translate3d(-250px, 0, 0);transform: translate3d(-250px, 0, 0);visibility: visible;}\n100%"+t+" {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}\n}@keyframes slideInLeft {0% {-webkit-transform: translate3d(-250px, 0, 0);transform: translate3d(-250px, 0, 0);visibility: visible;}\n100% {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}\n}@-webkit-keyframes slideOutLeft {0%"+t+" {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}\n100%"+t+" {-webkit-transform: translate3d(-250px, 0, 0);transform: translate3d(-250px, 0, 0);visibility: hidden;}\n}@keyframes slideOutLeft {0% {-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}\n100% {-webkit-transform: translate3d(-250px, 0, 0);transform: translate3d(-250px, 0, 0);visibility: hidden;}\n}*"+t+" {box-sizing: border-box;}\nbody"+t+":after {background: white;content: '';height: 100%;left: 0;opacity: 0;overflow: auto;padding: 0;position: absolute;top: 0;transition: all 0.4s ease;width: 100%;}\nbody.open"+t+" {overflow: hidden;}\nbody.open"+t+":after {opacity: 1;visibility: visible;}\n.b-nav"+t+" {position: absolute;z-index: 11;}\n.b-nav:not(.open)"+t+" {visibility: hidden;}\n.b-nav"+t+" li"+t+" {color: #444444;list-style-type: none;padding: 10px;text-align: left;-webkit-transform: translateX(-250px);transform: translateX(-250px);}\n.b-nav"+t+" li:not(.open)"+t+" {-webkit-animation-duration: 0.4s;animation-duration: 0.4s;-webkit-animation-fill-mode: both;animation-fill-mode: both;-webkit-animation-name: slideOutLeft;animation-name: slideOutLeft;}\n.b-nav"+t+" li:first-child"+t+" {padding-top: 120px;}\n.b-nav.open"+t+" {visibility: visible;}\n.b-nav.open"+t+" li"+t+" {-webkit-animation-duration: 0.4s;animation-duration: 0.4s;-webkit-animation-fill-mode: both;animation-fill-mode: both;-webkit-animation-name: slideInLeft;animation-name: slideInLeft;}\n.b-link"+t+" {background: transparent;border-left: rgba(68, 68, 68, 0) solid 2px;color: #444444;font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;font-size: 24px;font-weight: 300;margin-left: 30px;text-decoration: none;transition: all 0.4s ease;width: auto;}\n.b-link:hover"+t+", .b-link--active"+t+" {border-left: #444444 solid 2px;padding-left: 30px;}\n.b-menu"+t+" {background: white;border: white solid 2px;border-radius: 50%;cursor: pointer;display: inline-block;height: 40px;width: 40px;padding-left: 8px;padding-top: 9px;position: relative;transition: all 0.4s ease;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;z-index: 12;}\n.b-menu:hover"+t+" {border: #444444 solid 2px;}\n.b-bun"+t+" {background: #444444;position: relative;transition: all 0.4s ease;}\n.b-bun--top"+t+" {height: 2px;top: 0;width: 20px;}\n.b-bun--mid"+t+" {height: 2px;top: 6px;width: 20px;}\n.b-bun--bottom"+t+" {height: 2px;top: 12px;width: 20px;}\n.b-brand"+t+" {color: white;font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;font-size: 24px;font-weight: 300;margin-left: 30px;position: relative;text-decoration: none;top: -21.4285714286px;transition: all 0.4s ease;z-index: 13;}\n.b-container"+t+" {text-align: end;}\n.b-container:hover:not(.open)"+t+" .bun-top"+t+",\r .b-container:hover:not(.open)"+t+" .bun-mid"+t+",\r .b-container:hover:not(.open)"+t+" .bun-bottom"+t+" {background: white;}\n.b-container.open"+t+" .b-main"+t+" {border: #444444 solid 2px;}\n.b-container.open"+t+" .b-bun--top"+t+" {background: #444444;top: 9px;-webkit-transform: rotate(45deg);transform: rotate(45deg);}\n.b-container.open"+t+" .b-bun--mid"+t+" {opacity: 0;}\n.b-container.open"+t+" .b-bun--bottom"+t+" {background: #444444;top: 5px;-webkit-transform: rotate(-45deg);transform: rotate(-45deg);}\n.b-container.open"+t+" .b-brand"+t+" {color: #444444;}\n@media (min-width: 600px) {.header"+t+",\r .main-nav"+t+" {display: flex;}\n.header"+t+" {flex-direction: row;justify-content: space-between;}\n.b-container"+t+" {display: none;}\n}@media (min-width: 1250px) {.header"+t+" {flex-direction: row;justify-content: space-between;}\n}"}];function s(e,t,n,r){const{h:o,b:a}=e,{_m0:i}=r;return[o("div",{classMap:{"b-container":!0},key:2},[o("div",{classMap:{"b-menu":!0},key:3,on:{click:i||(r._m0=a(t.handleClick))}},[o("div",{classMap:{"b-bun":!0,"b-bun--top":!0},key:4},[]),o("div",{classMap:{"b-bun":!0,"b-bun--mid":!0},key:5},[]),o("div",{classMap:{"b-bun":!0,"b-bun--bottom":!0},key:6},[])])])]}var l=Object(r.registerTemplate)(s);s.stylesheets=[],i&&s.stylesheets.push.apply(s.stylesheets,i),s.stylesheetTokens={hostAttribute:"ui-burger-_burger-host",shadowAttribute:"ui-burger-_burger"};var c=Object(r.registerComponent)(class extends r.LightningElement{handleClick(){var e=document.body;this.template.querySelectorAll(".b-menu")[0];[e,this.template.querySelectorAll(".b-container")[0]].forEach(function(e){e.classList.toggle("open")})}},{tmpl:l});var u=[function(e,t,n){return".field-label"+t+" {font-size: 1.2rem;color: gray;display: block;}\nselect"+t+" {appearance: none;background: 0 0;border: none;color: var(--color-text);font-size: 1.6rem;font-weight: 300;font-family: inherit;position: relative;padding: 4px;background-size: 20px 20px;background-repeat: no-repeat;background-position-y: center;background-position-x: 4px;width: 178px;background-color: var(--color-bg-search);outline: none;cursor: pointer;}\n"}];function d(e,t,n,r){const{d:o,h:a,k:i,i:s,b:l}=e,{_m0:c}=r;return[a("div",{key:2},[a("label",{classMap:{"field-label":!0},key:3},[o(t.label)]),a("select",{key:4,on:{change:c||(r._m0=l(t.handleChange))}},s(t.options,function(e){return a("option",{key:i(6,e.value)},[o(e.label)])}))])]}var p=Object(r.registerTemplate)(d);d.stylesheets=[],u&&d.stylesheets.push.apply(d.stylesheets,u),d.stylesheetTokens={hostAttribute:"ui-select-_select-host",shadowAttribute:"ui-select-_select"};class b extends r.LightningElement{constructor(...e){super(...e),this.label=void 0,this.options=void 0,this.currentValue=void 0}set value(e){this.currentValue=e}get value(){return this.currentValue}handleChange(e){this.currentValue=this.options[e.target.selectedIndex].value,this.dispatchEvent(new CustomEvent("change"))}}Object(r.registerDecorators)(b,{publicProps:{label:{config:0},options:{config:0},value:{config:3}},track:{currentValue:1}});var h=Object(r.registerComponent)(b,{tmpl:p});function f(e,t,n,r){const{t:o,h:a,b:i,c:s}=e,{_m0:l,_m1:u,_m2:d}=r;return[a("header",{classMap:{header:!0},key:2},[a("h1",{classMap:{logo:!0},key:3},[a("a",{attrs:{href:"#"},key:4},[o("NG")])]),a("ul",{classMap:{"main-nav":!0},key:5},[a("li",{key:6},[a("a",{key:7},[s("ui-burger",c,{key:8,on:{click:l||(r._m0=i(t.handleClick))}},[])])]),a("li",{classMap:{"nav-item":!0},key:9},[a("a",{key:10},[s("ui-select",h,{props:{label:"Country",value:t.country,options:t.countryOptions},key:11,on:{change:u||(r._m1=i(t.handleChange))}},[])])]),a("li",{classMap:{"nav-item":!0},key:12},[a("a",{key:13},[s("ui-select",h,{props:{label:"Category",value:t.category,options:t.categoryOptions},key:14,on:{change:d||(r._m2=i(t.handleChange))}},[])])])])])]}var g=Object(r.registerTemplate)(f);f.stylesheets=[],a&&f.stylesheets.push.apply(f.stylesheets,a),f.stylesheetTokens={hostAttribute:"my-navbar-_navbar-host",shadowAttribute:"my-navbar-_navbar"};var y=Object(r.registerComponent)(class extends r.LightningElement{constructor(...e){super(...e),this.countryOptions=[{label:"Portugal",value:"pt"},{label:"França",value:"fr"},{label:"Brazil",value:"br"}],this.categoryOptions=[{label:"General",value:"general"},{label:"Business",value:"business"},{label:"Entertainment",value:"entertainment"},{label:"Health",value:"health"},{label:"Science",value:"science"},{label:"Sports",value:"sports"},{label:"Technology",value:"technology"}]}handleChange(e){const t=new CustomEvent("change",{detail:e});this.dispatchEvent(t)}handleClick(){this.template.querySelectorAll(".nav-item").forEach(function(e){"block"===e.style.display?e.style.display="":e.style.display="block"})}},{tmpl:g});var m=[function(e,t,n){return".card"+t+" {background: #fff;border: 0.05rem solid #dadee4;border-radius: 0.1rem;display: flex;display: -ms-flexbox;-ms-flex-direction: column;flex-direction: column;margin: 1rem;margin-bottom: 3rem;flex: 1;padding: 1rem;max-width: 50rem;}\n.card"+t+" .card-header"+t+",\r.card"+t+" .card-body"+t+",\r.card"+t+" .card-footer"+t+" {padding: 0.8rem;padding-bottom: 0;}\n.card"+t+" .card-header:last-child"+t+",\r.card"+t+" .card-body:last-child"+t+",\r.card"+t+" .card-footer:last-child"+t+" {padding-bottom: 0.8rem;}\n.card"+t+" .card-body"+t+" {-ms-flex: 1 1 auto;flex: 1 1 auto;padding: 14px;}\n.card"+t+" .card-image"+t+" {padding-top: 0.8rem;}\n.card"+t+" .card-image:first-child"+t+" {padding-top: 0;}\n.card"+t+" .card-image:first-child"+t+" img"+t+" {border-top-left-radius: 0.1rem;border-top-right-radius: 0.1rem;}\n.card"+t+" .card-image:last-child"+t+" img"+t+" {border-bottom-left-radius: 0.1rem;border-bottom-right-radius: 0.1rem;}\n.card"+t+" .card-title"+t+" {font-size: 2.2rem;font-weight: 600;}\n.card"+t+" .card-footer"+t+" {vertical-align: bottom;}\n@media all and (max-width: 1250px) {.card"+t+" {max-width: 40vw;}\n}@media all and (max-width: 600px) {.card"+t+" {max-width: 100%;}\n}"}];function v(e,t,n,r){const{d:o,h:a,s:i}=e;return[a("div",{classMap:{card:!0},key:2},[a("div",{classMap:{"card-header":!0},key:4},[t.title?a("div",{classMap:{"card-title":!0},key:6},[o(t.title)]):null,t.subtitle?a("div",{classMap:{"card-subtitle":!0},key:8},[o(t.subtitle)]):null]),a("div",{classMap:{"card-body":!0},key:9},[i("",{key:10},[],n)]),a("div",{classMap:{"card-footer":!0},key:11},[i("footer",{attrs:{name:"footer"},key:12},[],n)])])]}var x=Object(r.registerTemplate)(v);v.slots=["","footer"],v.stylesheets=[],m&&v.stylesheets.push.apply(v.stylesheets,m),v.stylesheetTokens={hostAttribute:"ui-card-_card-host",shadowAttribute:"ui-card-_card"};var w=Object(r.registerComponent)(class extends r.LightningElement{},{tmpl:x});var k=[function(e,t,n){return"\n"+(n?":host {text-align: left;}":e+" {text-align: left;}")+"\n.description"+t+" {color: #706e6b;}\na"+t+" {color: var(--color-text-link);text-decoration: var(--text-decoration);}\nmy-fb-share"+t+" {float: right;}\n"}];var O=[function(e,t,n){return"a"+t+" {color: var(--color-text-link);text-decoration: var(--text-decoration);}\n"}];var j=[function(e,t,n){return"button"+t+" {font-size: 0.9em;padding: 4px 8px;background-color: var(--button-color-bg);border: none;color: white;padding: 10px 10px;min-width: 100px;text-align: center;text-decoration: var(--text-decoration);display: inline-block;}\nbutton:hover"+t+" {background-color: var(--button-color-bg-active);}\nbutton:focus"+t+" {outline: 0;}\n"}];function T(e,t,n,r){const{d:o,h:a}=e;return[a("button",{attrs:{title:t.label},key:2},[o(t.label)])]}var P=Object(r.registerTemplate)(T);T.stylesheets=[],j&&T.stylesheets.push.apply(T.stylesheets,j),T.stylesheetTokens={hostAttribute:"ui-button-_button-host",shadowAttribute:"ui-button-_button"};class _ extends r.LightningElement{constructor(...e){super(...e),this.label=void 0}}Object(r.registerDecorators)(_,{publicProps:{label:{config:0}}});var M=Object(r.registerComponent)(_,{tmpl:P});function S(e,t,n,r){const{b:o,c:a}=e,{_m0:i}=r;return[a("ui-button",M,{props:{label:"Share on facebook"},key:2,on:{click:i||(r._m0=o(t.handleShareFb))}},[])]}var C=Object(r.registerTemplate)(S);S.stylesheets=[],O&&S.stylesheets.push.apply(S.stylesheets,O),S.stylesheetTokens={hostAttribute:"my-fbShare-_fbShare-host",shadowAttribute:"my-fbShare-_fbShare"};var E=Object(r.registerComponent)(class extends r.LightningElement{renderedCallback(){this.fbInit||(this.fbInit=!0)}handleShareFb(){FB.login(function(e){FB.api("/740465436160051",function(e){console.log(e)})})}},{tmpl:C});function A(e,t,n,r){const{s:o,h:a,t:i,c:s}=e;return[a("div",{classMap:{description:!0},key:2},[o("",{key:3},[],n)]),a("p",{key:4},[a("a",{attrs:{href:t.sourceURL,target:"source"},key:5},[i("View Source")]),s("my-fb-share",E,{key:6},[])])]}var I=Object(r.registerTemplate)(A);A.slots=[""],A.stylesheets=[],k&&A.stylesheets.push.apply(A.stylesheets,k),A.stylesheetTokens={hostAttribute:"my-viewSource-_viewSource-host",shadowAttribute:"my-viewSource-_viewSource"};class L extends r.LightningElement{constructor(...e){super(...e),this.source=void 0}get sourceURL(){return this.source}}Object(r.registerDecorators)(L,{publicProps:{source:{config:0}}});var $=Object(r.registerComponent)(L,{tmpl:I});function z(e,t,n,r){const{b:o,c:a,h:i,d:s,k:l,i:c}=e,{_m0:u}=r;return[a("my-navbar",y,{key:2,on:{change:u||(r._m0=o(t.handleChange))}},[]),i("br",{key:3},[]),i("br",{key:4},[]),i("br",{key:5},[]),i("div",{classMap:{container:!0},key:6},t.newsList?c(t.newsList,function(e){return a("ui-card",w,{props:{title:e.title},key:l(9,e.url)},[i("div",{key:10},[s(e.description)]),i("img",{styleMap:{maxWidth:"100%"},attrs:{src:e.urlToImage},key:11},[]),a("my-view-source",$,{attrs:{slot:"footer"},props:{source:e.url},key:12},[])])}):[])]}var D=Object(r.registerTemplate)(z);z.stylesheets=[],o&&z.stylesheets.push.apply(z.stylesheets,o),z.stylesheetTokens={hostAttribute:"my-app-_app-host",shadowAttribute:"my-app-_app"};class F extends r.LightningElement{constructor(...e){super(...e),this.newsList=void 0,this.country="pt",this.category="",this.newsInit=!1,this.startUrl="https://newsapi.org/",this.endpoint="v2/top-headlines?",this.apiKey="c6886647da054888bac454914a6791ee"}renderedCallback(){this.newsInit||(this.newsInit=!0,this.getNews(this.country,this.category).then(e=>this.newsList=e.articles),window.fbAsyncInit=function(){FB.init({appId:"740465436160051",autoLogAppEvents:!0,xfbml:!0,version:"v4.0"})})}handleChange(e){null!==e.detail&&("Country"==e.detail.target.label?this.country=e.detail.target.value:this.category=e.detail.target.value,this.getNews(this.country,this.category).then(e=>this.newsList=e.articles))}async getNews(e,t){let n=`${this.startUrl}${this.endpoint}country=${e}&category=${t}&apiKey=${this.apiKey}`;console.log(n);let r=await fetch(n);return await r.json()}}Object(r.registerDecorators)(F,{track:{newsList:1,country:1,category:1}});var R=Object(r.registerComponent)(F,{tmpl:D});const N=Object(r.createElement)("my-app",{is:R});document.querySelector("#main").appendChild(N)}});