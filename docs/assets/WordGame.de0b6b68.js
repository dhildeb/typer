import{u as g,$ as s,_ as y,d as v,e as D,f as W,g as n,c as l,a as d,n as f,t as a,F as u,h as S,o as w,i as _}from"./index.b1b7c682.js";import{e as I}from"./explodeAnimation.220ee98f.js";class k{constructor(){setTimeout(()=>{this.store=g()},100)}async getNewWord(){let t=Math.round(this.store.score),r=t<4?4:t>15?Math.round(Math.random()*13)+2:t,i="????";return await s.ajax({method:"GET",url:"https://random-word-api.herokuapp.com/word?length="+r,success:function(o){i=Array.isArray(o)?o[0]:o}}),this.getDefinition(i),i}async getDefinition(t){let r={definition:"No definiation",partOfSpeech:"unknown"};await s.ajax({method:"GET",url:"https://api.dictionaryapi.dev/api/v2/entries/en/"+t,success:function(i){r={definition:i[0].meanings[0].definitions[0].definition,partOfSpeech:i[0].meanings[0].partOfSpeech}}}),this.store.wordDetails=r!=null?r:"Could not find definition"}async completeWord(){return this.store.typedWord="",this.store.increaseScore(),this.store.word=await this.getNewWord(),!0}endGame(){this.store.game="game over",JSON.parse(window.localStorage.getItem("wordScore"))<this.store.score&&window.localStorage.setItem("wordScore",this.store.score)}moveWord(){this.store.wordDirection.y?this.store.wordDirection.height++:this.store.wordDirection.height--;let t=this.store.wordDirection.height;(t>window.innerHeight-50||t<1)&&(this.store.wordDirection.y=!this.store.wordDirection.y),this.store.wordDirection.x?this.store.wordDirection.width++:this.store.wordDirection.width--;let r=this.store.wordDirection.width;(r>window.innerWidth-100||r<1)&&(this.store.wordDirection.x=!this.store.wordDirection.x)}}const p=new k;const C={watch:{timer(){this.timer<=0&&(clearInterval(this.timerInterval),p.endGame())}},setup(){const e=g();v(()=>{s(document).keypress(function(o){let c=o.keyCode||o.which,h=String.fromCharCode(c);i(h)}),t.speedInterval=setInterval(()=>{p.moveWord()},t.speed)}),D(()=>{clearInterval(t.speedInterval),s(document).unbind("keypress"),e.typedWord=""});const t=W({word:n(()=>e.word),typedWord:n(()=>e.typedWord),wordLength:n(()=>e.score),wordDetails:n(()=>e.wordDetails),wordDirection:n(()=>e.wordDirection),score:n(()=>e.score),speedInterval:"",timerInterval:"",timer:3e4,speed:10});function r(){t.timerInterval=setInterval(()=>{t.timer-=50},50)}async function i(o){t.word[t.typedWord.length]==o?e.typedWord+=o:e.typedWord="",e.typedWord.length==e.word.length&&(e.score==0?r():t.timer+=e.word.length*100,e.typedWord.length==e.word.length&&(e.score>0&&clearInterval(t.timerInterval),s("#wordBtn").addClass("hidden"),I(e.wordDirection.width,e.wordDirection.height),await p.completeWord()&&(e.score>1&&r(),s("#wordBtn").removeClass("hidden"))))}return t}},B={class:"definition"},G={id:"wordBtn",class:"word button-73"};function x(e,t,r,i,o,c){return w(),l(u,null,[d("div",{class:"timer",style:f("width: "+e.timer/3e4*100+"vw")},null,4),d("h1",null,a(e.score),1),d("p",B,a(e.wordDetails.definition)+" -"+a(e.wordDetails.partOfSpeech),1),d("div",{class:"word text-center js-explode",style:f("left: "+e.wordDirection.width+"px; top: "+e.wordDirection.height+"px;")},[d("div",G,[(w(!0),l(u,null,S(e.word,(h,m)=>(w(),l("span",{key:m,class:_(e.typedWord.length>m?"typed":"")},a(h),3))),128))])],4)],64)}const T=y(C,[["render",x],["__scopeId","data-v-77d32300"]]);export{T as default};
