var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyAAKyrJeEkfqy9RejaRtZtrvSBNSMu2KIk",
    authDomain: "workit-orange.firebaseapp.com",
    databaseURL: "https://workit-orange.firebaseio.com",
    projectId: "workit-orange",
    storageBucket: "workit-orange.appspot.com",
    messagingSenderId: "947307955403"
};
var firebase = firebase.initializeApp(config);
var database = firebase.database();
print("wow")