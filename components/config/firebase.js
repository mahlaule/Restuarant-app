import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDmGsn15VW1qmq7Cq6XsQe-kbgwTEYNs4w",
    authDomain: "restuarant-83caa.firebaseapp.com",
    projectId: "restuarant-83caa",
    storageBucket: "restuarant-83caa.appspot.com",
    messagingSenderId: "954842890517",
    appId: "1:954842890517:web:ef08ed491f3091a490e91c"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);