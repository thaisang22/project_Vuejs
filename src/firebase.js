import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc, deleteDoc, onSnapshot ,getDocs , query , where, orderBy } from 'firebase/firestore';
import { ref, onUnmounted  } from 'vue';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const  Config = {
  
};


const firebaseApp = initializeApp(Config);
const db = getFirestore(firebaseApp); 
const usersCollection = collection(db, 'users');
export default db;
export { firebaseApp , projectAuth}
// // firebase db bảng điểm 
// const scoreCollection = collection(db, 'scoreboar');
// // firebase db  notification
// const notificationCollection = collection(db, 'notification');
// firebase db subjectCollection
const subjectCollection = collection(db, 'subject');

const projectAuth = getAuth(firebaseApp);

const modulesCollection = collection(db, 'modules');
const notiCollection = collection(db, 'notification');
const noticeUserCollection = collection(db, 'notificationuser');

export const createNotice_User = async notices_user => {
  return await addDoc(noticeUserCollection, notices_user)
}

export const useLoadNotice_User = () => {
  const notices_user = ref([]);

  const unsubscribe = onSnapshot(
    query(noticeUserCollection, orderBy("datetime_user", "desc")),
    snapshot => {
      notices_user.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    }
  );

  onUnmounted(unsubscribe);
  return notices_user;
};

export const deleteNotice_User = async id => {
  const docRef = doc(noticeUserCollection, id);
  await deleteDoc(docRef);
}

export const createnotice = async notice => {
  return await addDoc(notiCollection, notice)
}
export const useLoadNotice = () => {
  const notices = ref([]);

  const unsubscribe = onSnapshot(
    query(notiCollection, orderBy("datetime", "desc")), 
    snapshot => {
      notices.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    }
  );

  onUnmounted(unsubscribe);
  return notices;
};

export const deleteNotice = async id => {
  const docRef = doc(notiCollection, id);
  await deleteDoc(docRef);
}

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

