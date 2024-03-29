<template>
  <div class="student-info-page">
    <div class="d-flex">
      <div class="p-2 student-info-main">
        <div class="card student-details" v-for="user in users" :key="user.id">
          <div class="card card-header">Thông tin sinh viên</div>
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
      <div class="p-2">
        <div class="card notice">
          <span>Nhắc nhở mới, chưa xem</span>
          <div class="notice-content">
            <span style="font-size: 3em;">1</span>
            <i class="far fa-bell" style="justify-self: end;"></i>
          </div>
          <span>xem chi tiết</span>
        </div>
        <div class="card dashboard">
          <h2>Kết quả học tập</h2>
          <span>Biểu đồ </span>
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
.student-info-main{
  width: 45%;
}
.d-flex {
  display: flex !important;
}

.student-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.student-info[data-v-c251d1ee],
.student-education[data-v-c251d1ee] {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.label {
  width: 200px;
}

.dashboard {
  padding: 15px
}

.student-info-page {
  padding: 20px;
  background-color: #F1F1F1;
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

.student-info{
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 0px 20px;
}

.label {
  font-weight: bold;
  margin-bottom: 5px;
}

.value {
  margin-bottom: 10px;
}

.notice {
  width: 600px;
  height: 150px;
  padding: 15px;
}

.notice:hover {
  background-color: #0f79c0; 
}

.notice:hover span,
.notice:hover i {
  color: white;
}

.notice:active span,
.notice:active i {
  color: white;
}

.notice {
  transition: transform 0.2s ease; 
}

.notice:hover {
  transform: scale(0.99); 
}

.notice:active {
  background-color: #0872b9; 
  color: white; 
}

.notice {
  transition: transform 0.3s ease; 
}

.notice:active {
  transform: scale(0.95); 
}

.notice-content{
  display: grid; 
  grid-template-columns: auto auto;
  align-items: center;
}

.notice-content i {
  padding: 5px;
  border: 1px solid #9C9C9D;
  border-radius: 50%; 
  color: #9C9C9D;
}

</style>