import './style.css';
import * as THREE from 'three';
import { Raycaster, ShaderMaterial, Shading, Vector2 } from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as DAT from 'dat.gui';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

import vertexShader from './assets/shaders/shader.vert';
import fragmentShader from './assets/shaders/shader.frag';
import fireballPath from './assets/models/fireball.gltf';
import waterdropPath from './assets/models/waterdrop.gltf'


let model = {
	groupX: 0,
	groupY: 0,
	groupAngle: 0,
	activeView: 0,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
}

let scene:THREE.Scene;
let camera:THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let clock = new THREE.Clock();
let controls: OrbitControls;
let stats: any;
let plane:THREE.Mesh;
let raycaster: THREE.Raycaster;
let pointerPosition: THREE.Vector2;
let lightPoint:THREE.PointLight;
let lightAmbient:THREE.AmbientLight;

let change:Boolean;

let shaderMat: ShaderMaterial;
let fireball:THREE.Group;
let waterdrop:THREE.Group;
let table:THREE.Mesh;
let winner:number;
let textGroup:THREE.Group;



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
	gui.add(model, 'groupAngle', -Math.PI,Math.PI, 0.1)
}

function initScene() {

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.z = 5;

	renderer = new THREE.WebGLRenderer();
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

// 	const fontLoader = new FontLoader(); //lines 88-103 taken from three.js docs

// 	fontLoader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

// 	let scoreText = new TextGeometry( 'Score:', {
// 		font: font,
// 		size: 80,
// 		height: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelOffset: 0,
// 		bevelSegments: 5
// 	});
// 	textGroup.add(scoreText);
// });
	
	controls = new OrbitControls(camera, renderer.domElement);

	raycaster = new THREE.Raycaster();
	pointerPosition = new THREE.Vector2(0,0);

	const geometryPlane = new THREE.PlaneBufferGeometry(18, 12, 10, 10);
	const materialPlane = new THREE.MeshPhongMaterial({
		color: 0x666666,
		side: THREE.DoubleSide,
		flatShading: true,
	});

	plane = new THREE.Mesh(geometryPlane, materialPlane)//this.shaderMat);
	plane.position.z = -2.2;
	plane.position.y=1;
	plane.receiveShadow = true;
	scene.add(plane);

	lightPoint = new THREE.PointLight(0xFFFFFF);
	lightPoint.position.set(0, -2.25, 2);
	lightPoint.castShadow = true;
	lightPoint.intensity = 2;
	scene.add(lightPoint);

	lightPoint = new THREE.PointLight(0xFF0000);
	lightPoint.position.set(4, -2, -1);
	lightPoint.castShadow = true;
	lightPoint.intensity = 3.5;
	scene.add(lightPoint);

	lightPoint = new THREE.PointLight(0x0000FF);
	lightPoint.position.set(-4, -2, -1);
	lightPoint.castShadow = true;
	lightPoint.intensity = 3.5;
	scene.add(lightPoint);

	const mapSize = 1024; // Default 512
	const cameraNear = 0.5; // Default 0.5
	const cameraFar = 500; // Default 500
	lightPoint.shadow.mapSize.width = mapSize;
	lightPoint.shadow.mapSize.height = mapSize;
	lightPoint.shadow.camera.near = cameraNear;
	lightPoint.shadow.camera.far = cameraFar;

	const uniforms = {
		u_time: { type: 'f', value: 1.0 },
		u_resolution: { type: 'v2', value: new THREE.Vector2(800, 800) },
		// u_mouse: { type: 'v2', value: new THREE.Vector2() },
	};

	shaderMat = new THREE.ShaderMaterial({
		uniforms: uniforms,
		vertexShader: vertexShader,
		fragmentShader: fragmentShader,
		side: THREE.DoubleSide,
	});

	const cubeGeometry = new THREE.BoxGeometry(16,3,2);
	const cubeMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
	//cubeMaterial.wireframe = true;
	table = new THREE.Mesh(cubeGeometry, cubeMaterial);
	table.castShadow = true;
	table.position.x=0;
	table.position.y=-3;
	table.position.z=0;
	scene.add(table);

	const modelLoader = new GLTFLoader();
	modelLoader.load(fireballPath, (gltf) => {
		fireball = gltf.scene;
		console.log(fireball);

		fireball.scale.set(0.5,0.5,0.5);
		fireball.position.x = 3.5;
		fireball.position.y=-1;
		fireball.position.z=0;
		fireball.rotateY(-1*(Math.PI/2));
		fireball.castShadow=true;
		scene.add(fireball);
	});
	modelLoader.load(waterdropPath,(gltf)=>{
		waterdrop=gltf.scene;
		waterdrop.scale.set(0.5,0.5,0.5);
		waterdrop.position.x = -3.5;
		waterdrop.position.y=-1;
		waterdrop.position.z=0;
		waterdrop.castShadow=true;
		scene.add(waterdrop);
	})

	change=false;
	// Init animation
	animate();
}

