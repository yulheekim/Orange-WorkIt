import Speech from 'speak-tts';
const speech = new Speech;

if(speech.hasBrowserSupport()) { // returns a boolean
    console.log("speech synthesis supported")
}

export function changeVoiceSpeed(speed) {
    speech.init({
        'volume': 1,
        'lang': 'en-GB',
        'rate': speed, // .75 for countdown, 1.25 for names
        'pitch': 1,
        'voice':'Google UK English Male',
        'splitSentences': true,
        'listeners': {
            'onvoiceschanged': (voices) => {
                console.log("Event voiceschanged", voices)
            }
        }
    });
}

// speech.init({
//     'volume': 1,
//     'lang': 'en-GB',
//     'rate': 1, // .75 for countdown, 1.25 for names
//     'pitch': 1,
//     'voice':'Google UK English Male',
//     'splitSentences': true,
//     'listeners': {
//         'onvoiceschanged': (voices) => {
//             console.log("Event voiceschanged", voices)
//         }
//     }
// });

export function saySomething(myText) {
    speech.speak({
        text: myText,
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
}

// say_something("hello trooper!");
