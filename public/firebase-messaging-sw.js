importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

// Firebase configuration (same as in firebaseConfig.ts)
const firebaseConfig = {
    apiKey: "AIzaSyC4GjXCbPEMioQmAgRn2EJ0ihLp8UmkbqY",
    authDomain: "notification-da466.firebaseapp.com",
    projectId: "notification-da466",
    storageBucket: "notification-da466.firebasestorage.app",
    messagingSenderId: "120825688982",
    appId: "1:120825688982:web:dcb866462319ce070c23b7",
    measurementId: "G-7ZC7681W95"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("Received background message ", payload);

    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "/logo.png", // Add a valid icon path
    });
});
