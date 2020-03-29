import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyADg1CQMnsPnMLSLGJ2qO-Xzp_AxPe2c8I",
    authDomain: "crwn-cl-db.firebaseapp.com",
    databaseURL: "https://crwn-cl-db.firebaseio.com",
    projectId: "crwn-cl-db",
    storageBucket: "crwn-cl-db.appspot.com",
    messagingSenderId: "115476783214",
    appId: "1:115476783214:web:eb707e0c599acf88cbc67f",
    measurementId: "G-7WN8WLBP88"
  }

export const createUserProfileDocument = async (userAuth, additonalData) =>{
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      })
      //console.log("Loggged in")
    }
    catch (error){
      console.log("error creating user",error.message)
    }

  }
  return userRef
}



firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;