import{u as f,_ as g,d as v,$ as l,e as w,f as I,g as i,c as n,a as m,t as p,F as u,h as _,o as h,n as M}from"./index.b1b7c682.js";import{e as C}from"./explodeAnimation.220ee98f.js";class S{constructor(){setTimeout(()=>{this.store=f()},100)}getRandomLetter(){let e=this.store.numList;return this.store.score>10&&(e+=this.store.letterList),this.store.score>50&&(e+=this.store.specialCharList),e[Math.floor(Math.random()*e.length)]}setChar(){this.store.letters.length>10&&this.endGame();let e=this.getRandomLetter();this.store.letters.push({char:e,height:Math.random()*(window.innerHeight-50),width:Math.random()*(window.innerWidth-50),direction:Math.floor(Math.random()*4)})}endGame(){this.store.game="game over",JSON.parse(window.localStorage.getItem("letterScore"))<this.store.score&&window.localStorage.setItem("letterScore",this.store.score)}moveChars(){this.store.letters.forEach(e=>{switch(e.direction){case 0:if(e.height++,e.height>=window.innerHeight-50){e.height=window.innerHeight-50;let r=[1,2,3];e.direction=r[Math.floor(Math.random()*3)]}return;case 1:if(e.height--,e.height<=50){e.height=50;let r=[0,2,3];e.direction=r[Math.floor(Math.random()*3)]}return;case 2:if(e.width++,e.width>=window.innerWidth-50){e.width=window.innerWidth-50;let r=[1,0,3];e.direction=r[Math.floor(Math.random()*3)]}return;case 3:if(e.width--,e.width<=50){e.width=50;let r=[1,2,0];e.direction=r[Math.floor(Math.random()*3)]}return}})}}const a=new S;const y={watch:{score(){this.score%3==0&&(this.speed--,clearInterval(this.speedInterval),this.speedInterval=setInterval(()=>{a.moveChars()},this.speed)),this.score%2==0&&(this.rate-=10,clearInterval(this.rateInterval),this.rateInterval=setInterval(()=>{a.setChar()},this.rate))}},setup(){const t=f();v(()=>{e.rateInterval=setInterval(()=>{a.setChar()},e.rate),e.speedInterval=setInterval(()=>{a.moveChars()},e.speed),l(document).keypress(function(r){let d=r.keyCode||r.which,c=String.fromCharCode(d),o=t.letters.findIndex(s=>s.char==c);o>=0&&t.game!="game over"?(C(t.letters[o].width,t.letters[o].height),t.letters.splice(o,1),t.score++):(a.setChar(),a.setChar())})}),w(()=>{clearInterval(e.rateInterval),clearInterval(e.speedInterval),l(document).unbind("keypress")});const e=I({letters:i(()=>t.letters),score:i(()=>t.score),game:i(()=>t.game),speed:100,rate:2e3,speedInterval:null,rateInterval:null});return e}},L=["id"];function x(t,e,r,d,c,o){return h(),n(u,null,[m("h1",null,p(t.score),1),(h(!0),n(u,null,_(t.letters,s=>(h(),n("div",{id:"typeField",key:s},[m("span",{id:s.char,class:"char button-73",style:M("left: "+s.width+"px; top: "+s.height+"px;")},p(s.char),13,L)]))),128))],64)}const B=g(y,[["render",x],["__scopeId","data-v-216dc003"]]);export{B as default};
