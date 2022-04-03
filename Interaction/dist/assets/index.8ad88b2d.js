import{S as G,a as O,P as R,W as k,b as F,O as U,c as y,d as A,B as T,M as P,e as x,G as D,f as L,T as H,R as I,g as N,h as B,D as M,i as $,C as q,V as K,j as Z}from"./vendor.6e14ea27.js";const J=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}};J();var Q=`precision mediump float;

uniform float u_time;

varying vec2 UV;

void main(){
	UV = uv;
	vec4 mvPosition = modelViewMatrix*vec4(position,1.);
	mvPosition.y += sin(u_time / 2. + uv.x) * 2.0;
	mvPosition.x += cos(u_time / 1.3 + uv.y) * 2.0;
	gl_Position = projectionMatrix*mvPosition;
}`,X=`precision mediump float;

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
}`;let s,r,u,b=new q,t,h,v,Y,m,g,p,n;const ee=new K(0,0,1);let w,_;function te(){oe(),ne(),ie()}function ne(){v=new G,document.body.appendChild(v.dom)}function oe(){r=new O,u=new R(75,window.innerWidth/window.innerHeight,.1,1e3),u.position.z=5,s=new k,s.shadowMap.enabled=!0,s.shadowMap.type=F,s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(s.domElement),h=new U(u,s.domElement);const l=1;t=new y(16711680),t.position.set(-2,1.5,3),t.intensity=l+.2,r.add(t),t=new y(255),t.position.set(2,1.5,3),t.intensity=l+.2,r.add(t),t=new y(65280),t.position.set(0,-3,3),t.intensity=l,r.add(t);const o=new A(16777215,1,0,Math.PI/16);o.position.set(-25,0,0),o.castShadow=!0,r.add(o);const a=1024,c=.5,e=500;t.shadow.mapSize.width=a,t.shadow.mapSize.height=a,t.shadow.camera.near=c,t.shadow.camera.far=e;const i=new T(2,6,2),f=new P({color:16777215});w=new x(i,f),w.castShadow=!0,w.position.x=-5,w.position.y=-4.1,w.position.z=0,r.add(w),g=new D,r.add(g),new L().setPath("../resources/models/").load("cannonWColor.gltf",d=>{p=d.scene,p.scale.set(.25,.25,.25),p.position.x=-4.5,p.position.y=-1,p.position.z=0,p.castShadow=!0,r.add(p)}),r.add(g);let S;new H().setPath("../resources/textures/").load("uv_grid_opengl.jpg",function(d){d.wrapS=d.wrapT=I,d.anisotropy=s.capabilities.getMaxAnisotropy(),S=new N({map:d}),Y.material=S});const C=new B(26,16,12,10),E=new P({color:10066329,side:M,flatShading:!0}),W={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new Z(800,800)}};_=new $({uniforms:W,vertexShader:Q,fragmentShader:X,side:M}),m=new x(C,E),m.position.z=-3,m.receiveShadow=!0,r.add(m),h.addEventListener("dragstart",function(d){d.object.material.emissive.set(11184810)}),h.addEventListener("dragend",function(d){d.object.material.emissive.set(0)}),document.addEventListener("keypress",V,!1);function V(){new L().setPath("../resources/models/").load("tooth.gltf",j=>{n=j.scene,n.scale.set(.12,.12,.12),n.position.x=-3.5,n.position.y=-.3,n.position.z=0,n.castShadow=!0,console.log(n),g.add(n)})}b.start,z()}function ie(){window.addEventListener("resize",ae,!1),window.addEventListener("keydown",l=>{const{key:o}=l;switch(o){case"e":const a=window.open("","Canvas Image"),{domElement:c}=s;s.render(r,u);const e=c.toDataURL();if(!a)return;a.document.write(`<img src='${e}' width='${c.width}' height='${c.height}'>`);break}})}function ae(){u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}function z(){requestAnimationFrame(()=>{z()});let l=b.getDelta();_.uniforms.u_time.value+=l,n!=null&&n.position.x>7&&g.remove(n),n!=null&&(n.position.x+=.07),n!=null&&n.rotateOnAxis(ee,-.095);const o=m.geometry.attributes.position;for(let a=0;a<o.count;a++)o.setZ(a,Math.sin(b.getElapsedTime()+a-o.count/2)*.4);m.geometry.attributes.position.needsUpdate=!0,v&&v.update(),h&&h.update(),s.render(r,u)}te();
