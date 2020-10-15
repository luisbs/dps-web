import React, {Component}from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import*as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseconfig from './firebase';
import {BrowserRouter,Route,Link as Link2} from 'react-router-dom';

const firebaseApp = firebase.initializeApp(firebaseconfig);

class Login extends Component {
    render(){ 
        const {user,signOut,signInWithGoogle}= this.props;
    return(
        <div>
            {
                user ? 
                <p>hello, {user.displayName}</p>
                :<p>Please, sign in</p>
            }
            {
                user 
                ? <button onClick={signOut}>Sign Out</button>
               : <button onClick={signInWithGoogle}>Sign in with google</button>
            }
        </div>
    );       
    }
}
const firebaseAppAuth =firebaseApp.auth();
const providers= {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);