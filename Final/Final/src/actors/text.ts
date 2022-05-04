import * as THREE from "three";
import { Group } from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

export class text {
    material:THREE.Material;
    mesh:THREE.Mesh;
    textGeometry:TextGeometry;

	constructor(textGeometry: TextGeometry, material:THREE.Material){
		this.material = material;
        this.textGeometry=textGeometry;
		this.mesh = new THREE.Mesh(this.textGeometry, this.material);
	}

	update() {
		// this.mesh.position.copy(this.body.position as IVec3)
		// //this.mesh.quaternion.copy(this.body.quaternion as IQuaternion)
	}
	// other methods ...
}