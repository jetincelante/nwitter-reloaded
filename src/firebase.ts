// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBECZHzik33dW1YTOv1Jf6CZjH0zake_fk",
  authDomain: "nwitter-reloaded-5f80b.firebaseapp.com",
  projectId: "nwitter-reloaded-5f80b",
  storageBucket: "nwitter-reloaded-5f80b.firebasestorage.app",
  messagingSenderId: "77781670217",
  appId: "1:77781670217:web:e6bdfc2e3c97c91c62a298"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// config 객체로 app 생성 
 export const auth = getAuth(app);
// 위의 app에 대한 인증 서비스 할거야
