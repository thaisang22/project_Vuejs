<template>
  <div class="">
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <!-- Content header content here -->
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <button class="w-25 btn btn-success mb-3" @click="exportToExcel('scoreboard', 'scoreboard')" >
            Export to Excel
        </button>
          <div class="row">
            <div class="col-3">
              <div class="">
                <div class="card card-primary">
                  <div class="card-header">
                    <h3 class="card-title">Nhập điểm cho sinh viên</h3>
                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="onSubmit">
                      <div class="form-group mt-3">
                        <label for="">Mã số sinh viên</label>
                        <input type="text" v-model="form.code_user" class="form-control" required />
                      </div>
                      <div class="form-group mt-3">
                        <label for="">Chọn học phần</label>
                        <select v-model="form.module" class="form-control" required>
                          <option value="" disabled selected>Chọn học phần</option>
                          <option v-for="module in modules" :key="module.id" :value="module.id">{{ module.name }}</option>
                        </select>
                      </div>
                      <div class="form-group mt-3">
                        <label for="">Điểm TX1</label>
                        <input type="text" v-model="form.tx1" class="form-control" required />
                      </div>
                      <div class="form-group mt-3">
                        <label for="">Điểm TX2</label>
                        <input type="text" v-model="form.tx2" class="form-control" required />
                      </div>
                      <div class="form-group mt-3">
                        <label for="">Điểm giữa kỳ</label>
                        <input type="text" v-model="form.midTerm" class="form-control" required />
                      </div>
                      <div class="form-group mt-3">
                        <label for="">Điểm cuối kỳ</label>
                        <input type="text" v-model="form.finalTerm" class="form-control" required />
                      </div>
                      <button type="submit" class="btn btn-success mt-3">Thêm điểm</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-9">
              <div class="card">
                <div class="card-body">
                  <table id="example2" class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>MSSV</th>
                        <th>HP</th>
                        <th>TX 1</th>
                        <th>TX 2</th>
                        <th>GK</th>
                        <th>CK</th>
                        <th>TB</th>
                        <th>KQ</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(score, index) in scoreboard" :key="index">
  <td>{{ score.code_user }}</td>
  <td>{{ score.moduleName }}</td> <!-- Sửa thành score.moduleName để hiển thị tên mô-đun -->
  <td>{{ score.tx1 }}</td>
  <td>{{ score.tx2 }}</td>
  <td>{{ score.midTerm }}</td>
  <td>{{ score.finalTerm }}</td>
  <td>{{ score.average }}</td>
  <td>{{ score.grade }}</td>
  <td>
    <router-link :to="`/admin/edit_score/${score.id}`">
      <button class="btn btn-primary btn-sm me-2">
        Edit
      </button>
    </router-link>
    <button class="btn btn-primary btn-sm me-2" @click="confirmDeleteScore(score.id)">
      Delete
    </button>
    
  </td>
</tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import db from  "@/firebase.js";
import { addScore, useLoadmodules, useLoadScoreboard } from '@/firebase.js'; // Import the function to add score
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { utils, writeFile } from 'xlsx';


export default {
  name: "addUser",
  data() {
    return {
      form: {
        code_user: "",
        module: "",
        tx1: "",
        tx2: "",
        midTerm: "",
        finalTerm: ""
      },
      users: [],
      modules: [] // Initialize modules array
    };
  },
  methods: {
    async onSubmit() {
      try {
        const uid = await this.getUidFromCodeuser(this.form.code_user);
        if (uid) {
          const module = this.modules.find(module => module.id === this.form.module);
          if (module) {
            const average = this.calculateAverage(this.form);
            const grade = this.calculateGrade(average);
            await addScore(uid, this.form.code_user, module.id, module.name, this.form.tx1, this.form.tx2, this.form.midTerm, this.form.finalTerm, average, grade);
            this.clearForm();
          } else {
            console.error('Module not found with ID:', this.form.module);
          }
        } else {
          console.error('User not found with codeuser:', this.form.code_user);
        }
      } catch (error) {
        console.error('Error adding score:', error);
      }
    },
    async confirmDeleteScore(scoreId) {
  try {
    const confirmed = confirm("Are you sure you want to delete this score?");
    if (confirmed) {
      await this.deleteScore(scoreId);
    }
  } catch (error) {
    console.error('Error deleting document:', error);
  }
},

    async getUidFromCodeuser(codeuser) {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        let uid = null;
        querySnapshot.forEach((doc) => {
          const user = doc.data();
          if (user.codeuser === codeuser) {
            uid = doc.id;
          }
        });
        return uid;
      } catch (error) {
        console.error('Error getting documents: ', error);
        throw error;
      }
    },
    async deleteScore(scoreId) {
      try {
        await deleteDoc(doc(db, 'scoreboard', scoreId));
        console.log('Document with ID', scoreId, 'deleted successfully.');
      } catch (error) {
        console.error('Error deleting document:', error);
      }
    },
    clearForm() {
      this.form.code_user = "";
      this.form.module = "";
      this.form.tx1 = "";
      this.form.tx2 = "";
      this.form.midTerm = "";
      this.form.finalTerm = "";
    },
    calculateAverage(score) {
      const totalScore = parseFloat(score.tx1) + parseFloat(score.tx2) + parseFloat(score.midTerm) + parseFloat(score.finalTerm);
      return totalScore / 4;
    },
    calculateGrade(average) {
      if (average >= 8.5) {
        return 'A';
      } else if (average >= 7) {
        return 'B';
      } else if (average >= 6.5) {
        return 'C';
      } else if (average >= 5) {
        return 'D';
      } else {
        return 'F';
      }
    }
  },
  created() {
    this.modules = useLoadmodules();
  },
  setup() {
  const scoreboard = useLoadScoreboard();

  function exportToExcel(fileName, sheetName) {
    if (scoreboard.length === 0) {
      console.error('Chưa có data');
      return;
    }
    const columnMapping = {
      code_user: 'Mã số sinh viên',
      moduleName: 'Tên học phần',
      tx1: 'Điểm TX1',
      tx2: 'Điểm TX2',
      midTerm: 'Điểm giữa kỳ',
      average: 'Điểm trung bình',
      grade: 'Điểm chữ',
      finalTerm: 'Điểm cuối kỳ'
    };
    const translatedScores = scoreboard.value.map(score => {
      const translatedScore = {};
      Object.keys(columnMapping).forEach(key => {
        translatedScore[columnMapping[key]] = score[key];
      });
      return translatedScore;
    });

    const ws = utils.json_to_sheet(translatedScores);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, sheetName);
    writeFile(wb, `${fileName}.xlsx`);
  }


  return {
    scoreboard,
    exportToExcel,
  };
}

};
</script>


