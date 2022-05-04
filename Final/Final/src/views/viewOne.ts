import { RepeatWrapping, BoxBufferGeometry, Clock, ConeBufferGeometry, CylinderBufferGeometry,Group, Mesh, MeshBasicMaterial, MeshLambertMaterial, MeshNormalMaterial, MeshPhongMaterial, PlaneGeometry, PointLight, Quaternion, SphereBufferGeometry, SphereGeometry, Texture, Vector3, WebGLRenderer } from "three";
//import * as THREE from "three";
import * as CANNON from "cannon-es";
import {baseViewExtend} from "./baseViewExtend";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Entity } from "../actors/Entity";
import { gltfModel } from "../actors/gltf";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import TextureLoader from "../renderer/TextureLoader";
import {forTexture} from "../actors/texture"
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader";
import {text} from '../actors/text';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import {regMesh} from '../actors/regMesh';
import { Loader } from 'three/src/loaders/Loader';



export class viewOne extends baseViewExtend{
	light: PointLight;
	controller: OrbitControls;

    spikes: Entity[];
    balloons:Entity[];
    world: CANNON.World;

    cactus: gltfModel;
    barrels:gltfModel[];

    floor:forTexture;
    smallBlocks:forTexture[];
    back:forTexture;

    // signText:text;
    // titleText:text;
    // instructionText:text;

    roof:regMesh;
    supports:regMesh[];
    signs:regMesh[];

    modelLoader:GLTFLoader;
    textureLoader:TextureLoader;
    loader:Loader;
    // fontLoader:FontLoader;
    // fontData:Font;

