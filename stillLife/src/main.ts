import './style.scss';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { CustomBlending, ShaderMaterial, Shading } from 'three';

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let clock = new THREE.Clock();

let lightAmbient: THREE.AmbientLight;
let lightPoint: THREE.PointLight;

let controls: OrbitControls;
let stats: any;

let cube: THREE.Mesh;
let cube1: THREE.Mesh;
let cube2: THREE.Mesh;
let cube3: THREE.Mesh;
let cube4: THREE.Mesh;
let cube5: THREE.Mesh;
let cube6: THREE.Mesh;
let plane: THREE.Mesh;
let group: THREE.Group;
let exampleModel: THREE.Group;
let exampleTexture: THREE.Texture;

import vertexShader from '../resources/shaders/shader.vert?raw';
import fragmentShader from '../resources/shaders/shader.frag?raw';
let shaderMat: ShaderMaterial;

function main() {
    initScene();
    initStats();
    initListeners();
}

function initStats() {
    stats = new (Stats as any)();
    document.body.appendChild(stats.dom);
}

function initScene() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    //camera.rotation.y=30;
    camera.position.z = 6;

    renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;

    document.body.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);

    lightAmbient = new THREE.AmbientLight(0xFFFFFF);
    scene.add(lightAmbient);

	// lightAmbient = new THREE.AmbientLight(0xffffff);
	// scene.add(lightAmbient);

    // Add a point light to add shadows
    // https://github.com/mrdoob/three.js/pull/14087#issuecomment-431003830
    const shadowIntensity = 0.25;

    lightPoint = new THREE.PointLight(0xFF0000);
    lightPoint.position.set(-4, -3, -5);
    lightPoint.castShadow = true;
    lightPoint.intensity = 8;
    scene.add(lightPoint);
    lightPoint = new THREE.PointLight(0xFF0000);
    lightPoint.position.set(4, -3, -5);
    lightPoint.castShadow = true;
    lightPoint.intensity = 8;
    scene.add(lightPoint);

	lightPoint = new THREE.PointLight(0xffffff)
	lightPoint.position.set(-0.5, 0.5, 4)
	lightPoint.castShadow = true;
	lightPoint.intensity = shadowIntensity;
	scene.add(lightPoint)

    const lightPoint2 = lightPoint.clone();
    lightPoint2.intensity = 1 - shadowIntensity;
    lightPoint2.castShadow = false;
    scene.add(lightPoint2);

    const spotlight=new THREE.SpotLight(0xFFFFFF,1);
    spotlight.position.set(0,4,3);
    //spotlight.castShadow=false;
    scene.add(spotlight);

    const mapSize = 1024; // Default 512
    const cameraNear = 0; // Default 0.5
    const cameraFar = 500; // Default 500
    lightPoint.shadow.mapSize.width = mapSize;
    lightPoint.shadow.mapSize.height = mapSize;
    lightPoint.shadow.camera.near = cameraNear;
    lightPoint.shadow.camera.far = cameraFar;



    // Add a cube
    const geometryBox = new THREE.BoxGeometry();
    const materialBox = new THREE.MeshPhongMaterial({ color: 0x111111 });
    cube = new THREE.Mesh(geometryBox, materialBox);
    cube.castShadow = true;
    cube.position.set(0,-5.9,0);
    cube.scale.set(5,6,3);
    scene.add(cube);

     cube1=new THREE.Mesh(geometryBox,materialBox);
    cube1.position.set(4,5,-3);
    cube1.rotation.set(0.9,0,0);
    scene.add(cube1);

     cube2=new THREE.Mesh(geometryBox,materialBox);
    cube2.position.set(4,5,-3);
    cube2.rotation.set(0,0.9,0);
    scene.add(cube2);

     cube3=new THREE.Mesh(geometryBox,materialBox);
    cube3.position.set(-6,1,-2);
    cube3.rotation.set(0.9,0,0);
    scene.add(cube3);

     cube4=new THREE.Mesh(geometryBox,materialBox);
    cube4.position.set(-6,1,-2);
    cube4.rotation.set(0,0.9,0);
    scene.add(cube4);

    cube5=new THREE.Mesh(geometryBox,materialBox);
    cube5.position.set(5,-1,-1);
    cube5.rotation.set(0.9,0,0);
    scene.add(cube5);

     cube6=new THREE.Mesh(geometryBox,materialBox);
    cube6.position.set(5,-1,-1);
    cube6.rotation.set(0,0.9,0);
    scene.add(cube6);
	// const cubeGeometry = new THREE.BoxGeometry()
	// const cubeMaterial = new THREE.MeshPhongMaterial({color: 0xf0bbbb})
	// // cubeMaterial.wireframe = true;
	// cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
	// cube.castShadow = true;


	group = new THREE.Group()
	//group.add(cube)

	// cube.position.set(-2, 0, 0)


    // const gltfLoader = new GLTFLoader();
    // const url = 'resources/models/stillLife.gtlf';
    // gltfLoader.load(url, (gltf) => {
    //   const root = gltf.scene;
    // //   root.scale.set(0.5,0.5,0.5);
    //    root.position.x=0;
    //    root.position.y=0;
    //    root.position.z=0;
    //   group.add(root);
    // });
    const gltfLoader = new GLTFLoader().setPath('../resources/models/');
		gltfLoader.load('flower.gltf', (gltf) => {
			exampleModel = gltf.scene;
			console.log(exampleModel)

			exampleModel.scale.set(0.15,0.15,0.15);
			exampleModel.position.x = -2.5;
            exampleModel.position.y=-3;
            exampleModel.position.z=0;
            exampleModel.castShadow=true;
            group.add(exampleModel);
        });
	scene.add(group)
    
    // // load a texture
    let textureMaterial: THREE.Material;
	let textureLoader = new THREE.TextureLoader().setPath('../resources/textures/')
    textureLoader.load('marble3.png', function (texture) {

        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        exampleTexture = texture;

		textureMaterial = new THREE.MeshBasicMaterial({map: texture});

		cube.material = textureMaterial;

    });
    // // Add a plane
    const geometryPlane = new THREE.PlaneBufferGeometry(28, 24, 10, 10);
    const materialPlane = new THREE.MeshPhongMaterial({ 
		color: 0x111111, 
		side: THREE.DoubleSide,
		flatShading: true		
	});

    const uniforms = {
        u_time: { type: 'f', value: 1.0 },
        u_resolution: { type: 'v2', value: new THREE.Vector2(800,800) },
        // u_mouse: { type: 'v2', value: new THREE.Vector2() },
    };

    // shaderMat = new THREE.ShaderMaterial({
    //     uniforms: uniforms,
    //     vertexShader: vertexShader,
    //     fragmentShader: fragmentShader,
    // });

	shaderMat = new THREE.ShaderMaterial({
		uniforms: uniforms,
		vertexShader: vertexShader,
		fragmentShader: fragmentShader,
		side: THREE.DoubleSide
	})

    // plane = new THREE.Mesh(geometryPlane, materialPlane);
    // plane.position.z = -8;
    // plane.receiveShadow = true;
    // scene.add(plane);

    // // Init animation
    animate();
}

