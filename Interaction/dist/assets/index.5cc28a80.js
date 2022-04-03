import{S as R,a as k,P as F,W as T,b as U,O as A,c as y,d as I,B as D,M,e as L,G as H,f as _,T as N,R as B,g as $,h as q,D as z,i as K,C as X,V as Y,j as Z}from"./vendor.6e14ea27.js";const J=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function d(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(t){if(t.ep)return;t.ep=!0;const i=d(t);fetch(t.href,i)}};J();var Q=`precision mediump float;

uniform float u_time;

varying vec2 UV;

void main(){
	UV = uv;
	vec4 mvPosition = modelViewMatrix*vec4(position,1.);
	mvPosition.y += sin(u_time / 2. + uv.x) * 2.0;
	mvPosition.x += cos(u_time / 1.3 + uv.y) * 2.0;
	gl_Position = projectionMatrix*mvPosition;
}`,ee=`precision mediump float;

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
}`;let r,o,m,P=new X,e,S,g,b,te,p,v,w,l,n;const oe=new Y(0,0,1);let h,C;function ne(){se(),ie(),ae()}function ie(){b=new R,document.body.appendChild(b.dom)}function se(){o=new k,m=new F(75,window.innerWidth/window.innerHeight,.1,1e3),m.position.z=5,r=new T,r.shadowMap.enabled=!0,r.shadowMap.type=U,r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(r.domElement),g=new A(m,r.domElement);const c=1;e=new y(16777215),e.position.set(-0,9,-25),e.intensity=1,o.add(e),e=new y(16711680),e.position.set(-7,1.5,3),e.intensity=c+.2,o.add(e),e=new y(255),e.position.set(7,1.5,3),e.intensity=c+.2,o.add(e),e=new y(65280),e.position.set(0,-5,3),e.intensity=c,o.add(e),S=new I(16777215,2,0,Math.PI/32),S.position.set(-25,3.5,0),S.castShadow=!0,o.add(S);const a=1024,d=.5,u=500;e.shadow.mapSize.width=a,e.shadow.mapSize.height=a,e.shadow.camera.near=d,e.shadow.camera.far=u;const t=new D(2,6,2),i=new M({color:16777215});h=new L(t,i),h.castShadow=!0,h.position.x=-5,h.position.y=-4.1,h.position.z=0,o.add(h),v=new H,o.add(v);const f=new _().setPath("../resources/models/");f.load("cannonWColor.gltf",s=>{w=s.scene,w.scale.set(.25,.25,.25),w.position.x=-4.5,w.position.y=-1,w.position.z=0,w.castShadow=!0,o.add(w)}),f.load("toothWColor.gltf",s=>{l=s.scene,l.scale.set(2.5,2.5,2.5),l.position.x=0,l.position.y=2,l.position.z=-17,l.castShadow=!0,o.add(l)}),o.add(v);let x;new N().setPath("../resources/textures/").load("uv_grid_opengl.jpg",function(s){s.wrapS=s.wrapT=B,s.anisotropy=r.capabilities.getMaxAnisotropy(),x=new $({map:s}),te.material=x});const E=new q(26,16,12,10),V=new M({color:10066329,side:z,flatShading:!0}),j={u_time:{type:"f",value:1},u_resolution:{type:"v2",value:new Z(800,800)}};C=new K({uniforms:j,vertexShader:Q,fragmentShader:ee,side:z}),p=new L(E,V),p.position.z=0,p.position.y=-2,p.receiveShadow=!0,p.rotateX(Math.PI/2),o.add(p),g.addEventListener("dragstart",function(s){s.object.material.emissive.set(11184810)}),g.addEventListener("dragend",function(s){s.object.material.emissive.set(0)}),document.addEventListener("keypress",G,!1);function G(){new _().setPath("../resources/models/").load("toothWColor.gltf",O=>{n=O.scene,n.scale.set(.12,.12,.12),n.position.x=-3.5,n.position.y=-.3,n.position.z=0,n.castShadow=!0,console.log(n),v.add(n)})}P.start,W()}function ae(){window.addEventListener("resize",re,!1),window.addEventListener("keydown",c=>{const{key:a}=c;switch(a){case"e":const d=window.open("","Canvas Image"),{domElement:u}=r;r.render(o,m);const t=u.toDataURL();if(!d)return;d.document.write(`<img src='${t}' width='${u.width}' height='${u.height}'>`);break}})}function re(){m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}function W(){requestAnimationFrame(()=>{W()});let c=P.getDelta();C.uniforms.u_time.value+=c,n!=null&&n.position.x>7&&v.remove(n),n!=null&&(n.position.x+=.07,n.rotateOnAxis(oe,-.095)),l!=null&&l.rotateY(.02);const a=p.geometry.attributes.position;for(let d=0;d<a.count;d++)a.setZ(d,Math.sin(P.getElapsedTime()+d-a.count/2)*.6);p.geometry.attributes.position.needsUpdate=!0,b&&b.update(),g&&g.update(),r.render(o,m)}ne();
