(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0FX9":function(t,n,e){var r=e("Z92M"),o=e("qmMu"),i=e("QUaw"),u=e("QAZZ");function a(t,n,e,i,u){var a=[].slice.call(arguments,1),l=a.length,s="function"==typeof a[l-1];if(!s&&!r())throw new Error("Callback required as last argument");if(!s){if(l<1)throw new Error("Too few arguments provided");return 1===l?(e=n,n=i=void 0):2!==l||n.getContext||(i=e,e=n,n=void 0),new Promise(function(r,u){try{var a=o.create(e,i);r(t(a,n,i))}catch(l){u(l)}})}if(l<2)throw new Error("Too few arguments provided");2===l?(u=e,e=n,n=i=void 0):3===l&&(n.getContext&&void 0===u?(u=i,i=void 0):(u=i,i=e,e=n,n=void 0));try{var f=o.create(e,i);u(null,t(f,n,i))}catch(c){u(c)}}n.create=o.create,n.toCanvas=a.bind(null,i.render),n.toDataURL=a.bind(null,i.renderToDataURL),n.toString=a.bind(null,function(t,n,e){return u.render(t,e)})},"1sBl":function(t,n,e){var r=e("e/Dd").getSymbolSize;n.getRowColCoords=function(t){if(1===t)return[];for(var n=Math.floor(t/7)+2,e=r(t),o=145===e?26:2*Math.ceil((e-13)/(2*n-2)),i=[e-7],u=1;u<n-1;u++)i[u]=i[u-1]-o;return i.push(6),i.reverse()},n.getPositions=function(t){for(var e=[],r=n.getRowColCoords(t),o=r.length,i=0;i<o;i++)for(var u=0;u<o;u++)0===i&&0===u||0===i&&u===o-1||i===o-1&&0===u||e.push([r[i],r[u]]);return e}},"3X7Y":function(t,n,e){var r=e("u/Db");function o(t){this.mode=r.NUMERIC,this.data=t.toString()}o.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},o.prototype.getLength=function(){return this.data.length},o.prototype.getBitsLength=function(){return o.getBitsLength(this.data.length)},o.prototype.write=function(t){var n,e,r;for(n=0;n+3<=this.data.length;n+=3)e=this.data.substr(n,3),r=parseInt(e,10),t.put(r,10);var o=this.data.length-n;o>0&&(e=this.data.substr(n),r=parseInt(e,10),t.put(r,3*o+1))},t.exports=o},"7uVY":function(t,n){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},"A/au":function(t,n,e){"use strict";e.r(n);var r=e("CcnG"),o=function(){return function(){}}(),i=e("pMnS"),u=e("oBZk"),a=e("ZZ/e"),l=e("aCFN"),s=e("yM0y"),f=e("Ip0R"),c=e("gIcY"),h=e("0FX9"),d=e.n(h),g=e("wJjZ"),p=function(){function t(t){this.personalService=t}return t.prototype.ngOnInit=function(){var t=this;this.personalService.getPersonal().subscribe(function(n){t.data=n,t.generateQRCode(n)})},t.prototype.generateQRCode=function(t){var n=this;d.a.toDataURL(JSON.stringify(t)).then(function(t){n.qrCode=t}).catch(function(t){console.error(t)})},t.prototype.onSendEmail=function(){this.email&&this.data&&console.log(this.email,this.data)},t}(),v=r.nb({encapsulation:0,styles:[[""]],data:{}});function b(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,1,"ion-img",[["height","150"],["width","150"]],null,null,null,u.jb,u.t)),r.ob(1,49152,null,0,a.D,[r.h,r.k],{src:[0,"src"]},null)],function(t,n){t(n,1,0,n.component.qrCode)},null)}function w(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,1,"app-header",[["title","Feedback"]],null,null,null,l.b,l.a)),r.ob(1,114688,null,0,s.a,[],{title:[0,"title"]},null),(t()(),r.pb(2,0,null,null,34,"ion-content",[],null,null,null,u.cb,u.m)),r.ob(3,49152,null,0,a.u,[r.h,r.k],null,null),(t()(),r.pb(4,0,null,0,4,"ion-item-divider",[["class","ion-padding-top"]],null,null,null,u.lb,u.w)),r.ob(5,49152,null,0,a.I,[r.h,r.k],null,null),(t()(),r.pb(6,0,null,0,2,"ion-title",[["color","primary"]],null,null,null,u.Eb,u.O)),r.ob(7,49152,null,0,a.zb,[r.h,r.k],{color:[0,"color"]},null),(t()(),r.Fb(-1,0,["Transmit"])),(t()(),r.pb(9,0,null,0,4,"ion-item-divider",[["class","ion-padding-top"]],null,null,null,u.lb,u.w)),r.ob(10,49152,null,0,a.I,[r.h,r.k],null,null),(t()(),r.pb(11,0,null,0,2,"ion-label",[["color","dark"]],null,null,null,u.qb,u.A)),r.ob(12,49152,null,0,a.N,[r.h,r.k],{color:[0,"color"]},null),(t()(),r.Fb(-1,0,["Scan the QR code with your data"])),(t()(),r.pb(14,0,null,0,22,"ion-card",[],null,null,null,u.Z,u.f)),r.ob(15,49152,null,0,a.m,[r.h,r.k],null,null),(t()(),r.pb(16,0,null,0,20,"ion-card-content",[],null,null,null,u.V,u.g)),r.ob(17,49152,null,0,a.n,[r.h,r.k],null,null),(t()(),r.gb(16777216,null,0,1,null,b)),r.ob(19,16384,null,0,f.k,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(t()(),r.pb(20,0,null,0,4,"ion-item-divider",[["class","ion-padding-top"]],null,null,null,u.lb,u.w)),r.ob(21,49152,null,0,a.I,[r.h,r.k],null,null),(t()(),r.pb(22,0,null,0,2,"ion-label",[["color","dark"]],null,null,null,u.qb,u.A)),r.ob(23,49152,null,0,a.N,[r.h,r.k],{color:[0,"color"]},null),(t()(),r.Fb(-1,0,["Send an mail with your data:"])),(t()(),r.pb(25,0,null,0,8,"ion-item",[],null,null,null,u.pb,u.v)),r.ob(26,49152,null,0,a.H,[r.h,r.k],null,null),(t()(),r.pb(27,0,null,0,6,"ion-input",[["placeholder","Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(t,n,e){var o=!0,i=t.component;return"ionBlur"===n&&(o=!1!==r.yb(t,29)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==r.yb(t,29)._handleInputEvent(e.target.value)&&o),"ngModelChange"===n&&(o=!1!==(i.email=e)&&o),o},u.kb,u.u)),r.ob(28,49152,null,0,a.G,[r.h,r.k],{placeholder:[0,"placeholder"],type:[1,"type"]},null),r.ob(29,16384,null,0,a.Nb,[r.k],null,null),r.Cb(1024,null,c.h,function(t){return[t]},[a.Nb]),r.ob(31,671744,null,0,c.l,[[8,null],[8,null],[8,null],[6,c.h]],{model:[0,"model"]},{update:"ngModelChange"}),r.Cb(2048,null,c.i,null,[c.l]),r.ob(33,16384,null,0,c.j,[[4,c.i]],null,null),(t()(),r.pb(34,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],function(t,n,e){var r=!0;return"click"===n&&(r=!1!==t.component.onSendEmail()&&r),r},u.T,u.d)),r.ob(35,49152,null,0,a.k,[r.h,r.k],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(t()(),r.Fb(-1,0,["Send"]))],function(t,n){var e=n.component;t(n,1,0,"Feedback"),t(n,7,0,"primary"),t(n,12,0,"dark"),t(n,19,0,e.qrCode),t(n,23,0,"dark"),t(n,28,0,"Email","email"),t(n,31,0,e.email),t(n,35,0,!e.email,"block")},function(t,n){t(n,27,0,r.yb(n,33).ngClassUntouched,r.yb(n,33).ngClassTouched,r.yb(n,33).ngClassPristine,r.yb(n,33).ngClassDirty,r.yb(n,33).ngClassValid,r.yb(n,33).ngClassInvalid,r.yb(n,33).ngClassPending)})}function y(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,1,"app-transmit-page",[],null,null,null,w,v)),r.ob(1,114688,null,0,p,[g.a],null,null)],function(t,n){t(n,1,0)},null)}var m=r.lb("app-transmit-page",p,y,{},{},[]),E=e("PCNd"),A=e("ZYCi");e.d(n,"TransmitModuleNgFactory",function(){return B});var B=r.mb(o,[],function(t){return r.vb([r.wb(512,r.j,r.bb,[[8,[i.a,m]],[3,r.j],r.x]),r.wb(4608,f.m,f.l,[r.u,[2,f.w]]),r.wb(4608,a.b,a.b,[r.z,r.g]),r.wb(4608,a.Hb,a.Hb,[a.b,r.j,r.q,f.d]),r.wb(4608,a.Kb,a.Kb,[a.b,r.j,r.q,f.d]),r.wb(4608,c.r,c.r,[]),r.wb(4608,c.b,c.b,[]),r.wb(1073742336,f.c,f.c,[]),r.wb(1073742336,a.Db,a.Db,[]),r.wb(1073742336,c.p,c.p,[]),r.wb(1073742336,c.f,c.f,[]),r.wb(1073742336,c.m,c.m,[]),r.wb(1073742336,E.a,E.a,[]),r.wb(1073742336,A.o,A.o,[[2,A.u],[2,A.m]]),r.wb(1073742336,o,o,[]),r.wb(1024,A.k,function(){return[[{path:"",component:p}]]},[])])})},AZa5:function(t,n,e){var r=e("Wogr"),o=e("u/Db");function i(t){this.mode=o.BYTE,this.data=new r(t)}i.getBitsLength=function(t){return 8*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){for(var n=0,e=this.data.length;n<e;n++)t.put(this.data[n],8)},t.exports=i},BCVQ:function(t,n){var e="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",r="(?:(?![A-Z0-9 $%*+\\-./:]|"+(e=e.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";n.KANJI=new RegExp(e,"g"),n.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),n.BYTE=new RegExp(r,"g"),n.NUMERIC=new RegExp("[0-9]+","g"),n.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");var o=new RegExp("^"+e+"$"),i=new RegExp("^[0-9]+$"),u=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");n.testKanji=function(t){return o.test(t)},n.testNumeric=function(t){return i.test(t)},n.testAlphanumeric=function(t){return u.test(t)}},ELBg:function(t,n,e){"use strict";var r={single_source_shortest_paths:function(t,n,e){var o={},i={};i[n]=0;var u,a,l,s,f,c,h=r.PriorityQueue.make();for(h.push(n,0);!h.empty();)for(l in s=(u=h.pop()).cost,f=t[a=u.value]||{})f.hasOwnProperty(l)&&(c=s+f[l],(void 0===i[l]||i[l]>c)&&(i[l]=c,h.push(l,c),o[l]=a));if(void 0!==e&&void 0===i[e]){var d=["Could not find a path from ",n," to ",e,"."].join("");throw new Error(d)}return o},extract_shortest_path_from_predecessor_list:function(t,n){for(var e=[],r=n;r;)e.push(r),r=t[r];return e.reverse(),e},find_path:function(t,n,e){var o=r.single_source_shortest_paths(t,n,e);return r.extract_shortest_path_from_predecessor_list(o,e)},PriorityQueue:{make:function(t){var n,e=r.PriorityQueue,o={};for(n in t=t||{},e)e.hasOwnProperty(n)&&(o[n]=e[n]);return o.queue=[],o.sorter=t.sorter||e.default_sorter,o},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){this.queue.push({value:t,cost:n}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=r},J6Nv:function(t,n){n.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}},JzKC:function(t,n,e){var r=e("Wogr"),o=e("aZ40");n.mul=function(t,n){var e=new r(t.length+n.length-1);e.fill(0);for(var i=0;i<t.length;i++)for(var u=0;u<n.length;u++)e[i+u]^=o.mul(t[i],n[u]);return e},n.mod=function(t,n){for(var e=new r(t);e.length-n.length>=0;){for(var i=e[0],u=0;u<n.length;u++)e[u]^=o.mul(n[u],i);for(var a=0;a<e.length&&0===e[a];)a++;e=e.slice(a)}return e},n.generateECPolynomial=function(t){for(var e=new r([1]),i=0;i<t;i++)e=n.mul(e,[1,o.exp(i)]);return e}},Lzq4:function(t,n,e){var r=e("u/Db"),o=e("e/Dd");function i(t){this.mode=r.KANJI,this.data=t}i.getBitsLength=function(t){return 13*t},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var n;for(n=0;n<this.data.length;n++){var e=o.toSJIS(this.data[n]);if(e>=33088&&e<=40956)e-=33088;else{if(!(e>=57408&&e<=60351))throw new Error("Invalid SJIS character: "+this.data[n]+"\nMake sure your charset is UTF-8");e-=49472}t.put(e=192*(e>>>8&255)+(255&e),13)}},t.exports=i},NPxG:function(t,n,e){var r=e("ekOh"),o=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];n.getBlocksCount=function(t,n){switch(n){case r.L:return o[4*(t-1)+0];case r.M:return o[4*(t-1)+1];case r.Q:return o[4*(t-1)+2];case r.H:return o[4*(t-1)+3];default:return}},n.getTotalCodewordsCount=function(t,n){switch(n){case r.L:return i[4*(t-1)+0];case r.M:return i[4*(t-1)+1];case r.Q:return i[4*(t-1)+2];case r.H:return i[4*(t-1)+3];default:return}}},QAZZ:function(t,n,e){var r=e("Rb7d");function o(t,n){var e=t.a/255,r=n+'="'+t.hex+'"';return e<1?r+" "+n+'-opacity="'+e.toFixed(2).slice(1)+'"':r}function i(t,n,e){var r=t+n;return void 0!==e&&(r+=" "+e),r}n.render=function(t,n,e){var u=r.getOptions(n),a=t.modules.size,l=t.modules.data,s=a+2*u.margin,f=u.color.light.a?"<path "+o(u.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",c="<path "+o(u.color.dark,"stroke")+' d="'+function(t,n,e){for(var r="",o=0,u=!1,a=0,l=0;l<t.length;l++){var s=Math.floor(l%n),f=Math.floor(l/n);s||u||(u=!0),t[l]?(a++,l>0&&s>0&&t[l-1]||(r+=u?i("M",s+e,.5+f+e):i("m",o,0),o=0,u=!1),s+1<n&&t[l+1]||(r+=i("h",a),a=0)):o++}return r}(l,a,u.margin)+'"/>',h='<svg xmlns="http://www.w3.org/2000/svg" '+(u.width?'width="'+u.width+'" height="'+u.width+'" ':"")+'viewBox="0 0 '+s+" "+s+'" shape-rendering="crispEdges">'+f+c+"</svg>\n";return"function"==typeof e&&e(null,h),h}},QUaw:function(t,n,e){var r=e("Rb7d");n.render=function(t,n,e){var o=e,i=n;void 0!==o||n&&n.getContext||(o=n,n=void 0),n||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=r.getOptions(o);var u=r.getImageWidth(t.modules.size,o),a=i.getContext("2d"),l=a.createImageData(u,u);return r.qrToImageData(l.data,t,o),function(t,n,e){t.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=e,n.width=e,n.style.height=e+"px",n.style.width=e+"px"}(a,i,u),a.putImageData(l,0,0),i},n.renderToDataURL=function(t,e,r){var o=r;return void 0!==o||e&&e.getContext||(o=e,e=void 0),o||(o={}),n.render(t,e,o).toDataURL(o.type||"image/png",(o.rendererOpts||{}).quality)}},Rb7d:function(t,n){function e(t){if("string"!=typeof t)throw new Error("Color should be defined as hex string");var n=t.slice().replace("#","").split("");if(n.length<3||5===n.length||n.length>8)throw new Error("Invalid hex color: "+t);3!==n.length&&4!==n.length||(n=Array.prototype.concat.apply([],n.map(function(t){return[t,t]}))),6===n.length&&n.push("F","F");var e=parseInt(n.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:255&e,hex:"#"+n.slice(0,6).join("")}}n.getOptions=function(t){t||(t={}),t.color||(t.color={});var n=t.width&&t.width>=21?t.width:void 0;return{width:n,scale:n?4:t.scale||4,margin:null==t.margin||t.margin<0?4:t.margin,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},n.getScale=function(t,n){return n.width&&n.width>=t+2*n.margin?n.width/(t+2*n.margin):n.scale},n.getImageWidth=function(t,e){var r=n.getScale(t,e);return Math.floor((t+2*e.margin)*r)},n.qrToImageData=function(t,e,r){for(var o=e.modules.size,i=e.modules.data,u=n.getScale(o,r),a=Math.floor((o+2*r.margin)*u),l=r.margin*u,s=[r.color.light,r.color.dark],f=0;f<a;f++)for(var c=0;c<a;c++){var h=4*(f*a+c),d=r.color.light;f>=l&&c>=l&&f<a-l&&c<a-l&&(d=s[i[Math.floor((f-l)/u)*o+Math.floor((c-l)/u)]?1:0]),t[h++]=d.r,t[h++]=d.g,t[h++]=d.b,t[h]=d.a}}},V35J:function(t,n,e){var r=e("Wogr");function o(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new r(t*t),this.data.fill(0),this.reservedBit=new r(t*t),this.reservedBit.fill(0)}o.prototype.set=function(t,n,e,r){var o=t*this.size+n;this.data[o]=e,r&&(this.reservedBit[o]=!0)},o.prototype.get=function(t,n){return this.data[t*this.size+n]},o.prototype.xor=function(t,n,e){this.data[t*this.size+n]^=e},o.prototype.isReserved=function(t,n){return this.reservedBit[t*this.size+n]},t.exports=o},Wogr:function(t,n,e){"use strict";var r=e("7uVY"),o=(i.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()}catch(n){return!1}}())?2147483647:1073741823;function i(t,n,e){return i.TYPED_ARRAY_SUPPORT||this instanceof i?"number"==typeof t?l(this,t):function(t,n,e,r){if("number"==typeof n)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&n instanceof ArrayBuffer?function(t,n,e,r){if(e<0||n.byteLength<e)throw new RangeError("'offset' is out of bounds");if(n.byteLength<e+(r||0))throw new RangeError("'length' is out of bounds");var o;return o=void 0===e&&void 0===r?new Uint8Array(n):void 0===r?new Uint8Array(n,e):new Uint8Array(n,e,r),i.TYPED_ARRAY_SUPPORT?o.__proto__=i.prototype:o=s(t,o),o}(t,n,e,r):"string"==typeof n?function(t,n){var e=0|c(n),r=a(t,e),o=r.write(n);return o!==e&&(r=r.slice(0,o)),r}(t,n):function(t,n){if(i.isBuffer(n)){var e=0|u(n.length),r=a(t,e);return 0===r.length?r:(n.copy(r,0,0,e),r)}if(n){if("undefined"!=typeof ArrayBuffer&&n.buffer instanceof ArrayBuffer||"length"in n)return"number"!=typeof n.length||(o=n.length)!=o?a(t,0):s(t,n);if("Buffer"===n.type&&Array.isArray(n.data))return s(t,n.data)}var o;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,n)}(this,t,n,e):new i(t,n,e)}function u(t){if(t>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return 0|t}function a(t,n){var e;return i.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(n)).__proto__=i.prototype:(null===(e=t)&&(e=new i(n)),e.length=n),e}function l(t,n){var e=a(t,n<0?0:0|u(n));if(!i.TYPED_ARRAY_SUPPORT)for(var r=0;r<n;++r)e[r]=0;return e}function s(t,n){for(var e=n.length<0?0:0|u(n.length),r=a(t,e),o=0;o<e;o+=1)r[o]=255&n[o];return r}function f(t,n){var e;n=n||1/0;for(var r=t.length,o=null,i=[],u=0;u<r;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!o){if(e>56319){(n-=3)>-1&&i.push(239,191,189);continue}if(u+1===r){(n-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(n-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(n-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((n-=1)<0)break;i.push(e)}else if(e<2048){if((n-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((n-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((n-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function c(t){return i.isBuffer(t)?t.length:"undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)?t.byteLength:("string"!=typeof t&&(t=""+t),0===t.length?0:f(t).length)}i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),i.prototype.write=function(t,n,e){void 0===n?(e=this.length,n=0):void 0===e&&"string"==typeof n?(e=this.length,n=0):isFinite(n)&&(n|=0,isFinite(e)?e|=0:e=void 0);var r=this.length-n;if((void 0===e||e>r)&&(e=r),t.length>0&&(e<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");return function(t,n,e,r){return function(t,n,e,r){for(var o=0;o<r&&!(o+e>=n.length||o>=t.length);++o)n[o+e]=t[o];return o}(f(n,t.length-e),t,e,r)}(this,t,n,e)},i.prototype.slice=function(t,n){var e,r=this.length;if((t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(n=void 0===n?r:~~n)<0?(n+=r)<0&&(n=0):n>r&&(n=r),n<t&&(n=t),i.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,n)).__proto__=i.prototype;else{var o=n-t;e=new i(o,void 0);for(var u=0;u<o;++u)e[u]=this[u+t]}return e},i.prototype.copy=function(t,n,e,r){if(e||(e=0),r||0===r||(r=this.length),n>=t.length&&(n=t.length),n||(n=0),r>0&&r<e&&(r=e),r===e)return 0;if(0===t.length||0===this.length)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-n<r-e&&(r=t.length-n+e);var o,u=r-e;if(this===t&&e<n&&n<r)for(o=u-1;o>=0;--o)t[o+n]=this[o+e];else if(u<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<u;++o)t[o+n]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+u),n);return u},i.prototype.fill=function(t,n,e){if("string"==typeof t){if("string"==typeof n?(n=0,e=this.length):"string"==typeof e&&(e=this.length),1===t.length){var r=t.charCodeAt(0);r<256&&(t=r)}}else"number"==typeof t&&(t&=255);if(n<0||this.length<n||this.length<e)throw new RangeError("Out of range index");if(e<=n)return this;var o;if(n>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=n;o<e;++o)this[o]=t;else{var u=i.isBuffer(t)?t:new i(t),a=u.length;for(o=0;o<e-n;++o)this[o+n]=u[o%a]}return this},i.concat=function(t,n){if(!r(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return a(null,0);var e;if(void 0===n)for(n=0,e=0;e<t.length;++e)n+=t[e].length;var o=l(null,n),u=0;for(e=0;e<t.length;++e){var s=t[e];if(!i.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(o,u),u+=s.length}return o},i.byteLength=c,i.prototype._isBuffer=!0,i.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.exports=i},Z92M:function(t,n){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},aCFN:function(t,n,e){"use strict";var r=e("CcnG"),o=e("oBZk"),i=e("ZZ/e");e("yM0y"),e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a});var u=r.nb({encapsulation:0,styles:[[""]],data:{}});function a(t){return r.Hb(0,[(t()(),r.pb(0,0,null,null,12,"ion-header",[],null,null,null,o.hb,o.r)),r.ob(1,49152,null,0,i.B,[r.h,r.k],null,null),(t()(),r.pb(2,0,null,0,10,"ion-toolbar",[["color","dark"]],null,null,null,o.Fb,o.P)),r.ob(3,49152,null,0,i.Bb,[r.h,r.k],{color:[0,"color"]},null),(t()(),r.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.U,o.e)),r.ob(5,49152,null,0,i.l,[r.h,r.k],null,null),(t()(),r.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],function(t,n,e){var o=!0;return"click"===n&&(o=!1!==r.yb(t,8).onClick(e)&&o),o},o.S,o.c)),r.ob(7,49152,null,0,i.g,[r.h,r.k],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),r.ob(8,16384,null,0,i.h,[[2,i.hb],i.Ib],{defaultHref:[0,"defaultHref"]},null),(t()(),r.pb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,o.U,o.e)),r.ob(10,49152,null,0,i.l,[r.h,r.k],null,null),(t()(),r.pb(11,0,null,0,1,"ion-menu-button",[],null,null,null,o.sb,o.D)),r.ob(12,49152,null,0,i.R,[r.h,r.k],null,null)],function(t,n){var e=n.component;t(n,3,0,"dark"),t(n,7,0,"/",e.title),t(n,8,0,"/")},null)}},aZ40:function(t,n,e){var r=e("Wogr");if(r.alloc)var o=r.alloc(512),i=r.alloc(256);else o=new r(512),i=new r(256);!function(){for(var t=1,n=0;n<255;n++)o[n]=t,i[t]=n,256&(t<<=1)&&(t^=285);for(n=255;n<512;n++)o[n]=o[n-255]}(),n.log=function(t){if(t<1)throw new Error("log("+t+")");return i[t]},n.exp=function(t){return o[t]},n.mul=function(t,n){return 0===t||0===n?0:o[i[t]+i[n]]}},"e/Dd":function(t,n){var e,r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];n.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},n.getSymbolTotalCodewords=function(t){return r[t]},n.getBCHDigit=function(t){for(var n=0;0!==t;)n++,t>>>=1;return n},n.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');e=t},n.isKanjiModeEnabled=function(){return void 0!==e},n.toSJIS=function(t){return e(t)}},e6BP:function(t,n){function e(){this.buffer=[],this.length=0}e.prototype={get:function(t){var n=Math.floor(t/8);return 1==(this.buffer[n]>>>7-t%8&1)},put:function(t,n){for(var e=0;e<n;e++)this.putBit(1==(t>>>n-e-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),t&&(this.buffer[n]|=128>>>this.length%8),this.length++}},t.exports=e},eQOe:function(t,n){function e(t,e,r){switch(t){case n.Patterns.PATTERN000:return(e+r)%2==0;case n.Patterns.PATTERN001:return e%2==0;case n.Patterns.PATTERN010:return r%3==0;case n.Patterns.PATTERN011:return(e+r)%3==0;case n.Patterns.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case n.Patterns.PATTERN101:return e*r%2+e*r%3==0;case n.Patterns.PATTERN110:return(e*r%2+e*r%3)%2==0;case n.Patterns.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},n.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},n.from=function(t){return n.isValid(t)?parseInt(t,10):void 0},n.getPenaltyN1=function(t){for(var n=t.size,e=0,r=0,o=0,i=null,u=null,a=0;a<n;a++){r=o=0,i=u=null;for(var l=0;l<n;l++){var s=t.get(a,l);s===i?r++:(r>=5&&(e+=r-5+3),i=s,r=1),(s=t.get(l,a))===u?o++:(o>=5&&(e+=o-5+3),u=s,o=1)}r>=5&&(e+=r-5+3),o>=5&&(e+=o-5+3)}return e},n.getPenaltyN2=function(t){for(var n=t.size,e=0,r=0;r<n-1;r++)for(var o=0;o<n-1;o++){var i=t.get(r,o)+t.get(r,o+1)+t.get(r+1,o)+t.get(r+1,o+1);4!==i&&0!==i||e++}return 3*e},n.getPenaltyN3=function(t){for(var n=t.size,e=0,r=0,o=0,i=0;i<n;i++){r=o=0;for(var u=0;u<n;u++)r=r<<1&2047|t.get(i,u),u>=10&&(1488===r||93===r)&&e++,o=o<<1&2047|t.get(u,i),u>=10&&(1488===o||93===o)&&e++}return 40*e},n.getPenaltyN4=function(t){for(var n=0,e=t.data.length,r=0;r<e;r++)n+=t.data[r];return 10*Math.abs(Math.ceil(100*n/e/5)-10)},n.applyMask=function(t,n){for(var r=n.size,o=0;o<r;o++)for(var i=0;i<r;i++)n.isReserved(i,o)||n.xor(i,o,e(t,i,o))},n.getBestMask=function(t,e){for(var r=Object.keys(n.Patterns).length,o=0,i=1/0,u=0;u<r;u++){e(u),n.applyMask(u,t);var a=n.getPenaltyN1(t)+n.getPenaltyN2(t)+n.getPenaltyN3(t)+n.getPenaltyN4(t);n.applyMask(u,t),a<i&&(i=a,o=u)}return o}},ekOh:function(t,n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2},n.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},n.from=function(t,e){if(n.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(r){return e}}},jSPq:function(t,n,e){var r=e("Wogr"),o=e("JzKC");function i(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(t){this.degree=t,this.genPoly=o.generateECPolynomial(this.degree)},i.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");var n=new r(this.degree);n.fill(0);var e=r.concat([t,n],t.length+this.degree),i=o.mod(e,this.genPoly),u=this.degree-i.length;if(u>0){var a=new r(this.degree);return a.fill(0),i.copy(a,u),a}return i},t.exports=i},"kk9/":function(t,n,e){var r=e("e/Dd").getSymbolSize;n.getPositions=function(t){var n=r(t);return[[0,0],[n-7,0],[0,n-7]]}},lYJp:function(t,n,e){var r=e("e/Dd"),o=r.getBCHDigit(1335);n.getEncodedBits=function(t,n){for(var e=t.bit<<3|n,i=e<<10;r.getBCHDigit(i)-o>=0;)i^=1335<<r.getBCHDigit(i)-o;return 21522^(e<<10|i)}},nZSm:function(t,n,e){var r=e("u/Db"),o=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(t){this.mode=r.ALPHANUMERIC,this.data=t}i.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(t){var n;for(n=0;n+2<=this.data.length;n+=2){var e=45*o.indexOf(this.data[n]);e+=o.indexOf(this.data[n+1]),t.put(e,11)}this.data.length%2&&t.put(o.indexOf(this.data[n]),6)},t.exports=i},qmMu:function(t,n,e){var r=e("Wogr"),o=e("e/Dd"),i=e("ekOh"),u=e("e6BP"),a=e("V35J"),l=e("1sBl"),s=e("kk9/"),f=e("eQOe"),c=e("NPxG"),h=e("jSPq"),d=e("yKow"),g=e("lYJp"),p=e("u/Db"),v=e("vvrf"),b=e("7uVY");function w(t,n,e){var r,o,i=t.size,u=g.getEncodedBits(n,e);for(r=0;r<15;r++)t.set(r<6?r:r<8?r+1:i-15+r,8,o=1==(u>>r&1),!0),t.set(8,r<8?i-r-1:r<9?15-r-1+1:15-r-1,o,!0);t.set(i-8,8,1,!0)}n.create=function(t,n){if(void 0===t||""===t)throw new Error("No input text");var e,g,y=i.M;return void 0!==n&&(y=i.from(n.errorCorrectionLevel,i.M),e=d.from(n.version),g=f.from(n.maskPattern),n.toSJISFunc&&o.setToSJISFunction(n.toSJISFunc)),function(t,n,e,i){var g;if(b(t))g=v.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");var y=n;if(!y){var m=v.rawSplit(t);y=d.getBestVersionForData(m,e)}g=v.fromString(t,y||40)}var E=d.getBestVersionForData(g,e);if(!E)throw new Error("The amount of data is too big to be stored in a QR Code");if(n){if(n<E)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+E+".\n")}else n=E;var A=function(t,n,e){var i=new u;e.forEach(function(n){i.put(n.mode.bit,4),i.put(n.getLength(),p.getCharCountIndicator(n.mode,t)),n.write(i)});var a=8*(o.getSymbolTotalCodewords(t)-c.getTotalCodewordsCount(t,n));for(i.getLengthInBits()+4<=a&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);for(var l=(a-i.getLengthInBits())/8,s=0;s<l;s++)i.put(s%2?17:236,8);return function(t,n,e){for(var i=o.getSymbolTotalCodewords(n),u=i-c.getTotalCodewordsCount(n,e),a=c.getBlocksCount(n,e),l=a-i%a,s=Math.floor(i/a),f=Math.floor(u/a),d=f+1,g=s-f,p=new h(g),v=0,b=new Array(a),w=new Array(a),y=0,m=new r(t.buffer),E=0;E<a;E++){var A=E<l?f:d;b[E]=m.slice(v,v+A),w[E]=p.encode(b[E]),v+=A,y=Math.max(y,A)}var B,C,P=new r(i),R=0;for(B=0;B<y;B++)for(C=0;C<a;C++)B<b[C].length&&(P[R++]=b[C][B]);for(B=0;B<g;B++)for(C=0;C<a;C++)P[R++]=w[C][B];return P}(i,t,n)}(n,e,g),B=o.getSymbolSize(n),C=new a(B);return function(t,n){for(var e=t.size,r=s.getPositions(n),o=0;o<r.length;o++)for(var i=r[o][0],u=r[o][1],a=-1;a<=7;a++)if(!(i+a<=-1||e<=i+a))for(var l=-1;l<=7;l++)u+l<=-1||e<=u+l||t.set(i+a,u+l,a>=0&&a<=6&&(0===l||6===l)||l>=0&&l<=6&&(0===a||6===a)||a>=2&&a<=4&&l>=2&&l<=4,!0)}(C,n),function(t){for(var n=t.size,e=8;e<n-8;e++){var r=e%2==0;t.set(e,6,r,!0),t.set(6,e,r,!0)}}(C),function(t,n){for(var e=l.getPositions(n),r=0;r<e.length;r++)for(var o=e[r][0],i=e[r][1],u=-2;u<=2;u++)for(var a=-2;a<=2;a++)t.set(o+u,i+a,-2===u||2===u||-2===a||2===a||0===u&&0===a,!0)}(C,n),w(C,e,0),n>=7&&function(t,n){for(var e,r,o,i=t.size,u=d.getEncodedBits(n),a=0;a<18;a++)e=Math.floor(a/3),t.set(e,r=a%3+i-8-3,o=1==(u>>a&1),!0),t.set(r,e,o,!0)}(C,n),function(t,n){for(var e=t.size,r=-1,o=e-1,i=7,u=0,a=e-1;a>0;a-=2)for(6===a&&a--;;){for(var l=0;l<2;l++)if(!t.isReserved(o,a-l)){var s=!1;u<n.length&&(s=1==(n[u]>>>i&1)),t.set(o,a-l,s),-1==--i&&(u++,i=7)}if((o+=r)<0||e<=o){o-=r,r=-r;break}}}(C,A),isNaN(i)&&(i=f.getBestMask(C,w.bind(null,C,e))),f.applyMask(i,C),w(C,e,i),{modules:C,version:n,errorCorrectionLevel:e,maskPattern:i,segments:g}}(t,e,y,g)}},"u/Db":function(t,n,e){var r=e("J6Nv"),o=e("BCVQ");n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(t,n){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!r.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?t.ccBits[0]:n<27?t.ccBits[1]:t.ccBits[2]},n.getBestModeForData=function(t){return o.testNumeric(t)?n.NUMERIC:o.testAlphanumeric(t)?n.ALPHANUMERIC:o.testKanji(t)?n.KANJI:n.BYTE},n.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},n.isValid=function(t){return t&&t.bit&&t.ccBits},n.from=function(t,e){if(n.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(r){return e}}},vvrf:function(t,n,e){var r=e("u/Db"),o=e("3X7Y"),i=e("nZSm"),u=e("AZa5"),a=e("Lzq4"),l=e("BCVQ"),s=e("e/Dd"),f=e("ELBg");function c(t){return unescape(encodeURIComponent(t)).length}function h(t,n,e){for(var r,o=[];null!==(r=t.exec(e));)o.push({data:r[0],index:r.index,mode:n,length:r[0].length});return o}function d(t){var n,e,o=h(l.NUMERIC,r.NUMERIC,t),i=h(l.ALPHANUMERIC,r.ALPHANUMERIC,t);return s.isKanjiModeEnabled()?(n=h(l.BYTE,r.BYTE,t),e=h(l.KANJI,r.KANJI,t)):(n=h(l.BYTE_KANJI,r.BYTE,t),e=[]),o.concat(i,n,e).sort(function(t,n){return t.index-n.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function g(t,n){switch(n){case r.NUMERIC:return o.getBitsLength(t);case r.ALPHANUMERIC:return i.getBitsLength(t);case r.KANJI:return a.getBitsLength(t);case r.BYTE:return u.getBitsLength(t)}}function p(t,n){var e,l=r.getBestModeForData(t);if((e=r.from(n,l))!==r.BYTE&&e.bit<l.bit)throw new Error('"'+t+'" cannot be encoded with mode '+r.toString(e)+".\n Suggested mode is: "+r.toString(l));switch(e!==r.KANJI||s.isKanjiModeEnabled()||(e=r.BYTE),e){case r.NUMERIC:return new o(t);case r.ALPHANUMERIC:return new i(t);case r.KANJI:return new a(t);case r.BYTE:return new u(t)}}n.fromArray=function(t){return t.reduce(function(t,n){return"string"==typeof n?t.push(p(n,null)):n.data&&t.push(p(n.data,n.mode)),t},[])},n.fromString=function(t,e){for(var o=function(t,n){for(var e={},o={start:{}},i=["start"],u=0;u<t.length;u++){for(var a=t[u],l=[],s=0;s<a.length;s++){var f=a[s],c=""+u+s;l.push(c),e[c]={node:f,lastCount:0},o[c]={};for(var h=0;h<i.length;h++){var d=i[h];e[d]&&e[d].node.mode===f.mode?(o[d][c]=g(e[d].lastCount+f.length,f.mode)-g(e[d].lastCount,f.mode),e[d].lastCount+=f.length):(e[d]&&(e[d].lastCount=f.length),o[d][c]=g(f.length,f.mode)+4+r.getCharCountIndicator(f.mode,n))}}i=l}for(h=0;h<i.length;h++)o[i[h]].end=0;return{map:o,table:e}}(function(t){for(var n=[],e=0;e<t.length;e++){var o=t[e];switch(o.mode){case r.NUMERIC:n.push([o,{data:o.data,mode:r.ALPHANUMERIC,length:o.length},{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.ALPHANUMERIC:n.push([o,{data:o.data,mode:r.BYTE,length:o.length}]);break;case r.KANJI:n.push([o,{data:o.data,mode:r.BYTE,length:c(o.data)}]);break;case r.BYTE:n.push([{data:o.data,mode:r.BYTE,length:c(o.data)}])}}return n}(d(t,s.isKanjiModeEnabled())),e),i=f.find_path(o.map,"start","end"),u=[],a=1;a<i.length-1;a++)u.push(o.table[i[a]].node);return n.fromArray(u.reduce(function(t,n){var e=t.length-1>=0?t[t.length-1]:null;return e&&e.mode===n.mode?(t[t.length-1].data+=n.data,t):(t.push(n),t)},[]))},n.rawSplit=function(t){return n.fromArray(d(t,s.isKanjiModeEnabled()))}},yKow:function(t,n,e){var r=e("e/Dd"),o=e("NPxG"),i=e("ekOh"),u=e("u/Db"),a=e("J6Nv"),l=e("7uVY"),s=r.getBCHDigit(7973);function f(t,n){return u.getCharCountIndicator(t,n)+4}function c(t,n){var e=0;return t.forEach(function(t){var r=f(t.mode,n);e+=r+t.getBitsLength()}),e}n.from=function(t,n){return a.isValid(t)?parseInt(t,10):n},n.getCapacity=function(t,n,e){if(!a.isValid(t))throw new Error("Invalid QR Code version");void 0===e&&(e=u.BYTE);var i=8*(r.getSymbolTotalCodewords(t)-o.getTotalCodewordsCount(t,n));if(e===u.MIXED)return i;var l=i-f(e,t);switch(e){case u.NUMERIC:return Math.floor(l/10*3);case u.ALPHANUMERIC:return Math.floor(l/11*2);case u.KANJI:return Math.floor(l/13);case u.BYTE:default:return Math.floor(l/8)}},n.getBestVersionForData=function(t,e){var r,o=i.from(e,i.M);if(l(t)){if(t.length>1)return function(t,e){for(var r=1;r<=40;r++)if(c(t,r)<=n.getCapacity(r,e,u.MIXED))return r}(t,o);if(0===t.length)return 1;r=t[0]}else r=t;return function(t,e,r){for(var o=1;o<=40;o++)if(e<=n.getCapacity(o,r,t))return o}(r.mode,r.getLength(),o)},n.getEncodedBits=function(t){if(!a.isValid(t)||t<7)throw new Error("Invalid QR Code version");for(var n=t<<12;r.getBCHDigit(n)-s>=0;)n^=7973<<r.getBCHDigit(n)-s;return t<<12|n}}}]);