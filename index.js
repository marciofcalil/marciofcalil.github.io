const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");


const firebaseConfig = {
    apiKey: "AIzaSyDZw0enmJRnC5lOd0KgHARt7zyLnGiW5oc",
    authDomain: "testepushpwamfc.firebaseapp.com",
    projectId: "testepushpwamfc",
    storageBucket: "testepushpwamfc.appspot.com",
    messagingSenderId: "539926553453",
    appId: "1:539926553453:web:500c5818d625a84030f064",
    measurementId: "G-SMSQ3Z8T1Z"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const messaging = firebase.messaging();


messaging
  .requestPermission()
  .then(() => {
    message.innerHTML = "Notifications allowed";
    return messaging.getToken();
  })
  .then(token => {
    tokenString.innerHTML = "Token Is : " + token;
  })
  .catch(err => {
    errorMessage.innerHTML = errorMessage.innerHTML + "; " + err;
    console.log("No permission to send push", err);
  });


messaging.onMessage(payload => {
  console.log("Message received. ", payload);
  const { title, ...options } = payload.notification;
});
