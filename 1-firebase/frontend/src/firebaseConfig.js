import {
     initializeApp,
} from "firebase/app" 

import {
    getFirestore
} from "@firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYDgwYTfpXLHj5oDMZLDtoSezu1y4VN20",
    authDomain: "crud-tutorial-5038e.firebaseapp.com",
    projectId: "crud-tutorial-5038e",
    storageBucket: "crud-tutorial-5038e.appspot.com",
    messagingSenderId: "327618485314",
    appId: "1:327618485314:web:a2d21a4a172e7b9ccb21db",
    measurementId: "G-TY6P9VCZFQ"
  };

  // Initialize app
  const app = initializeApp(firebaseConfig);

  // Get data from firestore
export const db = getFirestore(app)