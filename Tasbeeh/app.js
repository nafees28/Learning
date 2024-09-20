var subhanallah_Dashboard = document.getElementById("subhanallah_Dashboard")
var Alhamdulillah_Dashboard = document.getElementById("Alhamdulillah_Dashboard")
var Lailaha_Dashboard = document.getElementById("Lailaha_Dashboard")
var Durod_Dashboard = document.getElementById("Durod_Dashboard")
var Dashboard = document.getElementById("Dashboard")
var Section2 = document.getElementById("Section2")
var Alhamdulillah_link = document.getElementById("Alhamdulillah_link")
var Lailaha_link = document.getElementById("Lailaha_link")
var Durod_link = document.getElementById("Durod_link")
var Subhanallah_link = document.getElementById("Subhanallah_link")
function ViewSubhanallah() {
    Dashboard.classList.add("d-none")
    Alhamdulillah_link.classList.add("d-none")
    Lailaha_link.classList.add("d-none")
    Durod_link.classList.add("d-none")
    Subhanallah_link.classList.remove("d-none")
}
function Viewalham() {
    Dashboard.classList.add("d-none")
    Subhanallah_link.classList.add("d-none")
    Lailaha_link.classList.add("d-none")
    Durod_link.classList.add("d-none")
    Alhamdulillah_link.classList.remove("d-none")
}
function ViewaLailaha() {
    Dashboard.classList.add("d-none")
    Subhanallah_link.classList.add("d-none")
    Lailaha_link.classList.remove("d-none")
    Durod_link.classList.add("d-none")
    Alhamdulillah_link.classList.add("d-none")
}

function Viewadurod() {

    Dashboard.classList.add("d-none")
    Subhanallah_link.classList.add("d-none")
    Lailaha_link.classList.add("d-none")
    Durod_link.classList.remove("d-none")
    Alhamdulillah_link.classList.add("d-none")
}

function Dashboard_view() {

    Dashboard.classList.remove("d-none")
    Subhanallah_link.classList.add("d-none")
    Lailaha_link.classList.add("d-none")
    Durod_link.classList.add("d-none")
    Alhamdulillah_link.classList.add("d-none")
}




var Counter_value = document.getElementById("Subhanallah_Counter_value")
function AddSubhanallah() {
    Counter_value.innerHTML++

}
function MinusSubhanallah() {
    if (Counter_value.innerHTML > 1) {
        Counter_value.innerHTML--
    }
}





var Alhamdulillah_Counter_value = document.getElementById("Alhamdulillah_Counter_value")
function AddAlhamdulillah() {
    Alhamdulillah_Counter_value.innerHTML++

}
function MinusAlhamdulillah() {
    if (Alhamdulillah_Counter_value.innerHTML > 1) {
        Alhamdulillah_Counter_value.innerHTML--
    }
}


var Lailaha_Counter_value = document.getElementById("Lailaha_Counter_value")
function AddLailaha() {
    Lailaha_Counter_value.innerHTML++

}
function MinusLailaha() {
    if (Lailaha_Counter_value.innerHTML > 1) {
        Lailaha_Counter_value.innerHTML--
    }
}

var durod_Counter_value = document.getElementById("durod_Counter_value")
function AddDurod() {
    durod_Counter_value.innerHTML++

}
function MinusDurod() {
    if (durod_Counter_value.innerHTML > 1) {
        durod_Counter_value.innerHTML--
    }
}


function Subhanallah_count_Save() {
    var SubhanallahDashoard_value = document.getElementById("SubhanallahDashoard_value")
    console.log(Number(SubhanallahDashoard_value.innerHTML),"dashborad");
    console.log( Number(Counter_value.innerHTML),"coubter")
    SubhanallahDashoard_value.innerHTML=Number(Counter_value.innerHTML)
}

function Alhamdulillah_count_Save() {
        var Alhamdulillah_Dashboard = document.getElementById("Alhamdulillah_Dashboard")
    Alhamdulillah_value.innerHTML= Number(Alhamdulillah_Counter_value.innerHTML)
    console.log(Alhamdulillah_value.innerHTML);
}

function Lailaha_Save() {

    var Lailaha_Dashboard = document.getElementById("Lailaha_Dashboard")
    Lailaha_value.innerHTML= Number(Lailaha_Counter_value.innerHTML)
    console.log(Lailaha_value.innerHTML);
}
function Durod_Save() {

    var Durod_Dashboard = document.getElementById("Durod_Dashboard")
    Durod_value.innerHTML= Number(durod_Counter_value.innerHTML)
    console.log(Durod_value.innerHTML);
}












































const firebaseConfig = {
    apiKey: "AIzaSyC-D1aLXoqrzdZQJ95E_f1uqKDOBeXr8fc",
    authDomain: "class-2-693ed.firebaseapp.com",
    projectId: "class-2-693ed",
    storageBucket: "class-2-693ed.appspot.com",
    messagingSenderId: "674780174704",
    appId: "1:674780174704:web:d890a15ac00965581cd7b5",
    measurementId: "G-VGZEGM831J"
};

var name_user = document.getElementById("name_user")


firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();

function signUp() {
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var userName = document.getElementById('userName')


    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user)
            db.collection("user").add({
                userName: userName.value,
                Email: email.value,
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
            console.log("Error msg===>", errorMessage)
            // ..
        });
    var Login = document.getElementById("Login")

    Login.classList.add("d-none")
    name_user.innerHTML=userName.innerHTML
}

function signIn() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("user", user)




            db.collection("user").where("uid", "==", user.uid)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
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
            console.log("Error Msg===>>", errorMessage)
        });



}




