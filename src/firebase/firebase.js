
//! Importing Firebase modules
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//? Setting up configuration for firebase
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
//
export const createUserProfileDocument = async (userAuth, additonalData) =>{

  //? Check if user exists/isLogged in
  if (!userAuth) return;
  
  //? Get UserDocument from firestore
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  //? Get UserReferenceSnapshot from firestore
  const snapShot = await userRef.get()

  //? If snapshot doesn't exists execute this
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //? Creating a new User and adding it to firestoreDB
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

export const AddCollectionAndItems = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(obj.title)
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}



firebase.initializeApp(config)


export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {});
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;