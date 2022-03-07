import{g as C,C as g,A as N,P as O,G as f,T as M,a as u,b as j}from"./vendor.cc5e7a53.js";const E=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&t(h)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}};E();let c=C.timeline(),F,T,A,k,P,D,I,r=window.innerWidth,l=window.innerHeight,L=15264237,G=6320534,_=16743324,z=11564697,q=12189623,J=12238801,x=new g,R=new g,S=new g,m=new g,v=new g,W=new g,w=new g,i=r/24,d=l/17.5,p,B="https://community-open-weather-map.p.rapidapi.com/weather?q=New%20york%20city&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=JSON";const K={async:!0,crossDomain:!0,url:B,method:"GET",json:!0,headers:{"x-rapidapi-host":"community-open-weather-map.p.rapidapi.com","x-rapidapi-key":"8f9ac0a3ecmshb4c31864ba3f288p186f7fjsnf3588e26a837"}},U=n=>new Promise(e=>{$.ajax(n).done(o=>{e(o)})}),Q=async()=>{let n=new N({antialias:!0,backgroundColor:L});document.body.style.margin="0",n.renderer.view.style.position="absolute",n.renderer.view.style.display="block",n.renderer.resize(window.innerWidth,window.innerHeight);let e=await U(K),o=e.length;e=e.slice(5,o-1),p=JSON.parse(e),F=p.main.temp,T=p.main.temp_max,A=p.main.temp_min,k=p.main.humidity,P=p.wind.speed,D=p.wind.deg,I=p.weather[0].description,n.stage.interactive=!0,n.stage.hitArea=new O([0,0,window.innerWidth,0,window.innerWidth,window.innerHeight,0,window.innerHeight]),document.body.appendChild(n.view),n.stage.addChild(R),n.stage.addChild(x),n.stage.addChild(S),n.stage.addChild(m),n.stage.addChild(v),n.stage.addChild(W);let t=new f;t.beginFill(1850187),t.lineStyle(0),t.drawRect(0,0,r,d),t.drawRect(0,0,i,l),t.drawRect(r-i,0,i,l),t.drawRect(0,l-d,r,d),t.drawRect(r/2-i/4,0,i/2,l),t.drawRect(0,2*l/3-d/4,r/2,d/2),t.drawRect(r/2-i/4,l/2,r/3,d/2),t.drawRect(5*r/6-i/4,0,i/2,l),t.drawRect(r/2+i/4,2*l/3,r/3-i/4,d/2),t.drawRect(r/2+1.59*i,l/2+1.5*d,10,20),t.drawCircle(r/2+4*i,l/2-3.85*d,6),t.endFill(),t.lineStyle(4,1850187,1),t.beginFill(0,0),t.drawCircle(r/2+4*i,l/2-3.85*d,r/28.8),t.drawCircle(r/2+4*i,l/2-3.85*d,r/14.4),t.drawCircle(r/2+4*i,l/2-3.85*d,r/9.6),t.drawRect(5*r/6+i,l-2*d,i,1),t.drawRect(5*r/6+i,l/2-5.9*d,1,3*l/4-d/2),t.drawRect(5*r/6+2*i,l/2-5.9*d,1,3*l/4-d/2),t.lineStyle(0),t.endFill(),n.stage.addChild(t);let a=new M({fill:L,fontSize:16}),s=new M({fill:1850187,fontSize:12}),h=new u("High Temp (\u02DAF)",a);w.addChild(h),h=new u("Low Temp (\u02DAF)",a),w.addChild(h),h=new u("Current Temp (\u02DAF)",a),w.addChild(h),h=new u("Wind Speed/Direction (mph)",a),w.addChild(h),h=new u("Humidity (%)",a),w.addChild(h),h=new u("10",s),w.addChild(h),h=new u("10",s),w.addChild(h),h=new u("50",s),w.addChild(h),w.getChildAt(0).setTransform(i/2,l/2-1.25*d,1,1,3*Math.PI/2,0,0,0,0),w.getChildAt(1).setTransform(r/4-i/2,d/4,1,1,0,0,0,0,0),w.getChildAt(2).setTransform(i/2,3*l/4+2.65*d,1,1,3*Math.PI/2,0,0,0,0),w.getChildAt(3).setTransform(3*r/4-3.5*i,d/4,1,1,0,0,0,0,0),w.getChildAt(4).setTransform(r-i/2,l/2-d,1,1,Math.PI/2,0,0,0,0),w.getChildAt(5).setTransform(1.1*i,5*l/6-2.1*d,1,1,0,0,0,0,0),w.getChildAt(6).setTransform(r/2+2.85*i,l/2-4*d,1,1,0,0,0,0,0),w.getChildAt(7).setTransform(5*r/6+2.25*i,l/2+d/4,1,1,0,0,0,0,0),n.stage.addChild(w),window.addEventListener("resize",H=>{n.renderer.resize(window.innerWidth,window.innerHeight),n.stage.hitArea=new O([0,0,window.innerWidth,0,window.innerWidth,window.innerHeight,0,window.innerHeight])});let y=new j().addFolder("timeline");y.open();let b={pause:()=>c.pause(),play:()=>c.play(),reverse:()=>c.reverse(),progress:0};y.add(b,"pause"),y.add(b,"play"),y.add(b,"reverse"),y.add(b,"progress",0,1,.01).onChange(H=>{c.play(),c.progress(H),c.pause()}),c.add(V()),c.add(X()),c.add(Y()),c.add(Z()),c.add(ee()),c.play()};function V(){let n=C.timeline();for(let e=0;e<Math.floor(T);e++){let o=new f;o.beginFill(_),o.drawRect(i+e*((r-2.25*i)/2/T),0,(r-2.25*i)/2/T-5,.1),o.endFill(),x.addChild(o)}for(let e=0;e<Math.floor(A);e++){let o=new f;o.beginFill(G),o.drawRect(0,d+e*((2*l/3-d)/A),.1,(2*l/3-d)/A-5),o.endFill(),R.addChild(o)}for(let e=0;e<Math.floor(T);e++)n.fromTo(x.getChildAt(e),{height:x.getChildAt(e).scale.y},{height:2*l/3,duration:1.5,ease:"power3.inOut"},"<+5%");for(let e=0;e<Math.floor(A);e++)n.fromTo(R.getChildAt(e),{width:R.getChildAt(e).scale.x},{width:(r-i)/2+i/4,duration:1.5,ease:"power3.inOut"},"<+5%");return n}function X(){let n=C.timeline(),e=F%10,o=Math.floor(F/10);for(let t=0;t<o;t++)for(let a=0;a<10;a++){let s=new f;s.beginFill(z),s.drawCircle(2*i+i*a,2*(l/3)+d+t*21,10),s.endFill(),S.addChild(s)}for(let t=0;t<e;t++){let a=new f;a.beginFill(z),a.drawCircle(2*i+i*t,2*(l/3)+d+21*o,10),a.endFill(),S.addChild(a)}for(let t=0;t<F;t++)n.fromTo(S.getChildAt(t),{alpha:0},{alpha:1,duration:2,ease:"slow(1,1,false)"},"<+5%");return n}function Y(){let n=D*(Math.PI/180),e=C.timeline(),o=new f;return o.beginFill(q),o.drawEllipse(0,-1*P,10,25),o.endFill(),m.addChild(o),m.position.set(5*r/4+2*i,l/2+d),m.pivot.x=m.x/2,m.pivot.y=m.y/2,e.fromTo(m.getChildAt(0),{height:m.getChildAt(0).scale.y},{height:5*P,duration:2,ease:"power3.out"}),e.fromTo(m.getChildAt(0),{rotation:0},{rotation:n,duration:3,ease:"back.out(3)"}),e}function Z(){let n=C.timeline(),e=new f;return e.beginFill(J),e.drawRect(0,0,i,10),e.endFill(),e.setTransform(r-2*i,l-2*d,1,1,Math.PI,0,0,0,0),v.addChild(e),n.fromTo(v.getChildAt(0),{height:v.getChildAt(0).scale.y},{height:k*5,duration:3.5,ease:"elastic.out(1,0.3)"}),n}function ee(){let n=C.timeline(),e=new u("Current Weather: "+I);return e.style=new M({fill:0,fontSize:20}),e.x=r/2+1.75*i,e.y=l/2+1.5*d,W.addChild(e),n.fromTo(W.getChildAt(0),{width:W.getChildAt(0).scale.x},{width:r/6,duration:2,ease:"steps(8)"}),n}Q();
