(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(t,e,r){"use strict";r.r(e);e.default={}},158:function(t,e,r){r(29),r(37)},238:function(t,e,r){t.exports={}},276:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=[]},282:function(t,e,r){r(283),t.exports=r(391)},339:function(t,e,r){"use strict";r(238)},390:function(t,e){},391:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(29),r(8),r(32),r(16),r(22),r(37),r(303),r(311),r(10),r(2)),c=r(153),l=r(13),h=(r(67),r(136),r(56),r(30),r(23),r(98),r(57),r(52));function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(l.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t){o.default.config.errorHandler&&o.default.config.errorHandler(t)}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=t.$children||[];for(var n of r)n.$fetch&&e.push(n),n.$children&&y(n,e);return e}function m(t,e){if(e||!t.options.__hasNuxtData){var r=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=r,t.options.data=function(){var data=r.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),f(f({},data),e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function x(t){return t.options&&t._Ctor===t||(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=o.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file)),t}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"components";return Array.prototype.concat.apply([],t.matched.map(((t,n)=>Object.keys(t[r]).map((o=>(e&&e.push(n),t[r][o]))))))}function _(t){return w(t,arguments.length>1&&void 0!==arguments[1]&&arguments[1],"instances")}function $(t,e){return Array.prototype.concat.apply([],t.matched.map(((t,r)=>Object.keys(t.components).reduce(((n,o)=>(t.components[o]?n.push(e(t.components[o],t.instances[o],t,o,r)):delete t.components[o],n)),[]))))}function C(t,e){return Promise.all($(t,function(){var t=Object(n.a)((function*(t,r,n,o){if("function"==typeof t&&!t.options)try{t=yield t()}catch(t){if(t&&"ChunkLoadError"===t.name&&"undefined"!=typeof window&&window.sessionStorage){var c=Date.now(),l=parseInt(window.sessionStorage.getItem("nuxt-reload"));(!l||l+6e4<c)&&(window.sessionStorage.setItem("nuxt-reload",c),window.location.reload(!0))}throw t}return n.components[o]=t=x(t),"function"==typeof e?e(t,r,n,o):t}));return function(e,r,n,o){return t.apply(this,arguments)}}()))}function O(t){return E.apply(this,arguments)}function E(){return(E=Object(n.a)((function*(t){if(t)return yield C(t),f(f({},t),{},{meta:w(t).map(((e,r)=>f(f({},e.options.meta),(t.matched[r]||{}).meta)))})}))).apply(this,arguments)}function P(t,e){return j.apply(this,arguments)}function j(){return(j=Object(n.a)((function*(t,e){t.context||(t.context={isStatic:!1,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:t.router.options.base,env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,r)=>{if(e){t.context._redirected=!0;var n=typeof path;if("number"==typeof e||"undefined"!==n&&"object"!==n||(r=path||{},n=typeof(path=e),e=302),"object"===n&&(path=t.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=Object(h.withQuery)(path,r),window.location.assign(path),new Error("ERR_REDIRECT");t.context.next({path:path,query:r,status:e})}},t.context.nuxtState=window.__NUXT__);var[r,n]=yield Promise.all([O(e.route),O(e.from)]);e.route&&(t.context.route=r),e.from&&(t.context.from=n),e.error&&(t.context.error=e.error),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!1,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}))).apply(this,arguments)}function k(t,e,r){return!t.length||e._redirected||e._errored||r&&r.aborted?Promise.resolve():R(t[0],e).then((()=>k(t.slice(1),e,r)))}function R(t,e){var r;return(r=2===t.length?new Promise((r=>{t(e,(function(t,data){t&&e.error(t),r(data=data||{})}))})):t(e))&&r instanceof Promise&&"function"==typeof r.then?r:Promise.resolve(r)}function S(t,e){return function(t,e){for(var r=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(r[i]=new RegExp("^(?:"+t[i].pattern+")$",I(e)));return function(e,n){for(var path="",data=e||{},o=(n||{}).pretty?N:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var h=data[l.name||"pathMatch"],d=void 0;if(null==h){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var f=0;f<h.length;f++){if(d=o(h[f]),!r[c].test(d))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(d)+"`");path+=(0===f?l.prefix:l.delimiter)+d}}else{if(d=l.asterisk?L(h):o(h),!r[c].test(d))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+d+'"');path+=l.prefix+d}}else path+=l}return path}}(function(t,e){var r,n=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(r=T.exec(t));){var h=r[0],d=r[1],f=r.index;if(path+=t.slice(c,f),c=f+h.length,d)path+=d[1];else{var v=t[c],y=r[2],m=r[3],x=r[4],w=r[5],_=r[6],$=r[7];path&&(n.push(path),path="");var C=null!=y&&null!=v&&v!==y,O="+"===_||"*"===_,E="?"===_||"*"===_,P=r[2]||l,pattern=x||w;n.push({name:m||o++,prefix:y||"",delimiter:P,optional:E,repeat:O,partial:C,asterisk:Boolean($),pattern:pattern?F(pattern):$?".*":"[^"+A(P)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&n.push(path);return n}(t,e),e)}function D(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(r){e="[".concat(t.constructor.name,"]")}return f(f({},t),{},{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=t=>{window.onNuxtReadyCbs.push(t)};var T=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function N(t,e){var r=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(r,(t=>"%"+t.charCodeAt(0).toString(16).toUpperCase()))}function L(t){return N(t,!0)}function A(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function F(t){return t.replace(/([=!:$/()])/g,"\\$1")}function I(t){return t&&t.sensitive?"":"i"}function U(t,e,r){t.$options[e]||(t.$options[e]=[]),t.$options[e].includes(r)||t.$options[e].push(r)}var B=h.joinURL,K=(h.withoutTrailingSlash,h.isSamePath);function M(t){try{window.history.scrollRestoration=t}catch(t){}}var z=r(274),H=r(193),Q=r.n(H),J=r(87),V=r.n(J),W=r(194);"scrollRestoration"in window.history&&(M("manual"),window.addEventListener("beforeunload",(()=>{M("auto")})),window.addEventListener("load",(()=>{M("manual")})));function X(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function G(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?X(Object(r),!0).forEach((function(e){Object(l.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Y=()=>{};o.default.use(W.a);var Z={mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,r){var n=!1,o=t!==e;r?n=r:o&&function(t){var e=w(t);if(1===e.length){var{options:r={}}=e[0];return!1!==r.scrollToTop}return e.some((t=>{var{options:e}=t;return e&&e.scrollToTop}))}(t)&&(n={x:0,y:0});var c=window.$nuxt;return(!o||t.path===e.path&&t.hash!==e.hash)&&c.$nextTick((()=>c.$emit("triggerScroll"))),new Promise((e=>{c.$once("triggerScroll",(()=>{if(t.hash){var r=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(r="#"+window.CSS.escape(r.substr(1)));try{var o=document.querySelector(r);if(o){var c;n={selector:r};var l=Number(null===(c=getComputedStyle(o)["scroll-margin-top"])||void 0===c?void 0:c.replace("px",""));l&&(n.offset={y:l})}}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(n)}))}))},routes:[{path:"/",component:()=>r.e(2).then(r.bind(null,393)).then((t=>t.default||t)),name:"index"}],fallback:!1};var tt={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,e){var{parent:r,data:data,props:n}=e,o=r.$createElement;data.nuxtChild=!0;for(var c=r,l=r.$nuxt.nuxt.transitions,h=r.$nuxt.nuxt.defaultTransition,d=0;r;)r.$vnode&&r.$vnode.data.nuxtChild&&d++,r=r.$parent;data.nuxtChildDepth=d;var f=l[d]||h,v={};et.forEach((t=>{void 0!==f[t]&&(v[t]=f[t])}));var y={};nt.forEach((t=>{"function"==typeof f[t]&&(y[t]=f[t].bind(c))}));var m=y.beforeEnter;if(y.beforeEnter=t=>{if(window.$nuxt.$nextTick((()=>{window.$nuxt.$emit("triggerScroll")})),m)return m.call(c,t)},!1===f.css){var x=y.leave;(!x||x.length<2)&&(y.leave=(t,e)=>{x&&x.call(c,t),c.$nextTick(e)})}var w=o("routerView",data);return n.keepAlive&&(w=o("keep-alive",{props:n.keepAliveProps},[w])),o("transition",{props:v,on:y},[w])}},et=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],nt=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],ot={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0"}]}}},at=(r(339),r(152)),it=Object(at.a)(ot,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?e("p",{staticClass:"description"},[void 0===t.$route?e("a",{staticClass:"error-link",attrs:{href:"/"}}):e("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"logo"},[t("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt")])])}],!1,null,null,null).exports,st={name:"Nuxt",components:{NuxtChild:tt,NuxtError:it},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||S(this.$route.matched[0].path)(this.$route.params);var[t]=this.$route.matched;if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var{options:r}=e;if(r.key)return"function"==typeof r.key?r.key(this.$route):r.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){o.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err&&this.nuxt.errPageReady?this.errorFromNuxtError?(this.$nextTick((()=>this.errorFromNuxtError=!1)),t("div",{},[t("h2","An error occurred while showing the error page"),t("p","Unfortunately an error occurred and while showing the error page another error occurred"),t("p","Error details: ".concat(this.errorFromNuxtError.toString())),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick((()=>this.displayingNuxtError=!1)),t(it,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},ut={name:"DefaultLayout",setup(){var{$store:t,$route:e}=useNuxtApp()}},ct={_default:x(Object(at.a)(ut,(function(){var t=this._self._c;return t("div",[t("nuxt")],1)}),[],!1,null,null,null).exports)},lt={render(t,e){var r=t(this.layout||"nuxt"),n=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),o=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick((()=>{window.$nuxt.$emit("triggerScroll")}))}}},[n]);return t("div",{domProps:{id:"__nuxt"}},[o])},data:()=>({isOnline:!0,layout:null,layoutName:"",nbFetching:0}),beforeCreate(){o.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){this.$root.$options.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline},isFetching(){return this.nbFetching>0}},methods:{refreshOnlineStatus(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh(){var t=this;return Object(n.a)((function*(){var e=_(t.$route);if(e.length){var r=e.map(function(){var e=Object(n.a)((function*(e){var p=[];for(var component of(e.$options.fetch&&e.$options.fetch.length&&p.push(R(e.$options.fetch,t.context)),e.$options.asyncData&&p.push(R(e.$options.asyncData,t.context).then((t=>{for(var r in t)o.default.set(e.$data,r,t[r])}))),yield Promise.all(p),p=[],e.$fetch&&p.push(e.$fetch()),y(e.$vnode.componentInstance)))p.push(component.$fetch());return Promise.all(p)}));return function(t){return e.apply(this,arguments)}}());try{yield Promise.all(r)}catch(e){v(e),t.error(e)}}}))()},errorChanged(){if(this.nuxt.err){var t=(it.options||it).layout;"function"==typeof t&&(t=t(this.context)),this.nuxt.errPageReady=!0,this.setLayout(t)}},setLayout(t){return t&&ct["_"+t]||(t="default"),this.layoutName=t,this.layout=ct["_"+t],this.layout},loadLayout:t=>(t&&ct["_"+t]||(t="default"),Promise.resolve(ct["_"+t]))}},pt=r(158);for(var ht in pt)o.default.component(ht,pt[ht]),o.default.component("Lazy"+ht,pt[ht]);var ft=r(195),vt=r(197),yt=(r(190),r(11)),mt=(r(240),r(73),r(270),r(117),r(42),r(271),r(272),r(85),r(273),r(151),Object(yt.b)((t=>{var e=t.nuxt2Context.app.setup;t.nuxt2Context.app.setup=function(){var r=e instanceof Function?e(...arguments):{};t.hooks.callHookWith((t=>t.map((t=>t()))),"vue:setup");return r}})));r(390);function xt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function gt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?xt(Object(r),!0).forEach((function(e){Object(l.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):xt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}o.default.component(Q.a.name,Q.a),o.default.component(V.a.name,gt(gt({},V.a),{},{render:(t,e)=>(V.a._warned||(V.a._warned=!0,console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),V.a.render(t,e))})),o.default.component(tt.name,tt),o.default.component("NChild",tt),o.default.component(st.name,st),Object.defineProperty(o.default.prototype,"$nuxt",{get(){var t=this.$root?this.$root.$options.$nuxt:null;return t||"undefined"==typeof window?t:window.$nuxt},configurable:!0}),o.default.use(z.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var wt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function bt(){return bt=Object(n.a)((function*(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=yield function(t,e){var base=e._app&&e._app.basePath||Z.base,r=new W.a(G(G({},Z),{},{base:base})),n=r.push;r.push=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Y,r=arguments.length>2?arguments[2]:void 0;return n.call(this,t,e,r)};var o=r.resolve.bind(r);return r.resolve=(t,e,r)=>("string"==typeof t&&(t=Object(h.normalizeURL)(t)),o(t,e,r)),r}(0,r),l=gt({head:{htmlAttrs:{lang:"de"},bodyAttrs:{tabindex:1},meta:[],link:[],style:[],script:[]},router:c,nuxt:{defaultTransition:wt,transitions:[wt],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map((t=>t=t?"string"==typeof t?Object.assign({},wt,{name:t}):Object.assign({},wt,t):wt)),this.$options.nuxt.transitions=t,t},err:null,errPageReady:!1,dateErr:null,error(e){e=e||null,l.context._errored=Boolean(e),e=e?D(e):null;var r=l.nuxt;return this&&(r=this.nuxt||this.$options.nuxt),r.dateErr=Date.now(),r.err=e,r.errPageReady=!1,t&&(t.nuxt.error=e),e}}},lt),d=t?t.next:t=>l.router.push(t);if(t)e=c.resolve(t.url).route;else{var path=function(base,t){if("hash"===t)return window.location.hash.replace(/^#\//,"");base=decodeURI(base).slice(0,-1);var path=decodeURI(window.location.pathname);base&&path.startsWith(base)&&(path=path.slice(base.length));var e=(path||"/")+window.location.search+window.location.hash;return Object(h.normalizeURL)(e)}(c.options.base,c.options.mode);e=c.resolve(path).route}function f(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject('".concat(t,"', value) has no value provided"));l[t="$"+t]=e,l.context[t]||(l.context[t]=e);var r="__nuxt_"+t+"_installed__";o.default[r]||(o.default[r]=!0,o.default.use((()=>{Object.prototype.hasOwnProperty.call(o.default.prototype,t)||Object.defineProperty(o.default.prototype,t,{get(){return this.$root.$options[t]}})})))}return yield P(l,{route:e,next:d,error:l.nuxt.error.bind(l),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,beforeSerializeFns:t?t.beforeSerializeFns:void 0,ssrContext:t}),f("config",r),"function"==typeof ft.a&&(yield Object(ft.a)(l.context,f)),"function"==typeof vt.a&&(yield Object(vt.a)(l.context,f)),"function"==typeof mt&&(yield mt(l.context,f)),yield new Promise(((t,e)=>{var{route:r}=c.resolve(l.context.route.fullPath);if(!r.matched.length)return t();c.replace(l.context.route.fullPath,t,(r=>{if(!r._isRouter)return e(r);if(2!==r.type)return t();var o=c.afterEach(function(){var e=Object(n.a)((function*(e,r){l.context.route=yield O(e),l.context.params=e.params||{},l.context.query=e.query||{},o(),t()}));return function(t,r){return e.apply(this,arguments)}}())}))})),{app:l,router:c}})),bt.apply(this,arguments)}var _t=window.__NUXT__,$t={beforeCreate(){var t;(t=this).$options&&"function"==typeof t.$options.fetch&&!t.$options.fetch.length&&(this._fetchDelay="number"==typeof this.$options.fetchDelay?this.$options.fetchDelay:200,o.default.util.defineReactive(this,"$fetchState",{pending:!1,error:null,timestamp:Date.now()}),this.$fetch=Et.bind(this),U(this,"created",Ot),U(this,"beforeMount",Ct))}};function Ct(){if(!this._hydrated)return this.$fetch()}function Ot(){if((t=this).$vnode&&t.$vnode.elm&&t.$vnode.elm.dataset&&t.$vnode.elm.dataset.fetchKey){var t;this._hydrated=!0,this._fetchKey=this.$vnode.elm.dataset.fetchKey;var data=_t.fetch[this._fetchKey];if(data&&data._error)this.$fetchState.error=data._error;else for(var e in data)o.default.set(this.$data,e,data[e])}}function Et(){return this._fetchPromise||(this._fetchPromise=Pt.call(this).then((()=>{delete this._fetchPromise}))),this._fetchPromise}function Pt(){return jt.apply(this,arguments)}function jt(){return(jt=Object(n.a)((function*(){this.$nuxt.nbFetching++,this.$fetchState.pending=!0,this.$fetchState.error=null,this._hydrated=!1;var t=null,e=Date.now();try{yield this.$options.fetch.call(this)}catch(e){0,t=D(e)}var r=this._fetchDelay-(Date.now()-e);r>0&&(yield new Promise((t=>setTimeout(t,r)))),this.$fetchState.error=t,this.$fetchState.pending=!1,this.$fetchState.timestamp=Date.now(),this.$nextTick((()=>this.$nuxt.nbFetching--))}))).apply(this,arguments)}var kt=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))})}),1)},Rt=window.cancelIdleCallback||function(t){clearTimeout(t)},St=window.IntersectionObserver&&new window.IntersectionObserver((t=>{t.forEach((t=>{var{intersectionRatio:e,target:link}=t;e<=0||!link.__prefetch||link.__prefetch()}))})),Dt={name:"NuxtLink",extends:o.default.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}},mounted(){this.prefetch&&!this.noPrefetch&&(this.handleId=kt(this.observe,{timeout:2e3}))},beforeDestroy(){Rt(this.handleId),this.__observed&&(St.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe(){St&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetchLink.bind(this),St.observe(this.$el),this.__observed=!0)},shouldPrefetch(){return this.getPrefetchComponents().length>0},canPrefetch(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map((t=>t.components.default)).filter((t=>"function"==typeof t&&!t.options&&!t.__prefetched))},prefetchLink(){if(this.canPrefetch()){St.unobserve(this.$el);var t=this.getPrefetchComponents();for(var e of t){var r=e();r instanceof Promise&&r.catch((()=>{})),e.__prefetched=!0}}}}};o.default.__nuxt__fetch__mixin__||(o.default.mixin($t),o.default.__nuxt__fetch__mixin__=!0),o.default.component(Dt.name,Dt),o.default.component("NLink",Dt);var Tt,Nt,Lt=[],At=window.__NUXT__||{},qt=At.config||{};qt._app&&(r.p=B(qt._app.cdnURL,qt._app.assetsPath)),Object.assign(o.default.config,{silent:!0,performance:!1});var Ft=o.default.config.errorHandler||console.error;function It(t,e,r){for(var n=component=>{var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,r=new Array(e>2?e-2:0),n=2;n<e;n++)r[n-2]=arguments[n];return option(...r)}return option}(component,"transition",e,r)||{};return"string"==typeof t?{name:t}:t},o=r?w(r):[],c=Math.max(t.length,o.length),l=[],h=function(){var e=Object.assign({},n(t[i])),r=Object.assign({},n(o[i]));Object.keys(e).filter((t=>void 0!==e[t]&&!t.toLowerCase().includes("leave"))).forEach((t=>{r[t]=e[t]})),l.push(r)},i=0;i<c;i++)h();return l}function Ut(t,e,r){return Bt.apply(this,arguments)}function Bt(){return(Bt=Object(n.a)((function*(t,e,r){this._routeChanged=Boolean(Tt.nuxt.err)||e.name!==t.name,this._paramChanged=!this._routeChanged&&e.path!==t.path,this._queryChanged=!this._paramChanged&&e.fullPath!==t.fullPath,this._diffQuery=this._queryChanged?function(t,e){var r={},n=f(f({},t),e);for(var o in n)String(t[o])!==String(e[o])&&(r[o]=!0);return r}(t.query,e.query):[];try{if(this._queryChanged)(yield C(t,((t,e)=>({Component:t,instance:e})))).some((r=>{var{Component:n,instance:o}=r,c=n.options.watchQuery;return!0===c||(Array.isArray(c)?c.some((t=>this._diffQuery[t])):"function"==typeof c&&c.apply(o,[t.query,e.query]))}));r()}catch(l){var n=l||{},o=n.statusCode||n.status||n.response&&n.response.status||500,c=n.message||"";if(/^Loading( CSS)? chunk (\d)+ failed\./.test(c))return void window.location.reload(!0);this.error({statusCode:o,message:c}),this.$nuxt.$emit("routeChanged",t,e,n),r()}}))).apply(this,arguments)}function Kt(t){return $(t,function(){var t=Object(n.a)((function*(t,e,r,n,o){"function"!=typeof t||t.options||(t=yield t());var c=function(t,e){return At.serverRendered&&e&&m(t,e),t._Ctor=t,t}(x(t),At.data?At.data[o]:null);return r.components[n]=c,c}));return function(e,r,n,o,c){return t.apply(this,arguments)}}())}function Mt(t,e,r,n){var o=[],l=!1;if(void 0!==r&&(o=[],(r=x(r)).options.middleware&&(o=o.concat(r.options.middleware)),t.forEach((t=>{t.options.middleware&&(o=o.concat(t.options.middleware))}))),o=o.map((t=>"function"==typeof t?t:("function"!=typeof c.default[t]&&(l=!0,this.error({statusCode:500,message:"Unknown middleware "+t})),c.default[t]))),!l)return k(o,e,n)}function zt(t,e,r,n){return Ht.apply(this,arguments)}function Ht(){return Ht=Object(n.a)((function*(t,e,r,o){var c=this;if(!1===this._routeChanged&&!1===this._paramChanged&&!1===this._queryChanged)return r();if(t===e)Lt=[],!0;else{var l=[];Lt=w(e,l).map(((t,i)=>S(e.matched[l[i]].path)(e.params)))}var h=!1;yield P(Tt,{route:t,from:e,error:t=>{o.aborted||Tt.nuxt.error.call(this,t)},next:(path=>{h||(h=!0,r(path))}).bind(this)}),this._dateLastError=Tt.nuxt.dateErr,this._hadError=Boolean(Tt.nuxt.err);var d=[],f=w(t,d);if(!f.length){if(yield Mt.call(this,f,Tt.context,void 0,o),h)return;if(o.aborted)return void r(!1);var y=(it.options||it).layout,x=yield this.loadLayout("function"==typeof y?y.call(it,Tt.context):y);if(yield Mt.call(this,f,Tt.context,x,o),h)return;return o.aborted?void r(!1):(Tt.context.error({statusCode:404,message:"This page could not be found"}),r())}f.forEach((t=>{t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)})),this.setTransitions(It(f,t,e));try{if(yield Mt.call(this,f,Tt.context,void 0,o),h)return;if(o.aborted)return void r(!1);if(Tt.context._errored)return r();var $=f[0].options.layout;if("function"==typeof $&&($=$(Tt.context)),$=yield this.loadLayout($),yield Mt.call(this,f,Tt.context,$,o),h)return;if(o.aborted)return void r(!1);if(Tt.context._errored)return r();var C,O=!0;try{for(var E of f)if("function"==typeof E.options.validate&&!(O=yield E.options.validate(Tt.context)))break}catch(t){return this.error({statusCode:t.statusCode||"500",message:t.message}),r()}if(!O)return this.error({statusCode:404,message:"This page could not be found"}),r();if(yield Promise.all(f.map(function(){var r=Object(n.a)((function*(r,i){r._path=S(t.matched[d[i]].path)(t.params),r._dataRefresh=!1;var n=r._path!==Lt[i];if(c._routeChanged&&n)r._dataRefresh=!0;else if(c._paramChanged&&n){var o=r.options.watchParam;r._dataRefresh=!1!==o}else if(c._queryChanged){var l=r.options.watchQuery;!0===l?r._dataRefresh=!0:Array.isArray(l)?r._dataRefresh=l.some((t=>c._diffQuery[t])):"function"==typeof l&&(C||(C=_(t)),r._dataRefresh=l.apply(C[i],[t.query,e.query]))}if(c._hadError||!c._isMounted||r._dataRefresh){var h=[],f=r.options.asyncData&&"function"==typeof r.options.asyncData,v=Boolean(r.options.fetch)&&r.options.fetch.length;if(f){var y=R(r.options.asyncData,Tt.context);y.then((t=>{m(r,t)})),h.push(y)}if(c.$loading.manual=!1===r.options.loading,v){var p=r.options.fetch(Tt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then((t=>{})),h.push(p)}return Promise.all(h)}}));return function(t,e){return r.apply(this,arguments)}}())),!h){if(o.aborted)return void r(!1);r()}}catch(n){if(o.aborted)return void r(!1);var j=n||{};if("ERR_REDIRECT"===j.message)return this.$nuxt.$emit("routeChanged",t,e,j);Lt=[],v(j);var k=(it.options||it).layout;"function"==typeof k&&(k=k(Tt.context)),yield this.loadLayout(k),this.error(j),this.$nuxt.$emit("routeChanged",t,e,j),r()}})),Ht.apply(this,arguments)}function Qt(t,e){$(t,((t,e,r,n)=>("object"!=typeof t||t.options||((t=o.default.extend(t))._Ctor=t,r.components[n]=t),t)))}(function(t){return bt.apply(this,arguments)})(null,At.config).then((function(t){return Yt.apply(this,arguments)})).catch(Ft);var Jt=new WeakMap;function Vt(t,e,r){var n=Boolean(this.$options.nuxt.err);this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&(n=!1);var o=n?(it.options||it).layout:t.matched[0].components.default.options.layout;"function"==typeof o&&(o=o(Tt.context)),Jt.set(t,o),r&&r()}function Wt(t){var e=Jt.get(t);Jt.delete(t),this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&(this.$options.nuxt.err=null),this.setLayout(e)}function Xt(t){t._hadError&&t._dateLastError===t.$options.nuxt.dateErr&&t.error()}function Gt(t,e){if(!1!==this._routeChanged||!1!==this._paramChanged||!1!==this._queryChanged){var r=_(t),n=w(t),c=!1;o.default.nextTick((()=>{r.forEach(((t,i)=>{if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&n[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var r in e)o.default.set(t.$data,r,e[r]);c=!0}})),c&&window.$nuxt.$nextTick((()=>{window.$nuxt.$emit("triggerScroll")})),Xt(this)}))}}function Yt(){return(Yt=Object(n.a)((function*(t){Tt=t.app,Nt=t.router;var e=new o.default(Tt),r=At.layout||"default";yield e.loadLayout(r),e.setLayout(r);var n=()=>{e.$mount("#__nuxt"),Nt.afterEach(Qt),Nt.beforeResolve(Vt.bind(e)),Nt.afterEach(Wt.bind(e)),Nt.afterEach(Gt.bind(e)),o.default.nextTick((()=>{!function(t){window.onNuxtReadyCbs.forEach((e=>{"function"==typeof e&&e(t)})),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Nt.afterEach(((e,r)=>{o.default.nextTick((()=>t.$nuxt.$emit("routeChanged",e,r)))}))}(e)}))},c=yield Promise.all(Kt(Tt.context.route));e.setTransitions=e.$options.nuxt.setTransitions.bind(e),c.length&&(e.setTransitions(It(c,Nt.currentRoute)),Lt=Nt.currentRoute.matched.map((t=>S(t.path)(Nt.currentRoute.params)))),e.$loading={},At.error&&(e.error(At.error),e.nuxt.errPageReady=!0),Nt.beforeEach(Ut.bind(e));var l=null,h=zt.bind(e);if(Nt.beforeEach(((t,e,r)=>{l&&(l.aborted=!0),h(t,e,r,l={aborted:!1})})),At.serverRendered&&K(At.routePath,e.context.route.path))return n();var d=()=>{Qt(Nt.currentRoute,Nt.currentRoute),Vt.call(e,Nt.currentRoute),Wt.call(e,Nt.currentRoute),Xt(e),n()};yield new Promise((t=>setTimeout(t,0))),zt.call(e,Nt.currentRoute,Nt.currentRoute,(path=>{if(path){var t=Nt.afterEach(((e,r)=>{t(),d()}));Nt.push(path,void 0,(t=>{t&&Ft(t)}))}else d()}),{aborted:!1})}))).apply(this,arguments)}}},[[282,3,1,4]]]);
//# sourceMappingURL=9f63c61.modern.js.map