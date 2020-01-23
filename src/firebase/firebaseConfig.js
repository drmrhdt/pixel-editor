import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8A54D8DEGiPoVfIaBJCauhd9kI7xSz48",
  authDomain: "zen-drawing-app.firebaseapp.com",
  databaseURL: "https://zen-drawing-app.firebaseio.com",
  projectId: "zen-drawing-app",
  storageBucket: "zen-drawing-app.appspot.com",
  messagingSenderId: "185090866068",
  appId: "1:185090866068:web:4522f87035878493dfed81",
  measurementId: "G-FXPNBBELMJ"
};

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const firestore = firebase.firestore();
