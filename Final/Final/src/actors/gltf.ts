import * as THREE from "three";
import { Group } from "three";

export class gltfModel {

    path: string;
    group:Group;

	constructor(objPath: string){
		// this.body = new CANNON.Body(bodyOptions);
		// this.geometry = geometry;
		// this.material = material;
		// this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.path=objPath;
        this.group=new Group;
	}

	update() {
		// this.mesh.position.copy(this.body.position as IVec3)
		// //this.mesh.quaternion.copy(this.body.quaternion as IQuaternion)
	}
	// other methods ...
}