'use client';

//Import the THREE.js library
import * as THREE from 'three';

import {GLTFModel,AmbientLight,DirectionLight} from 'react-3d-viewer'


export default function Guitar3D() {
    return(
        <>
        <div>
      <GLTFModel
        src="/3dmodels/guitar/result.gltf"
      >
        {/* <AmbientLight color={0xffffff}/>
        <DirectionLight color={0xffffff} position={{x:100,y:200,z:100}}/>
        <DirectionLight color={0xff00ff} position={{x:-100,y:200,z:-100}}/> */}
      </GLTFModel>
    </div>
        </>
    );
}