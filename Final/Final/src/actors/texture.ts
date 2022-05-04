import * as THREE from "three";
import { Group } from "three";

export class forTexture {

    path: string;
    group:Group;
    geometry:THREE.BufferGeometry;
    material:THREE.Material;
    mesh:THREE.Mesh;
    texture:THREE.Material;

	constructor(objPath: string, geometry:THREE.BufferGeometry, material:THREE.Material){
		// this.body = new CANNON.Body(bodyOptions);
		this.geometry = geometry;
		this.material = material;
		this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.path=objPath;
        this.texture=new THREE.MeshBasicMaterial();
	}

	update() {
		// this.mesh.position.copy(this.body.position as IVec3)
		// //this.mesh.quaternion.copy(this.body.quaternion as IQuaternion)
	}
	// other methods ...
}