function initListeners() {
    window.addEventListener('resize', onWindowResize, false);

    window.addEventListener('keydown', (event) => {
        const { key } = event;

        switch (key) {
            case 'e':
                const win = window.open('', 'Canvas Image');

                const { domElement } = renderer;

                // Makse sure scene is rendered.
                renderer.render(scene, camera);

                const src = domElement.toDataURL();

                if (!win) return;

                win.document.write(`<img src='${src}' width='${domElement.width}' height='${domElement.height}'>`);
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

function animate() {
    requestAnimationFrame(() => {
        animate();
    });

    let delta = clock.getDelta();
    
    // shaderMat.uniforms.u_time.value += delta;

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    cube1.rotation.x+=0.01;
    cube2.rotation.y+=0.01;
    cube3.rotation.x-=0.01;
    cube4.rotation.y-=0.01;
    cube5.rotation.x+=0.01;
    cube6.rotation.y-=0.01;


	//group.rotateZ(delta)
	//group.position.set(Math.sin(clock.getElapsedTime())*2,0,0)

	// const vertArray = plane.geometry.attributes.position;
	// // console.log(vertArray)

	// for (let i = 0; i < vertArray.count; i++) {
	// 	vertArray.setZ(i, 
	// 		Math.sin(clock.getElapsedTime()+i-vertArray.count/2)*0.5
	// 		+ Math.cos(clock.getElapsedTime()-i)*0.5)
	// }
	// plane.geometry.attributes.position.needsUpdate = true;

    // if (exampleModel != undefined) {
    //     exampleModel.rotateX(0.01);
    //     exampleModel.rotateY(0.01);
    // }

	// if (exampleTexture) {
	// 	exampleTexture.center.set(0.5,0.5)
	// 	exampleTexture.rotation += delta
	// }

    if (stats) stats.update();

    if (controls) controls.update();

    renderer.render(scene, camera);
}

main()
