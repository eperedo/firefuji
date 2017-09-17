import firebase from 'firebase';

const config = {
	apiKey: process.env.apiKey,
	authDomain: process.env.authDomain,
	databaseURL: process.env.databaseURL,
	projectId: process.env.projectId,
	storageBucket: process.env.storageBucket,
	messagingSenderIdd: process.env.messagingSenderIdd,
};

firebase.initializeApp(config);

export default firebase;

export const db = firebase.database();

