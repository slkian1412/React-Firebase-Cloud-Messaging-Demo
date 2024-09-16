// Firebase Cloud Messaging Configuration File.
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyD9eDLVWQyLz4APzZrPH1oaO6lkHkZ4b3E",
  authDomain: "deist-noti.firebaseapp.com",
  projectId: "deist-noti",
  storageBucket: "deist-noti.appspot.com",
  messagingSenderId: "1034135078572",
  appId: "1:1034135078572:web:69c16cffdb6775cca94109",
  measurementId: "G-3R5HHNWNHV",
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey: `BFjCYLwgoXLAFJPMimN8kPjkFnXzNplYLZfq23gBYhETshWvcrm0kRo0Dqwkq22j1nnqVtSQX2we8rJRPdpWoXQ`,
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
