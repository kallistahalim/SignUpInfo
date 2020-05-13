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

  $("button").on("click", function() {
      name = $("#input-name").val().trim();  
      email = $("#input-email").val().trim();  
      age = $("#input-age").val().trim();  
      interest = $("#input-interest").val().trim(); 

      firebase.database().ref().push({
        name: name,
        email: email,
        age: age,
        interest: interest,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
        
    });
  });

  firebase.database().ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
      console.log(snapshot.val());
      $("#name").html(snapshot.val().name);
      $("#email").html(snapshot.val().email);
      $("#age").html(snapshot.val().age);
      $("#interest").html(snapshot.val().interest);
  })

  firebase.database().ref().on("child_added", function(snapshot) {
      $(".all").append("<p>" + snapshot.val().name + "</p>")
      $(".all").append("<p>" + snapshot.val().email + "</p>")
      $(".all").append("<p>" + snapshot.val().age + "</p>")
      $(".all").append("<p>" + snapshot.val().interest + "</p>")
      $(".all").append("<hr>");
  })
