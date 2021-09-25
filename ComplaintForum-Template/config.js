import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDVJDuC4qsn3X_WzIwKoyk6LmJU7tOECwQ",
  authDomain: "complaint-forum-a1d46.firebaseapp.com",
  projectId: "complaint-forum-a1d46",
  storageBucket: "complaint-forum-a1d46.appspot.com",
  messagingSenderId: "343513856105",
  appId: "1:343513856105:web:251a384dee144b417f8af8"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

