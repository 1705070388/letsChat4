var firebaseConfig = {
    apiKey: "AIzaSyAeKCB0Ks4tfmtglaUstPxwtP8lVwouZgI",
    authDomain: "letschat-19ab9.firebaseapp.com",
    databaseURL: "https://letschat-19ab9-default-rtdb.firebaseio.com",
    projectId: "letschat-19ab9",
    storageBucket: "letschat-19ab9.appspot.com",
    messagingSenderId: "814726104868",
    appId: "1:814726104868:web:0634d043a68a67dde7d5b1",
    measurementId: "G-ZX07QGP0WP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    console.log("send function called");
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name, 
          message : msg,
          like : 0
    });
    document.getElementById("msg").value= "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}