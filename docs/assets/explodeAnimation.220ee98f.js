function u(d,h){const r=["#000000","#ffffff","#adcfff","#ffffff","#ffffff","#ffffff"],y=(i,t)=>{let o=[],a=window.devicePixelRatio,e=document.createElement("canvas"),n=e.getContext("2d");e.style.position="absolute",e.style.left=i-100+"px",e.style.top=t-100+"px",e.style.pointerEvents="none",e.style.width=200+"px",e.style.height=200+"px",e.style.zIndex=100,e.width=200*a,e.height=200*a,document.body.appendChild(e);for(var s=0;s<50;s++)o.push({x:e.width/2,y:e.height/2,radius:l(20,30),color:r[Math.floor(Math.random()*r.length)],rotation:l(0,360,!0),speed:l(8,12),friction:.9,opacity:l(0,.5,!0),yVel:0,gravity:.1});f(o,n,e.width,e.height),setTimeout(()=>document.body.removeChild(e),1e3)},f=(i,t,o,a)=>(requestAnimationFrame(()=>f(i,t,o,a)),t.clearRect(0,0,o,a),i.forEach((e,n)=>{e.x+=e.speed*Math.cos(e.rotation*Math.PI/180),e.y+=e.speed*Math.sin(e.rotation*Math.PI/180),e.opacity-=.01,e.speed*=e.friction,e.radius*=e.friction,e.yVel+=e.gravity,e.y+=e.yVel,!(e.opacity<0||e.radius<0)&&(t.beginPath(),t.globalAlpha=e.opacity,t.fillStyle=e.color,t.arc(e.x,e.y,e.radius,0,2*Math.PI,!1),t.fill())}),t),l=(i,t,o)=>parseFloat((Math.random()*((i||1)-(t||0))+(t||0)).toFixed(o||0));y(d,h)}export{u as e};
