import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs, addDoc,
    deleteDoc,
    doc
    } from 'firebase/firestore';

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

// adding documents
  const addStudentForm = document.querySelector('.add-student');
  addStudentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    addDoc(colRef, {
      name: addStudentForm.name.value,
      course: addStudentForm.course.value,
    })
    .then(() => {
      addStudentForm.reset();
    })
  })
  
// delete documents
const deleteStudentForm = document.querySelector('.delete-student');
deleteStudentForm.addEventListener('submit',(e) => {
  e.preventDefault();

  const docRef = doc(db, 'students', deleteStudentForm.id.value);
  deleteDoc(docRef)
  .then(() => {
    deleteStudentForm.reset();
  })
})