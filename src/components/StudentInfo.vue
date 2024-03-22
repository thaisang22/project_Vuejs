<template>
    <div class="student-info-page">
      <header>
        <h1>THÔNG TIN SINH VIÊN</h1>
      </header>
  
      <div class="student-details" v-for="user in users" :key="user.id">
        <div class="student-info" v-if="user">
          <div class="d-flex">
            <div class="label">Mã sinh viên:</div>
            <div class="value">{{ user.codeuser }}</div>
          </div>
          <div class="d-flex">
            <div class="label">Họ tên:</div>
            <div class="value">{{ user.fullName }}</div>
          </div>
          <div class="d-flex">
            <div class="label">Ngày sinh:</div>
            <div class="value">{{ user.dateuser }}</div>
          </div>
          <div class="d-flex">
            <div class="label">Nơi sinh:</div>
            <div class="value">{{ user.local_address }}</div>
          </div>
          <div class="d-flex">
            <div class="label">Địa chỉ:</div>
            <div class="value">{{ user.address }}</div>
          </div>
          <div class="d-flex">
            <div class="label">Điện thoại:</div>
            <div class="value">{{ user.phone }}</div>
          </div>
          <div class="d-flex">
            <div class="label">Email:</div>
            <div class="value">{{ user.email }}</div>
          </div>
        </div>
  
        <div class="student-education" v-if="user">
          <div class="d-flex">
            <div class="label">Ngành đào tạo:</div>
            <div class="value">{{ user.major }}</div>
          </div>
          <div class="d-flex">
            <div class="label">Chuyên ngành:</div>
            <div class="value">{{ user.majorMain }}</div>
          </div>
          <div class="d-flex">
            <div class="label">Lớp học:</div>
            <div class="value">{{ user.classuser }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import { ref } from 'vue';
  import { getUserDataById } from '@/firebase';
  import { projectAuth } from '@/firebase'; 
  
  export default {
    name: "Listuser_admin",
    setup() {
  const users = ref([]);

  const fetchUserData = async () => {
    try {
        const user = projectAuth.currentUser;

      if (user) {
        const userIDs = [user.uid];
        await Promise.all(userIDs.map(async (userID) => {
          const userData = await getUserDataById(userID);
          users.value.push(userData);
        }));
      } else {
        console.error("User not logged in");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  fetchUserData();

  return { users };
},

  };
  </script>
  
<style scoped>
.d-flex {
    display: flex !important;
}

.student-details[data-v-c251d1ee] {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.student-info[data-v-c251d1ee], .student-education[data-v-c251d1ee] {
    display: flex;
    flex-direction: column;
    width: 470px;
}

.label{
    width: 200px;
}

.student-info-page {
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 20px;
}

.student-details {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.student-info,
.student-education {
    display: flex;
    flex-direction: column;
    width: 300px;
}

.label {
    font-weight: bold;
    margin-bottom: 5px;
}

.value {
    margin-bottom: 10px;
}
</style>
