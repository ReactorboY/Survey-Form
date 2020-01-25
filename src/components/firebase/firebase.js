import app from 'firebase/app'
import 'firebase/auth'
require('firebase/firestore')

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.firestore()
        this.provider = new app.auth.GoogleAuthProvider()
    }
    //  AUth API's
    //  Google SignIn
    googleSignIn = () =>  this.auth.signInWithPopup(this.provider)


    docreateUser = (email,password) => 
      this.auth.createUserWithEmailAndPassword(email,password)

    dosignInUser = (email,password) =>  
      this.auth.signInWithEmailAndPassword(email,password)
    
    doSignOut = () => this.auth.signOut()
    notes = () =>  this.db.collection('todos')
}

export default Firebase