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
console.log(user_name);
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      console.log(room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}