const usersQuery = query(usersCollection, where('role', '==', 0));
// load list user form firebase
export const useLoadUsers = () => {
  const users = ref([]);

  // Execute the query
  const unsubscribe = onSnapshot(
    usersQuery,
    snapshot => {
      users.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    }
  );

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

/// id uid từ module
export const getUserSubjectDocuments = async userId => {
  try {
    const subjectCollectionRef = collection(db, 'subject');
    const querySnapshot = await getDocs(subjectCollectionRef);
    const userSubjectDocuments = [];

    querySnapshot.forEach(doc => {
      const data = doc.data();
      // Kiểm tra xem tài liệu có uid khớp với userId không
      if (data.uid === userId) {
        userSubjectDocuments.push({ id: doc.id, ...data });
      }
    });

    return userSubjectDocuments;
  } catch (error) {
    console.error('Lỗi khi lấy các tài liệu subject của người dùng:', error);
    return [];
  }
};


export const searchAdminByEmailAndRole = async (email) => {
  try {
    const userRef = query(collection(db, 'users'), where('email', '==', email), where('role', '==', 1));
    const snapshot = await getDocs(userRef);
    if (snapshot.empty) {
      return null; // Không tìm thấy người dùng hoặc vai trò không phù hợp
    } else {
      // Lấy dữ liệu của người dùng đầu tiên trong snapshot
      const user = snapshot.docs[0].data();
      return user;
    }
  } catch (error) {
    console.error('Lỗi khi tìm kiếm người dùng:', error);
    throw error;
  }
};
export const searchUserByUidAndRole = async (uid) => {
  try {
    const userRef = query(collection(db, 'users'), where('uid', '==', uid), where('role', '==', 0));
    const snapshot = await getDocs(userRef);
    if (snapshot.empty) {
      return null; // Không tìm thấy người dùng hoặc vai trò không phù hợp
    } else {
      // Lấy dữ liệu của người dùng đầu tiên trong snapshot
      const user = snapshot.docs[0].data();
      return user;
    }
  } catch (error) {
    console.error('Lỗi khi tìm kiếm người dùng:', error);
    throw error;
  }
};
export const searchAdminByUidAndRole = async (uid) => {
  try {
    const userRef = query(collection(db, 'users'), where('uid', '==', uid), where('role', '==', 1));
    const snapshot = await getDocs(userRef);
    if (snapshot.empty) {
      return null; // Không tìm thấy người dùng hoặc vai trò không phù hợp
    } else {
      // Lấy dữ liệu của người dùng đầu tiên trong snapshot
      const user = snapshot.docs[0].data();
      return user;
    }
  } catch (error) {
    console.error('Lỗi khi tìm kiếm người dùng:', error);
    throw error;
  }
};
export const searchUserByEmailAndRole = async (email) => {
  try {
    const userRef = query(collection(db, 'users'), where('email', '==', email), where('role', '==', 0));
    const snapshot = await getDocs(userRef);
    if (snapshot.empty) {
      return null; // Không tìm thấy người dùng hoặc vai trò không phù hợp
    } else {
      // Lấy dữ liệu của người dùng đầu tiên trong snapshot
      const user = snapshot.docs[0].data();
      return user;
    }
  } catch (error) {
    console.error('Lỗi khi tìm kiếm người dùng:', error);
    throw error;
  }
};
export const searchUserByEmail = async (email) => {
  try {
    const userRef = query(collection(db, 'users'), where('email', '==', email));
    const snapshot = await getDocs(userRef);
    return !snapshot.empty; // Trả về true nếu có người dùng, ngược lại trả về false
  } catch (error) {
    console.error('Lỗi khi tìm kiếm người dùng:', error);
    throw error;
  }
};


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

// Trong hàm removeModuleIdFromDocument
export const removeModuleIdFromDocument = async (documentId, moduleIdToRemove) => {
  const db = getFirestore(); // Lấy instance của Firestore
  console.log(documentId)
  console.log(moduleIdToRemove)
  try {
    // Bước 1: Lấy tài liệu subject dựa trên ID
    const subjectDocRef = doc(db, 'subject', documentId);
    const subjectDocSnapshot = await getDoc(subjectDocRef);


    if (subjectDocSnapshot.exists()) {
      // Bước 2: Lấy mảng id_modules từ dữ liệu của tài liệu subject
      let idModulesArray = subjectDocSnapshot.data().id_modules;
      console.log(idModulesArray)
      // Bước 3: Loại bỏ ID của module khỏi mảng id_modules
      idModulesArray = idModulesArray.filter(id => id !== moduleIdToRemove);

      // Bước 4: Cập nhật tài liệu subject với mảng id_modules đã cập nhật
      await updateDoc(subjectDocRef, { id_modules: idModulesArray });

      console.log('Đã xóa ID của module khỏi tài liệu subject thành công.');
    } else {
      console.error('Tài liệu subject không tồn tại.');
    }
  } catch (error) {
    console.error('Lỗi khi xóa ID của module khỏi tài liệu subject:', error);
  }
};

export const checkUserRegisteredModule = async (userId, moduleId) => {
  try {
    // Lấy danh sách các môn học mà người dùng đã đăng ký
    const userSubjects = await getUserSubjectDocuments(userId);

    // Kiểm tra xem trong danh sách các môn học đã đăng ký có id_module cần kiểm tra không
    const isRegistered = userSubjects.some(subject => subject.id_modules.includes(moduleId));

    return isRegistered;
  } catch (error) {
    console.error('Lỗi khi kiểm tra đăng ký môn học:', error);
    throw error;
  }
};

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

export const addScore = async (uid, code_user, moduleId, moduleName, tx1, tx2, midTerm, finalTerm, average, grade) => {
  try {
    // Kiểm tra xem sinh viên đã tồn tại trong hệ thống hay không
    const studentExist = await isStudentExist(uid);

    // Query for documents with the same uid and moduleId
    const querySnapshot = await getDocs(query(collection(db, 'scoreboard'), where('uid', '==', uid), where('moduleId', '==', moduleId)));
const erromessage = "Mã sinh viên không tồn tại";
    // Fetch the module document based on moduleId
    const moduleDoc = await getDoc(doc(db, 'modules', moduleId));
    if (!studentExist) {
      alert('Error adding document: ' + erromessage);
    }
    // If there are any documents with the same uid and moduleId, throw an error
    if (!querySnapshot.empty) {
      throw new Error('ĐIỂM CỦA SINH VIÊN NÀY ĐÃ ĐƯỢC NHẬP');
    }

    // If module document exists, retrieve credit
    let credit = 0; // Default value for credit
    if (moduleDoc.exists()) {
      const moduleData = moduleDoc.data();
      credit = moduleData.credit; // Retrieve credit from the module document
    } else {
      throw new Error('Module with ID ' + moduleId + ' not found.');
    }

    // If no existing document, create a new one
    await addDoc(collection(db, 'scoreboard'), {
      uid: uid,
      code_user: code_user,
      moduleId: moduleId,
      moduleName: moduleName,
      tx1: tx1,
      tx2: tx2,
      midTerm: midTerm,
      finalTerm: finalTerm,
      average: average,
      grade: grade,
      credit: credit // Assign the retrieved credit to the new document
    });

    // Return uid instead of docRef.id
    return uid;
  } catch (error) {
    alert('Error adding document: ' + error.message);
    throw error;
  }
};

export const getScore = async (scoreboardId) => {
  try {
      const docSnapshot = await getDoc(doc(db, 'scoreboard', scoreboardId));
      if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          return data;
      } else {
          console.error('No score found for scoreboard ID:', scoreboardId);
          return null;
      }
  } catch (error) {
      console.error('Error getting score:', error);
      throw error;
  }
};

export const updateScore = async (scoreboardId, score) => { 
  try {
      const docRef = doc(db, 'scoreboard', scoreboardId);
      await updateDoc(docRef, score);
  } catch (error) {
      console.error('Error updating score:', error);
      throw error;
  }
};


const isStudentExist = async (uid) => {
  try {
    const studentSnapshot = await getDocs(query(collection(db, 'users'), where('uid', '==', uid)));
    return !studentSnapshot.empty; // Trả về true nếu sinh viên tồn tại, ngược lại trả về false
  } catch (error) {
    console.error('Error checking student existence:', error);
    throw error;
  }
};

// Function to get scoreboard data by uid
export const fetchAverageByUid = async (uid) => {
  try {
    const querySnapshot = await getDocs(query(collection(db, 'scoreboard'), where('uid', '==', uid)));
    const results = [];

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        results.push(data); // Add document data to results array
      });
    } else {
      console.error("No documents found for the given uid");
      return []; // Return an empty array if no documents found
    }

    return results; // Return array of document data
  } catch (error) {
    console.error("Error fetching data:", error);
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
