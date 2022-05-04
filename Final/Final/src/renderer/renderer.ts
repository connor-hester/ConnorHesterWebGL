import './style.css';
import * as THREE from 'three';
import { ExtrudeGeometry, Group, Object3D, Raycaster, ShaderMaterial, Shading, Vector2 } from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//import { DragControls } from 'three/examples/jsm/controls/DragControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as DAT from 'dat.gui';
import * as CANNON from 'cannon-es'

// import { baseView } from '../views/baseView';
// import { baseViewExtend } from '../views/baseViewExtend';
//import { viewOne } from '../views/viewOne';

import cactusPath from './assets/models/cactus.gltf';
import spikePath from './assets/models/cactusSpike.gltf';
import barrelPath from './assets/models/barrel.gltf';
import sandPath from './assets/textures/desertSand.jpg';
import woodPath from './assets/textures/woodTexture.png';
import smallBlockPath from './assets/textures/smallBlockTexture.png';
import westernFontPath from './assets/RioGrande.json';


import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import TextureLoader from './TextureLoader';


let model = {
	groupX: 0,
	groupY: 0,
	groupAngle: 0,
	activeView: 0,
}

let scene:THREE.Scene;
let camera:THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let clock = new THREE.Clock();
let stats: any;
let raycaster: THREE.Raycaster;
let pointerPosition: THREE.Vector2;
//let viewOne: ViewOne;
let shaderMat: ShaderMaterial;
let controls: OrbitControls;

let balloon: THREE.Mesh;
let cactus: THREE.Group;
let spike: THREE.Mesh;
let barrel0: THREE.Group;
let barrel1: THREE.Group;
let lightPoint:THREE.PointLight;
let floor:THREE.Mesh;
let back:THREE.Mesh;
let smallBlock0:THREE.Mesh;
let smallBlock1:THREE.Mesh;
let smallBlock2:THREE.Mesh;
let smallBlock3:THREE.Mesh;
let smallBlock4:THREE.Mesh;
let textMesh0:THREE.Mesh;
let textMesh1:THREE.Mesh;
let textMesh2:THREE.Mesh;
let textMesh3:THREE.Mesh;
let supportBeam0:THREE.Mesh;
let supportBeam1:THREE.Mesh;
let sign1:THREE.Mesh;
let sign2:THREE.Mesh;
let roof:THREE.Mesh;
let spikeArray: Array<THREE.Mesh>;
let spikeCounter:number;

let world:CANNON.World;
let sphereBody:CANNON.Body;
let sphereArray:Array<CANNON.Body>;
let balloonBody:CANNON.Body;
let balloonBodyArray: Array<CANNON.Body>;
let balloonArray: Array<THREE.Mesh>;

let balloonCounter:number;
let balloonBodyCounter:number;

let sandTexture:THREE.Texture;
let woodTexture:THREE.Texture;
let smallBlockTexture:THREE.Texture;

//let bulletsRem:number;
let balloonsPopped:number;
let balloonTextMesh:THREE.Mesh;
let bulletTextMesh:THREE.Mesh;
let addedBalloon:boolean;
let addedBullets:boolean;


function main() {
    // loadShaders()
	initScene();
	initStats();
	//initGUI();
	initListeners();
}

function initStats() {
	stats = new (Stats as any)();
	document.body.appendChild(stats.dom);
}

function initGUI() {
	const gui = new DAT.GUI();
	gui.add(model, 'groupX', -4, 4, 0.1)
	gui.add(model, 'groupY', -3, 3, 0.1)
	gui.add(model, 'groupAngle', -Math.PI, Math.PI, 0.1).listen()
}

