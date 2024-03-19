import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { ref, onUnmounted } from 'vue';

// Your web app's Firebase configuration
const Config = {
    apiKey: "AIzaSyBmKwt4y-GHcFfUgXuuXV11sVAyGxcGoWc",
    authDomain: "vuejs-test-7057e.firebaseapp.com",
    projectId: "vuejs-test-7057e",
    storageBucket: "vuejs-test-7057e.appspot.com",
    messagingSenderId: "493145973941",
    appId: "1:493145973941:web:1c67048c263be3493a0afc",
    measurementId: "G-PFP63LRPMY"
};

const firebaseApp = initializeApp(Config);
const db = getFirestore(firebaseApp);
const usersCollection = collection(db, 'users');
// // firebase db bảng điểm 
// const scoreCollection = collection(db, 'scoreboar');
// // firebase db  notification
// const notificationCollection = collection(db, 'notification');
// firebase db subjectCollection
const subjectCollection = collection(db, 'subject');




export const createsubject = async subject => {
  return await addDoc(subjectCollection, subject)
}


export const deleteSubject = async id => {
  const docRef = doc(subjectCollection, id);
  await deleteDoc(docRef);
}
export const updateSubject = async (id, subject) => { 
  const docRef = doc(subjectCollection, id);
  await updateDoc(docRef, subject);
}

// Creat user form firebase
export const createUser = async user => {
  return await addDoc(usersCollection, user);
}


// get user form firebase
export const getUser = async id => {
  const docRef = doc(usersCollection, id);
  const user = await getDoc(docRef);
  return user.exists() ? user.data() : null;
}

// update user form firebase
export const updateUser = async (id, user) => { 
  const docRef = doc(usersCollection, id);
  await updateDoc(docRef, user);
}


// delete user from firebase
export const deleteUser = async id => {
  const docRef = doc(usersCollection, id);
  await deleteDoc(docRef);
}


// load list user form firebase
export const useLoadUsers = () => {
  const users = ref([]);
  const unsubscribe = onSnapshot(usersCollection, snapshot => {
    users.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  });
  
  onUnmounted(unsubscribe);
  return users;
}
