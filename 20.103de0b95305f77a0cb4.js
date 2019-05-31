(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{PUb1:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=function(){return function(){}}(),t=u("bI/7"),b=u("pMnS"),i=u("aCFN"),r=u("yM0y"),a=u("oBZk"),c=u("ZZ/e"),s=u("gIcY"),d=u("vQZI"),p=u("Ca6n"),f=u("k7jt"),h=u("9APP"),m=function(){function l(l,n,u){this.formBuilder=l,this.userService=n,this.notifyService=u,this.title="Feedback"}return l.prototype.ngOnInit=function(){this.buildForm()},l.prototype.buildForm=function(){this.form=this.formBuilder.group({feedback:["",[s.o.minLength(5)]]})},l.prototype.onSend=function(){var l=this;if(this.form.valid){console.log("form feedback submitted");var n=this.userService.sendUserFeedback(this.form.value).subscribe(function(n){return console.log("server feedback resp!",n),l.notifyService.show(n.ok?"You're the best! Thanks for helping \ud83d\ude01":"Error feedback not sent!")},function(l){return console.error("sendUserFeedback",l)},function(){return n.unsubscribe()})}},l.prototype.onReset=function(){this.form.reset()},l}(),g=e.nb({encapsulation:0,styles:[[""]],data:{}});function k(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-header",[["title","Feedback"]],null,null,null,i.b,i.a)),e.ob(1,114688,null,0,r.a,[],{title:[0,"title"]},null),(l()(),e.pb(2,0,null,null,38,"ion-content",[],null,null,null,a.cb,a.m)),e.ob(3,49152,null,0,c.t,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,36,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,t=l.component;return"submit"===n&&(o=!1!==e.yb(l,6).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.yb(l,6).onReset()&&o),"ngSubmit"===n&&(o=!1!==t.onSend()&&o),o},null,null)),e.ob(5,16384,null,0,s.q,[],null,null),e.ob(6,540672,null,0,s.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Cb(2048,null,s.a,null,[s.d]),e.ob(8,16384,null,0,s.k,[[4,s.a]],null,null),(l()(),e.pb(9,0,null,null,1,"app-item-title",[["icon","chatboxes"]],null,null,null,d.b,d.a)),e.ob(10,114688,null,0,p.a,[],{title:[0,"title"],icon:[1,"icon"]},null),(l()(),e.pb(11,0,null,null,6,"ion-item",[["href","https://github.com/reek/pwa-qar-front/issues"]],null,null,null,a.qb,a.w)),e.ob(12,49152,null,0,c.G,[e.h,e.k],{href:[0,"href"]},null),(l()(),e.pb(13,0,null,0,1,"ion-icon",[["name","logo-github"],["slot","start"]],null,null,null,a.jb,a.t)),e.ob(14,49152,null,0,c.B,[e.h,e.k],{name:[0,"name"]},null),(l()(),e.pb(15,0,null,0,2,"ion-label",[],null,null,null,a.rb,a.B)),e.ob(16,49152,null,0,c.M,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,["Report issues"])),(l()(),e.pb(18,0,null,null,6,"ion-item",[["href","https://nomade-advanced.slack.com/messages/CJD9AMSRW"]],null,null,null,a.qb,a.w)),e.ob(19,49152,null,0,c.G,[e.h,e.k],{href:[0,"href"]},null),(l()(),e.pb(20,0,null,0,1,"ion-icon",[["name","logo-slack"],["slot","start"]],null,null,null,a.jb,a.t)),e.ob(21,49152,null,0,c.B,[e.h,e.k],{name:[0,"name"]},null),(l()(),e.pb(22,0,null,0,2,"ion-label",[],null,null,null,a.rb,a.B)),e.ob(23,49152,null,0,c.M,[e.h,e.k],null,null),(l()(),e.Fb(-1,0,["Join chat"])),(l()(),e.pb(25,0,null,null,12,"ion-item",[],null,null,null,a.qb,a.w)),e.ob(26,49152,null,0,c.G,[e.h,e.k],null,null),(l()(),e.pb(27,0,null,0,1,"ion-icon",[["name","text"],["slot","start"]],null,null,null,a.jb,a.t)),e.ob(28,49152,null,0,c.B,[e.h,e.k],{name:[0,"name"]},null),(l()(),e.pb(29,0,null,0,8,"ion-textarea",[["formControlName","feedback"],["placeholder","Tell us what you think..."],["required",""],["rows","10"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.yb(l,31)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==e.yb(l,31)._handleInputEvent(u.target.value)&&o),o},a.Cb,a.M)),e.ob(30,49152,null,0,c.wb,[e.h,e.k],{placeholder:[0,"placeholder"],required:[1,"required"],rows:[2,"rows"]},null),e.ob(31,16384,null,0,c.Mb,[e.k],null,null),e.ob(32,16384,null,0,s.n,[],{required:[0,"required"]},null),e.Cb(1024,null,s.g,function(l){return[l]},[s.n]),e.Cb(1024,null,s.h,function(l){return[l]},[c.Mb]),e.ob(35,671744,null,0,s.c,[[3,s.a],[6,s.g],[8,null],[6,s.h],[2,s.s]],{name:[0,"name"]},null),e.Cb(2048,null,s.i,null,[s.c]),e.ob(37,16384,null,0,s.j,[[4,s.i]],null,null),(l()(),e.pb(38,0,null,null,2,"ion-button",[["expand","block"],["type","submit"]],null,null,null,a.U,a.e)),e.ob(39,49152,null,0,c.j,[e.h,e.k],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),e.Fb(-1,0,["Send"]))],function(l,n){var u=n.component;l(n,1,0,"Feedback"),l(n,6,0,u.form),l(n,10,0,u.title,"chatboxes"),l(n,12,0,"https://github.com/reek/pwa-qar-front/issues"),l(n,14,0,"logo-github"),l(n,19,0,"https://nomade-advanced.slack.com/messages/CJD9AMSRW"),l(n,21,0,"logo-slack"),l(n,28,0,"text"),l(n,30,0,"Tell us what you think...","","10"),l(n,32,0,""),l(n,35,0,"feedback"),l(n,39,0,!u.form.valid,"block","submit")},function(l,n){l(n,4,0,e.yb(n,8).ngClassUntouched,e.yb(n,8).ngClassTouched,e.yb(n,8).ngClassPristine,e.yb(n,8).ngClassDirty,e.yb(n,8).ngClassValid,e.yb(n,8).ngClassInvalid,e.yb(n,8).ngClassPending),l(n,29,0,e.yb(n,32).required?"":null,e.yb(n,37).ngClassUntouched,e.yb(n,37).ngClassTouched,e.yb(n,37).ngClassPristine,e.yb(n,37).ngClassDirty,e.yb(n,37).ngClassValid,e.yb(n,37).ngClassInvalid,e.yb(n,37).ngClassPending)})}function y(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-feedback-page",[],null,null,null,k,g)),e.ob(1,114688,null,0,m,[s.b,h.a,f.a],null,null)],function(l,n){l(n,1,0)},null)}var v=e.lb("app-feedback-page",m,y,{},{},[]),C=u("Ip0R"),w=u("PCNd"),q=u("ZYCi");u.d(n,"FeedbackModuleNgFactory",function(){return F});var F=e.mb(o,[],function(l){return e.vb([e.wb(512,e.j,e.bb,[[8,[t.a,b.a,v]],[3,e.j],e.x]),e.wb(4608,C.l,C.k,[e.u,[2,C.x]]),e.wb(4608,c.b,c.b,[e.z,e.g]),e.wb(4608,c.Gb,c.Gb,[c.b,e.j,e.q,C.d]),e.wb(4608,c.Jb,c.Jb,[c.b,e.j,e.q,C.d]),e.wb(4608,s.r,s.r,[]),e.wb(4608,s.b,s.b,[]),e.wb(1073742336,C.c,C.c,[]),e.wb(1073742336,c.Cb,c.Cb,[]),e.wb(1073742336,s.p,s.p,[]),e.wb(1073742336,s.f,s.f,[]),e.wb(1073742336,s.m,s.m,[]),e.wb(1073742336,w.a,w.a,[]),e.wb(1073742336,q.o,q.o,[[2,q.u],[2,q.m]]),e.wb(1073742336,o,o,[]),e.wb(1024,q.k,function(){return[[{path:"",component:m}]]},[])])})},aCFN:function(l,n,u){"use strict";var e=u("CcnG"),o=u("oBZk"),t=u("ZZ/e");u("yM0y"),u.d(n,"a",function(){return b}),u.d(n,"b",function(){return i});var b=e.nb({encapsulation:0,styles:[[""]],data:{}});function i(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,12,"ion-header",[],null,null,null,o.ib,o.s)),e.ob(1,49152,null,0,t.A,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,10,"ion-toolbar",[["color","primary"]],null,null,null,o.Fb,o.P)),e.ob(3,49152,null,0,t.Ab,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.V,o.f)),e.ob(5,49152,null,0,t.k,[e.h,e.k],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.yb(l,8).onClick(u)&&o),o},o.S,o.c)),e.ob(7,49152,null,0,t.f,[e.h,e.k],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),e.ob(8,16384,null,0,t.g,[[2,t.gb],t.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(9,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,o.V,o.f)),e.ob(10,49152,null,0,t.k,[e.h,e.k],null,null),(l()(),e.pb(11,0,null,0,1,"ion-menu-button",[],null,null,null,o.tb,o.E)),e.ob(12,49152,null,0,t.Q,[e.h,e.k],null,null)],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"/",u.title),l(n,8,0,"/")},null)}},vQZI:function(l,n,u){"use strict";var e=u("CcnG"),o=u("oBZk"),t=u("ZZ/e"),b=u("Ip0R");u("Ca6n"),u.d(n,"a",function(){return i}),u.d(n,"b",function(){return a});var i=e.nb({encapsulation:0,styles:[[""]],data:{}});function r(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"ion-icon",[],null,null,null,o.jb,o.t)),e.ob(1,49152,null,0,t.B,[e.h,e.k],{color:[0,"color"],name:[1,"name"]},null)],function(l,n){var u=n.component;l(n,1,0,u.color,u.icon)},null)}function a(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,6,"ion-item",[],null,null,null,o.qb,o.w)),e.ob(1,49152,null,0,t.G,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,r)),e.ob(3,16384,null,0,b.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(4,0,null,0,2,"ion-title",[],null,null,null,o.Eb,o.O)),e.ob(5,49152,null,0,t.yb,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.Fb(6,0,["",""]))],function(l,n){var u=n.component;l(n,3,0,u.icon),l(n,5,0,u.color)},function(l,n){l(n,6,0,n.component.title)})}}}]);