function initListeners() {

	window.electronAPI.updatePositionXLeft((event:any,value:any)=>{
		console.log(event);
		console.log(value);
		fireball.position.x=3.5*value;
	})
	window.electronAPI.updatePositionXRight((event:any,value:any)=>{
		console.log(event);
		console.log(value);
		waterdrop.position.x=3.5*value;
	})

	window.addEventListener('resize', onWindowResize, false);

	window.addEventListener('pointermove', onPointerMove);

	window.addEventListener('keydown', (event) => {
		const { key } = event;
		// console.log(key);

		switch (key) {
			case 'e':
				const win = window.open('', 'Canvas Image');

				const { domElement } = renderer;

				// Makse sure scene is rendered.
                switch (model.activeView) {
                    case 0:
                        //renderer.render(viewOne.scene, viewOne.camera);
                        break;
            
                    case 1:
                        //renderer.render(viewTwo.scene, viewTwo.camera);
                        break;
            
                    default:
                        break;
                }

				const src = domElement.toDataURL();

				if (!win) return;

				win.document.write(`<img src='${src}' width='${domElement.width}' height='${domElement.height}'>`);
				break;

			case 'ArrowRight':
				//model.activeView = (model.activeView + 1) % views.length
				break;

			case 'ArrowLeft':
				model.activeView = (model.activeView - 1)
				if (model.activeView < 0) {
					//model.activeView = views.length - 1;
				}
				break;

			default:
				break;
		}
	});
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function onPointerMove(event: any) {
	pointerPosition.x = (event.clientX / window.innerWidth) * 2 - 1;
	pointerPosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
}


function animate() {
	requestAnimationFrame(() => {
		animate();
	});
	if(change===false){
		winner=Math.floor(Math.random()*2);
	}
	let delta = clock.getDelta();

if(fireball!=undefined && waterdrop!=undefined){
	if(Math.abs(fireball.position.x-waterdrop.position.x)<0.9){
		change=true;
		if(winner===0){
			window.electronAPI.writeBlueLEDStatus(1); 
		}
		else if(winner===1){
			window.electronAPI.writeRedLEDStatus(1);
		}
		
	}
	else{
		change=false;
		window.electronAPI.writeBlueLEDStatus(0);
		window.electronAPI.writeRedLEDStatus(0);
	}
}
	if (stats) stats.update();

	if (controls) controls.update();

	renderer.render(scene, camera);
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
	handleBackground: (callback: (event: any, value: any) => void) => void;
	updatePositionXLeft: (callback: (event:any, value:any) => void) => void,
	updatePositionXRight: (callback: (event:any, value:any) => void) => void,
	writeRedLEDStatus: (onOff:1|0) => any,
	writeBlueLEDStatus: (onOff:1|0) => any
	// writeLEDBrightness: (brightness:number)=>any
}

declare global {
	interface Window {
		electronAPI: IElectronAPI;
	}
}