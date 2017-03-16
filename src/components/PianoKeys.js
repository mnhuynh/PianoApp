import React from 'react';
// import React3 from 'react-three-renderer';
import * as THREE from 'three';
// import Tone from 'tone';
import KeyArray from './KeyArray';

class PianoKeys extends React.Component {

    render() {
        //create piano keys

        //rotate the key at an angle to see the 3D 
        // The rotation of the 3D object relative to the parent, in euler form.
        const rotation = new THREE.Euler(1, 0.2);

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
                return (
                    <mesh
                        key={index}
                        rotation={rotation}
                        //position is calculated this way so that it increments the right amount
                        position={new THREE.Vector3(-5 + (1 * whiteIndex), -1 + (0.2 * whiteIndex), 0 + (0 * whiteIndex))}
                    >
                        <boxGeometry
                            width={1}
                            height={1}
                            depth={3}
                        />
                        <meshBasicMaterial
                            //if keys.pressed = true then it will change color; if not, it will stay white
                            //can add in different colors based on KeyArray having a color property (ie. keyArray[i].color = keys.color)
                            color={keys.pressed === true ? 0xff44ff : 0xffffff}
                        //color={this.props.keyDown ? 0xff44ff: 0xffffff}
                        //color={this.EVENT ? color : colorChange}
                        />
                    </mesh>
                )
            } else {
                blackIndex++;
                //by doing another if statement here, it will increase the blackIndex at just the note substrings that are saved in KeyArray
                //keys.note.substring(0, 2) == 'C#' => just means that if the 1st two notes = C,#
                //(0, 1) = 1 character & so (0, 2) = 2 characters
                if (keys.note.substring(0, 2) === 'C#' || keys.note.substring(0, 2) === 'F#'){
                    blackIndex++
                }
                //need to make it skip a key so that it's spilt (2, 3 then 2, 3, etc)
                return (
                    <mesh
                        key={index}
                        rotation={rotation}
                        //position is calculated this way so that it increments the right amount
                        position={new THREE.Vector3(-5.7 + (1 * blackIndex), -0.2 + (0.2 * blackIndex), 0 + (0 * blackIndex))}
                    >
                        <boxGeometry
                            width={0.5}
                            height={0.5}
                            depth={2}
                        />
                        <meshBasicMaterial
                            color={keys.pressed === true ? 0xff44ff : 0x04234d}
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
