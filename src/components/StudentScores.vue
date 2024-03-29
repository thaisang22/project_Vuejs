<template>
    <div>
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
  
    
      <div v-if="scoreboardData">
      <h2 class="text-center my-5">BẢNG GHI KẾT QUẢ HỌC TẬP</h2>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>STT</th>
              <th>Môn học</th>
              <th>STC</th>
              <th>Điểm TX1</th>
              <th>Điểm TX2</th>
              <th>Điểm TBKT</th>
              <th>Điểm thi</th>
              <th>TKM</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in scoreboardData" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.moduleName }}</td>
              <td>{{ item.credit }}</td>
              <td>{{ item.tx1 }}</td>
              <td>{{ item.tx2 }}</td>
              <td>{{ item.average }}</td>
              <td>{{ item.finalTerm }}</td>
              <td>{{ item.grade }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { getUserDataById, fetchAverageByUid } from '@/firebase';
  import { projectAuth } from '@/firebase';
  
  export default {
    name: "Listuser_admin",
    setup() {
  const users = ref([]);
  const scoreboardData = ref([]);

  const fetchUserData = async () => {
    try {
      const user = projectAuth.currentUser;

      if (user) {
        const userData = await getUserData(user.uid);
        users.value.push(userData);
      } else {
        console.error("User not logged in");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchScoreboardData = async () => {
    try {
      const user = projectAuth.currentUser;

      if (user) {
        const averageData = await fetchAverage(user.uid);
        scoreboardData.value = averageData; // Fixed assigning the fetched data to scoreboardData
      } else {
        console.error("User not logged in");
      }
    } catch (error) {
      console.error("Error fetching scoreboard data:", error);
    }
  };

  const getUserData = async (uid) => {
    try {
      const userData = await getUserDataById(uid);
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  const fetchAverage = async (uid) => {
    try {
      const averageData = await fetchAverageByUid(uid);
      return averageData;
    } catch (error) {
      console.error("Error fetching average data:", error);
      return null;
    }
  };

  // Call the fetchUserData and fetchScoreboardData functions
  fetchUserData();
  fetchScoreboardData();

  // Perform test to see if scoreboardData is fetched properly for the logged-in user
  console.log("Scoreboard data for the logged-in user:", scoreboardData.value);

  return { users, scoreboardData };
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

.student-details[data-v-1488b03c] {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-content: center;
    justify-content: space-around;
}

.student-info[data-v-1488b03c], .student-education[data-v-1488b03c] {
    display: flex;
    flex-direction: column;
    width: 480px;
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

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid black;
    padding: 5px;
    text-align: center;
}

th:first-child,
td:first-child {
    width: 50px;
    /* Adjust width for STT column as needed */
}

.semester {
    background-color: #ddd;
    font-weight: bold;
}

.col-6 {
    text-transform: capitalize;
}

.mxemdiem {
    margin: 0px auto 10px auto;
    width: 680px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border: 1px solid #106bb4;
    height: auto;
    font-size: 12px;
    position: relative;
}

.mQC04TieuDe {
    width: auto !important;
    color: #000000;
    height: 50px;
    font-size: 11px;
    font-weight: bold;
}

.QC04XemDiemSTT,
.QC04TXemDiemSTT,
.QC04TNSTT {
    width: 30px;
}

.QC04XemDiemSTT,
.QC04XemDiemTenMon,
.QC04XemDiemDVHT,
.QC04XemDiemTBKT,
.QC04XemDiemThi,
.QC04XemDiemTKM {
    border-right: 1px solid #106bb4;
    border-bottom: 1px solid #106bb4;
    float: left;
    height: 50px;
    line-height: 50px;
    text-align: center;
}

.QC04XemDiemTenMon,
.QC04TXemDiemTenMon,
.QC04TNTenMon {
    width: 242px;
}

.QC04XemDiemDVHT,
.QC04TXemDiemDVHT,
.QC04TNDVHT {
    width: 30px;
}

.QC04XemDiemDiemQT {
    width: 129px;
    float: left;
    height: 48px;
}

.QC04XemDiemQT {
    width: 127px;
    border-bottom: 1px solid #106bb4;
    border-right: 1px solid #106bb4;
    float: left;
    text-align: center;
    height: 16px;
}

.QC04XemDiemHS1 {
    float: left;
    height: 32px;
    width: 64px;
}

.QC04SpanHS {
    width: 63px;
    border-bottom: 1px solid #106bb4;
    border-right: 1px solid #106bb4;
    text-align: center;
    height: 16px;
    float: left;
}

.QC04XemDiemCot {
    border-right: 1px solid #106bb4;
    border-bottom: 1px solid #106bb4;
    float: left;
    height: 16px;
    text-align: center;
    width: 31px;
}

.QC04SpanHS {
    width: 63px;
    border-bottom: 1px solid #106bb4;
    border-right: 1px solid #106bb4;
    text-align: center;
    height: 16px;
    float: left;
}

.QC04XemDiemCot {
    border-right: 1px solid #106bb4;
    border-bottom: 1px solid #106bb4;
    float: left;
    height: 16px;
    text-align: center;
    width: 31px;
}

.QC04TNTBKT,
.QC04XemDiemTBKT {
    width: 40px;
}

.QC04XemDiemThi,
.QC04TXemDiemThi,
.QC04TNThi {
    width: 40px;
}

.QC04XemDiemSTT,
.QC04XemDiemTenMon,
.QC04XemDiemDVHT,
.QC04XemDiemTBKT,
.QC04XemDiemThi,
.QC04XemDiemTKM {
    border-right: 1px solid #106bb4;
    border-bottom: 1px solid #106bb4;
    float: left;
    height: 50px;
    line-height: 50px;
    text-align: center;
}

.QC04XemDiemThi,
.QC04TXemDiemThi,
.QC04TNThi {
    width: 40px;
}

.QC04XemDiemSTT,
.QC04XemDiemTenMon,
.QC04XemDiemDVHT,
.QC04XemDiemTBKT,
.QC04XemDiemThi,
.QC04XemDiemTKM {
    border-right: 1px solid #106bb4;
    border-bottom: 1px solid #106bb4;
    float: left;
    height: 50px;
    line-height: 50px;
    text-align: center;
}

.QC04XemDiemTKM,
.QC04TXemDiemTKM,
.QC04TNTKM,
.QC04XemDiemQD,
.QC04TNTKMQD {
    width: 40px;
}

.QC04XemDiemSTT,
.QC04XemDiemTenMon,
.QC04XemDiemDVHT,
.QC04XemDiemTBKT,
.QC04XemDiemThi,
.QC04XemDiemTKM {
    border-right: 1px solid #106bb4;
    border-bottom: 1px solid #106bb4;
    float: left;
    height: 50px;
    line-height: 50px;
    text-align: center;
}

.QC04XemDiemTKM,
.QC04TXemDiemTKM,
.QC04TNTKM,
.QC04XemDiemQD,
.QC04TNTKMQD {
    width: 40px;
}

.QC04XemDiemQD {
    border-right: 1px solid #106bb4;
    border-bottom: 1px solid #106bb4;
    float: left;
    height: 50px;
    line-height: 25px;
    text-align: center;
}

.QC04XemDiemTKM,
.QC04TXemDiemTKM,
.QC04TNTKM,
.QC04XemDiemQD,
.QC04TNTKMQD {
    width: 40px;
}

.QC04XemDiemQD {
    border-right: 1px solid #106bb4;
    border-bottom: 1px solid #106bb4;
    float: left;
    height: 50px;
    line-height: 25px;
    text-align: center;
}

.mthanbangdiem {
    width: auto !important;
    color: #000000;
    height: auto !important;
    display: inline-block;
}

.dnamhochocky {
    width: 680px;
    height: 20px;
    color: #A80007;
    float: left;
    font-size: 12px;
    border-bottom: 1px solid #106bb4;
}

.dnamhoc,
.dhocky {
    margin-left: 30px;
    line-height: 20px;
    width: 170px;
    height: 20px;
    float: left;
}

.dnamhoc,
.dhocky {
    margin-left: 30px;
    line-height: 20px;
    width: 170px;
    height: 20px;
    float: left;
}

.dTBC {
    margin-left: 30px;
    line-height: 20px;
    width: 150px;
    height: 20px;
    float: left;
}

.mdong {
    width: auto !important;
    color: #000000;
    height: auto !important;
    display: inline-block;
    border-bottom: 1px solid #106bb4;
}

.dnamhochocky {
    width: 680px;
    height: 20px;
    color: #A80007;
    float: left;
    font-size: 12px;
    border-bottom: 1px solid #106bb4;
}

.dnamhoc,
.dhocky {
    margin-left: 30px;
    line-height: 20px;
    width: 170px;
    height: 20px;
    float: left;
}

.dnamhoc,
.dhocky {
    margin-left: 30px;
    line-height: 20px;
    width: 170px;
    height: 20px;
    float: left;
}

.dTBC {
    margin-left: 30px;
    line-height: 20px;
    width: 150px;
    height: 20px;
    float: left;
}

.QC04TXemDiemSTT,
.QC04TXemDiemDVHT,
.QC04TXemDiemCot,
.QC04TXemDiemTBKT,
.QC04TXemDiemThi,
.QC04TXemDiemTKM {
    float: left;
    text-align: center;
    border-right: 1px solid #106bb4;
}

.QC04TXemDiemTenMon {
    float: left;
    border-right: 1px solid #106bb4;
}

.QC04XemDiemTenMon,
.QC04TXemDiemTenMon,
.QC04TNTenMon {
    width: 242px;
}

.QC04TXemDiemSTT,
.QC04TXemDiemDVHT,
.QC04TXemDiemCot,
.QC04TXemDiemTBKT,
.QC04TXemDiemThi,
.QC04TXemDiemTKM {
    float: left;
    text-align: center;
    border-right: 1px solid #106bb4;
}

.QC04XemDiemDVHT,
.QC04TXemDiemDVHT,
.QC04TNDVHT {
    width: 30px;
}

.QC04TXemDiemCot {
    width: 32px;
}

.QC04TXemDiemSTT,
.QC04TXemDiemDVHT,
.QC04TXemDiemCot,
.QC04TXemDiemTBKT,
.QC04TXemDiemThi,
.QC04TXemDiemTKM {
    float: left;
    text-align: center;
    border-right: 1px solid #106bb4;
}

.QC04TXemDiemCot {
    width: 31px;
}

.QC04TXemDiemSTT,
.QC04TXemDiemDVHT,
.QC04TXemDiemCot,
.QC04TXemDiemTBKT,
.QC04TXemDiemThi,
.QC04TXemDiemTKM {
    float: left;
    text-align: center;
    border-right: 1px solid #106bb4;
}

.QC04TXemDiemCot {
    width: 31px;
}

.QC04TXemDiemSTT,
.QC04TXemDiemDVHT,
.QC04TXemDiemCot,
.QC04TXemDiemTBKT,
.QC04TXemDiemThi,
.QC04TXemDiemTKM {
    float: left;
    text-align: center;
    border-right: 1px solid #106bb4;
}

.QC04TXemDiemCot {
    width: 31px;
}

.QC04TXemDiemSTT,
.QC04TXemDiemDVHT,
.QC04TXemDiemCot,
.QC04TXemDiemTBKT,
.QC04TXemDiemThi,
.QC04TXemDiemTKM {
    float: left;
    text-align: center;
    border-right: 1px solid #106bb4;
}

.QC04TXemDiemSTT,
.QC04TXemDiemDVHT,
.QC04TXemDiemCot,
.QC04TXemDiemTBKT,
.QC04TXemDiemThi,
.QC04TXemDiemTKM {
    float: left;
    text-align: center;
    border-right: 1px solid #106bb4;
}

.QC04TXemDiemTBKT {
    width: 45px;
}

.QC04TXemDiemSTT,
.QC04TXemDiemDVHT,
.QC04TXemDiemCot,
.QC04TXemDiemTBKT,
.QC04TXemDiemThi,
.QC04TXemDiemTKM {
    float: left;
    text-align: center;
    border-right: 1px solid #106bb4;
}

.QC04XemDiemThi,
.QC04TXemDiemThi,
.QC04TNThi {
    width: 40px;
}

.QC04TXemDiemSTT,
.QC04TXemDiemDVHT,
.QC04TXemDiemCot,
.QC04TXemDiemTBKT,
.QC04TXemDiemThi,
.QC04TXemDiemTKM {
    float: left;
    text-align: center;
    border-right: 1px solid #106bb4;
}

.QC04XemDiemThi,
.QC04TXemDiemThi,
.QC04TNThi {
    width: 40px;
}

.QC04TXemDiemSTT,
.QC04TXemDiemDVHT,
.QC04TXemDiemCot,
.QC04TXemDiemTBKT,
.QC04TXemDiemThi,
.QC04TXemDiemTKM {
    float: left;
    text-align: center;
    border-right: 1px solid #106bb4;
}

.QC04XemDiemTKM,
.QC04TXemDiemTKM,
.QC04TNTKM,
.QC04XemDiemQD,
.QC04TNTKMQD {
    width: 40px;
}

.QC04TXemDiemC {
    width: 40px;
    padding-left: 10px;
    float: left;
    text-align: left;
    border-right: 1px solid #106bb4;
}

.QC04TXemDiemQD {
    width: 40px;
    padding-left: 10px;
    float: left;
    text-align: left;
    border-right: 1px solid #106bb4;
}
</style>