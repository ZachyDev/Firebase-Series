import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgFT_a4AFYV17_yeMlwQOEZZGJ71Rw2Gk",
    authDomain: "fir-9-do-6b87f.firebaseapp.com",
    projectId: "fir-9-do-6b87f",
    storageBucket: "fir-9-do-6b87f.appspot.com",
    messagingSenderId: "926747255617",
    appId: "1:926747255617:web:8870b670471dd9fa26b7c0"
  };

 initializeApp(firebaseConfig);

//  initialize services
const db = getFirestore();

// collection reference
const colRef = collection(db, 'students');

getDocs(colRef)
  .then(snapshot => {
    let students = [];
    snapshot.forEach(doc => {
      students.push({ ...doc.data(), id:doc.id })
    })
    console.log(students);
  })
  .catch(err => console.log(err.message));