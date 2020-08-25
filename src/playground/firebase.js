// import * as firebase from 'firebase'
//
// const firebaseConfig = {
//   apiKey: "AIzaSyDDWVY2nSJDigCg8lVxk_woo1jvB5xx5EU",
//   authDomain: "expensify-bc89f.firebaseapp.com",
//   databaseURL: "https://expensify-bc89f.firebaseio.com",
//   projectId: "expensify-bc89f",
//   storageBucket: "expensify-bc89f.appspot.com",
//   messagingSenderId: "705909717842",
//   appId: "1:705909717842:web:72c2e979cecd59d6ffd88b",
//   measurementId: "G-VM0DM5V1V0"
// };
// firebase.initializeApp(firebaseConfig);
//
// const database = firebase.database()
//



// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


//Example data
// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'This is my first expense',
//   amount: 109500,
//   createdAt: 90839848474
// })



//Basic Subsription
// const onExpensesChange = database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// }, (e) => {
//   console.log("Some error", e);
// })





////// Example firebase

//Setting A Property
// database.ref().set({
//   name: "Danail Todorov",
//   age: 19,
//   isSingle: false,
//   location: {
//     city: 'Ruse',
//     country: "Bulgaria"
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log("This failed", error);
// })

//Updating A Property
// database.ref().update({
//   age: 20,
//   "location/city" : "Sofia"
// })

//Fetching Data Once
// database.ref()
//   .once('value')
//   .then((snapshot)=>{
//     const val = snapshot.val()
//     console.log(val);
//   })
//   .catch((error)=>{
//     console.log(error);
//   })

//Turning On A Subscription
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log("Some error", e);
// })

//Removing A Property
// database.ref('isSingle').remove(
// ).then(() => {
//   console.log('Removed');
// }).catch((error) =>{
//   console.log(error);
// })

//Turn Off Subscription
// database.ref().off(onValueChange  )
