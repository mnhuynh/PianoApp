import React from 'react';
import * as THREE from 'three';
import Shape from './Shape';

class MusicNote extends React.Component {
    
    shouldComponentUpdate() {
        return false;
    }

    color() {
        return new THREE.Color(Math.random() * 0xffffff)
    }

    render() {
        return (
            <group>
                <Shape
                    resourceId="musicNote"
                    color={0xffffff}
                    x={0}
                    y={0}
                    z={0}
                    rx={0}
                    ry={0}
                    rz={0}
                    s={1}
                />
            </group>
        )
    }
}

export default MusicNote;