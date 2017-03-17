import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import Tone from 'tone';
import PianoKeys from './components/PianoKeys';
import KeyArray from './components/KeyArray';

class Piano extends React.Component {
  constructor(props, context) {

    super(props, context);

    this.state = {
      // construct the position vector here, because if we use 'new' within render,
      // React will think that things have changed when they have not.
      cameraPosition: new THREE.Vector3(0, 0, 10),
      //ensures that playing the pianokeys is false but when used in setState, the piano keys will play
      playing: false
    }

    //bind 
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    this.synth = this.synth.bind(this);
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
    // console.log(keyPressed)    
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
        this.synth(KeyArray[i].note);
        this.setState({
          playing: true
        })
      }
    }
    //this loops through the KeyArray & makes sure that if the KeyArray[i].pressed = true, 
    //all the notes in the KeyArray pressed will play
    for (let i = 0; i < KeyArray.length; i++) {
      if (KeyArray[i].pressed === true) {
        this.synth(KeyArray[i].note);
      }
    }
  }

  //create event to on release of keyboard pressdown (i.e.keyup)
  keyUp(e) {
    e.preventDefault();
    //this is to make sure that when the pressed keys are released, the keys are no longer playing
    let keyPressed = String.fromCharCode(e.keyCode);

    for (let i = 0; i < KeyArray.length; i++) {
      if (keyPressed === KeyArray[i].key) {
        KeyArray[i].pressed = false;
        this.setState({
          playing: false
        })
      }
    }
  }

  //create synth/sound event
  //after keyDown runs, synth runs
  synth(note) {
    let synth = new Tone.Synth().toMaster();
    // console.log(synth)
    // synth.toMaster();
    synth.triggerAttackRelease(note, "4n");
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

    return (
      <React3
        mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
        width={width}
        height={height}
        /*clearColor={0xf0f0f0}*/
      >
        <scene>
          <ambientLight
            color={0x505050}
          />
          <spotLight
            visible={true}
            castShadow={true}
            color={0xffffff}
            position={new THREE.Vector3(10, 10, 10)}
            lookAt={new THREE.Vector3(0, 0, 0)}
          />
          <perspectiveCamera
            name="camera"
            fov={75}
            aspect={width / height}
            near={0.1}
            far={1000}

            position={this.state.cameraPosition}
          />
          {/*insert PianoKeys*/}
          <PianoKeys keyColor={this.state.keyColor} playing={this.state.playing} />
        </scene>
      </React3>);
  }
}

export default Piano;
