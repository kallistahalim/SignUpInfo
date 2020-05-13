  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDFUSOiRMPjlJ29EViFDp9waf54yAoMl8g",
    authDomain: "signup-info-72368.firebaseapp.com",
    databaseURL: "https://signup-info-72368.firebaseio.com",
    projectId: "signup-info-72368",
    storageBucket: "signup-info-72368.appspot.com",
    messagingSenderId: "782883229335",
    appId: "1:782883229335:web:d843fd39de32f7644b63d2",
    measurementId: "G-H08939BJXP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var name = "";
  var email = "";
  var age = 0;
  var interest = "";

  $(".btn").on("click", function() {
      name = $("#name").val().trim();  
      email = $("#email").val().trim();  
      age = $("#age").val().trim();  
      interest = $("#interest").val().trim();  

      firebase.database().ref().push({
        name: name,
        email: email,
        age: age,
        interest: interest
        
    });
  });

  firebase.database().ref().on("value", function(snapshot) {
      console.log(snapshot.val());
  })

