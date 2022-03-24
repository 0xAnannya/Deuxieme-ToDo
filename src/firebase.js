import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCrNUaBp1i1I7B5q6zDl-pVvYWgEpbze2U",
    authDomain: "deuxieme-todo.firebaseapp.com",
    projectId: "deuxieme-todo",
    storageBucket: "deuxieme-todo.appspot.com",
    messagingSenderId: "1049657356128",
    appId: "1:1049657356128:web:342acb049afa5aaf4bf805"
  };

  const app=initializeApp(firebaseConfig);

  const db=getFirestore(app);

  export { db };