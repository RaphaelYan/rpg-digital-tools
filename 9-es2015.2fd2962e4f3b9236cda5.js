(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Lis3:function(e,t,i){"use strict";i.r(t),i.d(t,"CampaignGardiensDuTempsModule",(function(){return d}));var n=i("ofXK"),r=i("3Pt+"),s=i("tyNb"),c=i("fXoL");function a(e,t){if(1&e){const e=c.Tb();c.Sb(0,"div",21),c.ac("click",(function(){return c.tc(e),c.ec().currentZoom=null})),c.Ob(1,"img",22),c.Rb()}if(2&e){const e=c.ec();c.zb(1),c.kc("src",e.currentZoom,c.vc)}}const o=[{path:"",component:(()=>{class e{constructor(){this.showScenars={},this.currentZoom=null}ngAfterViewInit(){const e=[{name:"No\xeblie",proficiency:3,armor_class:15,pv:67,strength:2,dexterity:0,constitution:2,intelligence:0,wisdom:2,charisma:5,masteries:["dexterity","arcana","investigation","religion","insight","survival","charisma","performance"],expert:["investigation","insight"],toucheATout:!0},{name:"Julien",proficiency:3,armor_class:17,pv:51,strength:-1,dexterity:5,constitution:1,intelligence:2,wisdom:1,charisma:2,masteries:["dexterity","intelligence","deception","investigation","perception","persuasion","sleight_of_hand","stealth"],expert:["stealth","deception","investigation"]},{name:"Repi\xe9",proficiency:3,armor_class:20,pv:73,strength:-1,dexterity:3,constitution:3,intelligence:5,wisdom:0,charisma:-1,masteries:["constitution","intelligence","arcana","history","investigation","sleight_of_hand"]},{name:"Cl\xe9ment",proficiency:3,armor_class:18,pv:60,strength:3,dexterity:2,constitution:2,intelligence:0,wisdom:5,charisma:0,masteries:["wisdom","charisma","athletics","stealth","insight","deception","persuasion"]},{name:"M\xe9lodie",proficiency:3,armor_class:15,pv:90,strength:5,dexterity:2,constitution:3,intelligence:0,wisdom:0,charisma:0,masteries:["strength","constitution","athletics","nature","perception","survival","intimidation"]}],t=function(e,t,i,n,r=null){const s=e.masteries.includes(t);let c=n;return e.expert&&e.expert.includes(t)?(c+=i,c+=i):s?c+=i:e.toucheATout&&(c+=Math.trunc(i/2)),r?`<td class="value-${c} ${r}">`+c+"</td>":`<td class="value-${c}">`+c+"</td>"};let i="";for(const n of e)i+="<tr>",i+=`<th>${n.name}</th>`,i+=`<td class="value-${n.strength}">`+n.strength+"</td>",i+=`<td class="value-${n.dexterity}">`+n.dexterity+"</td>",i+=`<td class="value-${n.constitution}">`+n.constitution+"</td>",i+=`<td class="value-${n.intelligence}">`+n.intelligence+"</td>",i+=`<td class="value-${n.wisdom}">`+n.wisdom+"</td>",i+=`<td class="value-${n.charisma}">`+n.charisma+"</td>",i+="</tr>";$(".attributs").html(i),i="";for(const n of e)i+="<tr>",i+=`<th>${n.name}</th>`,i+=t(n,"strength",n.proficiency,n.strength),i+=t(n,"athletics",n.proficiency,n.strength),i+=t(n,"dexterity",n.proficiency,n.dexterity,"border-left"),i+=t(n,"acrobatics",n.proficiency,n.dexterity),i+=t(n,"sleight_of_hand",n.proficiency,n.dexterity),i+=t(n,"stealth",n.proficiency,n.dexterity),i+=t(n,"constitution",n.proficiency,n.constitution,"border-left"),i+=t(n,"intelligence",n.proficiency,n.intelligence,"border-left"),i+=t(n,"arcana",n.proficiency,n.intelligence),i+=t(n,"history",n.proficiency,n.intelligence),i+=t(n,"investigation",n.proficiency,n.intelligence),i+=t(n,"nature",n.proficiency,n.intelligence),i+=t(n,"religion",n.proficiency,n.intelligence),i+=t(n,"wisdom",n.proficiency,n.wisdom,"border-left"),i+=t(n,"animal_handling",n.proficiency,n.wisdom),i+=t(n,"insight",n.proficiency,n.wisdom),i+=t(n,"medicine",n.proficiency,n.wisdom),i+=t(n,"perception",n.proficiency,n.wisdom),i+=t(n,"survival",n.proficiency,n.wisdom),i+=t(n,"charisma",n.proficiency,n.charisma,"border-left"),i+=t(n,"deception",n.proficiency,n.charisma),i+=t(n,"intimidation",n.proficiency,n.charisma),i+=t(n,"performance",n.proficiency,n.charisma),i+=t(n,"persuasion",n.proficiency,n.charisma),i+="</tr>";$(".skills").html(i),i="";for(const n of e)i+="<tr>",i+=`<th>${n.name}</th>`,i+=`<td class="value-${Math.trunc(n.pv/10)}">`+n.pv+"</td>",i+=`<td class="value-${n.armor_class-12}">`+n.armor_class+"</td>",i+="</tr>";$(".stats").html(i)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["app-campaign-gardiens-du-temps"]],decls:69,vars:2,consts:[[1,"container"],[1,"card","mt-3"],[1,"card-body"],[1,"btn","btn-primary","mt-3",3,"click"],[1,"card","mt-3",3,"hidden"],[1,"row"],[1,"col-3"],["src","assets/gardiens/Tauren Chasseur - stats.png",3,"click"],["src","assets/gardiens/Tauren Chasseur - img.png",3,"click"],["src","assets/gardiens/Orc Shaman - img.png",3,"click"],["src","assets/gardiens/Orc Shaman - stats.png",3,"click"],["href","https://raphaelyan.github.io/rpg-digital-tools/dd-spells/TkmDqCnoTZYktJJWizlv","target","_blank"],["href","https://raphaelyan.github.io/rpg-digital-tools/dd-spells/PFXVQ847hUXu9tlvnodk","target","_blank"],["href","https://raphaelyan.github.io/rpg-digital-tools/dd-spells/0KfUmZiZdk37wie91Pra","target","_blank"],["href","https://raphaelyan.github.io/rpg-digital-tools/dd-spells/oCir6EM2L6zyMe40bqCF","target","_blank"],["href","https://raphaelyan.github.io/rpg-digital-tools/dd-spells/HeV4ZFSd2XtzZFvmwGjg","target","_blank"],["src","assets/gardiens/Orc Maitre-lame - stats.png",3,"click"],["src","assets/gardiens/Orc Maitre-lame - img.png",3,"click"],["src","assets/gardiens/Gobelin Bricoleur - img.png",3,"click"],["src","assets/gardiens/Gobelin Bricoleur - stats.png",3,"click"],["class","zoom",3,"click",4,"ngIf"],[1,"zoom",3,"click"],[3,"src"]],template:function(e,t){1&e&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Sb(2,"div",2),c.Bc(3," Bienvenue dans un lointain futur !"),c.Ob(4,"br"),c.Ob(5,"br"),c.Bc(6,' Vous \xeates des agents d\'une organisation secr\xe8te connue sous le nom des "Gardiens du Temps".'),c.Ob(7,"br"),c.Ob(8,"br"),c.Bc(9," Votre mission est de voyager dans le temps pour r\xe9soudre des myst\xe8res et emp\xeacher des anomalies temporelles."),c.Ob(10,"br"),c.Ob(11,"br"),c.Bc(12," Votre esprit sera s\xe9par\xe9 de votre corps, qui sera projet\xe9 dans un r\xe9ceptacle adapt\xe9 \xe0 l\u2019\xe9poque que vous allez visiter."),c.Ob(13,"br"),c.Ob(14,"br"),c.Bc(15," Vous devrez mener une enqu\xeate en explorant des lieux, en interagissant avec des personnages et en r\xe9solvant des \xe9nigmes."),c.Ob(16,"br"),c.Ob(17,"br"),c.Bc(18," Vous n'aurez que 3h pour r\xe9soudre le sc\xe9nario, au del\xe0, vous serez automatiquement renvoy\xe9s \xe0 votre \xe9poque."),c.Ob(19,"br"),c.Ob(20,"br"),c.Bc(21," Le destin du temps repose entre vos mains !"),c.Ob(22,"br"),c.Rb(),c.Rb(),c.Sb(23,"button",3),c.ac("click",(function(){return t.showScenars.tarides=!t.showScenars.tarides})),c.Bc(24,"Sc\xe9nar 1 : les tarides"),c.Rb(),c.Sb(25,"div",4),c.Sb(26,"div",2),c.Bc(27," Sc\xe9nar 1 : les tarides"),c.Ob(28,"br"),c.Ob(29,"br"),c.Sb(30,"div",5),c.Sb(31,"div",6),c.Sb(32,"img",7),c.ac("click",(function(){return t.currentZoom="assets/gardiens/Tauren Chasseur - stats.png"})),c.Rb(),c.Rb(),c.Sb(33,"div",6),c.Sb(34,"img",8),c.ac("click",(function(){return t.currentZoom="assets/gardiens/Tauren Chasseur - img.png"})),c.Rb(),c.Rb(),c.Sb(35,"div",6),c.Sb(36,"img",9),c.ac("click",(function(){return t.currentZoom="assets/gardiens/Orc Shaman - img.png"})),c.Rb(),c.Rb(),c.Sb(37,"div",6),c.Sb(38,"img",10),c.ac("click",(function(){return t.currentZoom="assets/gardiens/Orc Shaman - stats.png"})),c.Rb(),c.Bc(39," Pluie de gu\xe9rison : "),c.Sb(40,"a",11),c.Bc(41,"lien"),c.Rb(),c.Ob(42,"br"),c.Bc(43," Soif de sang : "),c.Sb(44,"a",12),c.Bc(45,"lien"),c.Rb(),c.Ob(46,"br"),c.Bc(47," Totem de gu\xe9rison : "),c.Sb(48,"a",13),c.Bc(49,"lien"),c.Rb(),c.Ob(50,"br"),c.Bc(51," Bouclier de foudre : "),c.Sb(52,"a",14),c.Bc(53,"lien"),c.Rb(),c.Ob(54,"br"),c.Bc(55," Totem serpent : "),c.Sb(56,"a",15),c.Bc(57,"lien"),c.Rb(),c.Ob(58,"br"),c.Rb(),c.Rb(),c.Sb(59,"div",5),c.Sb(60,"div",6),c.Sb(61,"img",16),c.ac("click",(function(){return t.currentZoom="assets/gardiens/Orc Maitre-lame - stats.png"})),c.Rb(),c.Rb(),c.Sb(62,"div",6),c.Sb(63,"img",17),c.ac("click",(function(){return t.currentZoom="assets/gardiens/Orc Maitre-lame - img.png"})),c.Rb(),c.Rb(),c.Sb(64,"div",6),c.Sb(65,"img",18),c.ac("click",(function(){return t.currentZoom="assets/gardiens/Gobelin Bricoleur - img.png"})),c.Rb(),c.Rb(),c.Sb(66,"div",6),c.Sb(67,"img",19),c.ac("click",(function(){return t.currentZoom="assets/gardiens/Gobelin Bricoleur - stats.png"})),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.zc(68,a,2,1,"div",20)),2&e&&(c.zb(25),c.kc("hidden",!t.showScenars.tarides),c.zb(43),c.kc("ngIf",t.currentZoom))},directives:[n.k],styles:["[_nghost-%COMP%]{height:1500px;display:block}[_nghost-%COMP%]     .container{max-width:100%;position:absolute;left:0;right:0;top:50px}.card-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;cursor:pointer}.zoom[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;text-align:center;background:#000}.zoom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;height:100vh;cursor:pointer}"]}),e})()}];let l=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[s.f.forChild(o)],s.f]}),e})(),d=(()=>{class e{}return e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({factory:function(t){return new(t||e)},imports:[[n.c,r.c,l]]}),e})()}}]);