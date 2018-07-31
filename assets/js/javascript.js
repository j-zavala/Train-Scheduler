//1. Initialize Firebase
var config = {
    apiKey: "AIzaSyCsPRWmnzT7vS_wnxIB8xdtSjedibOeUws",
    authDomain: "train-schedule-f2394.firebaseapp.com",
    databaseURL: "https://train-schedule-f2394.firebaseio.com",
    projectId: "train-schedule-f2394",
    storageBucket: "train-schedule-f2394.appspot.com",
    messagingSenderId: "353820245102"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

//2. Button for adding Trains
$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    //Grabs User input
    let trainName = $("#train-name-input").val().trim();
    let destination = $("#destination-input").val().trim();
    let trainStart = moment($("#start-input").val().trim(), "kk:mm").format("h:mm a");
    let frequency = $("#frequency").val().trim();

    //Creates local "temporary" object for holding employee data
    let newTrain = {
        name: trainName,
        destination: destination,
        start: trainStart,
        frequency: frequency
    };

    //Uploads employee data to the database
    database.ref().push(newTrain);

    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#start-input").val("");
    $("#frequency").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    //Store everything into a variable
    let trainName = childSnapshot.val().name;
    let destination = childSnapshot.val().destination;
    let trainStart = childSnapshot.val().start;
    let frequency = childSnapshot.val().frequency;


      // Employee Info
  console.log(trainName);
  console.log(destination);
  console.log(trainStart);
  console.log(frequency);
});
