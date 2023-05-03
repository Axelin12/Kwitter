//TUS ANLACES DE FIREBASE
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
room_name=localStorage.getItem("nombre_sala");

function send() {
      msg=document.getElementById("msg").value ;
      console.log(msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value ="";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("salida").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); 
      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
console.log(firebase_message_id);
console.log(message_data);
nombre=message_data["name"];
message=message_data["message"];
like=message_data["like"];
nombre_contag="<h4 id='usuario'> " + nombre + "<img class='user_tick' src='tick.png'>";
message_contag="<h4 class='message_h4'>" + message + "</h4>";
like_botton="<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
span_contag="<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
renglon=nombre_contag+message_contag+like_botton+span_contag;
document.getElementById("salida").innerHTML+=renglon
//Termina código
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
function updateLike(message_id){
      console.log("button like "+ message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value ;
      update_like=Number(likes)+1;
      console.log(update_like);
      firebase.database().ref(room_name).child(message_id).update({like:update_like});
      }