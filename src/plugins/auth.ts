import firebase from "firebase"
import withFirebaseAuth from "react-with-firebase-auth"

import { Auth } from "./firebase"

/** Create the FirebaseAuth component wrapper */
export const createComponentWithAuth = withFirebaseAuth({
  firebaseAppAuth: Auth,
  providers: {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  },
})

export type { WrappedComponentProps } from "react-with-firebase-auth"
