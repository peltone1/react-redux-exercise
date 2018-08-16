import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBkaCy3PwEXsOuXPwgfXDt4HztOZFwuiQk",
    authDomain: "redux-test-7f1ee.firebaseapp.com",
    databaseURL: "https://redux-test-7f1ee.firebaseio.com",
    projectId: "redux-test-7f1ee",
    storageBucket: "redux-test-7f1ee.appspot.com",
    messagingSenderId: "131192460724"
}
firebase.initializeApp(config)

export const database = firebase.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()