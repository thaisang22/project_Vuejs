<template>
  <div>
    <div>
      <div class="pt-5">
        <h3>ĐĂNG KÝ MÔN HỌC HỌC KÌ 2 - NĂM HỌC 2023 - 2024</h3>
        <h4>Danh sách môn học mở cho đăng ký</h4>
        <div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th style="width: 4%;"></th>
                <th style="width: 23%">Tên môn học</th>
                <th style="width: 6%;">Số TC</th>
                <th style="width: 18%;">Giảng viên</th>
                <th style="width: 14%;">Lớp</th>
                <th style="width: 4%;">SL</th>
                <th>Thời khóa biểu</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(moduleItem) in modules" :key="moduleItem.id">
                <td><input type="checkbox" v-model="selectedModules" :value="moduleItem"></td>
                <td>{{ moduleItem.name }}</td>
                <td>{{ moduleItem.credit }}</td>
                <td>{{ moduleItem.teacher }}</td>
                <td>{{ moduleItem.className }}</td>
                <td>{{ moduleItem.quantity }}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div>
      <div class="pt-5">
        <h4>Danh sách môn học đã đăng ký: <span style="color: red;">{{ selectedModulesInfo.length }} môn, {{
                totalCredits }} tín chỉ</span></h4>
        <div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th style="width: 6%;">Xóa</th>
                <th style="width: 23%">Tên môn học</th>
                <th style="width: 6%;">Số TC</th>
                <th style="width: 18%;">Giảng viên</th>
                <th style="width: 14%;">Lớp</th>
                <th style="width: 4%;">SL</th>
                <th>Thời khóa biểu</th>
              </tr>
            </thead>
            <tbody class="table-body-content">
              <tr v-for="(moduleItem, index) in selectedModulesInfo" :key="moduleItem.id">
                <td><a href="#" @click.prevent="removeFromSelected(index)"><i class="fas fa-times"></i></a></td>
                <td>{{ moduleItem.name }}</td>
                <td>{{ moduleItem.credit }}</td>
                <td>{{ moduleItem.teacher }}</td>
                <td>{{ moduleItem.className }}</td>
                <td>{{ moduleItem.quantity }}</td>
                <td></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><button class="btn btn-primary" @click="confirmRegistration">Xác nhận đăng ký</button></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoadmodules, createdModuled, useLoadmoduled } from '@/firebase';
import { ref, computed } from 'vue';
import { getAuth } from 'firebase/auth';

export default {
  name: "Listuser_admin",
  setup() {
    const modules = useLoadmodules();
    const selectedModules = ref([]);
    const userId = ref(null);
    const registeredModules = useLoadmoduled();

    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      userId.value = currentUser.uid;
    }

    const selectedModulesInfo = computed(() => {
      return selectedModules.value.map(moduleItem => ({
        name: moduleItem.name,
        credit: moduleItem.credit,
        teacher: moduleItem.teacher,
        className: moduleItem.className,
        quantity: moduleItem.quantity,
        schedule: moduleItem.schedule
      }));
    });

    const totalCredits = computed(() => {
      return selectedModulesInfo.value.reduce((total, moduleItem) => {
        return total + parseInt(moduleItem.credit);
      }, 0);
    });

    const isModuleSelected = (moduleId) => {
      return registeredModules.value.some(module => module.id_modules.includes(moduleId));
    };
    const confirmRegistration = async () => {
  for (let i = selectedModules.value.length - 1; i >= 0; i--) {
    const moduleItem = selectedModules.value[i];
    // Kiểm tra xem môn học đã được đăng ký chưa
    if (!isModuleSelected(moduleItem.id)) {
      // Môn học chưa được đăng ký, thêm vào danh sách đăng ký
      const id_modules = selectedModules.value.map(moduleItem => moduleItem.id);
      const subjectCollect = { uid: userId.value, id_modules: id_modules };

      await createdModuled(subjectCollect);

      selectedModules.value = [];
      // Xuất thông báo đăng ký thành công
      window.alert(`Học phần ${moduleItem.name} đã được đăng ký thành công.`);
      break;
    } else {
      // Môn học đã được đăng ký, hiển thị thông báo
      window.alert(`Học phần ${moduleItem.name} đã được đăng ký.`);
      // Xóa môn học khỏi danh sách đăng ký vì nó đã được đăng ký trước đó
      selectedModules.value.splice(i, 1);
    }
  }
};




    const removeFromSelected = (index) => {
      selectedModules.value.splice(index, 1);
    };

    return { modules, selectedModules, confirmRegistration, removeFromSelected, selectedModulesInfo, totalCredits };
  }
};

</script>

<style scoped>
h3 {
  font-weight: bold;
  font-size: 1.5em;
}

h4 {
  font-weight: 700;
  font-size: 1em;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}
.table td {
  color: #0a3552;
}
.table th {
  background-color: #0071BB;
  font-weight: bold;
  color: rgb(247, 247, 247);
}

.table-body-content {
  color: #1060d6;
}
</style>
