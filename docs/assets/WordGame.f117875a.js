var D=Object.defineProperty;var _=(t,e,o)=>e in t?D(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var w=(t,e,o)=>(_(t,typeof e!="symbol"?e+"":e,o),o);import{u as m,$ as h,_ as W,b as v,d as k,e as s,c as d,g as S,w as C,a as n,t as a,n as b,F as u,f as x,h as I,o as c,i as N,j as G}from"./index.16939e8c.js";window.location.origin.includes("localhost");class L{constructor(){w(this,"store",m())}async getNewWord(){let e=Math.round(this.store.score),o=e<4?4:e>20?Math.round(Math.random()*19)+1:e,r="????";return await h.ajax({method:"GET",url:"https://random-words5.p.rapidapi.com/getRandom?wordLength="+o,headers:{"X-RapidAPI-Key":"4a7d2d866cmshc7e4ee9da718287p1320b9jsncdfd25eca8a3","X-RapidAPI-Host":"random-words5.p.rapidapi.com"},success:function(i){r=i}}),this.getDefinition(r),r}async getDefinition(e){let o={definition:"No definiation",partOfSpeech:"unknown"};await h.ajax({method:"GET",url:"https://api.dictionaryapi.dev/api/v2/entries/en/"+e,success:function(r){o={definition:r[0].meanings[0].definitions[0].definition,partOfSpeech:r[0].meanings[0].partOfSpeech}}}),this.store.wordDetails=o}async checkWordCompleted(){this.store.typedWord.length==this.store.word.length&&(this.store.typedWord="",this.store.increaseScore(),this.store.word=await this.getNewWord())}endGame(){this.store.game="game over"}moveWord(){this.store.wordDirection.y?this.store.wordDirection.height++:this.store.wordDirection.height--;let e=this.store.wordDirection.height;(e>window.innerHeight-50||e<1)&&(this.store.wordDirection.y=!this.store.wordDirection.y),this.store.wordDirection.x?this.store.wordDirection.width++:this.store.wordDirection.width--;let o=this.store.wordDirection.width;(o>window.innerWidth-100||o<1)&&(this.store.wordDirection.x=!this.store.wordDirection.x)}}const f=new L;const $={setup(){const t=m();v(()=>{h(document).keypress(function(r){let i=r.keyCode||r.which,l=String.fromCharCode(i);o(l)}),e.speedInterval=setInterval(()=>{f.moveWord()},e.speed)});const e=k({word:s(()=>t.word),typedWord:s(()=>t.typedWord),wordLength:s(()=>t.score),wordDetails:s(()=>t.wordDetails),wordDirection:s(()=>t.wordDirection),speedInterval:"",speed:10});function o(r){e.word[e.typedWord.length]==r?t.typedWord+=r:t.typedWord="",f.checkWordCompleted()}return e}},j=G("\u2190"),M={class:"definition"},O={class:"about text-center"};function T(t,e,o,r,i,l){const g=I("router-link");return c(),d(u,null,[S(g,{to:"/",class:"back"},{default:C(()=>[j]),_:1}),n("p",M,a(t.wordDetails.definition)+" -"+a(t.wordDetails.partOfSpeech),1),n("div",O,[n("div",{class:"word button-73",style:b("left: "+t.wordDirection.width+"px; top: "+t.wordDirection.height+"px;")},[(c(!0),d(u,null,x(t.word,(y,p)=>(c(),d("span",{key:p,class:N(t.typedWord.length>p?"typed":"")},a(y),3))),128))],4)])],64)}const R=W($,[["render",T],["__scopeId","data-v-b775ede5"]]);export{R as default};
