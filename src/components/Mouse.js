import React from 'react';
// import React3 from 'react-three-renderer';
// import * as THREE from 'three';

class Mouse extends React.Component {
constructor(props, context) {

    super(props, context);

    //mouse clicked down
    this.onMouseDown = 0;

    //bind 
    this.keyRotate = this.keyRotate.bind(this);
    this.synth = this.synth.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.keyUp = this.keyUp.bind(this);
    // this.onDocumentMouseDown = this.onDocumentMouseDown.bind(this);
    // this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this);
  };

  //create an event to enable & sense mouse click down & listen to when mouseUp happens
  onDocumentMouseDown(e) {
    e.preventDefault();

    document.addEventListener('mouseup', this.onDocumentMouseUp, false);

    const width = window.innerWidth;
    this.onMouseDown = width;
    this.setState({
      keyColor: 0xff55ff,
      synth: this.synth()
    })

  }

  //remove eventListener of mouseUp
  onDocumentMouseUp = () => {
    document.removeEventListener('mouseup', this.onDocumentMouseUp, false);
  }

  //Mount
  componentDidMount() {
    //put this here so that the entire document has the EventListener
    document.addEventListener('mousedown', this.onDocumentMouseDown, false);
  }

  //Unmount
  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onDocumentMouseUp, false);
  }

}

export default PianoKeys;
