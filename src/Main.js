import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import Tone from 'tone';
import { Button } from 'semantic-ui-react'
import PianoKeys from './components/PianoKeys';
import KeyArray from './components/KeyArray';
import Resources from './components/Resources';
import MusicNote from './components/MusicNote';

class Main extends React.Component {
    constructor(props, context) {

        super(props, context);

        this.state = {
            // construct the position vector here, because if we use 'new' within render,
            // React will think that things have changed when they have not.
            camera: new THREE.Vector3(0, 0, 25),
            moveZoomPiano: new THREE.Vector3(),
            rotatePiano: new THREE.Euler(0, 0, 0),
            float: new THREE.Vector3(),
            rotation: new THREE.Euler(),
            notePosition: new THREE.Vector3(),
            //ensures that playing the pianokeys is false but when used in setState, the piano keys will play
            playing: false,
            //starting position of octave
            currentRange: "two",
            ranges: { one: 1, two: 2, three: 3 }
        }

        //start at middle octave
        // this.octave = 4
        //@https://github.com/Tonejs/Tone.js/wiki/Instruments
        //4=number of notes that can be played
        this.synth = new Tone.PolySynth(4, Tone.Synth).toMaster();

        //bind 
        this.keyDown = this.keyDown.bind(this);
        this.keyUp = this.keyUp.bind(this);
        this.startSynth = this.startSynth.bind(this);
        this.stopSynth = this.stopSynth.bind(this);
        this.rangeChange = this.rangeChange.bind(this);
    }

    //animate the music note
    onAnimate = () => {
        let floatX = this.state.notePosition.x * 77;
        let floatY = (this.state.notePosition.y * 90) + 500;
        let rotation = this.state.rotation;
        // console.log(floatX)
        // console.log(floatY)

        this.setState({
            float: new THREE.Vector3(floatX, floatY, -2000),
            rotation: new THREE.Euler(rotation.x + 0.05, rotation.y + 0.1, rotation.z + 0.05),
        })
    }

    //to allow buttons to change octaves
    rangeChange(newRange) {
        //holds the range of which object[array] it is in
        this.setState({
            currentRange: newRange
        })
    }

    //create an event to enable keyboard keys to pressdown
    keyDown(e) {

        if (e.key === 0) {
            return false;
        }

        e.preventDefault();

        //ZOOM & ROTATE PIANO
        let moveZoomPiano = this.state.moveZoomPiano;
        let rotatePiano = this.state.rotatePiano;
        var positionDelta = 1;
        var rotationDelta = 0.1;

        //rotate left
        if (e.key === "-") {
            let rotate = new THREE.Euler(rotatePiano.x, rotatePiano.y - rotationDelta, rotatePiano.z)
            this.setState({
                rotatePiano: rotate
            })
        }
        //rotate right
        else if (e.key === "=") {
            let rotate = new THREE.Euler(rotatePiano.x, rotatePiano.y + rotationDelta, rotatePiano.z)
            this.setState({
                rotatePiano: rotate
            })
        }
        //move left
        else if (e.key === "ArrowLeft") {
            let move = new THREE.Vector3(moveZoomPiano.x - positionDelta, moveZoomPiano.y, moveZoomPiano.z)
            this.setState({
                moveZoomPiano: move
            })
        }
        //move right
        else if (e.key === "ArrowRight") {
            let move = new THREE.Vector3(moveZoomPiano.x + positionDelta, moveZoomPiano.y, moveZoomPiano.z)
            this.setState({
                moveZoomPiano: move
            })
        }
        //zoom-in 
        else if (e.key === "ArrowDown") {
            let zoom = new THREE.Vector3(moveZoomPiano.x, moveZoomPiano.y, moveZoomPiano.z - positionDelta)
            this.setState({
                moveZoomPiano: zoom
            })
        }
        //zoom-out
        else if (e.key === "ArrowUp") {
            let zoom = new THREE.Vector3(moveZoomPiano.x, moveZoomPiano.y, moveZoomPiano.z + positionDelta)
            this.setState({
                moveZoomPiano: zoom
            })
        }

        //increasing & decreasing octaves when there's only 12 keys & with removal of the numbers in the array
        // if (e.key === "=") {
        //   this.octave = this.octave + 1;
        //   //prevent from going higher than octave at 10
        //   if (this.octave === 11) {
        //     this.octave = 10
        //   }
        // } else if (e.key === "-") {
        //   this.octave = this.octave - 1;
        //   //prevent from going lower than octave at 0
        //   if (this.octave === 0) {
        //     this.octave = 1
        //   }
        // }
        // console.log(this.octave) 

        //loop through key array until we find the key whose keycode matches the key code that was pressed
        for (let i = 0; i < KeyArray.length; i++) {
            if (e.key === KeyArray[i].key &&
                KeyArray[i].range === this.state.ranges[this.state.currentRange])
            //taking the substring of the KeyArray.note to get the octave number as a string
            //use string in the state & buttons
            // (KeyArray[i].note.substring(1,2) === this.state.currentOctave|| 
            // KeyArray[i].note.substring(2,3) === this.state.currentOctave))
            {
                //this if statement makes sure the sound isn't repeated when key is pressed down
                if (KeyArray[i].pressed === true) {
                    return;
                }
                //below statement takes in whether or not the keyPressed in the KeyArray is actually pressed => KeyArray[i].pressed 
                //if it does then it should = to true since by default it is false
                KeyArray[i].pressed = true;
                //start synth
                this.startSynth(KeyArray[i].note);
                this.setState({
                    playing: true,
                    notePosition: KeyArray[i].position
                })
            }
        }
    }

