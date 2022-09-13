import firebase from 'firebase';

// adicione SDK do Firebase

const firebaseConfig = {
  apiKey: "AIzaSyBZ3EVgW2bsyjqq9o9SAKFvQU4Pk_6EJ5M",
  authDomain: "projeto-67-64071.firebaseapp.com",
  projectId: "projeto-67-64071",
  storageBucket: "projeto-67-64071.appspot.com",
  messagingSenderId: "653153883911",
  appId: "1:653153883911:web:4c3a83af1f730e961117a2",
  measurementId: "G-V12KVLG79F",
  databaseUrl:"https://console.firebase.google.com/u/0/project/projeto-67-64071/database/projeto-67-64071-default-rtdb/data"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();