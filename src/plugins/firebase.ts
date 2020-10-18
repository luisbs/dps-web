import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"

const firebaseConf = {
  apiKey: "AIzaSyDNiC1UW3IFVxcSE7iYD4_FLJr__DKCaMY",
  authDomain: "dps-web-1ed0d.firebaseapp.com",
  databaseURL: "https://dps-web-1ed0d.firebaseio.com",
  projectId: "dps-web-1ed0d",
  storageBucket: "dps-web-1ed0d.appspot.com",
  messagingSenderId: "540719559840",
  appId: "1:540719559840:web:985798089bb6b123b1c5c5",
}

/* Init Firebase */
firebase.initializeApp(firebaseConf)

export const Auth = firebase.auth()
export const Firestore = firebase.firestore()
