(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{JstS:function(c,e,t){"use strict";t.r(e),t.d(e,"EscapeModule",(function(){return k}));var i=t("ofXK"),s=t("3Pt+"),n=t("tyNb"),a=t("fXoL");function r(c,e){1&c&&a.Nb(0,"i",7)}function o(c,e){1&c&&a.Nb(0,"i",7)}function l(c,e){1&c&&a.Nb(0,"i",7)}function d(c,e){if(1&c){const c=a.Sb();a.Rb(0,"li",5),a.Zb("click",(function(){a.kc(c);const t=e.$implicit;return a.cc(2).selectGame(t)})),a.rc(1),a.Rb(2,"span"),a.rc(3," (Difficult\xe9 : "),a.pc(4,r,1,0,"i",6),a.pc(5,o,1,0,"i",6),a.pc(6,l,1,0,"i",6),a.rc(7," ) "),a.Qb(),a.Qb()}if(2&c){const c=e.$implicit;a.zb(1),a.tc(" ",c.title," "),a.zb(3),a.fc("ngIf",c.difficulty>=1),a.zb(1),a.fc("ngIf",c.difficulty>=2),a.zb(1),a.fc("ngIf",c.difficulty>=3)}}function f(c,e){if(1&c&&(a.Rb(0,"h2"),a.rc(1,"S\xe9lectionnez votre jeu :"),a.Qb(),a.Rb(2,"ul"),a.Rb(3,"li"),a.Rb(4,"a",3),a.rc(5,"Les r\xe8gles ici !"),a.Qb(),a.Qb(),a.pc(6,d,8,4,"li",4),a.Qb()),2&c){const c=a.cc();a.zb(6),a.fc("ngForOf",c.games)}}function g(c,e){1&c&&a.Nb(0,"div",16)}function u(c,e){if(1&c){const c=a.Sb();a.Rb(0,"div",10),a.pc(1,g,1,0,"div",11),a.Nb(2,"img",12),a.Nb(3,"img",12),a.Rb(4,"div",13),a.Rb(5,"i",5),a.Zb("click",(function(){a.kc(c);const t=e.$implicit;return a.cc(2).cardClicked(t)})),a.Qb(),a.Rb(6,"i",14),a.Zb("click",(function(){a.kc(c);const t=e.$implicit;return a.cc(2).currentZoom=t})),a.Qb(),a.Rb(7,"i",15),a.Zb("click",(function(){a.kc(c);const t=e.$implicit;return a.cc(2).cardTrashed(t)})),a.Qb(),a.Qb(),a.Qb()}if(2&c){const c=e.$implicit,t=a.cc(2);a.zb(1),a.fc("ngIf",t.cardsTrashed[c]),a.zb(1),a.gc("src","assets/escape/",t.selectedGame.slug,"/",c,"-b.png",a.mc),a.fc("hidden",t.cardsClicked[c]),a.zb(1),a.gc("src","assets/escape/",t.selectedGame.slug,"/",c,"-f.png",a.mc),a.fc("hidden",!t.cardsClicked[c]),a.zb(2),a.Cb("fa fa-eye",t.cardsClicked[c]?"-slash":"","")}}function b(c,e){if(1&c){const c=a.Sb();a.Rb(0,"h2"),a.Rb(1,"i",8),a.Zb("click",(function(){return a.kc(c),a.cc().selectedGame=null})),a.Qb(),a.rc(2),a.Qb(),a.pc(3,u,8,10,"div",9)}if(2&c){const c=a.cc();a.zb(2),a.tc(" ",c.selectedGame.title,""),a.zb(1),a.fc("ngForOf",c.selectedGame.cards)}}function p(c,e){if(1&c){const c=a.Sb();a.Rb(0,"div",17),a.Zb("click",(function(){return a.kc(c),a.cc().currentZoom=null})),a.Nb(1,"img",12),a.Nb(2,"img",12),a.Qb()}if(2&c){const c=a.cc();a.zb(1),a.gc("src","assets/escape/",c.selectedGame.slug,"/",c.currentZoom,"-b.png",a.mc),a.fc("hidden",c.cardsClicked[c.currentZoom]),a.zb(1),a.gc("src","assets/escape/",c.selectedGame.slug,"/",c.currentZoom,"-f.png",a.mc),a.fc("hidden",!c.cardsClicked[c.currentZoom])}}const m=[{path:"",component:(()=>{class c{constructor(){this.cardsClicked={},this.cardsTrashed={},this.selectedGame=null,this.currentZoom=null,this.games=[{title:"La 5\xe8me avenue",slug:"avenue",difficulty:1,cards:["tuto","init","8","11","15","22","25","30","37","42","43","44","52","58","66","73","86","88","92","C","F","G","H","R","V","W"]},{title:"L'\xe9lite",slug:"elite",difficulty:2,cards:["init","4","15","21","22","32","35","42","47","50","60","63","67","73","79","80","85","C","K","M"]},{title:"A la poursuite de cabrakan",slug:"cabrakan",difficulty:2,cards:["tuto","title","init","6","10","12","15","18","20","24","26","30","35","38","43","46","54","59","60","75","85","95"]},{title:"Le temple de RA",slug:"temple-ra",difficulty:3,cards:["init","6","8","9","15","20","22","23","24","28","30","37","39","42","55","60","66","85","88","91","A","B","H","R"]}];try{const c=localStorage.getItem("escape.selectedGame");if(c){const e=this.games.find(e=>e.slug===c);e&&(this.selectedGame=e,this.retriedStoredCard())}}catch(c){}}selectGame(c){this.selectedGame=c,localStorage.setItem("escape.selectedGame",c.slug),this.retriedStoredCard()}cardClicked(c){this.cardsClicked[c]=!this.cardsClicked[c],localStorage.setItem("escape.cardsClicked."+this.selectedGame.slug,JSON.stringify(this.cardsClicked))}cardTrashed(c){this.cardsTrashed[c]=!this.cardsTrashed[c],localStorage.setItem("escape.cardsTrashed."+this.selectedGame.slug,JSON.stringify(this.cardsTrashed))}retriedStoredCard(){const c=localStorage.getItem("escape.cardsClicked."+this.selectedGame.slug);if(c)try{this.cardsClicked=JSON.parse(c)}catch(t){}else this.cardsClicked={};const e=localStorage.getItem("escape.cardsTrashed."+this.selectedGame.slug);if(e)try{this.cardsTrashed=JSON.parse(e)}catch(i){}else this.cardsClicked={}}}return c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=a.Gb({type:c,selectors:[["app-escape"]],decls:4,vars:3,consts:[[1,"container"],[3,"ngIf"],["class","zoom",3,"click",4,"ngIf"],["href","assets/escape/rules_fr.pdf","target","_blank"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["class","fa fa-lock",4,"ngIf"],[1,"fa","fa-lock"],[1,"fa","fa-arrow-left","clickable",3,"click"],["class","escape-card",4,"ngFor","ngForOf"],[1,"escape-card"],["class","trash",4,"ngIf"],[3,"src","hidden"],[1,"actions"],[1,"fa","fa-search-plus",3,"click"],[1,"fa","fa-trash",3,"click"],[1,"trash"],[1,"zoom",3,"click"]],template:function(c,e){1&c&&(a.Rb(0,"div",0),a.pc(1,f,7,1,"ng-template",1),a.pc(2,b,4,2,"ng-template",1),a.pc(3,p,3,6,"div",2),a.Qb()),2&c&&(a.zb(1),a.fc("ngIf",!e.selectedGame),a.zb(1),a.fc("ngIf",e.selectedGame),a.zb(1),a.fc("ngIf",e.currentZoom))},directives:[i.j,i.i],styles:["img[_ngcontent-%COMP%]{width:350px;height:650px}.escape-card[_ngcontent-%COMP%]{float:left;position:relative}i[_ngcontent-%COMP%] + i[_ngcontent-%COMP%]{margin-left:5px}li[_ngcontent-%COMP%]{margin-top:20px;cursor:pointer}li[_ngcontent-%COMP%]:hover{text-decoration:underline}.actions[_ngcontent-%COMP%]{margin-bottom:15px}.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:30%;text-align:center;font-size:20px;cursor:pointer;padding:5px 0}.actions[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{background:#90ee90}.trash[_ngcontent-%COMP%]{position:absolute;width:350px;height:650px;opacity:.8}.trash[_ngcontent-%COMP%], .zoom[_ngcontent-%COMP%]{left:0;top:0;background:#000}.zoom[_ngcontent-%COMP%]{position:fixed;right:0;text-align:center}.zoom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;height:100vh;cursor:pointer}"]}),c})()}];let h=(()=>{class c{}return c.\u0275mod=a.Kb({type:c}),c.\u0275inj=a.Jb({factory:function(e){return new(e||c)},imports:[[n.f.forChild(m)],n.f]}),c})(),k=(()=>{class c{}return c.\u0275mod=a.Kb({type:c}),c.\u0275inj=a.Jb({factory:function(e){return new(e||c)},imports:[[i.c,h,s.c]]}),c})()}}]);