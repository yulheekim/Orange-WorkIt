import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

// var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyAAKyrJeEkfqy9RejaRtZtrvSBNSMu2KIk",
    authDomain: "workit-orange.firebaseapp.com",
    databaseURL: "https://workit-orange.firebaseio.com",
    projectId: "workit-orange",
    storageBucket: "workit-orange.appspot.com",
    messagingSenderId: "947307955403"
};
// var firebase = firebase.initializeApp(config);
// var database = firebase.database();
// var ref = database.ref("/");
// ref.once("value").then(function(snapshot) {
//     console.debug(snapshot.val())
// });
const settings = {timestampsInSnapshots: true};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
