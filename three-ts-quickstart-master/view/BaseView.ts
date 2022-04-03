import {PerspectiveCamera, Renderer, Scene} from "three"

export class BaseView{

    scene:Scene;
    camera:PerspectiveCamera;
    renderer: Renderer;

    model:any;

    constructor(model:any, renderer:Renderer){
        this.scene=new Scene;
        this.camera=new PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
        this.renderer=renderer;
        this.model=model;
    }

    update(){

    }
}