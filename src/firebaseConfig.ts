import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyC4GjXCbPEMioQmAgRn2EJ0ihLp8UmkbqY",
    authDomain: "notification-da466.firebaseapp.com",
    projectId: "notification-da466",
    storageBucket: "notification-da466.firebasestorage.app",
    messagingSenderId: "120825688982",
    appId: "1:120825688982:web:dcb866462319ce070c23b7",
    measurementId: "G-7ZC7681W95"
};


const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export default app;