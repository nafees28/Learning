const firebaseConfig = {
  apiKey: "AIzaSyB2CaDYD7DBaEs_lai3Sz6dcbcP93Po834",
  authDomain: "kbw-web.firebaseapp.com",
  projectId: "kbw-web",
  storageBucket: "kbw-web.appspot.com",
  messagingSenderId: "340583064268",
  appId: "1:340583064268:web:ee7a874e48aef942a11869",
  measurementId: "G-YCQDZV0ZQT",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function signUp() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var userName = document.getElementById("userName").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      db.collection("user")
        .add({
          userName: userName,
          Email: email,
          uid: user.uid
        })
        .then((e) => {
          console.log("Document written with ID: ", e.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error msg===>", errorMessage);
      // ..
    });
}

function signIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("user", user);

      db.collection("user").where("uid", "==", user.uid)
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data().Email);
              
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });  


    

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error Msg===>>", errorMessage);
    });
}

// function dummyData() {
//   var email = document.getElementById("email").value;
//   var userName = document.getElementById("userName").value;

//   db.collection("user")
//     .add({
//       userName: userName,
//       Email: email,
//     })
//     .then((e) => {
//       console.log("Document written with ID: ", e.id);
//     })
//     .catch((error) => {
//       console.error("Error adding document: ", error);
//     });
// }

// dummyData();
