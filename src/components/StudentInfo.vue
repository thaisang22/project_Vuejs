<template>
  <div class="student-info-page">
    <div class="d-flex">
      <div class="p-2 student-info-main">
        <div class="card student-details" v-for="user in users" :key="user.id">
          <div class="card card-header">Thông tin sinh viên</div>
          <div class="student-info" v-if="user">
            <div class="d-flex">
              <div class="label">Mã sinh viên:</div>
              <div class="value">99{{ user.codeuser }}</div>
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
        <div class="card notice" @click="showModal = true">
          <span>Nhắc nhở mới</span>
          <div class="notice-content">
            <span v-if="filteredNotices.length > 0" style="font-size: 3em;">{{ filteredNotices.length }}</span>
            <i class="far fa-bell" style="justify-self: end;"></i>
          </div>
          <span>xem chi tiết</span>
        </div>
        <div class="modal" :class="{ 'show-modal': showModal }">
          <div class="modal-content">
            <span class="close" @click="showModal = false">&times;</span>
            <h2>Thông báo</h2>
            <div class="notification-list">
              <div v-for="notice in filteredNotices" :key="notice.id" class="notification">
                <h3>{{ notice.heading_user }}</h3>
                <p>{{ notice.content_user }}</p>
                <p>{{ formatDateTime(notice.datetime_user) }}</p>
              </div>
            </div>
          </div>
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
import { ref, onMounted, computed } from 'vue';
import { getUserDataById } from '@/firebase';
import { projectAuth } from '@/firebase';
import { useLoadNotice_User } from '@/firebase';

export default {
  name: "Listuser_admin",
  setup() {
    const users = ref([]);
    const currentUser = ref(null);
    const showModal = ref(false);

    onMounted(async () => {
      try {
        const user = projectAuth.currentUser;

        if (user) {
          const userData = await getUserDataById(user.uid);
          currentUser.value = userData;
          users.value.push(userData);
        } else {
          console.error("User not logged in");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    });

    const notices = useLoadNotice_User(); // Load notices

    // Filtered notices based on currentUser's codeuser
    const filteredNotices = computed(() => {
      if (currentUser.value) {
        return notices.value.filter(notice => notice.code_user === currentUser.value.codeuser);
      } else {
        return [];
      }
    });

    const formatDateTime = (datetime_user) => {
      const date = new Date(datetime_user);
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      return formattedDate;
    };

    return { users, currentUser, showModal, filteredNotices, formatDateTime };
  },
};
</script>

<style scoped>
.student-info-main {
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

.student-info {
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

.notice-content {
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

.modal {
  display: none;
  position: fixed;
z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
}

.notification {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.notification:last-child {
  border-bottom: none;
}

.notification h3 {
  margin-top: 0;
}

.modal {
    display: none; /* Ensure modal is initially hidden */
  }

  .show-modal {
    display: block; /* Show modal when showModal is true */
  }
</style>