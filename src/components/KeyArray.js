//create key array that objects in it for the music notes & keyboard keys 
//whiteKey: true = white piano keys; whiteKey: false = black piano keys
//keys can go from 1-10 (i.e.C1-C10)
let KeyArray = [
    {
        pressed: false,
        whiteKey: true,
        key: 'q',
        note: 'A1',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: '2',
        note: 'A#1',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'w',
        note: 'B1',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'e',
        note: 'C2',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: '4',
        note: 'C#2',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'r',
        note: 'D2',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: '5',
        note: 'D#2',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 't',
        note: 'E2',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'y',
        note: 'F2',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: '7',
        note: 'F#2',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'u',
        note: 'G2',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: '8',
        note: 'G#2',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'i',
        note: 'A2',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: '9',
        note: 'A#2',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'o',
        note: 'B2',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'p',
        note: 'C3',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'a',
        note: 'C#3',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'z',
        note: 'D3',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: 's',
        note: 'D#3',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'x',
        note: 'E3',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'c',
        note: 'F3',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'f',
        note: 'F#3',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'v',
        note: 'G3',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'g',
        note: 'G#3',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'b',
        note: 'A3',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'h',
        note: 'A#3',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'n',
        note: 'B3',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'm',
        note: 'C4',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'k',
        note: 'C#4',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: true,
        key: ',',
        note: 'D4',
        position: null,
        color: Math.random() * 0xffffff,
        range: 1
    },
    {
        pressed: false,
        whiteKey: false,
        key: '2',
        note: 'D#4',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'w',
        note: 'E4',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'e',
        note: 'F4',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: false,
        key: '4',
        note: 'F#4',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'r',
        note: 'G4',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: false,
        key: '5',
        note: 'G#4',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 't',
        note: 'A4',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: false,
        key: '6',
        note: 'A#4',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'y',
        note: 'B4',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'u',
        note: 'C5',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: false,
        key: '8',
        note: 'C#5',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'i',
        note: 'D5',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: false,
        key: '9',
        note: 'D#5',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'o',
        note: 'E5',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'p',
        note: 'F5',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'a',
        note: 'F#5',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'z',
        note: 'G5',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: false,
        key: 's',
        note: 'G#5',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'x',
        note: 'A5',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'd',
        note: 'A#5',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'c',
        note: 'B5',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'v',
        note: 'C6',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'g',
        note: 'C#6',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'b',
        note: 'D6',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'h',
        note: 'D#6',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'n',
        note: 'E6',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'm',
        note: 'F6',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'k',
        note: 'F#6',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: ',',
        note: 'G6',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'l',
        note: 'G#6',
        position: null,
        color: Math.random() * 0xffffff,
        range: 2
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'q',
        note: 'A7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: false,
        key: '2',
        note: 'A#7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'w',
        note: 'B7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'e',
        note: 'C7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: false,
        key: '4',
        note: 'C#7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'r',
        note: 'D7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: false,
        key: '5',
        note: 'D#7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 't',
        note: 'E7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'y',
        note: 'F7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: false,
        key: '7',
        note: 'F#7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'u',
        note: 'G7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: false,
        key: '8',
        note: 'G#7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'i',
        note: 'A7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: false,
        key: '9',
        note: 'A#7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'o',
        note: 'B7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'p',
        note: 'C7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'a',
        note: 'C#7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'z',
        note: 'D7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: false,
        key: 's',
        note: 'D#7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'x',
        note: 'E7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'c',
        note: 'F7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'f',
        note: 'F#7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'v',
        note: 'G7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'g',
        note: 'G#7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'b',
        note: 'A7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: false,
        key: 'h',
        note: 'A#7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'n',
        note: 'B7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    },
    {
        pressed: false,
        whiteKey: true,
        key: 'm',
        note: 'C7',
        position: null,
        color: Math.random() * 0xffffff,
        range: 3
    }
]

export default KeyArray;
