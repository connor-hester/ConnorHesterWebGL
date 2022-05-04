import { Clock, Color, PerspectiveCamera, Renderer, Scene, WebGLRenderer } from "three"
import {baseView } from "./baseView";

export class baseViewExtend extends baseView {

	scene: Scene;
	camera: PerspectiveCamera;
	renderer: WebGLRenderer;
    color:Color;

	constructor(model: any, renderer: WebGLRenderer) {
		super(model)
		this.scene = new Scene();
        this.scene.background= new Color(0xC8FAFF);
		this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1, 1000);
		this.camera.position.z = 5;
        this.camera.position.z = 11;
	    this.camera.position.y=1.5;
		this.renderer = renderer;
	}

	//@ts-ignore
	update(clock: Clock): void {}

	onWindowResize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	//onMouseMove() {}
}