function initScene() {
	scene = new THREE.Scene();
	scene.background= new THREE.Color(0xC8FAFF);

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.z = 11;
	camera.position.y=1.5;

	renderer = new THREE.WebGLRenderer();
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	//viewOne = new ViewOne(model, renderer);
	

	sphereArray=new Array<CANNON.Body>(19);
	spikeArray=new Array<THREE.Mesh>(19);
	balloonArray=new Array<THREE.Mesh>(15);
	balloonBodyArray=new Array<CANNON.Body>(15);
	
	world=new CANNON.World({
		gravity: new CANNON.Vec3(0,0, -1.5), // m/s²
	  });
	  world.broadphase = new CANNON.NaiveBroadphase() //next three lines from Cannon-es documentation collision example
	  ;(world.solver as CANNON.GSSolver).iterations = 5
	  world.allowSleep = true
	  
	// // viewOne = new ViewOne(model, renderer);
	// // views.push(viewOne);

	// // viewOne.scene.background = new THREE.Color(0xffffff)

	// // viewTwo = new ViewTwo(model, renderer);
	// // views.push(viewTwo);

	controls = new OrbitControls(camera, renderer.domElement);

	lightPoint = new THREE.PointLight(0xFFFFFF);
	lightPoint.position.set(0, 3, 10);
	lightPoint.castShadow = true;
	lightPoint.intensity = 2;
	scene.add(lightPoint);
	lightPoint = new THREE.PointLight(0xFFFFFF);
	lightPoint.position.set(0, 3, -10);
	lightPoint.castShadow = true;
	lightPoint.intensity = 1;
	scene.add(lightPoint);

	raycaster = new THREE.Raycaster();
	pointerPosition = new THREE.Vector2(0,0);

	const geometryFloor= new THREE.BoxBufferGeometry(27,4,27,6,6,6);
	const materialFloor= new THREE.MeshPhongMaterial({color:0xFFFFFF});
	const geometrySpike = new THREE.ConeBufferGeometry(0.07,0.35,10,4);
	const materialSpike = new THREE.MeshPhongMaterial({color:0x000000});
	const geometryBalloon=new THREE.SphereBufferGeometry(0.3,10,10);
	const materialBalloon=new THREE.MeshPhongMaterial({color:0xFF0000});
	const geometryBack=new THREE.BoxBufferGeometry(12,12,2,6,6,6);
	const materialBack=new THREE.MeshPhongMaterial({color:0xFFFFFF});
	const geometrySmallBlock= new THREE.BoxBufferGeometry(3,3,3,3,3,3);
	const materialSmallBlock= new THREE.MeshPhongMaterial({color:0xFFFFFF});
	const titleTextMat=new THREE.MeshPhongMaterial({color:0xD9BC2B});
	const instructionTextMat=new THREE.MeshPhongMaterial({color:0xD9BC2B});
	const materialSupport=new THREE.MeshBasicMaterial({color:0x2C0A02});
	const geometrySupport=new THREE.CylinderBufferGeometry(0.25,0.25,8,8,8);
	const geometryRoof=new THREE.CylinderBufferGeometry(1,1,6,3,3);
	const signTextMat=new THREE.MeshPhongMaterial({color:0x000000});
	const signMat=new THREE.MeshBasicMaterial({color:0x715F42});
	const signGeo=new THREE.BoxBufferGeometry(2.5,2,0.2,3,3,3);
	//const geometryText=new T

	const textLoader=new FontLoader();
	const fontData=textLoader.parse(westernFontPath);

		const titleTextGeo= new TextGeometry( 'Sharpshooter', {font: fontData, size: 0.75, height: 0.75, curveSegments: 12,});
		const instructionTextGeo=new TextGeometry('POT-Move    Button-Shoot',{font: fontData, size:0.5, height:0.5, curveSegments:12})
		const signOneGeo=new TextGeometry('Bullets:',{font:fontData, size:0.3, height:0.1, curveSegments:12})
		const signTwoGeo=new TextGeometry('Balloons:',{font:fontData,size:0.3, height:0.1, curveSegments:12})
		textMesh0=new THREE.Mesh(titleTextGeo,titleTextMat);
		textMesh0.position.set(-3.5,7.3,-1.9);
		textMesh0.rotation.x=(Math.PI/10);
		scene.add(textMesh0);
		textMesh1=new THREE.Mesh(instructionTextGeo,instructionTextMat);
		textMesh1.position.set(-4.2,-2,-1.2);
		scene.add(textMesh1);
		textMesh2=new THREE.Mesh(signOneGeo,signTextMat);
		textMesh2.position.set(4,2,-1.4);
		textMesh2.rotation.y=-0.25;
		scene.add(textMesh2);
		textMesh3=new THREE.Mesh(signTwoGeo,signTextMat);
		textMesh3.position.set(-6,2,-1);
		textMesh3.rotation.y=0.25;
		scene.add(textMesh3);

	floor=new THREE.Mesh(geometryFloor,materialFloor);
	floor.position.set(0,-5,-4);
	scene.add(floor);
	let textureMaterial: THREE.Material;
	let textureLoader = new THREE.TextureLoader();
    textureLoader.load(sandPath, function (texture) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        sandTexture = texture;

		textureMaterial = new THREE.MeshBasicMaterial({map: texture});

		floor.material = textureMaterial;

    });
	back=new THREE.Mesh(geometryBack,materialBack);
	back.position.set(0,3.4,-7);
	scene.add(back);
	textureLoader.load(woodPath, function (texture) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        sandTexture = texture;

		textureMaterial = new THREE.MeshBasicMaterial({map: texture});

		back.material = textureMaterial;

    });
	supportBeam0=new THREE.Mesh(geometrySupport,materialSupport);
	supportBeam0.position.set(4.5,3.3,-2);
	scene.add(supportBeam0);
	supportBeam1=new THREE.Mesh(geometrySupport,materialSupport);
	supportBeam1.position.set(-4.5,3.3,-2);
	scene.add(supportBeam1);

	roof=new THREE.Mesh(geometryRoof,materialSupport);
	roof.position.set(0,8.5,-4);
	roof.scale.set(3,2,1);
	roof.rotation.z=Math.PI/2;
	roof.rotation.x=-1.25;
	scene.add(roof);

	sign1=new THREE.Mesh(signGeo,signMat);
	sign1.position.set(-5.1,1.7,-1.3);
	sign1.rotation.y=0.25;
	scene.add(sign1);
	sign2=new THREE.Mesh(signGeo,signMat);
	sign2.position.set(4.9,1.7,-1.3);
	sign2.rotation.y=-0.25;
	scene.add(sign2);
	
	smallBlock0=new THREE.Mesh(geometrySmallBlock,materialSmallBlock);
	smallBlock0.position.set(0,-2,-2);
	smallBlock0.scale.set(0.8,0.8,0.8);
	scene.add(smallBlock0);
	smallBlock1=new THREE.Mesh(geometrySmallBlock,materialSmallBlock);
	smallBlock1.position.set(1.95,-2,-2);
	smallBlock1.scale.set(0.8,0.8,0.8);
	scene.add(smallBlock1);
	smallBlock2=new THREE.Mesh(geometrySmallBlock,materialSmallBlock);
	smallBlock2.position.set(-1.95,-2,-2);
	smallBlock2.scale.set(0.8,0.8,0.8);
	scene.add(smallBlock2);
	smallBlock3=new THREE.Mesh(geometrySmallBlock,materialSmallBlock);
	smallBlock3.position.set(3.9,-2,-2);
	smallBlock3.scale.set(0.8,0.8,0.8);
	scene.add(smallBlock3);
	smallBlock4=new THREE.Mesh(geometrySmallBlock,materialSmallBlock);
	smallBlock4.position.set(-3.9,-2,-2);
	smallBlock4.scale.set(0.8,0.8,0.8);
	scene.add(smallBlock4);
	textureLoader.load(smallBlockPath, function (texture) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        smallBlockTexture = texture;

		textureMaterial = new THREE.MeshBasicMaterial({map: texture});

		smallBlock0.material = textureMaterial;
		smallBlock1.material = textureMaterial;
		smallBlock2.material = textureMaterial;
		smallBlock3.material = textureMaterial;
		smallBlock4.material = textureMaterial;
		roof.material=textureMaterial;
    });
	
	const modelLoader = new GLTFLoader();
	
	cactus=new THREE.Group;
	modelLoader.load(cactusPath, (gltf) => {
		cactus = gltf.scene;
		cactus.scale.set(0.25,0.25,0.25);
		cactus.position.y=1;
		cactus.castShadow=true;
		scene.add(cactus);
	});
	
	barrel0=new THREE.Group;
	modelLoader.load(barrelPath,(gltf)=>{
		barrel0=gltf.scene;
		barrel0.position.set(-6,-2,-1.9);
		barrel0.scale.set(16,17,16);
		barrel0.rotation.x=Math.PI/2;
		scene.add(barrel0);
	})
	barrel1=new THREE.Group;
	modelLoader.load(barrelPath,(gltf)=>{
		barrel1=gltf.scene;
		barrel1.position.set(6.25,-2,-2);
		barrel1.scale.set(16,17,16);
		scene.add(barrel1);
	})

	for(let i=0;i<20;i++){
		sphereBody = new CANNON.Body({
			mass: 5, // kg
			shape: new CANNON.Sphere(0.5),
		});
		sphereBody.velocity.set(0,0,-2);
		sphereBody.linearDamping=0;
		sphereBody.position.set(cactus.position.x, cactus.position.y, 0) // m
		//world.addBody(sphereBody);
		sphereArray[i]=sphereBody;
	}

	for(let i=0;i<20;i++){
		spike=new THREE.Mesh(geometrySpike, materialSpike);
		spike.position.x=cactus.position.x;
		spike.position.y=cactus.position.y;
		spike.rotation.x=-1*Math.PI/2;
		spikeArray[i]=spike;
	}
	
	balloonBodyCounter=0;
	for(let i=0;i<4;i++){
		for(let j=0;j<4;j++){
			balloonBody=new CANNON.Body({
				isTrigger:true, shape:new CANNON.Sphere(0.3)
			});
			balloonBody.position.set(2*j-3,2*i,-5.5);
			world.addBody(balloonBody);
			balloonBodyArray[balloonBodyCounter]=balloonBody;
			balloonBodyCounter++;
		}
	}
	balloon=new THREE.Mesh;
	balloonCounter=0;
	for(let i=0;i<4;i++){
			for(let j=0;j<4;j++){
				balloon=new THREE.Mesh(geometryBalloon,materialBalloon);
				balloon.position.set(2*j-3,2*i,-5.5);
				balloon.castShadow=true;
				scene.add(balloon);
				balloonArray[balloonCounter]=balloon;
				balloonCounter++;
			}
		}
	balloonsPopped=0;
	spikeCounter=0;
	addedBalloon=false;
	addedBullets=false;
	// //world.defaultContactMaterial.contactEquationStiffness = 1e6;
	
	// Init animation
	animate();
}