	constructor(model: any, renderer: WebGLRenderer) {
		super(model, renderer)

		this.controller = new OrbitControls(this.camera, renderer.domElement);

		this.world = new CANNON.World({
			gravity: new CANNON.Vec3(0,0,-1.5)
		});
        this.world.broadphase = new CANNON.NaiveBroadphase() ;//next three lines from Cannon-es documentation collision example
	  ;(this.world.solver as CANNON.GSSolver).iterations = 5;
	    this.world.allowSleep = true;

        //REG MESH STUFF
        this.roof=new regMesh(new CylinderBufferGeometry(1,1,6,3,3),new MeshBasicMaterial({color:0x2C0A02}));
        this.roof.mesh.position.set(0,8.5,-4);
        this.roof.mesh.scale.set(3,2,1);
        this.roof.mesh.rotation.set(-1.25,0,Math.PI/2);
        this.scene.add(this.roof.mesh);
        
        this.supports=[];
        for(let i=0;i<2;i++){
            const support=new regMesh(new CylinderBufferGeometry(0.25,0.25,8,8,8),new MeshBasicMaterial({color:0x2C0A02}));
            support.mesh.position.set(4.5-9*i,3.3,-2);
            this.supports.push(support);
        }
        this.supports.forEach((support: regMesh) => {
			this.scene.add(support.mesh)
		});

        this.signs=[];
        for(let i=0;i<2;i++){
            const sign=new regMesh(new BoxBufferGeometry(2.5,2,0.2,3,3,3),new MeshBasicMaterial({color:0x715F42}));
            sign.mesh.position.set(-5.1+10*i,1.7,-1.3);
            sign.mesh.rotation.z=0.25-0.5*i;
            this.supports.push(sign);
        }
        this.signs.forEach((sign: regMesh) => {
			this.scene.add(sign.mesh)
		});

        //TEXT STUFF
        // this.fontLoader=new FontLoader();
        // this.fontData=new Font('./renderer/assets/RioGrande.json');
        // this.fontData=this.fontLoader.parse('./renderer/assets/RioGrande.json');
        // this.titleText=new text(new TextGeometry( 'Sharpshooter', {font: this.fontData, size: 0.75, height: 0.75, curveSegments: 12,}),new MeshPhongMaterial({color:0xD9BC2B}));
        // this.titleText.mesh.position.set(-3.5,7.3,-1.9);
        // this.titleText.mesh.rotation.x=Math.PI/10;
        // this.scene.add(this.titleText.mesh);

        // this.instructionText=new text(new TextGeometry('POT-Move    Button-Shoot',{font: this.fontData, size:0.5, height:0.5, curveSegments:12}),new MeshPhongMaterial({color:0xD9BC2B}));
        // this.instructionText.mesh.position.set(-4.2,-2,-1.2);
        // this.scene.add(this.instructionText.mesh);

        // this.signText=new text(new TextGeometry('Bullets:',{font:this.fontData, size:0.3, height:0.1, curveSegments:12}),new MeshPhongMaterial({color:0x000000}));
        // this.signText.mesh.position.set(4,2,-1.4);
        // this.signText.mesh.rotation.y=-0.25;
        // this.scene.add(this.signText.mesh);
        // this.signText=new text(new TextGeometry('Balloons:',{font:this.fontData, size:0.3, height:0.1, curveSegments:12}),new MeshPhongMaterial({color:0x000000}));
        // this.signText.mesh.position.set(-6,2,-1);
        // this.signText.mesh.rotation.y=0.25;
        // this.scene.add(this.signText.mesh);

        //TEXTURE STUFF
        // this.loader=new Loader;
        // this.textureLoader = new TextureLoader();
        // this.floor=new forTexture('./renderer/assets/textures/desertSand.jpg', new BoxBufferGeometry(27,4,27,6,6,6),new MeshPhongMaterial({color:0xFFFFFF}));
        // this.floor.mesh.position.set(0,-5,-4);
        // this.textureLoader.load(this.floor.path, function (texture) {

        //     texture.wrapS = texture.wrapT = RepeatWrapping;
        //     texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    
        //     this.floor.texture = new MeshBasicMaterial({map: texture});
    
        //     this.floor.material = this.floor.texture;
        // });
        // this.scene.add(this.floor.mesh);

        // this.back=new forTexture('./renderer/assets/textures/woodTexture.png', new BoxBufferGeometry(12,12,2,6,6,6),new MeshPhongMaterial({color:0xFFFFFF}));
        // this.back.mesh.position.set(0,3.4,-7);
        // this.textureLoader.load(this.back.path, function (texture) {

        //     texture.wrapS = texture.wrapT = RepeatWrapping;
        //     texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    
        //     this.back.texture = new MeshBasicMaterial({map: texture});
    
        //     this.back.material = this.back.texture;
        // });
        // this.scene.add(this.back.mesh);

        // this.smallBlocks=[];
        // for(let i=0;i<5;i++){
        //     const tempBlock= new forTexture('./renderer/assets/textures/smallBlockTexture.png',new BoxBufferGeometry(3,3,3,3,3,3), new MeshPhongMaterial({color:0xFFFFFF}));
        //     tempBlock.mesh.position.set(3.9-1.95*i,-2,-2);
        //     tempBlock.mesh.scale.set(0.8,0.8,0.8);
        //     this.smallBlocks.push(tempBlock);
        // }
        // this.smallBlocks.forEach((block: forTexture) => {
        //     this.textureLoader.load(block.path, function (texture) {

        //         texture.wrapS = texture.wrapT = RepeatWrapping;
        //         texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        
        //         block.texture = new MeshBasicMaterial({map: texture});
        
        //         block.material = block.texture;
        //     });
		// 	this.scene.add(block.mesh);
		// });

        //GLTF MODEL STUFF
        this.modelLoader=new GLTFLoader;
        this.cactus=new gltfModel('./renderer/assets/models/cactus.gltf');
        this.modelLoader.load(this.cactus.path,(gltf)=>{
            this.cactus.group=gltf.scene;
            this.cactus.group.position.y=1;
            this.cactus.group.scale.set(0.25,0.25,0.25);
            this.scene.add(this.cactus.group);
        });

        this.barrels=[];
        for(let i=0;i<2;i++){
            const barrel=new gltfModel('./renderer/assets/models/barrel.gltf');
            this.modelLoader.load(barrel.path,(gltf)=>{
                barrel.group=gltf.scene;
                barrel.group.position.set(-6+12.25*i,-2,-1.9);
                barrel.group.scale.set(16,17,16);
                barrel.group.rotation.x=Math.PI/2-((Math.PI/2)*i);
            })
        }
        this.barrels.forEach((barrel: gltfModel) => {
			this.scene.add(barrel.group)
		});

        //CANNON STUFF
		this.spikes = [];
		for (let i = 0; i < 20; i++) {
			const tempSpike = new Entity(new ConeBufferGeometry(0.07,0.35,10,4), new MeshPhongMaterial({ flatShading: true, color: 0x000000,}),{mass: 5,shape: new CANNON.Sphere(0.5),});
            tempSpike.mesh.rotation.x=-1*Math.PI/2;
            tempSpike.body.linearDamping=0;
            tempSpike.body.velocity.set(0,0,-2);
			tempSpike.mesh.position.set(this.cactus.group.position.x,this.cactus.group.position.y,0);
			this.spikes.push(tempSpike)
		}
		this.spikes.forEach((spike: Entity) => {
			this.scene.add(spike.mesh)
			this.world.addBody(spike.body)
		})

        this.balloons = [];
		for (let i = 0; i < 4; i++) {
            for (let j=0;j<4;j++){
			const tempBalloon = new Entity(new SphereBufferGeometry(0.3,10,10), new MeshPhongMaterial({flatShading: true, color: 0xFF0000,}),{isTrigger: true,shape: new CANNON.Sphere(0.3),});
            tempBalloon.body.linearDamping=0;
            tempBalloon.body.velocity.set(0,0,-2);
			tempBalloon.body.position.set(2*j-3,2*i,-5.5);
			this.balloons.push(tempBalloon)
		}
    }

		this.balloons.forEach((balloon: Entity) => {
			this.scene.add(balloon.mesh)
			this.world.addBody(balloon.body)
		})
        //LIGHT STUFF
		this.light = new PointLight(0xFFFFFF)
		this.light.position.set(0,5,10)
        this.light.intensity=1;
		this.scene.add(this.light)

        this.light = new PointLight(0xFFFFFF)
		this.light.position.set(0,5,-10)
        this.light.intensity=1;
		this.scene.add(this.light)
	}

	update(clock: Clock): void {
		const time = clock.getElapsedTime();

		this.world.gravity.copy(this.model.gravity)

		this.world.fixedStep();
		this.controller.update();
		// this.ball.update();
		this.spikes.forEach((spike: Entity) => spike.update())
        this.cactus.group.position.y=Math.sin(time)*4+2;

        //const fontData=this.fontLoader.parse('./renderer/assets/RioGrande.json');
	}
}

type IVec3 = Vector3 & CANNON.Vec3;
type IQuaternion = Quaternion & CANNON.Quaternion;