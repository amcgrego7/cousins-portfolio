(function(t){function e(e){for(var r,o,c=e[0],i=e[1],l=e[2],p=0,d=[];p<c.length;p++)o=c[p],n[o]&&d.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"3f18":function(t,e,a){"use strict";var r=a("933d"),n=a.n(r);n.a},"448a":function(t,e,a){"use strict";var r=a("8c2e"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=a("2f62");r["default"].use(n["a"]);var s={},o={},c={},i={},l=new n["a"].Store({state:s,getters:i,actions:c,mutations:o}),u=a("bc3a"),p=a.n(u),d=a("a7fe"),f=a.n(d),v=a("bb71");a("da64");r["default"].use(v["a"],{iconfont:"md"});var h=a("ce5b"),m=a.n(h),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",{staticClass:"font-weight-light"},[t._v("THE")]),a("span",[t._v("COUSINS")]),a("span",{staticClass:"font-weight-light"},[t._v("PORTFOLIO")])])],1),a("v-content",[a("the-cousins-portfolio")],1)],1)},x=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{"mb-4":"",xs6:"",md3:"","pa-3":""}},[a("v-combobox",{attrs:{items:t.cousins,multiple:"",label:"Select a cousin"},model:{value:t.selCousins,callback:function(e){t.selCousins=e},expression:"selCousins"}})],1),a("kpis",{attrs:{name:"Total",value:t.portfolioTotal,screensize:t.screensize}}),a("kpis",{attrs:{name:"Invested",value:t.investedTotal,screensize:t.screensize}}),a("kpis",{attrs:{name:"Return",value:t.returnTotal,screensize:t.screensize,color:!0}}),a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{"justify-left":"",row:"",wrap:""}},t._l(t.stocks,function(t){return a("v-flex",{attrs:{lg6:"",sm12:""}},[a("stock-card",{attrs:{stock:t}})],1)}),1)],1)],1)],1)],1)},g=[],w=(a("c5f6"),a("3be2")),y=a.n(w),k=(a("7514"),a("a4bb")),C=a.n(k),P=(a("ac6a"),a("cebc")),T=a("75fc"),S=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs6:"",md3:"","pa-3":""}},[a("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2"}},[a("v-card-title",{staticClass:"pl-1 pr-1",attrs:{"primary-title":""}},[a("v-flex",[a("p",{staticClass:"headline text-xs-center ma-1",class:t.dynamicheadline},[t._v(t._s(t.name))]),a("v-divider"),a("p",{staticClass:"headline text-xs-center ma-1",class:[t.kpiColor,t.dynamicheadline]},[t._v(t._s(t.tweenedNumber>0?"$ "+t.tweenedNumber.toFixed(2):"($ "+Math.abs(t.tweenedNumber).toFixed(2)+")"))])],1)],1)],1)],1)}),V=[],O=a("cffa"),j={props:["name","value","color","screensize"],methods:{},computed:{kpiColor:function(){var t="";return this.color&&(t=this.value>=0?"green--text":"red--text"),t},dynamicheadline:function(){var t="";switch(this.screensize){case"xs":t="smaller-headline"}return t}},data:function(){return{tweenedNumber:0}},watch:{value:function(t){O["a"].to(this.$data,.5,{tweenedNumber:t})}}},F=j,M=(a("3f18"),a("2877")),$=a("6544"),z=a.n($),H=a("b0af"),N=a("12b2"),E=a("ce7e"),L=a("0e8f"),q=Object(M["a"])(F,S,V,!1,null,"ba6c563c",null);q.options.__file="KPIs.vue";var I=q.exports;z()(q,{VCard:H["a"],VCardTitle:N["a"],VDivider:E["a"],VFlex:L["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"pa-3":""}},[t.stock.owners.length>0?a("v-card",{staticClass:"mx-auto text-xs-left",attrs:{color:"cyan darken-2",dark:""}},[a("v-card-title",{staticClass:"pb-0",attrs:{"primary-title":"",left:""}},[a("v-layout",{staticClass:"headline text-xs-left",attrs:{wrap:""}},[a("v-flex",{staticClass:"mr-2",staticStyle:{flex:"none"}},[a("v-img",{staticStyle:{"border-radius":"4px"},attrs:{src:"https://storage.googleapis.com/iex/api/logos/"+t.stock.symbol+".png",height:"60",width:"60"}})],1),a("v-flex",[a("p",{staticClass:"mb-2"},[t._v(t._s(t.stock.company))]),a("p",{staticClass:"title"},[t._v(t._s(t.stock.symbol))])])],1),a("v-flex",{staticClass:"headline text-xs-left text-sm-right",attrs:{xs12:"",sm5:""}},[a("p",{staticClass:"mb-0"},[t._v(t._s("$ "+t.stock.price.toFixed(2)))]),a("v-chip",{staticClass:"ml-0",attrs:{label:"",color:t.stock.changePercent>=0?"green":"red","text-color":"white"}},[a("v-icon",{staticClass:"pa-0 mr-0",attrs:{left:"",large:""}},[t._v("arrow_drop_"+t._s(t.stock.changePercent>=0?"up":"down"))]),t._v("\n          "+t._s(t.stock.changePercent>=0?"Up":"Down")+"\n          "+t._s((100*t.stock.changePercent).toFixed(2))+"% today\n        ")],1)],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md7:""}},[a("v-card-text",{attrs:{"pa-0":""}},[a("v-sheet",{attrs:{color:"rgba(0, 0, 0, .12)"}},[a("div",{staticClass:"caption text-uppercase pl-3 pt-3",attrs:{color:"white"}},[t._v("3 Months")]),a("v-sparkline",{attrs:{value:t.stock.qtrValues,color:"rgba(255, 255, 255, .7)",height:"100",padding:"24","stroke-linecap":"round",smooth:""},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v("$ "+t._s(e.value))]}}])})],1)],1),a("v-card-text",[a("table",[a("thead",[a("tr",[a("th",[t._v("Owner")]),a("th",[t._v("%")]),a("th",[t._v("$")])])]),t._l(t.stock.owners,function(e){return a("tr",[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s((100*e.percent).toFixed(0)+"%"))]),a("td",[t._v(t._s("$ "+(e.percent*t.stock.price).toFixed(2)))])])})],2)])],1),a("v-flex",{attrs:{xs12:"",md5:""}},[a("v-card-text",[a("v-card-text",{staticClass:"see-through"},[a("p",{staticClass:"title"},[t._v("Related News")]),t._l(t.stock.news,function(e){return a("div",[a("p",{staticClass:"caption mb-0"},[a("a",{attrs:{href:e.url,target:"blank"}},[t._v(t._s(e.source))]),t._v("\n                | "+t._s(e.postedMsg)+"\n              ")]),a("p",{staticClass:"body-1"},[t._v(t._s(e.headline))])])})],2)],1)],1)],1)],1):t._e()],1)},D=[],B={props:["stock","screensize"]},R=B,J=(a("448a"),a("99d9")),U=a("cc20"),K=a("a523"),G=a("132d"),Q=a("adda"),W=a("a722"),X=a("8dd9"),Y=a("7f2e"),Z=Object(M["a"])(R,A,D,!1,null,"14032bd6",null);Z.options.__file="StockCard.vue";var tt=Z.exports;z()(Z,{VCard:H["a"],VCardText:J["a"],VCardTitle:N["a"],VChip:U["a"],VContainer:K["a"],VFlex:L["a"],VIcon:G["a"],VImg:Q["a"],VLayout:W["a"],VSheet:X["a"],VSparkline:Y["a"]});var et={components:{kpis:I,stockCard:tt},methods:{sumProp:function(t,e){return t.reduce(function(t,a){return t+a[e]},0)},portfolioSumProduct:function(t){var e=this;return t.reduce(function(t,a){return t+a.price*e.sumProp(a.purchases,"shares")*e.sumProp(a.owners,"percent")},0)},investedSumProduct:function(t){var e=this;return t.reduce(function(t,a){return t+e.sumProp(a.purchases,"price")*e.sumProp(a.purchases,"shares")*e.sumProp(a.owners,"percent")},0)}},computed:{screensize:function(){return this.$vuetify.breakpoint.name},returnTotal:function(){var t=this.portfolioTotal-this.investedTotal;return t},stocks:function(){var t=this,e=Object(T["a"])(t.allStocks),a=t.selCousins;if(a.length){var r=e.map(function(t){var e=Object(P["a"])({},t);return e.owners=e.owners.filter(function(t){return-1!==a.indexOf(t.name)}),e});return this.portfolioTotal=this.portfolioSumProduct(r),this.investedTotal=this.investedSumProduct(r),r}return this.portfolioTotal=this.portfolioSumProduct(e),this.investedTotal=this.investedSumProduct(e),e}},data:function(){return{portfolioTotal:0,investedTotal:0,selCousins:[],cousins:["Levi","Harrison","Hannah","Evie"],allStocks:[{company:"Microsoft",symbol:"MSFT",news:[],qtrValues:[],purchases:[{date:"20181219",shares:1,price:103.67}],price:0,changePercent:null,owners:[{name:"Levi",percent:.25},{name:"Harrison",percent:.25},{name:"Hannah",percent:.25},{name:"Evie",percent:.25}]},{company:"Facebook",symbol:"FB",news:[],purchases:[{date:"20180917",shares:1,price:161.81}],price:0,changePercent:null,owners:[{name:"Levi",percent:.5},{name:"Harrison",percent:.25},{name:"Hannah",percent:.25}]},{company:"Bank of America",symbol:"BAC",news:[],changePercent:null,purchases:[{date:"20180917",shares:1,price:30.85}],price:0,owners:[{name:"Levi",percent:.5},{name:"Harrison",percent:.25},{name:"Hannah",percent:.25}]}]}},mounted:function(){var t=this,e=t.allStocks.map(function(t){return t.symbol});t.axios.get("https://api.iextrading.com/1.0/stock/market/batch?symbols="+e.join(",")+"&types=quote,news,chart&range=3m&last=3").then(function(e){C()(e.data).forEach(function(a){var r=t.allStocks.find(function(t){return t.symbol===a});r["price"]=e.data[a].quote.latestPrice,r["changePercent"]=e.data[a].quote.changePercent;var n=e.data[a].chart.length;r["qtrValues"]=e.data[a].chart.reduce(function(t,e,a){var r=y()((a+9)/9);return r?t.push(Number(e.close.toFixed(0))):a===n-1&&t.push(Number(e.close.toFixed(0))),t},[]),r["news"]=e.data[a].news.map(function(t){var e="",a=new Date(t.datetime),r=new Date,n=r.getTime()-a.getTime(),s=Math.ceil(n/36e5);return e=s<=2?s+" hour ago":s<=24?s+" hours ago":s<=48?Math.floor(s/24)+" day ago":Math.floor(s/24)+" days ago",t["postedMsg"]=e,t})})})}},at=et,rt=a("2b5d"),nt=Object(M["a"])(at,_,g,!1,null,null,null);nt.options.__file="TheCousinsPortfolio.vue";var st=nt.exports;z()(nt,{VCombobox:rt["a"],VContainer:K["a"],VFlex:L["a"],VLayout:W["a"]});var ot={name:"App",components:{TheCousinsPortfolio:st},data:function(){return{}}},ct=ot,it=a("7496"),lt=a("549c"),ut=a("71d9"),pt=a("2a7f"),dt=Object(M["a"])(ct,b,x,!1,null,null,null);dt.options.__file="App.vue";var ft=dt.exports;z()(dt,{VApp:it["a"],VContent:lt["a"],VToolbar:ut["a"],VToolbarTitle:pt["a"]}),r["default"].use(f.a,p.a,m.a),r["default"].config.productionTip=!1,new r["default"]({store:l,render:function(t){return t(ft)}}).$mount("#app")},"8c2e":function(t,e,a){},"933d":function(t,e,a){}});
//# sourceMappingURL=app.135e7523.js.map