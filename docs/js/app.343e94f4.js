(function(e){function t(t){for(var o,a,n=t[0],c=t[1],d=t[2],l=0,v=[];l<n.length;l++)a=n[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&v.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,d||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],o=!0,a=1;a<i.length;a++){var n=i[a];0!==r[n]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=i[0]))}return e}var o={},a={app:0},r={app:0},s=[];function n(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-76d41c54":"2dbc0017"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.e=function(e){var t=[],i={"chunk-76d41c54":1};a[e]?t.push(a[e]):0!==a[e]&&i[e]&&t.push(a[e]=new Promise((function(t,i){for(var o="css/"+({}[e]||e)+"."+{"chunk-76d41c54":"9ffcd581"}[e]+".css",r=c.p+o,s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var d=s[n],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===r))return t()}var v=document.getElementsByTagName("style");for(n=0;n<v.length;n++){d=v[n],l=d.getAttribute("data-href");if(l===o||l===r)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var o=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete a[e],u.parentNode.removeChild(u),i(s)},u.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(u)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,i){o=r[e]=[t,i]}));t.push(o[2]=s);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=n(e);var v=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(u);var i=r[e];if(0!==i){if(i){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;v.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",v.name="ChunkLoadError",v.type=o,v.request=a,i[1](v)}r[e]=void 0}};var u=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,i){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(i,o,function(t){return e[t]}.bind(null,o));return i},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/test/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var v=0;v<d.length;v++)t(d[v]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("d3b7"),i("3ca3"),i("ddb0");var o=i("7a23"),a={class:"container"};function r(e,t,i,r,s,n){var c=Object(o["A"])("Header"),d=Object(o["A"])("router-view");return Object(o["t"])(),Object(o["f"])("div",a,[Object(o["j"])(c),Object(o["j"])(d)])}var s={id:"nav"},n=Object(o["i"])("Home"),c=Object(o["i"])("About"),d=Object(o["i"])("Works");function l(e,t,i,a,r,l){var v=Object(o["A"])("router-link");return Object(o["t"])(),Object(o["f"])("div",s,[Object(o["g"])("ul",null,[Object(o["g"])("li",null,[Object(o["j"])(v,{to:{name:"Home"}},{default:Object(o["F"])((function(){return[n]})),_:1})]),Object(o["g"])("li",null,[Object(o["j"])(v,{to:{name:"About"}},{default:Object(o["F"])((function(){return[c]})),_:1})]),Object(o["g"])("li",null,[Object(o["j"])(v,{to:"/works"},{default:Object(o["F"])((function(){return[d]})),_:1})])])])}var v={name:"Header",created:function(){window.addEventListener("resize",this.elem)},methods:{elem:function(){return this.size=window.innerWidth,console.log(this.size),this.size}},mounted:function(){this.elem<1199&&console.log("aaa:"+this.elem)}},u=i("6b0d"),b=i.n(u);const p=b()(v,[["render",l]]);var m=p,h={name:"App",components:{Header:m}};const g=b()(h,[["render",r]]);var f=g,j=i("6c02"),O={class:"home"},k=Object(o["g"])("h1",null,"111",-1);function w(e,t,i,a,r,s){var n=Object(o["A"])("HelloWorld");return Object(o["t"])(),Object(o["f"])("div",O,[Object(o["j"])(n),k])}var y={class:"hello"},C=Object(o["h"])('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);function T(e,t,i,a,r,s){return Object(o["t"])(),Object(o["f"])("div",y,[Object(o["g"])("h1",null,Object(o["C"])(i.msg),1),C])}var _={name:"HelloWorld",props:{msg:String}};i("8497");const P=b()(_,[["render",T],["__scopeId","data-v-b9167eee"]]);var S=P,M={name:"Home",components:{HelloWorld:S}};const A=b()(M,[["render",w]]);var L=A,H={class:"about"},W=Object(o["h"])('<h1>This is an about page</h1><figure><div><img src="//jueon.dothome.co.kr/images/portfolio/profile.jpg"></div><figcaption></figcaption></figure><div class="base education"><h2 class="header">학력</h2><div class="list list-education"><div class="item"><div class="date"><div class="term">2006. 03 ~ 2007. 12</div><div class="state">중퇴</div></div><div class="content"><div class="content-header"><div class="name"> 강남대 </div><div class="line"> 국제학부 </div></div><div class="content-body"><div class="info"></div></div></div></div><div class="item"><div class="date"><div class="term">2011. 03 ~ 2013. 02</div><div class="state">졸업</div></div><div class="content"><div class="content-header"><div class="name"> 한국IT직업전문학교 </div><div class="line"> 시각디자인전공 </div></div><div class="content-body"><div class="info"><div class="item"><div class="label">학점</div><div class="value">3.28 / 4.5</div></div></div></div></div></div><div class="item"><div class="date"><div class="term">2006</div><div class="state">졸업 </div></div><div class="content"><div class="content-header"><div class="name"> 선린인터넷고등학교 </div><div class="line"></div></div></div></div></div></div><div class="base career"><div class="headers"><h2 class="header">경력</h2><div class="term"><div class="total">총 6년 4개월</div></div></div><div class="list list-career"><div class="item"><div class="date"><div class="term">2021. 09 ~ 재직중</div><div class="term-calculator"></div></div><div class="content"><div class="content-header"><div class="name"> 위비스 </div><div class="is-private"></div><div class="position">이커머스사업부 웹팀 대리 팀원</div></div><div class="content-body"><div class="description"></div><div class="info"></div></div></div></div><div class="item"><div class="date"><div class="term">2021. 08 ~ 재직중</div><div class="term-calculator"></div></div><div class="content"><div class="content-header"><div class="name"> 프리랜서 </div><div class="is-private"></div><div class="position">프리랜서 </div></div><div class="content-body"><div class="description"> 퍼블리싱, UI·UX 개발, 사이트 운영 유지보수 관리 </div><div class="info"></div></div></div></div><div class="item"><div class="date"><div class="term">2013. 10 ~ 2018. 10</div><div class="term-calculator">5년 1개월</div></div><div class="content"><div class="content-header"><div class="name"> 위사 </div><div class="is-private"></div><div class="position">퍼블리싱팀 대리 팀원</div></div><div class="content-body"><div class="description"> 퍼블리싱, UI·UX 개발<br>자사 솔루션, 사이트 구축, 운영 유지보수 관리<br>타사 솔루션(카페24, 메이크샵) 기반 제작 유지보수 </div><div class="info"><div class="item"><div class="label">주요직무</div><div class="value">웹퍼블리셔 </div></div></div></div></div></div><div class="item"><div class="date"><div class="term">2012. 11 ~ 2013. 08</div><div class="term-calculator">10개월</div></div><div class="content"><div class="content-header"><div class="name"> 피플투피플소셜네트웍스 </div><div class="is-private"></div><div class="position">웹에이전시사업부 사원 팀원</div></div><div class="content-body"><div class="description"> UI·UX 디자인, 퍼블리싱, 오픈마켓 관리, 유지보수 </div><div class="info"><div class="item"><div class="label">주요직무</div><div class="value">웹디자인, UI·UX디자인, HTML </div></div></div></div></div></div></div></div>',4),E=[W];function x(e,t,i,a,r,s){return Object(o["t"])(),Object(o["f"])("div",H,E)}var I={name:"About"};i("d3c9");const U=b()(I,[["render",x]]);var F=U;function q(e,t,i,a,r,s){var n=Object(o["A"])("WorksList"),c=Object(o["A"])("WorksView");return Object(o["t"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("div",null,[Object(o["g"])("h1",null,Object(o["C"])(e.$route.query)+" aaaa",1)]),e.$route.query.id?Object(o["e"])("",!0):(Object(o["t"])(),Object(o["d"])(n,{key:0})),e.$route.query.id?(Object(o["t"])(),Object(o["d"])(c,{key:1})):Object(o["e"])("",!0)],64)}i("a9e3");var N={class:"list-gallery"},z={class:"itemBox"},B={class:"thumb"},D=["src","alt"];function X(e,t,i,a,r,s){var n=Object(o["A"])("router-link");return Object(o["t"])(),Object(o["f"])("ul",N,[(Object(o["t"])(!0),Object(o["f"])(o["a"],null,Object(o["z"])(r.options,(function(e,t){return Object(o["t"])(),Object(o["f"])("li",{key:t,class:Object(o["p"])("item item-"+e.id)},[e.show?(Object(o["t"])(),Object(o["d"])(n,{key:0,to:{name:"Works",query:{view:"view",id:e.id}},onClick:function(t){return s.clickList(e.id)}},{default:Object(o["F"])((function(){return[Object(o["g"])("figure",z,[Object(o["g"])("div",B,[Object(o["g"])("img",{src:e.imgSrc,alt:e.title+" 썸네일 이미지",onerror:"this.src='//new.dev.wivismall.com//image/web/common/item_comingsoon.jpg'"},null,8,D)]),Object(o["g"])("figcaption",null,[Object(o["g"])("dl",null,[Object(o["g"])("dt",null,Object(o["C"])(e.title),1),Object(o["g"])("dd",null,Object(o["C"])(e.workType),1),Object(o["g"])("dd",null,Object(o["C"])(e.version),1)])])])]})),_:2},1032,["to","onClick"])):Object(o["e"])("",!0)],2)})),128))])}var $={name:"WorksList",data:function(){return{pageTitle:"Portfolio",options:[{id:0,title:"TBH SHOP",workType:"구축",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/1.jpg",show:!0},{id:1,title:"모코블링",workType:"리뉴얼",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/2.jpg",show:!0},{id:2,title:"내츄럴라이프",workType:"운영, 유지보수",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/3.jpg",show:!0},{id:3,title:"돌리버리",workType:"구축",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/4.jpg",show:!0},{id:4,title:"클라라",workType:"구축",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/5.jpg",show:!0},{id:5,title:"인동에프엔 IDF MALL",workType:"구축",version:"PC",imgSrc:"//jueon.dothome.co.kr/images/portfolio/7.jpg",show:!0},{id:6,title:"임블리",workType:"리뉴얼",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/8.jpg",show:!0},{id:7,title:"셀렉온",workType:"구축",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/9.jpg",show:!0},{id:8,title:"에바주니",workType:"리뉴얼",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/15.jpg",show:!0},{id:9,title:"호밀",workType:"리뉴얼",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/14.jpg",show:!0},{id:10,title:"좋은사람들 B2C",workType:"구축",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/11.jpg",show:!0},{id:11,title:"남도애꽃",workType:"리뉴얼",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/12.jpg",show:!0},{id:12,title:"쉬비치",workType:"리뉴얼",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/6.jpg",show:!0},{id:13,title:"위드이픈",workType:"리뉴얼",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/16.jpg",show:!0},{id:14,title:"세리박스",workType:"구축",version:"PC / Mobile",imgSrc:"//jueon.dothome.co.kr/images/portfolio/10.jpg",show:!1}]}},methods:{clickList:function(e){this.$router.push({name:"Works",query:{view:"view",id:e}})}}};const J=b()($,[["render",X]]);var K=J,V={name:"Works",components:{WorksList:K},props:{view:{type:String,default:""},id:{type:Number,default:0}}};const G=b()(V,[["render",q]]);var Q=G,R=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:F},{path:"/works",name:"Works",component:Q}],Y=Object(j["a"])({history:Object(j["b"])("/test/"),routes:R}),Z=Y;i.e("chunk-76d41c54").then(i.t.bind(null,"557b",7)),Object(o["c"])(f).use(Z).mount("#app")},"7d0b":function(e,t,i){},8497:function(e,t,i){"use strict";i("c45a")},c45a:function(e,t,i){},d3c9:function(e,t,i){"use strict";i("7d0b")}});
//# sourceMappingURL=app.343e94f4.js.map