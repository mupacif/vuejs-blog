(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1267:function(t,e,n){},"36fd":function(t,e,n){"use strict";n("c0a8")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("a026"),i=n("77ef"),s=function(t){return t.isBroken?"not-found":"blog_home"===t.type?"/vuejs-blog":"section"===t.type?"/events/"+t.uid:"not-found"},r=n("36eb"),o=n.n(r),l=o.a.RichText.Elements,c=function(t,e,n,a){if(t===l.hyperlink){var i="",r=o.a.Link.url(e.data,s);if("Document"===e.data.link_type)i='<router-link to="'.concat(r,'">').concat(n,"</router-link>");else{var c=e.data.target?"target=\"'".concat(e.data.target,'\'" rel="noopener"'):"";i='<a href="'.concat(r,'" ').concat(c,">").concat(n,"</a>")}return i}if(t===l.image){var u='<img src="'.concat(e.url,'" alt="').concat(e.alt||"",'" copyright="').concat(e.copyright||"",'">');if(e.linkTo){var d=o.a.Link.url(e.linkTo,s);if("Document"===e.linkTo.link_type)u='<router-link to="'.concat(d,'">').concat(u,"</router-link>");else{var f=e.linkTo.target?'target="'.concat(e.linkTo.target,'" rel="noopener"'):"";u='<a href="'.concat(d,'" ').concat(f,">").concat(u,"</a>")}}var m=[e.label||"","block-img"];return u='<p class="'.concat(m.join(" "),'">').concat(u,"</p>"),u}return null},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("BlogHome")],1)},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid overflow-hidden "},[t.hasContent?n("div",{staticClass:"d-sm-flex overflow-auto vh-100  "},[n("nav",{staticClass:"col-12 col-sm-3   col-xl-2 navbar navbar-expand-sm navbar-light d-flex flex-sm-column  bg-sm-dark",attrs:{id:"navbarTop"}},[n("div",{staticClass:"container align-items-sm-start d-flex flex-sm-column m-2  mt-sm-5  justify-content-end "},[n("div",{staticClass:"row"},[n("router-link",{staticClass:"navbar-brand d-none d-sm-flex  justify-content-end ",attrs:{to:"/"}},[t._v(" "+t._s(t.$prismic.richTextAsPlain(t.fields.headline)))]),t._m(0)],1),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[n("ul",{staticClass:"navbar-nav  flex-sm-column  "},[t._l(t.sections,(function(e){return n("li",{key:e.id,staticClass:"nav-item",attrs:{post:e}},[n("router-link",{staticClass:"nav-link mx-1",attrs:{to:t.linkResolver(e)}},[t._v(t._s(t.$prismic.richTextAsPlain(e.data.name))+" ")])],1)})),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/information"}},[t._v("Information ")])],1),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:this.fields.instagram,target:"_blank",rel:"noopener noreferrer"}},[t._v("instagram")])])],2)])])]),n("div",{staticClass:"row d-flex flex-column  home"},[n("main",{staticClass:"row overflow-auto"},[n("router-view",{key:t.$route.fullPath})],1),t._m(1)])]):n("div",{staticClass:"home"},[n("p",[t._v(" loading ")])])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"row mt-auto"},[n("div",{staticClass:"col-6"},[t._v(" All images copyright.  ")])])}],p=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._l(t.slices,(function(t,e){return n("section",{key:"slice-"+e},[n("image-slider-slice",{attrs:{slices:t}})],1)})),0)}),v=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel slide  carousel-dark",attrs:{id:"carouselControls","data-bs-ride":"carousel"}},[n("div",{staticClass:"carousel-inner"},t._l(t.images,(function(t,e){return n("div",{key:"slice-"+e,staticClass:"carousel-item",class:{active:0==e}},[n("img",{staticClass:"imgSized ",attrs:{src:t.image.url,alt:"..."}})])})),0),t._m(0),t._m(1)])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"carousel-control-prev",attrs:{type:"button","data-bs-target":"#carouselControls","data-bs-slide":"prev"}},[n("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"visually-hidden"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"carousel-control-next",attrs:{type:"button","data-bs-target":"#carouselControls","data-bs-slide":"next"}},[n("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"visually-hidden"},[t._v("Next")])])}],b={props:["slices"],name:"image-slider-slice",data:function(){return{images:""}},created:function(){this.images=this.slices.items}},_=b,C=(n("6853"),n("2877")),k=Object(C["a"])(_,h,g,!1,null,"325e1388",null),y=k.exports,x={props:["slices"],name:"slices-block",components:{ImageSliderSlice:y},created:function(){}},$=x,w=Object(C["a"])($,p,v,!1,null,null,null),j=w.exports,O={name:"blog-home",components:{SlicesBlock:j},data:function(){return{sect:"",sections:[],documentId:"",fields:{headline:null,description:null,instagram:null,image:null},posts:[],linkResolver:this.$prismic.linkResolver,hasContent:!1}},methods:{getSections:function(){var t=this;this.$prismic.client.query(this.$prismic.Predicates.not("document.type","presentation")).then((function(e){t.sections=e.results}))},getContent:function(){var t=this;this.$prismic.client.getSingle("presentation").then((function(e){e?(t.fields.headline=e.data.name,t.fields.description=e.data.decription_site,t.fields.instagram=e.data.instagram.url,t.checkForContent()):t.$router.push({name:"not-found"})}))},checkForContent:function(){""===this.$prismic.richTextAsPlain(this.fields.headline)&&""===this.$prismic.richTextAsPlain(this.fields.description)||(this.hasContent=!0)}},created:function(){this.getContent(),this.getSections()}},S=O,P=(n("36fd"),Object(C["a"])(S,f,m,!1,null,"db709a0a",null)),T=P.exports,E={name:"App",components:{BlogHome:T}},B=E,R=Object(C["a"])(B,u,d,!1,null,null,null),A=R.exports,I=n("8c4f"),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"outer-container"},[n("div",{staticClass:"back"},[n("router-link",{attrs:{to:".."}},[t._v("back to list")])],1),n("h1",[t._v("Page not found")]),n("p",[t._v("Sorry we were unable to find the page you are looking for.")]),n("router-link",{staticStyle:{"text-decoration":"underline"},attrs:{to:"blog"}},[t._v("Return to home")])],1)])},D=[],F={name:"NotFound"},z=F,H=Object(C["a"])(z,M,D,!1,null,null,null),J=H.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("slices-block",{attrs:{slices:t.slices}})],1)},N=[],U={name:"carousel",components:{SlicesBlock:j},data:function(){return{dateOptions:{year:"numeric",month:"short",day:"2-digit"},documentId:"",fields:{title:null,date:null},slices:[]}},methods:{getContent:function(t){var e=this;this.$prismic.client.getByUID("section",t).then((function(t){t?e.slices=t.data.body:e.$router.push({name:"not-found"})}))}},created:function(){this.getContent(this.$route.params.uid)},beforeRouteUpdate:function(t,e,n){this.getContent(t.params.uid),n()}},q=U,G=(n("a124"),Object(C["a"])(q,L,N,!1,null,null,null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n    welcome\n")])},V=[],W={name:"welcome"},X=W,Y=Object(C["a"])(X,Q,V,!1,null,"4450cd54",null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("prismic-rich-text",{staticClass:"textslice",attrs:{field:t.information}})],1)},et=[],nt={name:"information",data:function(){return{information:""}},created:function(){var t=this;this.$prismic.client.getSingle("presentation").then((function(e){e?t.information=e.data.information:t.$router.push({name:"not-found"})}))}},at=nt,it=Object(C["a"])(at,tt,et,!1,null,"953be5d4",null),st=it.exports;a["a"].use(I["a"]);var rt=new I["a"]({mode:"history",routes:[{path:"/",redirect:{name:"home"}},{path:"/home",name:"home",component:Z},{path:"/events/:uid",name:"carousel",component:K},{path:"/not-found",name:"not-found",component:J},{path:"/information",name:"information",component:st},{path:"*",redirect:{name:"not-found"}}],scrollBehavior:function(){return{x:0,y:50}}});n("ab8b"),n("7b17");a["a"].config.productionTip=!1,a["a"].use(i["a"],{endpoint:window.prismic.endpoint,linkResolver:s,htmlSerializer:c}),new a["a"]({router:rt,render:function(t){return t(A)}}).$mount("#app")},6853:function(t,e,n){"use strict";n("ec17")},a124:function(t,e,n){"use strict";n("1267")},c0a8:function(t,e,n){},ec17:function(t,e,n){}});
//# sourceMappingURL=app.21b28011.js.map