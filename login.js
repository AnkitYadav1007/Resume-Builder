import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA0nXMddnrfVTFw1l9gKz09tWvXHx8KKZ4",
    authDomain: "college-project-6bdca.firebaseapp.com",
    databaseURL: "https://college-project-6bdca-default-rtdb.firebaseio.com",
    projectId: "college-project-6bdca",
    storageBucket: "college-project-6bdca.appspot.com",
    messagingSenderId: "70570382515",
    appId: "1:70570382515:web:556f6f74c39ae21badccc6",
    measurementId: "G-Q273H5DY45"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

full_name = document.getElementById('full_name').value;
Phone = document.getElementById('phone').value;
email = document.getElementById('email').value;
password = document.getElementById('password').value;
college_name = document.getElementById('college_name').value;
gender = document.getElementById('gender').value;

  auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("User Created");
        })
        .catch((error) => {
            const errorcode = error.code;
            const errormessage = error.message;
            alert(errormessage);
        });
