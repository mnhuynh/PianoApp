import React from 'react';
import * as THREE from 'three';
import PropTypes from 'react/lib/ReactPropTypes';

import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';

const extrudeSettings = {
    amount: 15,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 1,
    bevelThickness: 1,
};

class Shape extends React.Component {
    static propTypes = {
        resourceId: PropTypes.string.isRequired,
        color: PropTypes.any.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        z: PropTypes.number.isRequired,
        rx: PropTypes.number.isRequired,
        ry: PropTypes.number.isRequired,
        rz: PropTypes.number.isRequired,
        s: PropTypes.number.isRequired,
    };

    shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;

    render() {
        const {
            s,
            resourceId,
            color,
            x,
            y,
            z,
      } = this.props;

        const scale = new THREE.Vector3(s, s, s);

        return (
            <group>
                <mesh
                    // 3d shape
                    position={new THREE.Vector3(x, y, z)}
                    rotation={new THREE.Euler(0, 3, 0)}
                    scale={scale}
                >
                    <extrudeGeometry
                        settings={extrudeSettings}
                    >
                        <shapeResource
                            resourceId={resourceId}
                        />
                    </extrudeGeometry>
                    <meshPhongMaterial
                        color={color}
                    />
                </mesh>
            </group>
        )
    }
}

export default Shape;