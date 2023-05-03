// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAp1CUSkOI8XyMHVI4SlmwzYYBd9y6Tqkg",
      authDomain: "grupo5b.firebaseapp.com",
      databaseURL:"https://grupo5b-default-rtdb.firebaseio.com",
      projectId: "grupo5b",
      storageBucket: "grupo5b.appspot.com",
      messagingSenderId: "506340022338",
      appId: "1:506340022338:web:f7795669cf7705238b75db"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//AÑADE TUS ENLACES DE FIREBASE
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="Che Hello Today Is A Good Morning To Have A Good Morning PIPIPI Pe Causa "+user_name;
function añadir_sala(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("nombre_sala",room_name);
      window.location.replace("kwitter_page.html");
}

function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
console.log("room name "+Room_names);
row="<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML+=row;
      //Final del código
      });});}
getRoom();
function redirectToRoomName(Room_names){
      console.log(Room_names);
      localStorage.setItem("nombre_sala",Room_names);
      window.location.replace("kwitter_page.html");
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("nombre_sala");
      window.location.replace("index.html");
}