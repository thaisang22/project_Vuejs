import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc, deleteDoc, onSnapshot , getDocs , query , where } from 'firebase/firestore';
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
export const addScore = async (uid, code_user, moduleId, moduleName, tx1, tx2, midTerm, finalTerm, average, grade) => {
  try {
    // Create a new document reference in the scoreboard collection for the student
    const docRef = await addDoc(collection(db, 'scoreboard'), {
      uid: uid,
      code_user: code_user,
      moduleId: moduleId, // Lưu trữ ID của mô-đun
      moduleName: moduleName, // Lưu trữ tên của mô-đun
      tx1: tx1,
      tx2: tx2,
      midTerm: midTerm,
      finalTerm: finalTerm,
      average: average,
      grade: grade // Include average and grade in the document
    });

    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
};
// Function to get scoreboard data by uid
export const getScoreboardByUid = async (uid) => {
  try {
    const scoreboardCollection = collection(db, 'scoreboard');
    const querySnapshot = await getDocs(query(scoreboardCollection, where("uid", "==", uid))); // Query scoreboard collection where uid matches
    
    const scoreboardData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return scoreboardData;
  } catch (error) {
    console.error('Error getting scoreboard data: ', error);
    throw error;
  }
};
const scoreboardCollection = collection(db, 'scoreboard');
export const useLoadScoreboard = () => {
  const scoreboard = ref([]); // Khởi tạo mảng dữ liệu scoreboard
  const unsubscribe = onSnapshot(scoreboardCollection, (snapshot) => {
    scoreboard.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  });

  // Dừng theo dõi thay đổi khi component bị hủy
  onUnmounted(unsubscribe);

  return scoreboard;
};