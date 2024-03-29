<template>
    <div class="m-5">
        <div class="container">
          <h2 class="text-center mb-5">Thông báo</h2>
          <div class="notification-list">
            <div v-for="{ heading, content, id, datetime } in notices" :key="id" class="notification">
              <h3>{{ heading }}</h3>
              <p>{{ content }}</p>
              <p>{{ formatDateTime(datetime) }}</p>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import { useLoadNotice } from '@/firebase';
  
  export default {
    name: "Listuser_admin",
  
    setup() {
      const notices = useLoadNotice();
      const formatDateTime = (datetime) => {
      const date = new Date(datetime);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      return formattedDate;
    };
      return { notices, formatDateTime };
      
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .notification-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }
  
  .notification {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
  }
  
  .notification h3 {
    margin-top: 0;
  }
  
  .notification p {
    margin-bottom: 0;
  }
  </style>
  