(function(e){function t(t){for(var n,a,c=t[0],r=t[1],l=t[2],d=0,v=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,a=1;a<i.length;a++){var c=i[a];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},a={app:0},o={app:0},s=[];function c(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-76d41c54":"2dbc0017"}[e]+".js"}function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var t=[],i={"chunk-76d41c54":1};a[e]?t.push(a[e]):0!==a[e]&&i[e]&&t.push(a[e]=new Promise((function(t,i){for(var n="css/"+({}[e]||e)+"."+{"chunk-76d41c54":"39feedbf"}[e]+".css",o=r.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===o))return t()}var v=document.getElementsByTagName("style");for(c=0;c<v.length;c++){l=v[c],d=l.getAttribute("data-href");if(d===n||d===o)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],u.parentNode.removeChild(u),i(s)},u.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(u)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,i){n=o[e]=[t,i]}));t.push(n[2]=s);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.src=c(e);var v=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(u);var i=o[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;v.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",v.name="ChunkLoadError",v.type=n,v.request=a,i[1](v)}o[e]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-practice/",r.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var v=0;v<l.length;v++)t(l[v]);var u=d;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"017a":function(e,t,i){e.exports=i.p+"img/8.cc631b38.jpg"},"01c0":function(e,t,i){e.exports=i.p+"img/15.c805a5b4.jpg"},"0340":function(e,t,i){"use strict";i("d8e4")},"117d":function(e,t,i){"use strict";i("146e")},"129c":function(e,t,i){e.exports=i.p+"img/6.39710923.jpg"},"146e":function(e,t,i){},"182e":function(e,t,i){e.exports=i.p+"img/16.56deabc2.jpg"},2144:function(e,t,i){e.exports=i.p+"img/7.9985421c.jpg"},4281:function(e,t,i){e.exports=i.p+"img/10.6720d3a1.jpg"},"546a":function(e,t,i){e.exports=i.p+"img/5.ed7d4048.jpg"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("d3b7"),i("3ca3"),i("ddb0");var n=i("7a23"),a={class:"container"};function o(e,t,i,o,s,c){var r=Object(n["A"])("Header"),l=Object(n["A"])("router-view");return Object(n["t"])(),Object(n["f"])("div",a,[Object(n["j"])(r),Object(n["j"])(l)])}var s={id:"nav"},c=Object(n["i"])("Home"),r=Object(n["i"])("About"),l=Object(n["i"])("Works"),d=Object(n["i"])("Movie");function v(e,t,i,a,o,v){var u=Object(n["A"])("router-link");return Object(n["t"])(),Object(n["f"])("div",s,[Object(n["g"])("ul",null,[Object(n["g"])("li",null,[Object(n["j"])(u,{to:{name:"Home"}},{default:Object(n["G"])((function(){return[c]})),_:1})]),Object(n["g"])("li",null,[Object(n["j"])(u,{to:{name:"About"}},{default:Object(n["G"])((function(){return[r]})),_:1})]),Object(n["g"])("li",null,[Object(n["j"])(u,{to:"/works"},{default:Object(n["G"])((function(){return[l]})),_:1})]),Object(n["g"])("li",null,[Object(n["j"])(u,{to:{name:"Movie"}},{default:Object(n["G"])((function(){return[d]})),_:1})])])])}var u={name:"Header",methods:{elem:function(){return this.size=window.innerWidth,console.log(this.size),this.size}},created:function(){window.addEventListener("resize",this.elem)},mounted:function(){this.elem<1199&&console.log("aaa:"+this.elem)}},b=i("6b0d"),p=i.n(b);const f=p()(u,[["render",v]]);var g=f,m={name:"App",components:{Header:g}};const j=p()(m,[["render",o]]);var h=j,O=i("6c02"),y={class:"home"},w=Object(n["g"])("h1",null,"111",-1);function k(e,t,i,a,o,s){var c=Object(n["A"])("HelloWorld");return Object(n["t"])(),Object(n["f"])("div",y,[Object(n["j"])(c),w])}var L={class:"hello"},M=Object(n["h"])('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);function C(e,t,i,a,o,s){return Object(n["t"])(),Object(n["f"])("div",L,[Object(n["g"])("h1",null,Object(n["C"])(i.msg),1),M])}var x={name:"HelloWorld",props:{msg:String}};i("8497");const T=p()(x,[["render",C],["__scopeId","data-v-b9167eee"]]);var A=T,P={name:"Home",components:{HelloWorld:A}};const U=p()(P,[["render",k]]);var _=U,D={class:"about"},R=Object(n["h"])('<figure><div class="profile-img"><span class="blind">강주언</span></div><figcaption></figcaption></figure><div class="base education"><h2 class="header">학력</h2><div class="list list-education"><div class="item"><div class="date"><div class="term">2006. 03 ~ 2007. 12</div><div class="state">중퇴</div></div><div class="content"><div class="content-header"><div class="name"> 강남대 </div><div class="line"> 국제학부 </div></div><div class="content-body"><div class="info"></div></div></div></div><div class="item"><div class="date"><div class="term">2011. 03 ~ 2013. 02</div><div class="state">졸업</div></div><div class="content"><div class="content-header"><div class="name"> 한국IT직업전문학교 </div><div class="line"> 시각디자인전공 </div></div><div class="content-body"><div class="info"><div class="item"><div class="label">학점</div><div class="value">3.28 / 4.5</div></div></div></div></div></div><div class="item"><div class="date"><div class="term">2006</div><div class="state">졸업 </div></div><div class="content"><div class="content-header"><div class="name"> 선린인터넷고등학교 </div><div class="line"></div></div></div></div></div></div><div class="base career"><div class="headers"><h2 class="header">경력</h2><div class="term"><div class="total">총 6년 4개월</div></div></div><div class="list list-career"><div class="item"><div class="date"><div class="term">2021. 09 ~ 재직중</div><div class="term-calculator"></div></div><div class="content"><div class="content-header"><div class="name"> 위비스 </div><div class="is-private"></div><div class="position">이커머스사업부 웹팀 대리 팀원</div></div><div class="content-body"><div class="description"></div><div class="info"></div></div></div></div><div class="item"><div class="date"><div class="term">2021. 08 ~ 재직중</div><div class="term-calculator"></div></div><div class="content"><div class="content-header"><div class="name"> 프리랜서 </div><div class="is-private"></div><div class="position">프리랜서 </div></div><div class="content-body"><div class="description"> 퍼블리싱, UI·UX 개발, 사이트 운영 유지보수 관리 </div><div class="info"></div></div></div></div><div class="item"><div class="date"><div class="term">2013. 10 ~ 2018. 10</div><div class="term-calculator">5년 1개월</div></div><div class="content"><div class="content-header"><div class="name"> 위사 </div><div class="is-private"></div><div class="position">퍼블리싱팀 대리 팀원</div></div><div class="content-body"><div class="description"> 퍼블리싱, UI·UX 개발<br>자사 솔루션, 사이트 구축, 운영 유지보수 관리<br>타사 솔루션(카페24, 메이크샵) 기반 제작 유지보수 </div><div class="info"><div class="item"><div class="label">주요직무</div><div class="value">웹퍼블리셔 </div></div></div></div></div></div><div class="item"><div class="date"><div class="term">2012. 11 ~ 2013. 08</div><div class="term-calculator">10개월</div></div><div class="content"><div class="content-header"><div class="name"> 피플투피플소셜네트웍스 </div><div class="is-private"></div><div class="position">웹에이전시사업부 사원 팀원</div></div><div class="content-body"><div class="description"> UI·UX 디자인, 퍼블리싱, 오픈마켓 관리, 유지보수 </div><div class="info"><div class="item"><div class="label">주요직무</div><div class="value">웹디자인, UI·UX디자인, HTML </div></div></div></div></div></div></div></div>',3),H=[R];function S(e,t,i,a,o,s){return Object(n["t"])(),Object(n["f"])("div",D,H)}var E={name:"About"};i("0340");const W=p()(E,[["render",S]]);var N=W;function B(e,t,i,a,o,s){var c=Object(n["A"])("WorksList"),r=Object(n["A"])("WorksView");return Object(n["t"])(),Object(n["f"])(n["a"],null,[e.$route.query.id?Object(n["e"])("",!0):(Object(n["t"])(),Object(n["d"])(c,{key:0})),e.$route.query.id?(Object(n["t"])(),Object(n["d"])(r,{key:1})):Object(n["e"])("",!0)],64)}i("a9e3");var I={class:"list-gallery"},q={class:"itemBox"},z={class:"thumb"},G=["src","alt"];function Y(e,t,i,a,o,s){var c=Object(n["A"])("MovieList"),r=Object(n["A"])("router-link");return Object(n["t"])(),Object(n["f"])(n["a"],null,[Object(n["j"])(c),Object(n["g"])("ul",I,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(o.options,(function(e,t){return Object(n["t"])(),Object(n["f"])("li",{key:t,class:Object(n["p"])("item item-"+e.id)},[e.show?(Object(n["t"])(),Object(n["d"])(r,{key:0,to:{name:"Works",query:{view:"view",id:e.id}}},{default:Object(n["G"])((function(){return[Object(n["g"])("figure",q,[Object(n["g"])("div",z,[Object(n["g"])("img",{src:e.imgURL,alt:e.title+" 썸네일 이미지",onerror:"this.src='https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDJfMTg5/MDAxNTgwNjM5Mjg2ODA3.0-YSKsGsWAx9MQPsfqyJkMwqd1JTGSLZwmrp8QU9-AAg.66w-39mmNhkpS5C5L9HEhEnHwbP79dhh3KWF3n3Yliwg.PNG.lizziechung/image.png?type=w800'"},null,8,G)]),Object(n["g"])("figcaption",null,[Object(n["g"])("dl",null,[Object(n["g"])("dt",null,Object(n["C"])(e.title),1),Object(n["g"])("dd",null,Object(n["C"])(e.workType),1),Object(n["g"])("dd",null,Object(n["C"])(e.version),1)])])])]})),_:2},1032,["to"])):Object(n["e"])("",!0)],2)})),128))])],64)}var $={id:"result"},F={class:"searchBox"},J=Object(n["g"])("caption",{class:"blind"},"kobis data ajax test",-1),K=Object(n["g"])("colgroup",null,[Object(n["g"])("col",{style:{width:"10%"}}),Object(n["g"])("col"),Object(n["g"])("col",{style:{width:"15%"}}),Object(n["g"])("col",{style:{width:"15%"}}),Object(n["g"])("col",{style:{width:"10%"}})],-1),X=Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",null,"순위"),Object(n["g"])("th",null,"제목"),Object(n["g"])("th",null,"개봉일"),Object(n["g"])("th",null,"점유율"),Object(n["g"])("th",null,"누적관객")])],-1),Q={key:0};function V(e,t,i,a,o,s){return Object(n["t"])(),Object(n["f"])("div",$,[Object(n["g"])("div",F,[Object(n["H"])(Object(n["g"])("input",{minlength:"8",maxlength:"8",placeholder:"YYYYMMDD","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.myDate=e})},null,512),[[n["E"],o.myDate]]),Object(n["g"])("button",{onClick:t[1]||(t[1]=function(){return s.callApi&&s.callApi.apply(s,arguments)})},"검색")]),Object(n["g"])("table",null,[J,K,X,o.movies?(Object(n["t"])(),Object(n["f"])("tbody",Q,[(Object(n["t"])(!0),Object(n["f"])(n["a"],null,Object(n["z"])(o.movies,(function(e,t){return Object(n["t"])(),Object(n["f"])("tr",{key:t},[Object(n["g"])("td",null,Object(n["C"])(e.rank),1),Object(n["g"])("td",null,Object(n["C"])(e.movieNm),1),Object(n["g"])("td",null,Object(n["C"])(e.openDt),1),Object(n["g"])("td",null,Object(n["C"])(e.salesShare),1),Object(n["g"])("td",null,Object(n["C"])(e.audiCnt),1)])})),128))])):Object(n["e"])("",!0)])])}i("99af");var Z=i("bc3a"),ee=i.n(Z),te={name:"MovieList",data:function(){return{baseUrl:"https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",myKey:"113854b91df9adff54ea56e9e853c86f",myDate:"",movies:[],display:!1}},props:{},methods:{callApi:function(){var e=this;ee.a.get(this.baseUrl+"?key="+this.myKey+"&targetDt="+this.myDate).then((function(t){return console.log("".concat(e.myDate," : ").concat(t.data.boxOfficeResult.dailyBoxOfficeList)),e.movies=t.data.boxOfficeResult.dailyBoxOfficeList,e.display=!0,e.movies})).catch((function(e){console.log("error : "+e)}))}},created:function(){console.log("created")},mounted:function(){console.log("mounted"),this.$nextTick((function(){}))},updated:function(){console.log("updated"),this.$nextTick((function(){}))}};i("117d");const ie=p()(te,[["render",V]]);var ne=ie,ae={name:"WorksList",components:{MovieList:ne},data:function(){return{pageTitle:"Portfolio",options:[{id:0,title:"TBH SHOP",workType:"구축",version:"PC / Mobile",imgURL:"/assets/images/1.jpg",show:!0},{id:1,title:"모코블링",workType:"리뉴얼",version:"PC / Mobile",imgURL:i("593c"),show:!0},{id:2,title:"내츄럴라이프",workType:"운영, 유지보수",version:"PC / Mobile",imgURL:i("6800"),show:!0},{id:3,title:"돌리버리",workType:"구축",version:"PC / Mobile",imgURL:i("ffd7"),show:!0},{id:4,title:"클라라",workType:"구축",version:"PC / Mobile",imgURL:i("546a"),show:!0},{id:5,title:"인동에프엔 IDF MALL",workType:"구축",version:"PC",imgURL:i("2144"),show:!0},{id:6,title:"임블리",workType:"리뉴얼",version:"PC / Mobile",imgURL:i("017a"),show:!0},{id:7,title:"셀렉온",workType:"구축",version:"PC / Mobile",imgURL:i("959c"),show:!0},{id:8,title:"에바주니",workType:"리뉴얼",version:"PC / Mobile",imgURL:i("01c0"),show:!0},{id:9,title:"호밀",workType:"리뉴얼",version:"PC / Mobile",imgURL:i("95f7"),show:!0},{id:10,title:"좋은사람들 B2C",workType:"구축",version:"PC / Mobile",imgURL:i("baa1"),show:!0},{id:11,title:"남도애꽃",workType:"리뉴얼",version:"PC / Mobile",imgURL:i("c110"),show:!0},{id:12,title:"쉬비치",workType:"리뉴얼",version:"PC / Mobile",imgURL:i("129c"),show:!0},{id:13,title:"위드이픈",workType:"리뉴얼",version:"PC / Mobile",imgURL:i("182e"),show:!0},{id:14,title:"세리박스",workType:"구축",version:"PC / Mobile",imgURL:i("4281"),show:!1}]}},methods:{clickList:function(e){this.$router.push({name:"Works",query:{view:"view",id:e}})}}};const oe=p()(ae,[["render",Y]]);var se=oe,ce={name:"Works",components:{WorksList:se},props:{view:{type:String,default:""},id:{type:Number,default:0}}};const re=p()(ce,[["render",B]]);var le=re;function de(e,t,i,a,o,s){var c=Object(n["A"])("MovieList");return e.$route.query.id?Object(n["e"])("",!0):(Object(n["t"])(),Object(n["d"])(c,{key:0}))}var ve={name:"Movie",components:{MovieList:ne}};const ue=p()(ve,[["render",de]]);var be=ue,pe=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:N},{path:"/works",name:"Works",component:le},{path:"/movie",name:"Movie",component:be}],fe=Object(O["a"])({history:Object(O["b"])("/vue-practice/"),routes:pe}),ge=fe;i.e("chunk-76d41c54").then(i.t.bind(null,"557b",7)),Object(n["c"])(h).use(ge).mount("#app")},"593c":function(e,t,i){e.exports=i.p+"img/2.d8bd3702.jpg"},6800:function(e,t,i){e.exports=i.p+"img/3.f317e17a.jpg"},8497:function(e,t,i){"use strict";i("c45a")},"959c":function(e,t,i){e.exports=i.p+"img/9.c817ce17.jpg"},"95f7":function(e,t,i){e.exports=i.p+"img/14.1100aa40.jpg"},baa1:function(e,t,i){e.exports=i.p+"img/11.be8537e4.jpg"},c110:function(e,t,i){e.exports=i.p+"img/12.a3b250b9.jpg"},c45a:function(e,t,i){},d8e4:function(e,t,i){},ffd7:function(e,t,i){e.exports=i.p+"img/4.7760a433.jpg"}});
//# sourceMappingURL=app.34eeedc8.js.map