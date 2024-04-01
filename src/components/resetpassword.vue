<template>
    <div class="reset-password-container">
      <h2>Reset Password</h2>
      <form @submit.prevent="resetPassword" class="reset-password-form">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <button type="submit" class="btn-reset-password">Reset Password</button>
        </div>
      </form>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    </div>
  </template>
  
  <script>
  import { firebaseApp } from '@/firebase';
  import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

  export default {
    name: 'ResetPasswordComponent',
    data() {
      return {
        email: '',
        errorMessage: '',
        successMessage: ''
      };
    },
    methods: {
      resetPassword() {
      
        const auth = getAuth(firebaseApp);
        sendPasswordResetEmail(auth, this.email)
          .then(() => {
            this.successMessage = 'Gửi thành công vui lòng kiểm tra lại email!';
  
            this.errorMessage = '';
          })
          .catch(error => {
            this.errorMessage = error.message;
            this.successMessage = '';
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .reset-password-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .reset-password-form {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="email"] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .btn-reset-password {
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-reset-password:hover {
    background-color: #0056b3;
  }
  
  .error-message {
    color: red;
  }
  
  .success-message {
    color: green;
  }
  </style>
  