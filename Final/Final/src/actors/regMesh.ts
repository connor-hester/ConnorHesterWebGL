import * as THREE from "three";

export class regMesh {
    material:THREE.Material;
    mesh:THREE.Mesh;
    geometry:THREE.BufferGeometry;

	constructor(geometry: THREE.BufferGeometry, material:THREE.Material){
		this.material = material;
        this.geometry=geometry;
		this.mesh = new THREE.Mesh(this.geometry, this.material);
	}

	update() {
		// this.mesh.position.copy(this.body.position as IVec3)
		// //this.mesh.quaternion.copy(this.body.quaternion as IQuaternion)
	}
	// other methods ...
}