import { createStore } from "vuex";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  updateProfile,
  deleteUser,
} from "firebase/auth";
import db from "@/firebase";
import { collection, setDoc, doc } from "firebase/firestore";
import { getUserDataById } from "@/firebase";

export default createStore({
  state: {
    user: {
      loggedIn: false,
      data: null,
      userId: null,
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_LOGGER_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_USER_ID(state, userId) {
      state.userId = userId;
    },
  },
  //
  actions: {
    async register(context, { email, password, name }) {
      const auth = getAuth();
      const usersCollection = collection(db, "users");
      try {
        // Create user with email and password
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Update user profile with display name
        await updateProfile(response.user, { displayName: name });
        // Add user information to Firestore collection

        await setDoc(doc(usersCollection, response.user.uid), {
          uid: response.user.uid,
          email: email,
          displayName: name,
          role:0
        });
        this.$router.push('/admin/listuser')
        // Update Vuex state with the registered user
        context.commit("SET_USER", response.user);
      } catch (error) {
        alert("Email đã tồn tại", error.message);
        throw new Error("");
      }
    },

    async deleteUserAccount(context, uid) {
      const auth = getAuth();

      try {
        // Delete user account
        await deleteUser(auth, uid);

        // Clear user data from Vuex store
        context.commit("SET_USER", null);
      } catch (error) {
        console.error("Error deleting user:", error.message);
        throw new Error("Unable to delete user account");
      }
    },
    async logIn(context, { email, password }) {
      const auth = getAuth();
      try {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        context.commit("SET_USER", response.user);

        const userId = response.user.uid;
        context.commit("SET_USER_ID", userId);

        return userId;
      } catch (error) {
        throw new Error("Login failed");
      }
    },

    async logOut(context) {
      const auth = getAuth();
      await signOut(auth);
      context.commit("SET_USER", null);
    },

    async fetchUser(context, user) {
      context.commit("SET_LOGGED_IN", user !== null);
      if (user) {
        context.commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        context.commit("SET_USER", null);
      }
    },
    async getUserData({ commit, rootState }) {
      try {
        const userId = rootState.user.userId;
        const userData = await getUserDataById(userId);
        commit("SET_USER_DATA", userData);
        return userData;
      } catch (error) {
        throw new Error("Failed to fetch user data");
      }
    },
  },
  modules: {},
});
