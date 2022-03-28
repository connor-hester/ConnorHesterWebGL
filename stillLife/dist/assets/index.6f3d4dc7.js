import{S as U,a as D,P as N,W as T,b as j,s as A,O as $,H as q,c as B,d as I,B as K,M as F,e as i,G as J,f as Q,T as X,R as Y,g as Z,h as ee,D as H,i as te,C as oe,V as ne}from"./vendor.ad4a9256.js";const ie=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function u(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(o){if(o.ep)return;o.ep=!0;const e=u(o);fetch(o.href,e)}};ie();var ae=`precision mediump float;

uniform float u_time;

varying vec2 UV;

void main(){
	UV = uv;
	vec4 mvPosition = modelViewMatrix*vec4(position,1.);
	mvPosition.y += sin(u_time / 2. + uv.x) * 2.0;
	mvPosition.x += cos(u_time / 1.3 + uv.y) * 2.0;
	gl_Position = projectionMatrix*mvPosition;
}`,se=`precision mediump float;

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
}`;let r,t,p,re=new oe,s,W,R,a,m,f,h,g,y,v,b,x,S,L,P,M,_,z,C,G,c;function de(){ce(),le(),ue()}function le(){R=new U,document.body.appendChild(R.dom)}function ce(){t=new D,p=new N(80,window.innerWidth/window.innerHeight,.1,1e3),p.position.z=6,r=new T,r.shadowMap.enabled=!0,r.shadowMap.type=j,r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),r.outputEncoding=A,document.body.appendChild(r.domElement),W=new $(p,r.domElement);const E=new q(9961727,16711680,2.5);t.add(E),s=new B(16711680),s.position.set(-4,-3,-5),s.castShadow=!0,s.intensity=8,t.add(s),s=new B(16711680),s.position.set(4,-3,-5),s.castShadow=!0,s.intensity=8,t.add(s);const d=new I(16777215,1);d.position.set(0,4,3),t.add(d);const u=1024,l=0,o=500;s.shadow.mapSize.width=u,s.shadow.mapSize.height=u,s.shadow.camera.near=l,s.shadow.camera.far=o;const e=new K,n=new F({color:1118481});m=new i(e,n),m.castShadow=!0,m.position.set(0,-5.9,0),m.scale.set(5,6,3),t.add(m),f=new i(e,n),f.position.set(6,2,-3),f.rotation.set(.9,0,0),t.add(f),h=new i(e,n),h.position.set(6,2,-3),h.rotation.set(0,.9,0),t.add(h),g=new i(e,n),g.position.set(-6,2,-3),g.rotation.set(.9,0,0),t.add(g),y=new i(e,n),y.position.set(-6,2,-3),y.rotation.set(0,.9,0),t.add(y),v=new i(e,n),v.position.set(4,4,-2),v.rotation.set(.9,0,0),t.add(v),b=new i(e,n),b.position.set(4,4,-2),b.rotation.set(0,.9,0),t.add(b),x=new i(e,n),x.position.set(-4,4,-2),x.rotation.set(.9,0,0),t.add(x),S=new i(e,n),S.position.set(-4,4,-2),S.rotation.set(0,.9,0),t.add(S),L=new i(e,n),L.position.set(0,5,-1),L.rotation.set(.9,0,0),t.add(L),P=new i(e,n),P.position.set(0,5,-1),P.rotation.set(0,.9,0),t.add(P),M=new i(e,n),M.position.set(-7,-1,-4),M.rotation.set(.9,0,0),t.add(M),_=new i(e,n),_.position.set(-7,-1,-4),_.rotation.set(0,.9,0),t.add(_),z=new i(e,n),z.position.set(7,-1,-4),z.rotation.set(.9,0,0),t.add(z),C=new i(e,n),C.position.set(7,-1,-4),C.rotation.set(0,.9,0),t.add(C),G=new J,new Q().setPath("../resources/models/").load("flower.gltf",w=>{c=w.scene,console.log(c),c.scale.set(.15,.15,.15),c.position.x=-2.5,c.position.y=-3,c.position.z=0,c.castShadow=!0,G.add(c)}),t.add(G);let V;new X().setPath("../resources/textures/").load("marble3.png",function(w){w.wrapS=w.wrapT=Y,w.anisotropy=r.capabilities.getMaxAnisotropy(),V=new Z({map:w}),m.material=V}),new ee(28,24,10,10),new F({color:1118481,side:H,flatShading:!0});const k={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new ne(800,800)}};new te({uniforms:k,vertexShader:ae,fragmentShader:se,side:H}),O()}function ue(){window.addEventListener("resize",pe,!1),window.addEventListener("keydown",E=>{const{key:d}=E;switch(d){case"e":const u=window.open("","Canvas Image"),{domElement:l}=r;r.render(t,p);const o=l.toDataURL();if(!u)return;u.document.write(`<img src='${o}' width='${l.width}' height='${l.height}'>`);break}})}function pe(){p.aspect=window.innerWidth/window.innerHeight,p.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}function O(){requestAnimationFrame(()=>{O()}),re.getDelta(),a=.03,f.rotation.x+=a,h.rotation.y+=a,g.rotation.x-=a,y.rotation.y-=a,v.rotation.x-=a,b.rotation.y-=a,x.rotation.x+=a,S.rotation.y+=a,L.rotation.z+=a,P.rotation.x+=a,M.rotation.x+=a,_.rotation.y+=a,z.rotation.x-=a,C.rotation.y-=a,R&&R.update(),W&&W.update(),r.render(t,p)}de();
