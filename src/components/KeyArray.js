// import * as THREE from 'three';
// import React from 'react';
// import MusicNote from './MusicNote';
//create key array that objects in it for the music notes & keyboard keys 
//whiteKey: true = white piano keys; whiteKey: false = black piano keys
//keys can go from 1-10 (i.e.C1-C10)
let KeyArray = [
    // {
    //     pressed: false,
    //     whiteKey: true,
    //     key: 'Z',
    //     note: 'C',
    //     position: null
    // },
    // {
    //     pressed: false,
    //     whiteKey: false,
    //     key: 'S',
    //     note: 'C#4',
    //     position: null
    // },
    // {
    //     pressed: false,
    //     whiteKey: true,
    //     key: 'X',
    //     note: 'D4',
    //     position: null
    // },
    // {
    //     pressed: false,
    //     whiteKey: false,
    //     key: 'D',
    //     note: 'D#4',
    //     position: null
    // },
    // {
    //     pressed: false,
    //     whiteKey: true,
    //     key: 'C',
    //     note: 'E4',
    //     position: null
    // },
    // {
    //     pressed: false,
    //     whiteKey: true,
    //     key: 'V',
    //     note: 'F4',
    //     position: null
    // },
    // {
    //     pressed: false,
    //     whiteKey: false,
    //     key: 'G',
    //     note: 'F#4',
    //     position: null
    // },
    // {
    //     pressed: false,
    //     whiteKey: true,
    //     key: 'B',
    //     note: 'G4',
    //     position: null
    // },
    // {
    //     pressed: false,
    //     whiteKey: false,
    //     key: 'H',
    //     note: 'G#4',
    //     position: null
    // },
    // {
    //     pressed: false,
    //     whiteKey: true,
    //     key: 'N',
    //     note: 'A4',
    //     position: null
    // },
    // {
    //     pressed: false,
    //     whiteKey: false,
    //     key: 'J',
    //     note: 'A#4',
    //     position: null
    // },
    // {
    //     pressed: false,
    //     whiteKey: true,
    //     key: 'M',
    //     note: 'B4',
    //     position: null
    // },
    {
        pressed: false,
        whiteKey: true,
        key: 'Q',
        note: 'C',
        position: null,
        color: Math.random() * 0xffffff,
        // musicNote: <MusicNote />
    },
    {
        pressed: false,
        whiteKey: false,
        key: '2',
        note: 'C#',
        position: null,
        color: Math.random() * 0xffffff
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'W',
        note: 'D',
        position: null,
        color: Math.random() * 0xffffff
    },
    {
        pressed: false,
        whiteKey: false,
        key: '3',
        note: 'D#',
        position: null,
        color: Math.random() * 0xffffff
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'E',
        note: 'E',
        position: null,
        color: Math.random() * 0xffffff
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'R',
        note: 'F',
        position: null,
        color: Math.random() * 0xffffff
    },
    {
        pressed: false,
        whiteKey: false,
        key: '5',
        note: 'F#',
        position: null,
        color: Math.random() * 0xffffff
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'T',
        note: 'G',
        position: null,
        color: Math.random() * 0xffffff
    },
    {
        pressed: false,
        whiteKey: false,
        key: '6',
        note: 'G#',
        position: null,
        color: Math.random() * 0xffffff
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'Y',
        note: 'A',
        position: null,
        color: Math.random() * 0xffffff
    },
    {
        pressed: false,
        whiteKey: false,
        key: '7',
        note: 'A#',
        position: null,
        color: Math.random() * 0xffffff
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'U',
        note: 'B',
        position: null,
        color: Math.random() * 0xffffff
    }
]

//linking the code below to position

// let whiteIndex = 0;
// let blackIndex = 0;

// for (let i = 0; i < KeyArray.length; i++) {
//     if (KeyArray[i].whiteKey === true) {
//         //whiteIndex increments by +1
//         whiteIndex++;
//         KeyArray[i].position = KeyArray[i].pressed === true ? new THREE.Vector3(-5 + (0.94 * whiteIndex), -1 + (0.33 * whiteIndex), 5 + (-0.3 * whiteIndex)) : new THREE.Vector3(-5 + (0.94 * whiteIndex), -1 + (0.35 * whiteIndex), 5 + (-0.3 * whiteIndex))
//     } else {
//         blackIndex++;
//         //by doing another if statement here, it will increase the blackIndex at just the note substrings that are saved in KeyArray
//         //keys.note.substring(0, 2) == 'C#' => just means that if the 1st two notes = C,#
//         //(0, 1) = 1 character & so (0, 2) = 2 characters
//         if (KeyArray[i].note.substring(0, 2) === 'C#' || KeyArray[i].note.substring(0, 2) === 'F#') {
//             blackIndex++
//         }
//         KeyArray[i].position = KeyArray[i].pressed === true ? new THREE.Vector3(-5.9 + (0.94 * blackIndex), -0.2 + (0.33 * blackIndex), 5 + (-0.3 * blackIndex)) : new THREE.Vector3(-5.9 + (0.94 * blackIndex), -0.2 + (0.35 * blackIndex), 5 + (-0.3 * blackIndex))
//     }
// }

export default KeyArray;
