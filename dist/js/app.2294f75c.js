(function(e){function t(t){for(var o,r,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-7c7bcf04":"329a0804"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-7c7bcf04":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-7c7bcf04":"3d5abf1f"}[e]+".css",i=s.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var l=a[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("64a9")},1267:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("a026"),r=n("77ef"),i=function(e){return e.isBroken?"/not-found":"blog_home"===e.type?"/blog":"section"===e.type?"/blog/"+e.uid:"/not-found"},a=n("36eb"),c=n.n(a),s=c.a.RichText.Elements,l=function(e,t,n,o){if(e===s.hyperlink){var r="",a=c.a.Link.url(t.data,i);if("Document"===t.data.link_type)r='<router-link to="'.concat(a,'">').concat(n,"</router-link>");else{var l=t.data.target?"target=\"'".concat(t.data.target,'\'" rel="noopener"'):"";r='<a href="'.concat(a,'" ').concat(l,">").concat(n,"</a>")}return r}if(e===s.image){var u='<img src="'.concat(t.url,'" alt="').concat(t.alt||"",'" copyright="').concat(t.copyright||"",'">');if(t.linkTo){var d=c.a.Link.url(t.linkTo,i);if("Document"===t.linkTo.link_type)u='<router-link to="'.concat(d,'">').concat(u,"</router-link>");else{var f=t.linkTo.target?'target="'.concat(t.linkTo.target,'" rel="noopener"'):"";u='<a href="'.concat(d,'" ').concat(f,">").concat(u,"</a>")}}var p=[t.label||"","block-img"];return u='<p class="'.concat(p.join(" "),'">').concat(u,"</p>"),u}return null},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("BlogHome")],1)},d=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hasContent?n("div",{staticClass:"page"},[n("div",{staticClass:"left-menu"},[n("h6",{staticClass:"blog-title"},[e._v("\n          "+e._s(e.$prismic.richTextAsPlain(e.fields.headline))+"\n        ")]),n("p",{staticClass:"blog-description"},[e._v(e._s(e.$prismic.richTextAsPlain(e.fields.description)))]),e._l(e.sections,(function(t){return n("div",{key:t.id,staticClass:"blog-post",attrs:{post:t}},[n("router-link",{attrs:{to:e.linkResolver(t)}},[e._v(e._s(e.$prismic.richTextAsPlain(t.data.name))+" ")])],1)}))],2),n("div",{staticClass:"home"},[n("router-view",{key:e.$route.fullPath})],1)]):n("div",{staticClass:"home"},[n("p",[e._v(" Please add some content to your blog home document.")])])},p=[],h=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",e._l(e.slices,(function(e,t){return n("section",{key:"slice-"+t},[n("image-slider-slice",{attrs:{slices:e}})],1)})),0)}),m=[],g=function(){return n.e("chunk-7c7bcf04").then(n.bind(null,"8c42"))},v={props:["slices"],name:"slices-block",components:{ImageSliderSlice:g},create:function(){}},b=v,y=n("2877"),k=Object(y["a"])(b,h,m,!1,null,null,null),_=k.exports,C={name:"blog-home",components:{SlicesBlock:_},data:function(){return{sect:"",sections:[],documentId:"",fields:{headline:null,description:null,image:null},posts:[],linkResolver:this.$prismic.linkResolver,hasContent:!1}},methods:{getSections:function(){var e=this;this.$prismic.client.query(this.$prismic.Predicates.not("document.type","presentation")).then((function(t){e.sections=t.results}))},getContent:function(){var e=this;this.$prismic.client.getSingle("presentation").then((function(t){t?(e.fields.headline=t.data.name,e.fields.description=t.data.decription_site,e.checkForContent()):e.$router.push({name:"not-found"})}))},checkForContent:function(){""===this.$prismic.richTextAsPlain(this.fields.headline)&&""===this.$prismic.richTextAsPlain(this.fields.description)||(this.hasContent=!0)}},created:function(){this.getContent(),this.getSections()}},w=C,x=(n("7869"),Object(y["a"])(w,f,p,!1,null,"13b57c47",null)),$=x.exports,O={name:"App",components:{BlogHome:$}},P=O,S=(n("034f"),Object(y["a"])(P,u,d,!1,null,null,null)),T=S.exports,j=n("8c4f"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("div",{staticClass:"outer-container"},[n("div",{staticClass:"back"},[n("router-link",{attrs:{to:"./"}},[e._v("back to list")])],1),n("h1",[e._v("Page not found")]),n("p",[e._v("Sorry we were unable to find the page you are looking for.")]),n("router-link",{staticStyle:{"text-decoration":"underline"},attrs:{to:"/blog"}},[e._v("Return to home")])],1)])},A=[],B={name:"NotFound"},L=B,R=Object(y["a"])(L,E,A,!1,null,null,null),N=R.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("slices-block",{attrs:{slices:e.slices}})],1)},I=[],F={name:"carousel",components:{SlicesBlock:_},data:function(){return{dateOptions:{year:"numeric",month:"short",day:"2-digit"},documentId:"",fields:{title:null,date:null},slices:[]}},methods:{getContent:function(e){var t=this;this.$prismic.client.getByUID("section",e).then((function(e){e?t.slices=e.data.body:t.$router.push({name:"not-found"})}))}},created:function(){this.getContent(this.$route.params.uid)},beforeRouteUpdate:function(e,t,n){this.getContent(e.params.uid),n()}},M=F,q=(n("a124"),Object(y["a"])(M,D,I,!1,null,null,null)),H=q.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    welcome\n")])},J=[],z={name:"welcome"},K=z,G=Object(y["a"])(K,U,J,!1,null,"4450cd54",null),Q=G.exports;o["a"].use(j["a"]);var V=new j["a"]({mode:"history",routes:[{path:"/",redirect:{name:"blog-home"}},{path:"/blog",name:"blog-home",component:Q},{path:"/blog/:uid",name:"carousel",component:H},{path:"/not-found",name:"not-found",component:N},{path:"*",redirect:{name:"not-found"}}],scrollBehavior:function(){return{x:0,y:50}}});o["a"].config.productionTip=!1,o["a"].use(r["a"],{endpoint:window.prismic.endpoint,linkResolver:i,htmlSerializer:l}),new o["a"]({router:V,render:function(e){return e(T)}}).$mount("#app")},6433:function(e,t,n){},"64a9":function(e,t,n){},7869:function(e,t,n){"use strict";n("6433")},a124:function(e,t,n){"use strict";n("1267")}});
//# sourceMappingURL=app.2294f75c.js.map