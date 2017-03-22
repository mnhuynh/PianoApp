import React from 'react';
import * as THREE from 'three';
import Shape from './Shape';

class MusicNote extends React.Component {
    constructor(props, context) {

    super(props, context);

    }
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <group>
                <Shape
                    resourceId="musicNote"
                    color={new THREE.Color(Math.random() * 0xffffff)}
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