    //create event to release keyboard pressdown (i.e.keyup)
    keyUp(e) {
        e.preventDefault();
        //make sure that when the pressed keys are released, the keys are no longer playing
        for (let i = 0; i < KeyArray.length; i++) {
            if (e.key === KeyArray[i].key) {
                KeyArray[i].pressed = false;
                //stop synth
                this.stopSynth(KeyArray[i].note);
                this.setState({
                    playing: false
                })
            }
        }
    }

    //create synth/sound event
    //after keyDown runs, synth runs
    startSynth(note) {
        let synth = this.synth;
        synth.triggerAttack(note);
    }

    stopSynth(note) {
        let synth = this.synth;
        synth.triggerRelease(note);
    }

    //Mount
    componentDidMount() {
        document.addEventListener('keydown', this.keyDown, false);
        document.addEventListener('keyup', this.keyUp, false);
    }

    //Unmount
    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyDown, false);
        document.removeEventListener('keyup', this.keyUp, false);
    }

    render() {
        const width = window.innerWidth; // canvas width
        const height = window.innerHeight; // canvas height
        const d = 20;

        return (
            <div ref="container">
                <div
                    style={{
                        color: 'white',
                        position: 'absolute',
                        top: '10px',
                        width: '100%',
                        marginLeft: '10px',
                        textAlign: 'center',
                        fontSize: '12px'
                    }}
                >
                    {/*buttons created to switch octaves*/}
                    <Button onClick={() => this.rangeChange("one")} color="violet" size="mini">
                        Low Range
                    </Button>
                    <Button onClick={() => this.rangeChange("two")} color="purple" size="mini">
                        Middle Range
                    </Button>
                    <Button onClick={() => this.rangeChange("three")} color="purple" size="mini">
                        High Range
                    </Button>
                    {/*Use arrow keys to zoom or rotate<br />
                    Use the keys QWERTYU and 2, 3, 5, 6, 7 to play to piano <br />
                    To increase or lower the octave use the keys + and -*/}
                </div>
                <React3
                    mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
                    width={width}
                    height={height}
                    shadowMapEnabled
                    shadowMapType={THREE.PCFShadowMap}
                    pixelRatio={window.devicePixelRatio}
                    onAnimate={this.onAnimate}
                    alpha={true}
                    clearAlpha={0}
                >
                    <scene>
                        <ambientLight
                            color={0x505050}
                        />
                        <directionalLight
                            color={0xffffff}
                            intensity={1.5}

                            castShadow

                            shadowMapWidth={1024}
                            shadowMapHeight={1024}

                            shadowCameraLeft={-d}
                            shadowCameraRight={d}
                            shadowCameraTop={d}
                            shadowCameraBottom={-d}

                            shadowCameraFar={3 * d}
                            shadowCameraNear={-10}

                            position={new THREE.Vector3(-5, 6, 5)}
                            lookAt={new THREE.Vector3(0, 0, 0)}
                        />
                        {/*<spotLight
                            color={0xffffff}
                            castShadow
                            shadowBias={-0.00022}
                            shadowMapWidth={1500}
                            shadowMapHeight={1500}
                            position={new THREE.Vector3(-8, 5, 15)}
                            lookAt={new THREE.Vector3(0, 0, 0)}
                        />*/}
                        <perspectiveCamera
                            name="camera"
                            fov={75}
                            aspect={width / height}
                            near={0.1}
                            far={10000}
                            position={this.state.camera}
                        />
                        {/*insert PianoKeys*/}
                        <group rotation={this.state.rotatePiano} position={this.state.moveZoomPiano} >
                            <PianoKeys playing={this.state.playing} />
                        </group>
                        {/*insert MusicNote*/}
                        <Resources />
                        <group
                            visible={this.state.playing === true ? true : false}
                            position={this.state.float}
                            rotation={this.state.rotation}
                        >
                            <MusicNote />
                        </group>
                    </scene>
                </React3>
            </div>
        )
    }
}

export default Main;
