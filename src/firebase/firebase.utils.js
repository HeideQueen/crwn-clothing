import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBIYhLOBW6PC6Hw7cVsjnqq65bd2Qcb1rI',
	authDomain: 'crwn-db-414d8.firebaseapp.com',
	databaseURL: 'https://crwn-db-414d8.firebaseio.com',
	projectId: 'crwn-db-414d8',
	storageBucket: 'crwn-db-414d8.appspot.com',
	messagingSenderId: '902304241109',
	appId: '1:902304241109:web:aa34a3e360b7ab6111995c',
	measurementId: 'G-KXCQLHW3VZ'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
