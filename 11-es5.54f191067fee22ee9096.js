function _createForOfIteratorHelper(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_unsupportedIterableToArray(t))){var n=0,e=function(){};return{s:e,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,p,i=!0,r=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){r=!0,p=t},f:function(){try{i||null==o.return||o.return()}finally{if(r)throw p}}}}function _unsupportedIterableToArray(t,n){if(t){if("string"==typeof t)return _arrayLikeToArray(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,n):void 0}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{g4K6:function(t,n,e){"use strict";e.r(n),e.d(n,"NwodModule",(function(){return h}));var o=e("ofXK"),p=e("3Pt+"),i=e("tyNb"),r=e("fXoL");function c(t,n){if(1&t){var e=r.Pb();r.Ob(0,"input",9),r.Wb("ngModelChange",(function(t){r.ec(e);var o=n.$implicit;return r.Zb().form[o]=t})),r.Nb()}if(2&t){var o=n.$implicit,p=r.Zb();r.ac("ngModel",p.form[o]),r.zb("name",o)}}function l(t,n){if(1&t){var e=r.Pb();r.Ob(0,"div",11),r.Wb("click",(function(){r.ec(e);var t=r.Zb().$implicit,n=r.Zb().$implicit;return r.Zb().clickDot(n,t)})),r.Nb()}if(2&t){var o=r.Zb().$implicit,p=r.Zb().$implicit,i=r.Zb();r.Cb("dot ",p,"-",o,""),r.Db("filled",i.form[p]>=o)}}function x(t,n){1&t&&r.jc(0,l,1,6,"ng-template",10),2&t&&r.ac("ngIf",n.$implicit>1)}function a(t,n){if(1&t&&r.jc(0,x,1,1,"ng-template",3),2&t){var e=r.Zb();r.ac("ngForOf",e.arrayOfFive)}}function f(t,n){if(1&t){var e=r.Pb();r.Ob(0,"div",11),r.Wb("click",(function(){r.ec(e);var t=n.$implicit,o=r.Zb().$implicit;return r.Zb().clickDot(o,t)})),r.Nb()}if(2&t){var o=n.$implicit,p=r.Zb().$implicit,i=r.Zb();r.Cb("dot ",p,"-",o,""),r.Db("filled",i.form[p]>=o)}}function g(t,n){if(1&t&&r.jc(0,f,1,6,"ng-template",3),2&t){var e=r.Zb();r.ac("ngForOf",e.arrayOfFive)}}function s(t,n){if(1&t&&r.Mb(0,"div"),2&t){var e=n.$implicit,o=r.Zb();r.Bb("dot health-",e,""),r.Db("filled",o.form.health>=e)}}function O(t,n){if(1&t&&r.Mb(0,"div"),2&t){var e=n.$implicit,o=r.Zb();r.Bb("dot willpower-",e,""),r.Db("filled",o.form.willpower>=e)}}function C(t,n){if(1&t){var e=r.Pb();r.Ob(0,"div",11),r.Wb("click",(function(){r.ec(e);var t=n.$implicit;return r.Zb().clickDot("morality",t)})),r.Nb()}if(2&t){var o=n.$implicit,p=r.Zb();r.Bb("dot morality-",o,""),r.Db("filled",p.form.morality>=o)}}var M,_,P,u,m=[{path:"",component:(_=function t(){_classCallCheck(this,t)},_.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=r.Fb({type:_,selectors:[["app-nwod"]],decls:6,vars:0,consts:[["routerLink","/nwod/new"]],template:function(t,n){1&t&&(r.Ob(0,"h1"),r.kc(1,"Chronicles of Darkness"),r.Nb(),r.Ob(2,"ul"),r.Ob(3,"li"),r.Ob(4,"a",0),r.kc(5,"Cr\xe9er un personnage"),r.Nb(),r.Nb(),r.Nb())},directives:[i.b],styles:[""]}),_)},{path:"new",component:(M=function(){function t(){_classCallCheck(this,t),this.form={},this.arrayOfCharacter=["name","age","player","concept","virtue","vice","chronicle","faction","groupname"],this.arrayOfFive=[1,2,3,4,5],this.arrayOfTen=[1,2,3,4,5,6,7,8,9,10],this.arrayOfTwelve=[1,2,3,4,5,6,7,8,9,10,11,12],this.arrayOfAttributes=["intelligence","wits","resolve","strength","dexterity","stamina","presence","manipulation","composure"],this.arrayOfSkills=["academics","computer","crafts","investigation","medecine","occult","politics","science","athletics","brawl","drive","firearms","larceny","stealth","survival","weaponry","animalken","empathy","expression","intimidation","persuasion","socialize","streetwise","subterfuge"],this.debug=!1,this.resetSheet()}return _createClass(t,[{key:"clickDot",value:function(t,n){this.form[t]<n?this.form[t]++:this.form[t]--,this.formChanged()}},{key:"formChanged",value:function(){this.form.speed=this.form.strength+this.form.dexterity+5,this.form.initiative=this.form.dexterity+this.form.composure,this.form.defense=Math.min(this.form.dexterity,this.form.wits),this.form.health=this.form.size+this.form.stamina,this.form.willpower=this.form.resolve+this.form.composure}},{key:"resetSheet",value:function(){var t,n=_createForOfIteratorHelper(this.arrayOfCharacter);try{for(n.s();!(t=n.n()).done;){var e=t.value;this.form[e]=""}}catch(x){n.e(x)}finally{n.f()}var o,p=_createForOfIteratorHelper(this.arrayOfAttributes);try{for(p.s();!(o=p.n()).done;){var i=o.value;this.form[i]=1}}catch(x){p.e(x)}finally{p.f()}var r,c=_createForOfIteratorHelper(this.arrayOfSkills);try{for(c.s();!(r=c.n()).done;){var l=r.value;this.form[l]=0}}catch(x){c.e(x)}finally{c.f()}this.form.size=5,this.form.armor=0,this.form.morality=7,this.formChanged()}}]),t}(),M.\u0275fac=function(t){return new(t||M)},M.\u0275cmp=r.Fb({type:M,selectors:[["app-nwod-new"]],decls:15,vars:13,consts:[["type","button",3,"click"],[1,"sheet-container"],["src","assets/nwod/nwod-sheet.jpg",1,"sheet"],["ngFor","",3,"ngForOf"],["type","number","name","size",3,"ngModel","ngModelChange"],["type","number","name","speed","disabled","",3,"ngModel","ngModelChange"],["type","number","name","initiative","disabled","",3,"ngModel","ngModelChange"],["type","number","name","defense","disabled","",3,"ngModel","ngModelChange"],["type","number","name","armor",3,"ngModel","ngModelChange"],["type","text","maxlength","18",1,"border-bottom",3,"ngModel","ngModelChange"],[3,"ngIf"],[3,"click"]],template:function(t,n){1&t&&(r.Ob(0,"button",0),r.Wb("click",(function(){return n.debug=!n.debug})),r.kc(1,"DEBUG MODE"),r.Nb(),r.Ob(2,"div",1),r.Mb(3,"img",2),r.jc(4,c,1,2,"ng-template",3),r.jc(5,a,1,1,"ng-template",3),r.jc(6,g,1,1,"ng-template",3),r.Ob(7,"input",4),r.Wb("ngModelChange",(function(t){return n.form.size=t}))("ngModelChange",(function(){return n.formChanged()})),r.Nb(),r.Ob(8,"input",5),r.Wb("ngModelChange",(function(t){return n.form.speed=t}))("ngModelChange",(function(){return n.formChanged()})),r.Nb(),r.Ob(9,"input",6),r.Wb("ngModelChange",(function(t){return n.form.initiative=t}))("ngModelChange",(function(){return n.formChanged()})),r.Nb(),r.Ob(10,"input",7),r.Wb("ngModelChange",(function(t){return n.form.defense=t}))("ngModelChange",(function(){return n.formChanged()})),r.Nb(),r.Ob(11,"input",8),r.Wb("ngModelChange",(function(t){return n.form.armor=t}))("ngModelChange",(function(){return n.formChanged()})),r.Nb(),r.jc(12,s,1,5,"ng-template",3),r.jc(13,O,1,5,"ng-template",3),r.jc(14,C,1,5,"ng-template",3),r.Nb()),2&t&&(r.yb(2),r.Db("debug",n.debug),r.yb(2),r.ac("ngForOf",n.arrayOfCharacter),r.yb(1),r.ac("ngForOf",n.arrayOfAttributes),r.yb(1),r.ac("ngForOf",n.arrayOfSkills),r.yb(1),r.ac("ngModel",n.form.size),r.yb(1),r.ac("ngModel",n.form.speed),r.yb(1),r.ac("ngModel",n.form.initiative),r.yb(1),r.ac("ngModel",n.form.defense),r.yb(1),r.ac("ngModel",n.form.armor),r.yb(1),r.ac("ngForOf",n.arrayOfTwelve),r.yb(1),r.ac("ngForOf",n.arrayOfTen),r.yb(1),r.ac("ngForOf",n.arrayOfTen))},directives:[o.h,p.h,p.b,p.e,p.f,p.d,o.i],styles:[".debug[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid red}.debug[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{background:red}.sheet-container[_ngcontent-%COMP%]{position:relative}.sheet[_ngcontent-%COMP%]{width:970px}input[_ngcontent-%COMP%]{z-index:10;position:absolute;width:140px;padding:0 2px;border:none;background-color:transparent;cursor:text;outline:none;font-size:14px}input[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.1)}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid}.dot[_ngcontent-%COMP%]{z-index:10;position:absolute;width:8px;height:11px;border-radius:50%;cursor:pointer}.dot[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.3)}.dot.filled[_ngcontent-%COMP%]{background:#000}input[name=name][_ngcontent-%COMP%]{top:160px;left:187px;width:165px}input[name=age][_ngcontent-%COMP%]{top:183px;left:187px;width:165px}input[name=player][_ngcontent-%COMP%]{top:206px;left:187px;width:165px}input[name=concept][_ngcontent-%COMP%]{top:160px;left:423px;width:164px}input[name=virtue][_ngcontent-%COMP%]{top:183px;left:423px;width:164px}input[name=vice][_ngcontent-%COMP%]{top:206px;left:423px;width:164px}input[name=chronicle][_ngcontent-%COMP%]{top:160px;left:682px;width:153px}input[name=faction][_ngcontent-%COMP%]{top:183px;left:682px;width:153px}input[name=groupname][_ngcontent-%COMP%]{top:206px;left:682px;width:153px}.intelligence-2[_ngcontent-%COMP%]{top:275px;left:389px}.intelligence-3[_ngcontent-%COMP%]{top:275px;left:400px}.intelligence-4[_ngcontent-%COMP%]{top:275px;left:410px}.intelligence-5[_ngcontent-%COMP%]{top:275px;left:421px}.wits-2[_ngcontent-%COMP%]{top:316px;left:390px}.wits-3[_ngcontent-%COMP%]{top:316px;left:400px}.wits-4[_ngcontent-%COMP%]{top:316px;left:410px}.wits-5[_ngcontent-%COMP%]{top:316px;left:421px}.resolve-2[_ngcontent-%COMP%]{top:355px;left:389px}.resolve-3[_ngcontent-%COMP%]{top:355px;left:400px}.resolve-4[_ngcontent-%COMP%]{top:355px;left:410px}.resolve-5[_ngcontent-%COMP%]{top:355px;left:421px}.strength-2[_ngcontent-%COMP%]{top:276px;left:587px}.strength-3[_ngcontent-%COMP%]{top:276px;left:597px}.strength-4[_ngcontent-%COMP%]{top:276px;left:606px}.strength-5[_ngcontent-%COMP%]{top:276px;left:617px}.dexterity-2[_ngcontent-%COMP%]{top:316px;left:589px}.dexterity-3[_ngcontent-%COMP%]{top:316px;left:599px}.dexterity-4[_ngcontent-%COMP%]{top:316px;left:609px}.dexterity-5[_ngcontent-%COMP%]{top:316px;left:619px}.stamina-2[_ngcontent-%COMP%]{top:355px;left:589px}.stamina-3[_ngcontent-%COMP%]{top:355px;left:598px}.stamina-4[_ngcontent-%COMP%]{top:355px;left:608px}.stamina-5[_ngcontent-%COMP%]{top:355px;left:619px}.presence-2[_ngcontent-%COMP%]{top:275px;left:783px}.presence-3[_ngcontent-%COMP%]{top:275px;left:793px}.presence-4[_ngcontent-%COMP%]{top:275px;left:803px}.presence-5[_ngcontent-%COMP%]{top:275px;left:813px}.manipulation-2[_ngcontent-%COMP%]{top:318px;left:783px}.manipulation-3[_ngcontent-%COMP%]{top:318px;left:793px}.manipulation-4[_ngcontent-%COMP%]{top:318px;left:803px}.manipulation-5[_ngcontent-%COMP%]{top:318px;left:813px}.composure-2[_ngcontent-%COMP%]{top:357px;left:784px}.composure-3[_ngcontent-%COMP%]{top:357px;left:794px}.composure-4[_ngcontent-%COMP%]{top:357px;left:804px}.composure-5[_ngcontent-%COMP%]{top:357px;left:813px}.academics-1[_ngcontent-%COMP%]{top:494px;left:309px}.academics-2[_ngcontent-%COMP%]{top:494px;left:318px}.academics-3[_ngcontent-%COMP%]{top:494px;left:328px}.academics-4[_ngcontent-%COMP%]{top:494px;left:338px}.academics-5[_ngcontent-%COMP%]{top:494px;left:348px}.computer-1[_ngcontent-%COMP%]{top:516px;left:308px}.computer-2[_ngcontent-%COMP%]{top:516px;left:318px}.computer-3[_ngcontent-%COMP%]{top:516px;left:328px}.computer-4[_ngcontent-%COMP%]{top:516px;left:338px}.computer-5[_ngcontent-%COMP%]{top:516px;left:348px}.crafts-1[_ngcontent-%COMP%]{top:539px;left:309px}.crafts-2[_ngcontent-%COMP%]{top:539px;left:318px}.crafts-3[_ngcontent-%COMP%]{top:539px;left:328px}.crafts-4[_ngcontent-%COMP%]{top:539px;left:338px}.crafts-5[_ngcontent-%COMP%]{top:539px;left:348px}.investigation-1[_ngcontent-%COMP%]{top:561px;left:308px}.investigation-2[_ngcontent-%COMP%]{top:561px;left:318px}.investigation-3[_ngcontent-%COMP%]{top:561px;left:328px}.investigation-4[_ngcontent-%COMP%]{top:561px;left:338px}.investigation-5[_ngcontent-%COMP%]{top:561px;left:348px}.medecine-1[_ngcontent-%COMP%]{top:583px;left:309px}.medecine-2[_ngcontent-%COMP%]{top:583px;left:318px}.medecine-3[_ngcontent-%COMP%]{top:583px;left:328px}.medecine-4[_ngcontent-%COMP%]{top:583px;left:338px}.medecine-5[_ngcontent-%COMP%]{top:583px;left:347px}.occult-1[_ngcontent-%COMP%]{top:605px;left:308px}.occult-2[_ngcontent-%COMP%]{top:605px;left:318px}.occult-3[_ngcontent-%COMP%]{top:605px;left:328px}.occult-4[_ngcontent-%COMP%]{top:605px;left:338px}.occult-5[_ngcontent-%COMP%]{top:605px;left:348px}.politics-1[_ngcontent-%COMP%]{top:627px;left:308px}.politics-2[_ngcontent-%COMP%]{top:627px;left:318px}.politics-3[_ngcontent-%COMP%]{top:627px;left:328px}.politics-4[_ngcontent-%COMP%]{top:627px;left:338px}.politics-5[_ngcontent-%COMP%]{top:627px;left:348px}.science-1[_ngcontent-%COMP%]{top:649px;left:308px}.science-2[_ngcontent-%COMP%]{top:649px;left:318px}.science-3[_ngcontent-%COMP%]{top:649px;left:328px}.science-4[_ngcontent-%COMP%]{top:649px;left:338px}.science-5[_ngcontent-%COMP%]{top:649px;left:348px}.athletics-1[_ngcontent-%COMP%]{top:732px;left:308px}.athletics-2[_ngcontent-%COMP%]{top:732px;left:318px}.athletics-3[_ngcontent-%COMP%]{top:732px;left:328px}.athletics-4[_ngcontent-%COMP%]{top:732px;left:338px}.athletics-5[_ngcontent-%COMP%]{top:732px;left:347px}.brawl-1[_ngcontent-%COMP%]{top:754px;left:308px}.brawl-2[_ngcontent-%COMP%]{top:754px;left:318px}.brawl-3[_ngcontent-%COMP%]{top:754px;left:328px}.brawl-4[_ngcontent-%COMP%]{top:754px;left:338px}.brawl-5[_ngcontent-%COMP%]{top:754px;left:347px}.drive-1[_ngcontent-%COMP%]{top:777px;left:308px}.drive-2[_ngcontent-%COMP%]{top:777px;left:318px}.drive-3[_ngcontent-%COMP%]{top:777px;left:328px}.drive-4[_ngcontent-%COMP%]{top:777px;left:338px}.drive-5[_ngcontent-%COMP%]{top:777px;left:348px}.firearms-1[_ngcontent-%COMP%]{top:799px;left:308px}.firearms-2[_ngcontent-%COMP%]{top:799px;left:318px}.firearms-3[_ngcontent-%COMP%]{top:799px;left:328px}.firearms-4[_ngcontent-%COMP%]{top:799px;left:338px}.firearms-5[_ngcontent-%COMP%]{top:799px;left:348px}.larceny-1[_ngcontent-%COMP%]{top:821px;left:308px}.larceny-2[_ngcontent-%COMP%]{top:821px;left:318px}.larceny-3[_ngcontent-%COMP%]{top:821px;left:328px}.larceny-4[_ngcontent-%COMP%]{top:821px;left:338px}.larceny-5[_ngcontent-%COMP%]{top:821px;left:348px}.stealth-1[_ngcontent-%COMP%]{top:843px;left:307px}.stealth-2[_ngcontent-%COMP%]{top:843px;left:318px}.stealth-3[_ngcontent-%COMP%]{top:843px;left:328px}.stealth-4[_ngcontent-%COMP%]{top:843px;left:338px}.stealth-5[_ngcontent-%COMP%]{top:843px;left:347px}.survival-1[_ngcontent-%COMP%]{top:865px;left:308px}.survival-2[_ngcontent-%COMP%]{top:865px;left:318px}.survival-3[_ngcontent-%COMP%]{top:865px;left:328px}.survival-4[_ngcontent-%COMP%]{top:865px;left:338px}.survival-5[_ngcontent-%COMP%]{top:865px;left:347px}.weaponry-1[_ngcontent-%COMP%]{top:887px;left:309px}.weaponry-2[_ngcontent-%COMP%]{top:887px;left:318px}.weaponry-3[_ngcontent-%COMP%]{top:887px;left:328px}.weaponry-4[_ngcontent-%COMP%]{top:887px;left:338px}.weaponry-5[_ngcontent-%COMP%]{top:887px;left:347px}.animalken-1[_ngcontent-%COMP%]{top:970px;left:311px}.animalken-2[_ngcontent-%COMP%]{top:970px;left:321px}.animalken-3[_ngcontent-%COMP%]{top:970px;left:331px}.animalken-4[_ngcontent-%COMP%]{top:970px;left:341px}.animalken-5[_ngcontent-%COMP%]{top:970px;left:351px}.empathy-1[_ngcontent-%COMP%]{top:992px;left:311px}.empathy-2[_ngcontent-%COMP%]{top:992px;left:321px}.empathy-3[_ngcontent-%COMP%]{top:992px;left:331px}.empathy-4[_ngcontent-%COMP%]{top:992px;left:341px}.empathy-5[_ngcontent-%COMP%]{top:992px;left:351px}.expression-1[_ngcontent-%COMP%]{top:1014px;left:312px}.expression-2[_ngcontent-%COMP%]{top:1014px;left:321px}.expression-3[_ngcontent-%COMP%]{top:1014px;left:331px}.expression-4[_ngcontent-%COMP%]{top:1014px;left:341px}.expression-5[_ngcontent-%COMP%]{top:1014px;left:351px}.intimidation-1[_ngcontent-%COMP%]{top:1036px;left:311px}.intimidation-2[_ngcontent-%COMP%]{top:1036px;left:321px}.intimidation-3[_ngcontent-%COMP%]{top:1036px;left:331px}.intimidation-4[_ngcontent-%COMP%]{top:1036px;left:341px}.intimidation-5[_ngcontent-%COMP%]{top:1036px;left:351px}.persuasion-1[_ngcontent-%COMP%]{top:1058px;left:312px}.persuasion-2[_ngcontent-%COMP%]{top:1058px;left:321px}.persuasion-3[_ngcontent-%COMP%]{top:1058px;left:331px}.persuasion-4[_ngcontent-%COMP%]{top:1058px;left:341px}.persuasion-5[_ngcontent-%COMP%]{top:1058px;left:351px}.socialize-1[_ngcontent-%COMP%]{top:1081px;left:312px}.socialize-2[_ngcontent-%COMP%]{top:1081px;left:321px}.socialize-3[_ngcontent-%COMP%]{top:1081px;left:331px}.socialize-4[_ngcontent-%COMP%]{top:1081px;left:341px}.socialize-5[_ngcontent-%COMP%]{top:1081px;left:351px}.streetwise-1[_ngcontent-%COMP%]{top:1103px;left:312px}.streetwise-2[_ngcontent-%COMP%]{top:1103px;left:321px}.streetwise-3[_ngcontent-%COMP%]{top:1103px;left:331px}.streetwise-4[_ngcontent-%COMP%]{top:1103px;left:341px}.streetwise-5[_ngcontent-%COMP%]{top:1103px;left:351px}.subterfuge-1[_ngcontent-%COMP%]{top:1125px;left:311px}.subterfuge-2[_ngcontent-%COMP%]{top:1125px;left:321px}.subterfuge-3[_ngcontent-%COMP%]{top:1125px;left:331px}.subterfuge-4[_ngcontent-%COMP%]{top:1125px;left:341px}.subterfuge-5[_ngcontent-%COMP%]{top:1125px;left:351px}.health-1[_ngcontent-%COMP%]{top:477px;left:627px}.health-2[_ngcontent-%COMP%]{top:477px;left:644px}.health-3[_ngcontent-%COMP%]{top:477px;left:660px}.health-4[_ngcontent-%COMP%]{top:477px;left:677px}.health-5[_ngcontent-%COMP%]{top:477px;left:694px}.health-6[_ngcontent-%COMP%]{top:477px;left:710px}.health-7[_ngcontent-%COMP%]{top:477px;left:727px}.health-8[_ngcontent-%COMP%]{top:477px;left:744px}.health-9[_ngcontent-%COMP%]{top:477px;left:760px}.health-10[_ngcontent-%COMP%]{top:477px;left:777px}.health-11[_ngcontent-%COMP%]{top:477px;left:794px}.health-12[_ngcontent-%COMP%]{top:477px;left:810px}.willpower-1[_ngcontent-%COMP%]{top:561px;left:643px}.willpower-2[_ngcontent-%COMP%]{top:561px;left:660px}.willpower-3[_ngcontent-%COMP%]{top:561px;left:677px}.willpower-4[_ngcontent-%COMP%]{top:561px;left:693px}.willpower-5[_ngcontent-%COMP%]{top:561px;left:710px}.willpower-6[_ngcontent-%COMP%]{top:561px;left:727px}.willpower-7[_ngcontent-%COMP%]{top:561px;left:743px}.willpower-8[_ngcontent-%COMP%]{top:561px;left:760px}.willpower-9[_ngcontent-%COMP%]{top:561px;left:777px}.willpower-10[_ngcontent-%COMP%]{top:561px;left:793px}.morality-1[_ngcontent-%COMP%]{top:838px;left:794px}.morality-2[_ngcontent-%COMP%]{top:815px;left:794px}.morality-3[_ngcontent-%COMP%]{top:793px;left:794px}.morality-4[_ngcontent-%COMP%]{top:771px;left:794px}.morality-5[_ngcontent-%COMP%]{top:749px;left:794px}.morality-6[_ngcontent-%COMP%]{top:727px;left:794px}.morality-7[_ngcontent-%COMP%]{top:704px;left:794px}.morality-8[_ngcontent-%COMP%]{top:682px;left:794px}.morality-9[_ngcontent-%COMP%]{top:660px;left:794px}.morality-10[_ngcontent-%COMP%]{top:638px;left:794px}input[name=size][_ngcontent-%COMP%]{top:793px;left:421px;width:176px}input[name=speed][_ngcontent-%COMP%]{top:819px;left:430px;width:167px}input[name=initiative][_ngcontent-%COMP%]{top:849px;left:484px;width:113px}input[name=defense][_ngcontent-%COMP%]{top:879px;left:446px;width:151px}input[name=armor][_ngcontent-%COMP%]{top:909px;left:434px;width:163px}"]}),M)}],d=((u=function t(){_classCallCheck(this,t)}).\u0275mod=r.Jb({type:u}),u.\u0275inj=r.Ib({factory:function(t){return new(t||u)},imports:[[i.c.forChild(m)],i.c]}),u),h=((P=function t(){_classCallCheck(this,t)}).\u0275mod=r.Jb({type:P}),P.\u0275inj=r.Ib({factory:function(t){return new(t||P)},imports:[[o.b,d,p.c]]}),P)}}]);