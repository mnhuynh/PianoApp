import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import Tone from 'tone';
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
      camera: new THREE.Vector3(0, 0, 15),
      zoomPiano: new THREE.Vector3(),
      rotatePiano: new THREE.Euler(0, 0, 0),
      //ensures that playing the pianokeys is false but when used in setState, the piano keys will play
      playing: false,
      float: new THREE.Vector3(),
      rotation: new THREE.Euler(),
      notePosition: new THREE.Vector3()

    }
    //start at middle octave
    this.octave = 4
    //@https://github.com/Tonejs/Tone.js/wiki/Instruments
    //4=number of notes that can be played
    this.synth = new Tone.PolySynth(4, Tone.Synth).toMaster();

    //bind 
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.startSynth = this.startSynth.bind(this);
    this.stopSynth = this.stopSynth.bind(this);
  }

  _onAnimate = () => {
    let floatX = (this.state.notePosition.x * 120) - 60;
    //let floatY = this.state.float.y + 5
    let floatY = (this.state.notePosition.y * 90) + 300;
    let rotation = this.state.rotation;
    // console.log(floatY)
    // let direction = Math.floor(Math.random() * 100) - 50;

    //determine whether the note has a direction of +1 or -1
    //each time animate that note, update it's position using that notes direction
    //make an object with an array for each of the note
    //if/else statement to 

    this.setState({
      float: new THREE.Vector3(
        floatX,
        floatY,
        -1200
      ),
      rotation: new THREE.Euler(
        rotation.x + 0.05,
        rotation.y + 0.1,
        rotation.z + 0.05
      ),
    })
  }

  //create an event to enable keyboard keys to pressdown
  keyDown(e) {

    if (e.keyCode === 0) {
      return false;
    }
    e.preventDefault();
    // console.log(e.keyCode);
    //change keyCode to characters
    let keyPressed = String.fromCharCode(e.keyCode);

    //moving camera around
    let zoomPiano = this.state.zoomPiano;
    let rotatePiano = this.state.rotatePiano;
    var positionDelta = 1;
    var rotationDelta = 0.1;
    // console.log(rotatePiano);

    // left
    if (e.key === "ArrowLeft") {
      let rotate = new THREE.Euler(rotatePiano.x, rotatePiano.y - rotationDelta, rotatePiano.z)
      this.setState({
        rotatePiano: rotate
      })
    }
    //right
    else if (e.key === "ArrowRight") {
      let rotate = new THREE.Euler(rotatePiano.x, rotatePiano.y + rotationDelta, rotatePiano.z)
      this.setState({
        rotatePiano: rotate
      })
    }
    //zoom-in 
    else if (e.key === "ArrowDown") {
      let zoom = new THREE.Vector3(zoomPiano.x, zoomPiano.y, zoomPiano.z - positionDelta)
      this.setState({
        zoomPiano: zoom
      })
    }
    //zoom-out
    else if (e.key === "ArrowUp") {
      let zoom = new THREE.Vector3(zoomPiano.x, zoomPiano.y, zoomPiano.z + positionDelta)
      this.setState({
        zoomPiano: zoom
      })
    }

    //increasing & decreasing octaves 
    if (e.key === "=") {
      this.octave = this.octave + 1;
      //prevent from going higher than octave at 10
      if (this.octave === 11) {
        this.octave = 10
      }
    } else if (e.key === "-") {
      this.octave = this.octave - 1;
      //prevent from going lower than octave at 0
      if (this.octave === 0) {
        this.octave = 1
      }
    }
    // console.log(this.octave) 
    //loop through key array until we find the key whose key code matches the key code that was pressed
    for (let i = 0; i < KeyArray.length; i++) {
      if (keyPressed === KeyArray[i].key) {
        //this if statement is to make sure the sound isn't repeated when key is pressed down
        if (KeyArray[i].pressed === true) {
          return;
        }
        //this takes in whether or not the keyPressed in the KeyArray is actually pressed => KeyArray[i].pressed 
        //if it does then it should = to true since by default it is false
        KeyArray[i].pressed = true;
        // console.log(KeyArray[i].position)
        this.startSynth(KeyArray[i].note);
        this.setState({
          playing: true,
          notePosition: KeyArray[i].position
        })
      }
    }
    //this loops through the KeyArray & makes sure that if the KeyArray[i].pressed = true, 
    //all the notes in the KeyArray pressed will play
    // for (let i = 0; i < KeyArray.length; i++) {
    //   if (KeyArray[i].pressed === true) {
    //     this.synth(KeyArray[i].note);
    //   }
    // }
  }

  //create event to on release of keyboard pressdown (i.e.keyup)
  keyUp(e) {
    e.preventDefault();
    //this is to make sure that when the pressed keys are released, the keys are no longer playing
    let keyPressed = String.fromCharCode(e.keyCode);

    for (let i = 0; i < KeyArray.length; i++) {
      if (keyPressed === KeyArray[i].key) {
        KeyArray[i].pressed = false;
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
    // console.log(synth)
    synth.triggerAttack(note + this.octave);
  }

  stopSynth(note) {
    let synth = this.synth;
    synth.triggerRelease(note + this.octave);
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
    // position = new THREE.Vector3(0, 300, -1500)

    //create musicNoteJSX to get the <MusicNote /> position == KeyArray[i].position
    /*let musicNoteJSX = [];
    for (let i = 0; i < KeyArray.length; i++) {
      musicNoteJSX.push(
        <group key={i} position={KeyArray[i].position}>
          <MusicNote />
        </group>)
    }*/
    // rotation={this.state.rotateCamera}
    return (
      <React3
        mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
        width={width}
        height={height}
        shadowMapEnabled
        shadowMapType={THREE.PCFShadowMap}
        pixelRatio={window.devicePixelRatio}
        onAnimate={this._onAnimate}
      >
        <scene>
          <ambientLight
            color={0x505050}
          />
          <directionalLight
            color={0xffffff}
            intensity={1.75}

            castShadow

            shadowMapWidth={1024}
            shadowMapHeight={1024}

            shadowCameraLeft={-d}
            shadowCameraRight={d}
            shadowCameraTop={d}
            shadowCameraBottom={-d}

            shadowCameraFar={3 * d}
            shadowCameraNear={d}

            position={new THREE.Vector3(-20, 5, 15)}
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
          <group rotation={this.state.rotatePiano} position={this.state.zoomPiano} >
            <PianoKeys playing={this.state.playing} />
            <Resources />
            <group
              visible={this.state.playing === true ? true : false}
              position={this.state.float}
              rotation={this.state.rotation}
            >
              <MusicNote />
            </group>
          </group>
          {/*<mesh
          position={new THREE.Vector3(0, 0, -10)}>
            <planeGeometry
              height={35}
              width={55}
            />
            <meshBasicMaterial>
              <texture
                url="stars.jpg"
                anisotropy={16}
              />
            </meshBasicMaterial>
          </mesh>*/}
        </scene>
      </React3>
    )
  }
}

export default Main;
