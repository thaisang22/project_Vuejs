import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { ref, onUnmounted } from 'vue';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const  Config = {
  apiKey: "AIzaSyBmKwt4y-GHcFfUgXuuXV11sVAyGxcGoWc",
  authDomain: "vuejs-test-7057e.firebaseapp.com",
  projectId: "vuejs-test-7057e",
  storageBucket: "vuejs-test-7057e.appspot.com",
  messagingSenderId: "493145973941",
  appId: "1:493145973941:web:c606d2b6f6802d2d3a0afc",
  measurementId: "G-26RNB7FQCN"
};


const firebaseApp = initializeApp(Config);
const db = getFirestore(firebaseApp);
const usersCollection = collection(db, 'users');
export default db;
// // firebase db bảng điểm 
// const scoreCollection = collection(db, 'scoreboar');
// // firebase db  notification
// const notificationCollection = collection(db, 'notification');
// firebase db subjectCollection
const subjectCollection = collection(db, 'subject');

const projectAuth = getAuth(firebaseApp);

const modulesCollection = collection(db, 'modules');


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

export const getUserDataById = async (userId) => {
  
  try {
    const userDocRef = doc(usersCollection, userId);
    const userDocSnapshot = await getDoc(userDocRef); 
    if (userDocSnapshot.exists()) {
      return { id: userDocSnapshot.id, ...userDocSnapshot.data() };
    } else {
      console.warn('User not found for ID:', userId);
      return null; 
    }
  } catch (error) {
    console.error(`Error getting user data: ${error.message}`);
    throw error;
  }
};

// Create module(học phần)
export const createModule = async module => {
  return await addDoc(modulesCollection, module);
}

// get module form firebase
export const getModule = async id => {
  const docRef = doc(modulesCollection, id);
  const module = await getDoc(docRef);
  return module.exists() ? module.data() : null;
}

// update module form firebase
export const updateModule = async (id, module) => { 
  const docRef = doc(modulesCollection, id);
  await updateDoc(docRef, module);
}


// delete module from firebase
export const deleteModule = async id => {
  const docRef = doc(modulesCollection, id);
  await deleteDoc(docRef);
}

// load list module form firebase
export const useLoadmodules = () => {
  const modules = ref([]);
  const unsubscribe = onSnapshot(modulesCollection, snapshot => {
    modules.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  });
  
  onUnmounted(unsubscribe);
  return modules;
}


// Register module( đăng ký học phần)
export const createdModuled = async module => {
  return await addDoc(subjectCollection, module);
};


// get module form firebase
export const getModuled = async id => {
  const docRef = doc(subjectCollection, id);
  const module = await getDoc(docRef);
  return module.exists() ? module.data() : null;
}

// update module form firebase
export const updateModuled = async (id, module) => { 
  const docRef = doc(subjectCollection, id);
  await updateDoc(docRef, module);
}


// delete module from firebase
export const deleteModuled = async id => {
  const docRef = doc(subjectCollection, id);
  await deleteDoc(docRef);
}

// load list module form firebase
export const useLoadmoduled = () => {
  const modules = ref([]);
  const unsubscribe = onSnapshot(subjectCollection, snapshot => {
    modules.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  });
  
  onUnmounted(unsubscribe);
  return modules;
}

export { projectAuth };

