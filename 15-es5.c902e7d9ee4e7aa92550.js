function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Ejp8:function(t,e,n){"use strict";n.r(e),n.d(e,"ParanoiaModule",(function(){return h}));var o,r,a,i,p,c=n("ofXK"),b=n("3Pt+"),s=n("tyNb"),l=n("fXoL"),d=((o=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=l.Hb({type:o,selectors:[["app-paranoia-computer"]],decls:1,vars:0,consts:[[1,"eye"]],template:function(t,e){1&t&&l.Ob(0,"div",0)},styles:['[_nghost-%COMP%]{position:absolute;background:url(https://raphaelyan.github.io/rpg-digital-tools/assets/paranoia/computer_100.png);width:100px;height:90px}.eye[_ngcontent-%COMP%]{position:relative;top:25px;left:35px;display:inline-block;height:30px;width:30px;background:#fff}.eye[_ngcontent-%COMP%], .eye[_ngcontent-%COMP%]:after{border-radius:50%}.eye[_ngcontent-%COMP%]:after{position:absolute;bottom:17px;right:10px;width:10px;height:10px;background:#000;content:" "}']}),o),x=["*"],u=((r=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=l.Hb({type:r,selectors:[["app-paranoia-ribbon"]],inputs:{width:"width"},ngContentSelectors:x,decls:6,vars:2,consts:[[1,"ribbon-container"],[1,"ribbon"],[1,"text-container"]],template:function(t,e){1&t&&(l.ic(),l.Sb(0,"div",0),l.Sb(1,"div",1),l.Sb(2,"div",2),l.Sb(3,"span"),l.hc(4),l.Rb(),l.Rb(),l.Ob(5,"b"),l.Rb(),l.Rb()),2&t&&l.xc("width",e.width)},styles:['[_nghost-%COMP%]{position:absolute}.ribbon-container[_ngcontent-%COMP%], .ribbon-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:content-box}.ribbon-container[_ngcontent-%COMP%]{background-color:#e1f5fe}.ribbon[_ngcontent-%COMP%]{position:relative;width:100%;left:-16px;padding:0 16px}.ribbon[_ngcontent-%COMP%]:after, .ribbon[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;bottom:-24px;border:24px solid #4b8fc3;z-index:-1}.ribbon[_ngcontent-%COMP%]:before{left:-38px;border-right-width:24px;border-left-color:transparent;-webkit-transform:rotate(-16deg)}.ribbon[_ngcontent-%COMP%]:after{right:-38px;border-left-width:24px;border-right-color:transparent;-webkit-transform:rotate(16deg)}.ribbon[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]{text-transform:uppercase;display:block;position:relative;width:100%;left:-16px;padding:0 16px 16px;background:#96bedc;text-align:center;border-top-left-radius:calc(50% + 16px) 16px;border-top-right-radius:calc(50% + 16px) 16px;text-shadow:0 1px 1px rgba(0,0,0,.4);z-index:1}.ribbon[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{line-height:20px;font-size:14px;color:#fff;padding:5px;display:block}.ribbon[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:after, .ribbon[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;height:16px;left:0;bottom:0;box-shadow:inset 0 3px 3px rgba(0,0,0,.3)}.ribbon[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:before{width:100%;background:#71a7d0;border-top-left-radius:calc(50% + 16px) 16px;border-top-right-radius:calc(50% + 16px) 16px;z-index:1}.ribbon[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]:after{width:calc(100% - 32px);left:16px;background:#e1f5fe;border-top-left-radius:50% 16px;border-top-right-radius:50% 16px;z-index:2}.ribbon[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:after, .ribbon[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;border-style:solid;bottom:-16px;z-index:0}.ribbon[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:before{left:0;border-color:transparent #71a7d0 transparent transparent;border-width:16px 16px 16px 0}.ribbon[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]:after{right:0;border-color:transparent transparent transparent #71a7d0;border-width:16px 0 16px 16px}']}),r),f=[{path:"",component:(a=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngAfterViewInit",value:function(){this.initEyes()}},{key:"initEyes",value:function(){$("body").mousemove((function(t){var e=$(".eye");e&&e.length&&e.each((function(e,n){var o=$(n),r=o.offset().left+o.width()/2,a=o.offset().top+o.height()/2,i=Math.atan2(t.pageX-r,t.pageY-a)*(180/Math.PI)*-1+180;o.css({"-webkit-transform":"rotate("+i+"deg)","-moz-transform":"rotate("+i+"deg)","-ms-transform":"rotate("+i+"deg)",transform:"rotate("+i+"deg)"})}))}))}}]),t}(),a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=l.Hb({type:a,selectors:[["app-paranoia"]],decls:53,vars:32,consts:[[1,"paranoia-small-container","d-block","d-xl-none"],[2,"text-align","center","margin-top","180px"],[1,"paranoia-container","d-none","d-xl-block"],[1,"text-center",2,"margin-top","50px"],["width","280px"],[1,"text-center",2,"margin-top","140px"],[1,"text-center",2,"margin-top","30px"],["width","370px"]],template:function(t,e){1&t&&(l.Sb(0,"h1"),l.Ac(1,"Paranoia"),l.Rb(),l.Sb(2,"div",0),l.Ob(3,"app-paranoia-computer"),l.Ob(4,"app-paranoia-computer"),l.Sb(5,"div",1),l.Ac(6," Vous n'avez pas l'acr\xe9dtation n\xe9cessaire pour utiliser un petit \xe9cran."),l.Ob(7,"br"),l.Ac(8," Veuillez agrandir votre \xe9cran ou vous serez accus\xe9 de traitrise."),l.Ob(9,"br"),l.Ob(10,"br"),l.Ac(11," L'ordinateur est votre ami. "),l.Rb(),l.Rb(),l.Sb(12,"div",2),l.Ob(13,"app-paranoia-computer"),l.Ob(14,"app-paranoia-computer"),l.Ob(15,"app-paranoia-computer"),l.Sb(16,"div",3),l.Sb(17,"h3"),l.Ac(18,"Bonjour Clarificateur."),l.Rb(),l.Ac(19," Ob\xe9issez \xe0 votre ami l'Ordinateur et prot\xe9gez le Complexe Alpha !"),l.Ob(20,"br"),l.Ac(21," Traquez les comploteurs et les mutants, d\xe9masquez les tra\xeetres parmi vos \xe9quipiers..."),l.Ob(22,"br"),l.Ac(23," Et prenez garde \xe0 ne pas \xeatre d\xe9masqu\xe9 vous-m\xeame !"),l.Ob(24,"br"),l.Rb(),l.Sb(25,"app-paranoia-ribbon",4),l.Ac(26," Sois heureux, citoyen."),l.Ob(27,"br"),l.Ac(28," \xcatre heureux est un devoir. "),l.Rb(),l.Sb(29,"div",5),l.Ac(30," Bienvenue dans l'ultime refuge de l'humanit\xe9 : le complexe Alpha."),l.Ob(31,"br"),l.Ac(32," Il n'existe rien en dehors du complexe Alpha."),l.Ob(33,"br"),l.Ac(34," L'Ordinateur veille sur le complexe alpha et ses citoyens."),l.Ob(35,"br"),l.Rb(),l.Sb(36,"div",6),l.Sb(37,"h3"),l.Ac(38,"Votre mission : \xe9liminer les tra\xeetres."),l.Rb(),l.Ac(39," Les tra\xeetres sont les ennemis de l'Ordinateur."),l.Ob(40,"br"),l.Ac(41," L'ordinateur est votre ami."),l.Ob(42,"br"),l.Rb(),l.Sb(43,"app-paranoia-ribbon",4),l.Ac(44," R\xe9fl\xe9chir, c'est d\xe9j\xe0 trahir. "),l.Rb(),l.Sb(45,"app-paranoia-ribbon",7),l.Ac(46," En cas de doute sur votre loyaut\xe9 :"),l.Ob(47,"br"),l.Ac(48," 1. placez votre laser sur votre tempe."),l.Ob(49,"br"),l.Ac(50," 2. pressez la d\xe9tente"),l.Ob(51,"br"),l.Rb(),l.Ac(52,". "),l.Rb()),2&t&&(l.zb(3),l.xc("right","170px")("top","30px"),l.zb(1),l.xc("left","170px")("top","320px"),l.zb(9),l.xc("left","70px")("top","150px"),l.zb(1),l.xc("left","960px")("top","270px"),l.zb(1),l.xc("left","470px")("top","570px"),l.zb(10),l.xc("left","415px")("top","185px"),l.zb(18),l.xc("left","90px")("top","505px"),l.zb(2),l.xc("left","650px")("top","535px"))},directives:[d,u],styles:[".paranoia-small-container[_ngcontent-%COMP%]{height:500px}.paranoia-container[_ngcontent-%COMP%], .paranoia-small-container[_ngcontent-%COMP%]{position:relative;width:100%;border:10px double}.paranoia-container[_ngcontent-%COMP%]{height:700px}"]}),a)}],g=((p=function t(){_classCallCheck(this,t)}).\u0275mod=l.Lb({type:p}),p.\u0275inj=l.Kb({factory:function(t){return new(t||p)},imports:[[s.f.forChild(f)],s.f]}),p),h=((i=function t(){_classCallCheck(this,t)}).\u0275mod=l.Lb({type:i}),i.\u0275inj=l.Kb({factory:function(t){return new(t||i)},imports:[[c.c,g,b.c]]}),i)}}]);