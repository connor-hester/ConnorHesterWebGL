import{A as h,C as u,G as f}from"./vendor.8051c3f6.js";const g=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}};g();function c(){let o=new h({antialias:!0,backgroundColor:1118481});document.body.style.margin="0",o.renderer.view.style.position="absolute",o.renderer.view.style.display="block",o.renderer.resize(window.innerWidth,window.innerHeight);let l=new u,d=new f,n=new f,e,r,t=!0,s,a;if(e=w()[0],r=w()[1],e>12?(t=!1,e=e-12):(t=!0,e=e),d.beginFill(16777215,.75),r>=10){s=Math.floor(r/10),a=r%10;for(let i=0;i<a;i++)i<5&&d.drawCircle(3*window.innerWidth/4+40,3*window.innerHeight/4-60*i,30),i>=5&&i<9&&d.drawCircle(3*window.innerWidth/4+100,3*window.innerHeight/4-60*(i-5),30);for(let i=0;i<s;i++)i<5&&d.drawCircle(3*window.innerWidth/4-210,3*window.innerHeight/4-70*i-5,35),i>=5&&i<9&&d.drawCircle(3*window.innerWidth/4-150,3*window.innerHeight/4-70*(i-5)-5,35)}else for(let i=0;i<r;i++)i<5&&d.drawCircle(3*window.innerWidth/4+90,3*window.innerHeight/4-60*i,30),i>=5&&i<9&&d.drawCircle(3*window.innerWidth/4+150,3*window.innerHeight/4-60*(i-5),30);for(let i=0;i<e;i++)i<4&&d.drawCircle(window.innerWidth/4-100,3*window.innerHeight/4-100*i-10,50),i>=4&&i<8&&d.drawCircle(window.innerWidth/4,3*window.innerHeight/4-100*(i-4)-10,50),i>=8&&d.drawCircle(window.innerWidth/4+100,3*window.innerHeight/4-100*(i-8)-10,50);n.beginFill(16777215),n.drawRect(window.innerWidth/16-50,window.innerHeight/8-50,7*window.innerWidth/8+100,3*window.innerHeight/4+100),n.endFill(),e>11&&t===!1||e<=4&&t===!0?n.beginFill(1057315):e>4&&e<=6&&t===!0||t===!1&&e>8&&e<=11?n.beginFill(1982272):e>6&&e<=8&&t===!0?n.beginFill(3501423):e>8&&e<=10&&t===!0||e>2&&e<=4&&t===!1?n.beginFill(6144453):e>10&&t===!0||e<=2&&t===!1?n.beginFill(7862268):e>6&&e<=8&&t===!1&&n.beginFill(2840409),n.drawRect(window.innerWidth/16,window.innerHeight/8,7*window.innerWidth/8,3*window.innerHeight/4),n.endFill(),n.beginFill(16777215),n.drawRect(window.innerWidth/2-50,3*window.innerHeight/8,20,20),n.drawRect(window.innerWidth/2-50,5*window.innerHeight/8,20,20),n.endFill(),l.addChild(n),l.addChild(d),o.stage.addChild(l),window.addEventListener("resize",i=>{o.renderer.resize(window.innerWidth,window.innerHeight)}),document.body.appendChild(o.view),o.ticker.speed=2,o.ticker.add(w)}function w(){let o=new Date,l=o.getHours(),d=o.getMinutes();return[l,d]}c();c();