function initListeners() {
	for(let j=0;j<16;j++){
		balloonBodyArray[j].addEventListener('collide', (event:any) => {
			for(let i=0;i<20;i++){
				if (event.body === sphereArray[i]) {
				  console.log('Bullet '+i+" hit balloon "+j);
				scene.remove(balloonArray[j]);
				  scene.remove(spikeArray[i]);
				  balloonBodyArray[i].position.set(-50,0,0);
				  balloonsPopped++;
				  addedBalloon=false;
				}
			}
		})
	}

	window.electronAPI.fireBullet((event:any, value:any) => {
		sphereArray[spikeCounter].position.x=cactus.position.x;
		sphereArray[spikeCounter].position.y=cactus.position.y+1.5;
		spikeArray[spikeCounter].position.x=cactus.position.x;
		spikeArray[spikeCounter].position.y=cactus.position.y+1.5;
		world.addBody(sphereArray[spikeCounter]);
		scene.add(spikeArray[spikeCounter]);
		spikeCounter++;
		addedBullets=false;
		// viewTwo.scene.background = new THREE.Color(value)
	})

	window.electronAPI.updateCactusX((event: any, value: any) => {
		cactus.position.x=4*value;
		// model.groupAngle = value * -Math.PI;
	})

	window.addEventListener('resize', onWindowResize, false);

	window.addEventListener('pointermove', onPointerMove);

	// window.addEventListener('keydown', (event) => {
	// 	const { key } = event;
	// 	// console.log(key);

	// 	switch (key) {
	// 		case 'e':
	// 			const win = window.open('', 'Canvas Image');

	// 			const { domElement } = renderer;

	// 			// Makse sure scene is rendered.
    //             switch (model.activeView) {
    //                 case 0:
    //                     renderer.render(viewOne.scene, viewOne.camera);
    //                     break;
            
    //                 case 1:
    //                     renderer.render(viewTwo.scene, viewTwo.camera);
    //                     break;
            
    //                 default:
    //                     break;
    //             }

	// 			const src = domElement.toDataURL();

	// 			if (!win) return;

	// 			win.document.write(`<img src='${src}' width='${domElement.width}' height='${domElement.height}'>`);
	// 			break;

	// 		case 'ArrowRight':
	// 			model.activeView = (model.activeView + 1) % views.length
	// 			break;

	// 		case 'ArrowLeft':
	// 			model.activeView = (model.activeView - 1)
	// 			if (model.activeView < 0) {
	// 				model.activeView = views.length - 1;
	// 			}
	// 			break;

	// 		default:
	// 			break;
	// 	}
	// });
}

