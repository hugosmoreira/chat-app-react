import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyBICl2YWfsGiF_KuNBCtciO-hE022iKIUE",
    authDomain: "react-slack-clone-423d0.firebaseapp.com",
    projectId: "react-slack-clone-423d0",
    storageBucket: "react-slack-clone-423d0.appspot.com",
    messagingSenderId: "771796053280",
    appId: "1:771796053280:web:4826f1a71573a9ec12fb45",
    measurementId: "G-92LV8MME6K",
    databaseURL: "react-slack-clone-423d0-default-rtdb.firebaseio.com"
   
};
firebase.initializeApp(firebaseConfig)

export default firebase;