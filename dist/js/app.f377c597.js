(function(t){function e(e){for(var a,r,l=e[0],s=e[1],u=e[2],c=0,p=[];c<l.length;c++)r=l[c],i[r]&&p.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i={app:0},o=[];function l(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"16eb65e2"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"60d27f54"}[t]+".css",i=s.p+a,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var u=o[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===i))return e()}var p=document.getElementsByTagName("style");for(l=0;l<p.length;l++){u=p[l],c=u.getAttribute("data-href");if(c===a||c===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.request=a,delete r[t],f.parentNode.removeChild(f),n(o)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=l(t),u=function(e){c.onerror=c.onload=null,clearTimeout(p);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}i[t]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1771:function(t,e,n){var a={"./bah-logo.png":"623f","./cnu-logo.jpg":"68e0","./commentating.jpg":"3c7a","./cousins-portfolio-thumbnail.png":"4aa9","./graduation.jpg":"3916","./happy-wife-happy-life.jpg":"7665","./headshot-water.jpg":"979d","./optimization-thumbnail.png":"2f91","./switzerland.jpg":"d1f7","./vip-award.jpg":"e448"};function r(t){var e=i(t);return n(e)}function i(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=i,t.exports=r,r.id="1771"},"237f":function(t,e,n){},"26db":function(t,e,n){"use strict";var a=n("237f"),r=n.n(a);r.a},"2f91":function(t,e,n){t.exports=n.p+"img/optimization-thumbnail.ed511648.png"},3916:function(t,e,n){t.exports=n.p+"img/graduation.43ec2dea.jpg"},"3c7a":function(t,e,n){t.exports=n.p+"img/commentating.a43386db.jpg"},"4aa9":function(t,e,n){t.exports=n.p+"img/cousins-portfolio-thumbnail.253b5939.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=n("2f62");a["default"].use(r["a"]);var i={drawer:!0,apps:[{include:!1,path:"home",icon:"home",desc:"Home",title:"Home"},{includeAsTile:!0,date:new Date("2019/01/02").toDateString(),path:"cousins-portfolio",icon:"trending_up",desc:"A family venture in stock investing",title:"The Cousins Portfolio",img:"cousins-portfolio-thumbnail.png"},{includeAsTile:!0,date:new Date("2019/07/28").toDateString(),path:"optimization",icon:"time_to_leave",desc:"An evolutionary algorithm and basic JavaScript",title:"Optimization",img:"optimization-thumbnail.png"}]},o={updateDrawer:function(t,e){t.drawer=e}},l={},s={tiles:function(t){return t.apps.filter(function(t){return t.includeAsTile})}},u=new r["a"].Store({state:i,getters:s,actions:l,mutations:o}),c=(n("db4d"),n("bc3a")),p=n.n(c),f=n("a7fe"),d=n.n(f),v=(n("15f5"),n("bb71"));n("da64");a["default"].use(v["a"],{iconfont:"fa"}),a["default"].use(v["a"]);var m=n("ce5b"),g=n.n(m),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("nav-header"),n("nav-sidebar"),n("v-content",[n("router-view")],1)],1)},h=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{app:"","clipped-left":""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.updateStoreDrawer(!t.drawer)}}}),n("v-toolbar-title",{staticClass:"headline"},[n("span",{staticClass:"font-weight-light"},[t._v("ANDREW")]),n("span",[t._v("MCGREGOR")])])],1)},y=[],_=n("cebc"),x={computed:Object(_["a"])({},Object(r["d"])({drawer:"drawer"})),data:function(){return{}},methods:Object(_["a"])({},Object(r["c"])(["updateDrawer"]),{updateStoreDrawer:function(t){this.updateDrawer(t)}})},j=x,O=n("2877"),V=n("6544"),T=n.n(V),k=n("71d9"),C=n("706c"),A=n("2a7f"),S=Object(O["a"])(j,w,y,!1,null,null,null);S.options.__file="NavHeader.vue";var E=S.exports;T()(S,{VToolbar:k["a"],VToolbarSideIcon:C["a"],VToolbarTitle:A["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{"mini-variant":"",fixed:"",clipped:"",app:""},on:{"update:mini-variant":!1},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[a("v-list",{staticClass:"pa-0"},[a("v-list-tile",{attrs:{avatar:""},on:{click:function(e){e.stopPropagation(),t.mini=!0}}},[a("router-link",{attrs:{to:"/about"}},[a("v-list-tile-avatar",[a("img",{attrs:{src:n("979d")}})]),a("v-list-tile-action")],1)],1)],1)],1),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},[a("v-divider"),t._l(t.apps,function(e){return a("v-list-tile",{key:e.title,on:{click:function(e){e.stopPropagation(),t.mini=!0}}},[a("v-list-tile-action",[a("router-link",{attrs:{to:e.path}},[a("v-tooltip",{attrs:{right:"",disabled:t.isMobile}},[a("span",[t._v(t._s(e.desc))]),a("v-icon",{attrs:{slot:"activator","pt-4":"",large:""},slot:"activator"},[t._v(t._s(e.icon))])],1)],1)],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2)],1)},D=[],L=(n("7f7f"),n("6762"),n("2fdb"),{computed:Object(_["a"])({},Object(r["d"])(["apps"]),{drawer:{get:function(){return this.$store.state.drawer},set:function(t){this.$store.commit("updateDrawer",t)}}}),data:function(){return{isMobile:["xs","sm"].includes(this.$vuetify.breakpoint.name),mini:!0}}}),N=L,M=(n("a615"),n("ce7e6")),$=n("132d"),z=n("8860"),B=n("ba95"),H=n("40fe"),I=n("c954"),F=n("5d23"),G=n("f774"),J=n("3a2f"),R=Object(O["a"])(N,P,D,!1,null,"a551687e",null);R.options.__file="NavSidebar.vue";var q=R.exports;T()(R,{VDivider:M["a"],VIcon:$["a"],VList:z["a"],VListTile:B["a"],VListTileAction:H["a"],VListTileAvatar:I["a"],VListTileContent:F["a"],VListTileTitle:F["b"],VNavigationDrawer:G["a"],VToolbar:k["a"],VTooltip:J["a"]});var U={name:"App",components:{NavHeader:E,NavSidebar:q},data:function(){return{}}},W=U,K=n("7496"),Q=n("549c"),X=Object(O["a"])(W,b,h,!1,null,null,null);X.options.__file="App.vue";var Y=X.exports;T()(X,{VApp:K["a"],VContent:Q["a"]});var Z=n("8c4f"),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-lg":""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("home-main-banner")],1),n("v-flex",{attrs:{xs12:""}},[n("h2",{staticClass:"display-3 font-weight-light"},[t._v("I build web applications")])]),t._l(t.tiles,function(t,e){return n("v-flex",{key:e,attrs:{xs12:"",sm6:"",lg4:""}},[n("home-sub-banner",{attrs:{tile:t}})],1)})],2)],1)},et=[],nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-img",{staticClass:"grey lighten-2",attrs:{height:"400",width:"100%",gradient:"to top right, rgb(245,245,245, .7), rgb(0,0,0, .1)",src:n("d1f7")}},[a("v-layout",{attrs:{"fill-height":"","align-center":"","pa-3":""}},[a("v-flex",{attrs:{xs12:"",md7:"","offset-md1":""}},[a("h1",{staticClass:"display-3 font-weight-light"},[t._v("Andrew McGregor")]),a("div",{staticClass:"subheading text-uppercase pl-2 mb-4"},[t._v("Data Analyst and Web-Developer")]),a("router-link",{attrs:{to:"./about"}},[a("v-btn",{attrs:{color:"primary",depressed:"",round:""}},[t._v("About me")])],1)],1)],1)],1)},at=[],rt=n("8336"),it=n("0e8f"),ot=n("adda"),lt=n("a722"),st={},ut=Object(O["a"])(st,nt,at,!1,null,null,null);ut.options.__file="HomeMainBanner.vue";var ct=ut.exports;T()(ut,{VBtn:rt["a"],VFlex:it["a"],VImg:ot["a"],VLayout:lt["a"]});var pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-img",{attrs:{src:t.getPic(t.tile.img),height:"100%",gradient:"rgba(0, 0, 0, .1), rgba(0, 0, 0, .9)"}},[t.tile.prominent?t._e():n("v-layout",{attrs:{"fill-height":"",wrap:"","text-xs-right":"","ma-0":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-chip",{staticClass:"my-1 text-uppercase title",attrs:{label:"",color:"grey darken-1","text-color":"white",medium:""},on:{click:function(t){t.stopPropagation()}}},[t._v("\n        "+t._s(t.tile.title)+"\n      ")]),n("br"),n("v-chip",{staticClass:"my-0",attrs:{label:"",color:"grey darken-1","text-color":"white",small:""},on:{click:function(t){t.stopPropagation()}}},[t._v(t._s(t.tile.desc)+"\n    \n      ")])],1),n("v-flex",{attrs:{"align-self-end":""}},[n("router-link",{attrs:{to:t.tile.path}},[n("v-btn",{attrs:{color:"primary",depressed:"",small:""}},[t._v("View")])],1)],1)],1)],1)},ft=[],dt={props:{tile:{type:Object,default:function(){return{}}}},computed:{},methods:{getPic:function(t){return n("1771")("./"+t)}}},vt=dt,mt=(n("26db"),n("cc20")),gt=Object(O["a"])(vt,pt,ft,!1,null,null,null);gt.options.__file="HomeSubBanner.vue";var bt=gt.exports;T()(gt,{VBtn:rt["a"],VChip:mt["a"],VFlex:it["a"],VImg:ot["a"],VLayout:lt["a"]});var ht={name:"home",computed:Object(_["a"])({},Object(r["b"])(["tiles"])),components:{homeMainBanner:ct,homeSubBanner:bt}},wt=ht,yt=n("a523"),_t=Object(O["a"])(wt,tt,et,!1,null,null,null);_t.options.__file="Home.vue";var xt=_t.exports;T()(_t,{VContainer:yt["a"],VFlex:it["a"],VLayout:lt["a"]}),a["default"].use(Z["a"]);var jt=new Z["a"]({routes:[{path:"/",alias:"/home",name:"home",component:xt},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/cousins-portfolio",name:"cousins-portfolio",component:function(){return n.e("about").then(n.bind(null,"c9e5"))}},{path:"/optimization",name:"optimization",component:function(){return n.e("about").then(n.bind(null,"3c9a"))}}]});a["default"].use(d.a,p.a,g.a),a["default"].config.productionTip=!1,new a["default"]({store:u,router:jt,render:function(t){return t(Y)}}).$mount("#app")},"623f":function(t,e,n){t.exports=n.p+"img/bah-logo.de40eca5.png"},"68e0":function(t,e,n){t.exports=n.p+"img/cnu-logo.b51caea1.jpg"},7665:function(t,e,n){t.exports=n.p+"img/happy-wife-happy-life.1309cdec.jpg"},"979d":function(t,e,n){t.exports=n.p+"img/headshot-water.a39675c7.jpg"},a615:function(t,e,n){"use strict";var a=n("e632"),r=n.n(a);r.a},d1f7:function(t,e,n){t.exports=n.p+"img/switzerland.e99fcada.jpg"},e448:function(t,e,n){t.exports=n.p+"img/vip-award.630d8dd9.jpg"},e632:function(t,e,n){}});
//# sourceMappingURL=app.f377c597.js.map