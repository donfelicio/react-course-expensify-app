import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(snapshotChild => {
//       expenses.push({
//         id: snapshotChild.key,
//         ...snapshotChild.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// const expenses = [
//   {
//     description: "First expense",
//     amount: 100,
//     note: "small note on expense",
//     createdAt: 500
//   },
//   {
//     description: "Second expense",
//     amount: 2500,
//     note: "small note on expense",
//     createdAt: 500
//   },
//   {
//     description: "Third expense",
//     amount: 500,
//     note: "small note on expense",
//     createdAt: 500
//   }
// ];

// expenses.map(expense => {
//   database.ref("expenses").push(expense);
// });

// database.ref("notes/-LngzUod_xxLJAIVF4_B").remove();

// database.ref("notes").push({ title: "Fourth note", body: "This is a note" });

// database.ref("notes").set(notes);

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Error: ", e);
//   }
// );

// database.ref().off(onValueChange);

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log("Data: ", val);
//   })
//   .catch(e => {
//     console.log("Error: ", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Felix Lepoutre",
//     age: 35,
//     isSingle: false,
//     location: {
//       city: "Haarlem",
//       country: "The Netherlands"
//     }
//   })
//   .then(data => {
//     console.log(`Data is saved`);
//   })
//   .catch(e => {
//     console.log("This failed: ", e);
//   });

// // database
// //   .ref()
// //   .remove()
// //   .then(data => {
// //     console.log("Operation succesful");
// //   })
// //   .catch(e => {
// //     console.log("Error: ", e);
// //   });

// database.ref().update({
//   age: 36,
//   "location/city": "Heemstede"
// });
