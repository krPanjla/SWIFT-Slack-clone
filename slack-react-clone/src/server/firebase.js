import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyAwLzDtbxC4Iprrugtx7o__AaldIPfVCjE",
    authDomain: "slack-react-clone-422e8.firebaseapp.com",
    projectId: "slack-react-clone-422e8",
    storageBucket: "slack-react-clone-422e8.appspot.com",
    messagingSenderId: "868884084482",
    appId: "1:868884084482:web:3f74c86b3280e2a139b41b",
    measurementId: "G-5JSLB3PG6G"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;