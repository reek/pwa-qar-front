(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{HpSB:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),i=u("bI/7"),e=u("pMnS"),b=u("ZZ/e"),c=u("ZYCi"),a=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),r=t.nb({encapsulation:0,styles:[[""]],data:{}});function s(l){return t.Hb(0,[(l()(),t.pb(0,16777216,null,null,1,"ion-router-outlet",[],null,null,null,null,null)),t.ob(1,212992,null,0,b.gb,[c.b,t.O,t.j,[8,null],[8,null],t.h,b.c,b.Hb,t.k,c.m,t.z,c.a,[3,b.gb]],null,null)],function(l,n){l(n,1,0)},null)}function p(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-insurance-page",[],null,null,null,s,r)),t.ob(1,114688,null,0,a,[],null,null)],function(l,n){l(n,1,0)},null)}var f=t.lb("app-insurance-page",a,p,{},{},[]),h=u("oBZk"),m=u("Ip0R"),k=u("aj+E"),g=u("aCFN"),d=u("yM0y"),v=u("vQZI"),I=u("Ca6n"),w=u("gIcY"),y=u("gHPH"),B=function(){function l(l){this.insuranceService=l,this.insurances$=this.insuranceService.getInsurances()}return l.prototype.ngOnInit=function(){},l.prototype.onSearch=function(l){var n=l.detail.value;this.filterTerm=void 0===n?null:n},l}(),C=t.nb({encapsulation:0,styles:[[""]],data:{}});function H(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,16,"ion-item",[],null,null,null,h.qb,h.w)),t.ob(1,49152,null,0,b.G,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,h.Db,h.N)),t.ob(3,49152,null,0,b.xb,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(5,0,null,0,5,"ion-label",[],null,null,null,h.rb,h.B)),t.ob(6,49152,null,0,b.M,[t.h,t.k],null,null),(l()(),t.pb(7,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Fb(8,null,["",""])),(l()(),t.pb(9,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Fb(10,null,["",""])),(l()(),t.pb(11,0,null,0,5,"ion-button",[["fill","outline"],["slot","end"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.yb(l,13).onClick()&&o),"click"===n&&(o=!1!==t.yb(l,15).onClick(u)&&o),o},h.U,h.e)),t.ob(12,49152,null,0,b.j,[t.h,t.k],{fill:[0,"fill"]},null),t.ob(13,16384,null,0,c.n,[c.m,c.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.zb(14,2),t.ob(15,737280,null,0,b.Kb,[m.h,b.Hb,t.k,c.m,[2,c.n]],null,null),(l()(),t.Fb(-1,0,["More"]))],function(l,n){l(n,12,0,"outline");var u=l(n,14,0,"view",n.context.$implicit._id);l(n,13,0,u),l(n,15,0)},function(l,n){l(n,4,0,"assets/images/insurance/square/"+n.context.$implicit.logo),l(n,8,0,n.context.$implicit.company),l(n,10,0,n.context.$implicit.phone)})}function x(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,H)),t.ob(2,278528,null,0,m.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.context.ngIf)},null)}function j(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.Fb(-1,null,["No Insurance Found!"]))],null,null)}function F(l){return t.Hb(0,[t.Ab(0,k.a,[]),(l()(),t.pb(1,0,null,null,1,"app-header",[["title","Insurances"]],null,null,null,g.b,g.a)),t.ob(2,114688,null,0,d.a,[],{title:[0,"title"]},null),(l()(),t.pb(3,0,null,null,12,"ion-content",[],null,null,null,h.cb,h.m)),t.ob(4,49152,null,0,b.t,[t.h,t.k],null,null),(l()(),t.pb(5,0,null,0,1,"app-item-title",[["icon","umbrella"],["title","Insurances"]],null,null,null,v.b,v.a)),t.ob(6,114688,null,0,I.a,[],{title:[0,"title"],icon:[1,"icon"]},null),(l()(),t.pb(7,0,null,0,3,"ion-searchbar",[["cancelButtonText","Custom Cancel"],["showCancelButton",""]],null,[[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==t.yb(l,10)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==t.yb(l,10)._handleInputEvent(u.target.value)&&o),"ionChange"===n&&(o=!1!==i.onSearch(u)&&o),o},h.wb,h.G)),t.Cb(5120,null,w.h,function(l){return[l]},[b.Mb]),t.ob(9,49152,null,0,b.ib,[t.h,t.k],{cancelButtonText:[0,"cancelButtonText"],showCancelButton:[1,"showCancelButton"]},null),t.ob(10,16384,null,0,b.Mb,[t.k],null,null),(l()(),t.gb(16777216,null,0,3,null,x)),t.ob(12,16384,null,0,m.j,[t.O,t.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Ab(131072,m.b,[t.h]),t.Bb(14,2),(l()(),t.gb(0,[["empty",2]],0,0,null,j))],function(l,n){var u=n.component;l(n,2,0,"Insurances"),l(n,6,0,"Insurances","umbrella"),l(n,9,0,"Custom Cancel","");var o=t.Gb(n,12,0,l(n,14,0,t.yb(n,0),t.Gb(n,12,0,t.yb(n,13).transform(u.insurances$)),u.filterTerm));l(n,12,0,o,t.yb(n,15))},null)}function M(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-insurance-list",[],null,null,null,F,C)),t.ob(1,114688,null,0,B,[y.a],null,null)],function(l,n){l(n,1,0)},null)}var G=t.lb("app-insurance-list",B,M,{},{},[]),O=u("67Y/"),Z=u("xMyE"),E=u("15JJ"),$=function(){function l(l,n){this.insuranceService=l,this.route=n}return l.prototype.ngOnInit=function(){this.getInsurance()},l.prototype.getInsurance=function(){var l=this;this.id$=this.route.paramMap.pipe(Object(O.a)(function(l){return l.get("id")}),Object(Z.a)(function(l){return console.log("insurance id: "+l)})),this.insurance$=this.id$.pipe(Object(E.a)(function(n){return l.insuranceService.getInsuranceById(n)}))},l}(),q=t.nb({encapsulation:0,styles:[[""]],data:{}});function J(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,58,"ion-card",[["class","fullheight"]],null,null,null,h.ab,h.g)),t.ob(1,49152,null,0,b.l,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,6,"ion-card-header",[],null,null,null,h.X,h.i)),t.ob(3,49152,null,0,b.n,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,1,"ion-img",[["size","100vw 33vh"]],null,null,null,h.kb,h.u)),t.ob(5,49152,null,0,b.C,[t.h,t.k],{src:[0,"src"]},null),(l()(),t.pb(6,0,null,0,2,"ion-card-title",[],null,null,null,h.Z,h.k)),t.ob(7,49152,null,0,b.p,[t.h,t.k],null,null),(l()(),t.Fb(8,0,["",""])),(l()(),t.pb(9,0,null,0,1,"ion-card-content",[["class","ion-text-justify"]],null,null,null,h.W,h.h)),t.ob(10,49152,null,0,b.m,[t.h,t.k],null,null),(l()(),t.pb(11,0,null,0,15,"ion-item-sliding",[],null,null,null,h.pb,h.A)),t.ob(12,49152,null,0,b.L,[t.h,t.k],null,null),(l()(),t.pb(13,0,null,0,6,"ion-item",[],null,null,null,h.qb,h.w)),t.ob(14,49152,null,0,b.G,[t.h,t.k],null,null),(l()(),t.pb(15,0,null,0,1,"ion-icon",[["name","call"],["slot","start"]],null,null,null,h.jb,h.t)),t.ob(16,49152,null,0,b.B,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.pb(17,0,null,0,2,"ion-label",[],null,null,null,h.rb,h.B)),t.ob(18,49152,null,0,b.M,[t.h,t.k],null,null),(l()(),t.Fb(19,0,["",""])),(l()(),t.pb(20,0,null,0,6,"ion-item-options",[["side","end"]],null,null,null,h.ob,h.z)),t.ob(21,49152,null,0,b.K,[t.h,t.k],{side:[0,"side"]},null),(l()(),t.pb(22,0,null,0,4,"ion-item-option",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.context.ngIf.callIt()&&t),t},h.nb,h.y)),t.ob(23,49152,null,0,b.J,[t.h,t.k],null,null),(l()(),t.pb(24,0,null,0,1,"ion-icon",[["name","call"],["slot","start"]],null,null,null,h.jb,h.t)),t.ob(25,49152,null,0,b.B,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.Fb(-1,0,[" Call "])),(l()(),t.pb(27,0,null,0,15,"ion-item-sliding",[],null,null,null,h.pb,h.A)),t.ob(28,49152,null,0,b.L,[t.h,t.k],null,null),(l()(),t.pb(29,0,null,0,6,"ion-item",[],null,null,null,h.qb,h.w)),t.ob(30,49152,null,0,b.G,[t.h,t.k],null,null),(l()(),t.pb(31,0,null,0,1,"ion-icon",[["name","mail"],["slot","start"]],null,null,null,h.jb,h.t)),t.ob(32,49152,null,0,b.B,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.pb(33,0,null,0,2,"ion-label",[],null,null,null,h.rb,h.B)),t.ob(34,49152,null,0,b.M,[t.h,t.k],null,null),(l()(),t.Fb(35,0,["",""])),(l()(),t.pb(36,0,null,0,6,"ion-item-options",[["side","end"]],null,null,null,h.ob,h.z)),t.ob(37,49152,null,0,b.K,[t.h,t.k],{side:[0,"side"]},null),(l()(),t.pb(38,0,null,0,4,"ion-item-option",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.context.ngIf.mailIt()&&t),t},h.nb,h.y)),t.ob(39,49152,null,0,b.J,[t.h,t.k],null,null),(l()(),t.pb(40,0,null,0,1,"ion-icon",[["name","mail"],["slot","start"]],null,null,null,h.jb,h.t)),t.ob(41,49152,null,0,b.B,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.Fb(-1,0,[" Message "])),(l()(),t.pb(43,0,null,0,15,"ion-item-sliding",[],null,null,null,h.pb,h.A)),t.ob(44,49152,null,0,b.L,[t.h,t.k],null,null),(l()(),t.pb(45,0,null,0,6,"ion-item",[],null,null,null,h.qb,h.w)),t.ob(46,49152,null,0,b.G,[t.h,t.k],null,null),(l()(),t.pb(47,0,null,0,1,"ion-icon",[["name","globe"],["slot","start"]],null,null,null,h.jb,h.t)),t.ob(48,49152,null,0,b.B,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.pb(49,0,null,0,2,"ion-label",[],null,null,null,h.rb,h.B)),t.ob(50,49152,null,0,b.M,[t.h,t.k],null,null),(l()(),t.Fb(51,0,["",""])),(l()(),t.pb(52,0,null,0,6,"ion-item-options",[["side","end"]],null,null,null,h.ob,h.z)),t.ob(53,49152,null,0,b.K,[t.h,t.k],{side:[0,"side"]},null),(l()(),t.pb(54,0,null,0,4,"ion-item-option",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.context.ngIf.visitIt()&&t),t},h.nb,h.y)),t.ob(55,49152,null,0,b.J,[t.h,t.k],null,null),(l()(),t.pb(56,0,null,0,1,"ion-icon",[["name","globe"],["slot","start"]],null,null,null,h.jb,h.t)),t.ob(57,49152,null,0,b.B,[t.h,t.k],{name:[0,"name"]},null),(l()(),t.Fb(-1,0,[" Visit "]))],function(l,n){l(n,5,0,"assets/images/insurance/banner/"+n.context.ngIf.logo),l(n,16,0,"call"),l(n,21,0,"end"),l(n,25,0,"call"),l(n,32,0,"mail"),l(n,37,0,"end"),l(n,41,0,"mail"),l(n,48,0,"globe"),l(n,53,0,"end"),l(n,57,0,"globe")},function(l,n){l(n,8,0,n.context.ngIf.company),l(n,19,0,n.context.ngIf.phone),l(n,35,0,n.context.ngIf.email);var u=n.context.ngIf.getDomain();l(n,51,0,u)})}function L(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,4,"ion-item",[],null,null,null,h.qb,h.w)),t.ob(1,49152,null,0,b.G,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,2,"ion-label",[],null,null,null,h.rb,h.B)),t.ob(3,49152,null,0,b.M,[t.h,t.k],null,null),(l()(),t.Fb(-1,0,["Not found insurance \ud83d\ude1e"]))],null,null)}function S(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-header",[["title","Insurance"]],null,null,null,g.b,g.a)),t.ob(1,114688,null,0,d.a,[],{title:[0,"title"]},null),(l()(),t.pb(2,0,null,null,5,"ion-content",[],null,null,null,h.cb,h.m)),t.ob(3,49152,null,0,b.t,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,2,null,J)),t.ob(5,16384,null,0,m.j,[t.O,t.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Ab(131072,m.b,[t.h]),(l()(),t.gb(0,[["notFound",2]],0,0,null,L))],function(l,n){var u=n.component;l(n,1,0,"Insurance"),l(n,5,0,t.Gb(n,5,0,t.yb(n,6).transform(u.insurance$)),t.yb(n,7))},null)}function A(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-insurance-view",[],null,null,null,S,q)),t.ob(1,114688,null,0,$,[y.a,c.a],null,null)],function(l,n){l(n,1,0)},null)}var z=t.lb("app-insurance-view",$,A,{},{},[]),N=u("PCNd");u.d(n,"InsuranceModuleNgFactory",function(){return T});var T=t.mb(o,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[i.a,e.a,f,G,z]],[3,t.j],t.x]),t.wb(4608,m.l,m.k,[t.u,[2,m.x]]),t.wb(4608,b.b,b.b,[t.z,t.g]),t.wb(4608,b.Gb,b.Gb,[b.b,t.j,t.q,m.d]),t.wb(4608,b.Jb,b.Jb,[b.b,t.j,t.q,m.d]),t.wb(4608,w.r,w.r,[]),t.wb(4608,w.b,w.b,[]),t.wb(1073742336,m.c,m.c,[]),t.wb(1073742336,b.Cb,b.Cb,[]),t.wb(1073742336,w.p,w.p,[]),t.wb(1073742336,w.f,w.f,[]),t.wb(1073742336,w.m,w.m,[]),t.wb(1073742336,N.a,N.a,[]),t.wb(1073742336,c.o,c.o,[[2,c.u],[2,c.m]]),t.wb(1073742336,o,o,[]),t.wb(1024,c.k,function(){return[[{path:"",component:a,children:[{path:"",component:B},{path:"view/:id",component:$},{path:"",redirectTo:"",pathMatch:"full"}]}]]},[])])})},aCFN:function(l,n,u){"use strict";var t=u("CcnG"),o=u("oBZk"),i=u("ZZ/e");u("yM0y"),u.d(n,"a",function(){return e}),u.d(n,"b",function(){return b});var e=t.nb({encapsulation:0,styles:[[""]],data:{}});function b(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,12,"ion-header",[],null,null,null,o.ib,o.s)),t.ob(1,49152,null,0,i.A,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,o.Fb,o.P)),t.ob(3,49152,null,0,i.Ab,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.V,o.f)),t.ob(5,49152,null,0,i.k,[t.h,t.k],null,null),(l()(),t.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.yb(l,8).onClick(u)&&o),o},o.S,o.c)),t.ob(7,49152,null,0,i.f,[t.h,t.k],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),t.ob(8,16384,null,0,i.g,[[2,i.gb],i.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.pb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,o.V,o.f)),t.ob(10,49152,null,0,i.k,[t.h,t.k],null,null),(l()(),t.pb(11,0,null,0,1,"ion-menu-button",[],null,null,null,o.tb,o.E)),t.ob(12,49152,null,0,i.Q,[t.h,t.k],null,null)],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"/",u.title),l(n,8,0,"/")},null)}},vQZI:function(l,n,u){"use strict";var t=u("CcnG"),o=u("oBZk"),i=u("ZZ/e"),e=u("Ip0R");u("Ca6n"),u.d(n,"a",function(){return b}),u.d(n,"b",function(){return a});var b=t.nb({encapsulation:0,styles:[[""]],data:{}});function c(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"ion-icon",[],null,null,null,o.jb,o.t)),t.ob(1,49152,null,0,i.B,[t.h,t.k],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){var u=n.component;l(n,1,0,u.color,u.icon)},null)}function a(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,6,"ion-item",[],null,null,null,o.qb,o.w)),t.ob(1,49152,null,0,i.G,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,c)),t.ob(3,16384,null,0,e.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(4,0,null,0,2,"ion-title",[],null,null,null,o.Eb,o.O)),t.ob(5,49152,null,0,i.yb,[t.h,t.k],{color:[0,"color"]},null),(l()(),t.Fb(6,0,["",""]))],function(l,n){var u=n.component;l(n,3,0,u.icon),l(n,5,0,u.color)},function(l,n){l(n,6,0,n.component.title)})}}}]);