import React from 'react';
import * as THREE from 'three';
import KeyArray from './KeyArray';

class PianoKeys extends React.Component {

    render() {
        //create piano keys
        //set timeout with arrow moving cameras (bind)
        //rotate the key at an angle to see the 3D 
        // The rotation of the 3D object relative to the parent, in euler form.
        const rotation = new THREE.Euler(0.8, 0.5);

        //color would be hardcoded
        //colors is an example so that music notes can be added to it later on instead
        // let colors = [0xffffff, 0xff55ff, 0xbb45ee, 0xaa55a8, 0x6e3493, 0xededed, 0x04234d];

        //start both white & black index at 0 so that it doesn't leave spaces in between the 2 keys
        //since it was following the normal index argument in KeyArray.map
        let whiteIndex = 0;
        let blackIndex = 0;
        let keys = KeyArray.map((keys, index) => {
            //make an if else statement to do white/black keys
            if (keys.whiteKey === true) {
                //whiteIndex increments by +1
                whiteIndex++;
                let keyPosition = keys.pressed === true ? new THREE.Vector3(-5 + (0.94 * whiteIndex), -1 + (0.33 * whiteIndex), 5 + (-0.3 * whiteIndex)) : 
                new THREE.Vector3(-5 + (0.94 * whiteIndex), -1 + (0.35 * whiteIndex), 5 + (-0.3 * whiteIndex))
                KeyArray[index].position = keyPosition;
                return (
                    <mesh
                        castShadow
                        receiveShadow
                        key={index}
                        rotation={rotation}
                        //position is calculated this way so that it increments the right amount
                        position={keyPosition}
                    >
                        <boxGeometry
                            width={1}
                            height={1}
                            depth={3}
                        />
                        <meshLambertMaterial
                            //if keys.pressed = true then it will change color; if not, it will stay white
                            //can add in different colors based on KeyArray having a color property (ie. keyArray[i].color = keys.color)
                            //color={this.EVENT ? color : colorChange}
                            color={keys.pressed === true ? keys.color : 0xffffff}
                        />
                    </mesh>
                )
            } else {
                blackIndex++;
                //by doing another if statement here, it will increase the blackIndex at just the note substrings that are saved in KeyArray
                //keys.note.substring(0, 2) == 'C#' => just means that if the 1st two notes = C,#
                //(0, 1) = 1 character & so (0, 2) = 2 characters
                if (keys.note.substring(0, 2) === 'C#' || keys.note.substring(0, 2) === 'F#') {
                    blackIndex++
                }
                let keyPosition = keys.pressed === true ? new THREE.Vector3(-5.9 + (0.94 * blackIndex), -0.2 + (0.33 * blackIndex), 5 + (-0.3 * blackIndex)) : 
                new THREE.Vector3(-5.9 + (0.94 * blackIndex), -0.2 + (0.35 * blackIndex), 5 + (-0.3 * blackIndex));
                KeyArray[index].position = keyPosition;
                //need to make it skip a key so that it's spilt (2, 3 then 2, 3, etc)
                return (
                    <mesh
                        castShadow
                        receiveShadow
                        key={index}
                        rotation={rotation}
                        //position is calculated this way so that it increments the right amount
                        position={keyPosition}
                    >
                        <boxGeometry
                            width={0.5}
                            height={0.5}
                            depth={2}
                        />
                        <meshLambertMaterial
                            color={keys.pressed === true ? keys.color : 0x19191e}
                        />
                    </mesh>
                )
            }
        })

        return (
            <group>
                {keys}
            </group>
        )
    }
}

export default PianoKeys;