function onWindowResize() {
	// viewOne.onWindowResize();
}

function onPointerMove(event: any) {
	pointerPosition.x = (event.clientX / window.innerWidth) * 2 - 1;
	pointerPosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
}


function animate() {
	requestAnimationFrame(() => {
		animate();
	});
	//console.log(sphereBody.position.y);
	let delta = clock.getDelta();
	
	world.fixedStep();

	cactus.position.y=Math.sin(clock.getElapsedTime())*4+2;
	//viewOne.update(clock,delta);
	for(let i=0;i<spikeCounter;i++){
		spikeArray[i].position.z=sphereArray[i].position.z;
	}
	// // switch (model.activeView) {
	// // 	case 0:
	// // 		viewOne.update(clock,delta);
	// // 		// if(model.groupAngle < 0) {
	// // 		// 	window.electronAPI.writeLEDStatus(0)
	// // 		// } else {
	// // 		// 	window.electronAPI.writeLEDStatus(1)
	// // 		// }
	// // 		window.electronAPI.writeLEDBrightness((model.groupAngle + Math.PI) / (Math.PI*2))
	// // 		break;

	// // 	case 1:
	// // 		viewTwo.update(clock,delta);
	// // 		break;

	// // 	default:
	// // 		break;
	// // }
	const textLoader=new FontLoader();
	const fontData=textLoader.parse(westernFontPath);
	const fontMat=new THREE.MeshPhongMaterial({color:0xFFFFFF});
	const balloonText=balloonsPopped.toString();
	const bulletText=(20-spikeCounter).toString();
		const balloonTextGeo= new TextGeometry( balloonText, {
			font: fontData,
			size: 0.75,
			height: 0.1,
			curveSegments: 12,
		});
		const bulletTextGeo= new TextGeometry( bulletText, {
			font: fontData,
			size: 0.75,
			height: 0.1,
			curveSegments: 12,
		});
		
		if(balloonsPopped===0 && addedBalloon===false){
			balloonTextMesh=new THREE.Mesh(balloonTextGeo,fontMat);
			balloonTextMesh.position.set(-5.3,1,-1.2);
			balloonTextMesh.rotation.y=0.25;
			scene.add(balloonTextMesh);
			addedBalloon=true;
		}
		else if(addedBalloon===false){
			scene.remove(balloonTextMesh);
			balloonTextMesh=new THREE.Mesh(balloonTextGeo,fontMat);
			balloonTextMesh.position.set(-5.3,1,-1.2);
			balloonTextMesh.rotation.y=0.25;
			scene.add(balloonTextMesh);
			addedBalloon=true;
		}

		if((20-spikeCounter)===20 && addedBullets===false){
			bulletTextMesh=new THREE.Mesh(bulletTextGeo,fontMat);
			bulletTextMesh.position.set(4.2,1,-1.4);
			bulletTextMesh.rotation.y=-0.25;
			scene.add(bulletTextMesh);
			addedBullets=true;
		}
		else if(addedBullets===false){
			scene.remove(bulletTextMesh);
			bulletTextMesh=new THREE.Mesh(bulletTextGeo,fontMat);
			bulletTextMesh.position.set(4.2,1,-1.4);
			bulletTextMesh.rotation.y=-0.25;
			scene.add(bulletTextMesh);
			addedBullets=true;
		}

	if (stats) stats.update();

	// if (controls) controls.update();

	// renderer.render(views[model.activeView].scene, views[model.activeView].camera);
	renderer.render(scene,camera);
}

main();


interface MeshObj extends THREE.Object3D<THREE.Event> {
	material: THREE.MeshPhongMaterial;
}

interface gltfMesh extends THREE.Object3D<THREE.Event> {
	material: THREE.Material;
}

interface ColorMaterial extends THREE.Material {
	color: THREE.Color;
}

export interface IElectronAPI {
	fireBullet: (callback: (event: any, value: any) => void) => void,
	updateCactusX: (callback: (event:any, value:any) => void) => void
	// writeLEDStatus: (onOff:1|0) => any
	// writeLEDBrightness: (brightness: number) => any
}

declare global {
	interface Window {
		electronAPI: IElectronAPI;
	}
}