import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFduaqg65Y_SpxOvo-mSjSAsQhbJ7VFzM",
    authDomain: "liwell.firebaseapp.com",
    projectId: "liwell",
    storageBucket: "liwell.appspot.com",
    messagingSenderId: "899627360526",
    appId: "1:899627360526:web:8524e808b945a5c6e6f75f",
    measurementId: "G-0X2Z13JXTN"

};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapSchot = await userRef.get();

    if (!snapSchot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;