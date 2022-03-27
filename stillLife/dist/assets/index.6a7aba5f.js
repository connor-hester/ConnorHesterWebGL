import{S as G,a as V,P as A,W as B,b as F,s as O,O as k,A as U,c as L,d as D,B as H,M as z,e as u,G as N,f as T,T as j,R as I,g as $,h as q,D as C,i as K,C as J,V as Q}from"./vendor.b60c4e9b.js";const X=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}};X();var Y=`precision mediump float;

uniform float u_time;

varying vec2 UV;

void main(){
	UV = uv;
	vec4 mvPosition = modelViewMatrix*vec4(position,1.);
	mvPosition.y += sin(u_time / 2. + uv.x) * 2.0;
	mvPosition.x += cos(u_time / 1.3 + uv.y) * 2.0;
	gl_Position = projectionMatrix*mvPosition;
}`,Z=`precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

varying vec2 UV;

void main(void){
	vec2 position = UV * 2. - 1.;
	
	float red = abs( 
		sin(position.x * position.y + u_time / 5.)
	);
	float green = abs( 
		sin(position.x * position.y + u_time / 4.) 
	);
	float blue = abs( 
		sin(position.x * position.y + u_time / 3.) 
	);

	gl_FragColor=vec4(red, green, blue, 1.0);
}`;let i,n,w,ee=new J,E,e,P,x,m,h,g,y,v,b,S,M,d;function te(){oe(),ne(),ie()}function ne(){x=new G,document.body.appendChild(x.dom)}function oe(){n=new V,w=new A(70,window.innerWidth/window.innerHeight,.1,1e3),w.position.z=6,i=new B,i.shadowMap.enabled=!0,i.shadowMap.type=F,i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),i.outputEncoding=O,document.body.appendChild(i.domElement),P=new k(w,i.domElement),E=new U(16777215),n.add(E);const f=.25;e=new L(16711680),e.position.set(-4,-3,-5),e.castShadow=!0,e.intensity=8,n.add(e),e=new L(16711680),e.position.set(4,-3,-5),e.castShadow=!0,e.intensity=8,n.add(e),e=new L(16777215),e.position.set(-.5,.5,4),e.castShadow=!0,e.intensity=f,n.add(e);const s=e.clone();s.intensity=1-f,s.castShadow=!1,n.add(s);const l=new D(16777215,1);l.position.set(0,4,3),n.add(l);const r=1024,t=0,o=500;e.shadow.mapSize.width=r,e.shadow.mapSize.height=r,e.shadow.camera.near=t,e.shadow.camera.far=o;const a=new H,c=new z({color:1118481});m=new u(a,c),m.castShadow=!0,m.position.set(0,-5.9,0),m.scale.set(5,6,3),n.add(m),h=new u(a,c),h.position.set(4,5,-3),h.rotation.set(.9,0,0),n.add(h),g=new u(a,c),g.position.set(4,5,-3),g.rotation.set(0,.9,0),n.add(g),y=new u(a,c),y.position.set(-6,1,-2),y.rotation.set(.9,0,0),n.add(y),v=new u(a,c),v.position.set(-6,1,-2),v.rotation.set(0,.9,0),n.add(v),b=new u(a,c),b.position.set(5,-1,-1),b.rotation.set(.9,0,0),n.add(b),S=new u(a,c),S.position.set(5,-1,-1),S.rotation.set(0,.9,0),n.add(S),M=new N,new T().setPath("../resources/models/").load("flower.gltf",p=>{d=p.scene,console.log(d),d.scale.set(.15,.15,.15),d.position.x=-2.5,d.position.y=-3,d.position.z=0,d.castShadow=!0,M.add(d)}),n.add(M);let _;new j().setPath("../resources/textures/").load("marble3.png",function(p){p.wrapS=p.wrapT=I,p.anisotropy=i.capabilities.getMaxAnisotropy(),_=new $({map:p}),m.material=_}),new q(28,24,10,10),new z({color:1118481,side:C,flatShading:!0});const W={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new Q(800,800)}};new K({uniforms:W,vertexShader:Y,fragmentShader:Z,side:C}),R()}function ie(){window.addEventListener("resize",ae,!1),window.addEventListener("keydown",f=>{const{key:s}=f;switch(s){case"e":const l=window.open("","Canvas Image"),{domElement:r}=i;i.render(n,w);const t=r.toDataURL();if(!l)return;l.document.write(`<img src='${t}' width='${r.width}' height='${r.height}'>`);break}})}function ae(){w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}function R(){requestAnimationFrame(()=>{R()}),ee.getDelta(),h.rotation.x+=.01,g.rotation.y+=.01,y.rotation.x-=.01,v.rotation.y-=.01,b.rotation.x+=.01,S.rotation.y-=.01,x&&x.update(),P&&P.update(),i.render(n,w)}te();
