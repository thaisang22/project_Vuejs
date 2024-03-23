<template>
  <div>
    <div class="pt-5">
      <div>
        <table class="table">
          <thead>
            <tr>
              <th style="width: 23%">Tên môn học</th>
              <th style="width: 6%;">Số TC</th>
              <th style="width: 18%;">Giảng viên</th>
              <th style="width: 14%;">Lớp</th>
              <th style="width: 4%;">SL</th>
              <th>Thời khóa biểu</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(moduleItem, index) in registeredModulesInfo" :key="index">
              <td>{{ moduleItem.name }}</td>
              <td>{{ moduleItem.credit }}</td>
              <td>{{ moduleItem.teacher }}</td>
              <td>{{ moduleItem.className }}</td>
              <td>{{ moduleItem.quantity }}</td>
              <td>{{ moduleItem.schedule }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoadmodules, useLoadmoduled } from '@/firebase';
import { ref, watchEffect } from 'vue';
import { getAuth } from 'firebase/auth';

export default {
  name: "Listuser_admin",
  setup() {
    const modules = useLoadmodules();
    const registeredModules = useLoadmoduled();
    const registeredModulesInfo = ref([]);
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const userId = currentUser ? currentUser.uid : null;

    // Theo dõi sự thay đổi trong registeredModules và modules để cập nhật registeredModulesInfo
    watchEffect(() => {
      registeredModulesInfo.value = registeredModules.value.map(registeredModule => {
        // Chỉ chọn các module có uid khớp với id của người dùng đăng nhập
        if (registeredModule.uid === userId) {
          return registeredModule.id_modules.map(id_module => {
            const moduleItem = modules.value.find(module => module.id === id_module);
            if (moduleItem) {
              return {
                name: moduleItem.name,
                credit: moduleItem.credit,
                teacher: moduleItem.teacher,
                className: moduleItem.className,
                quantity: moduleItem.quantity,
                schedule: moduleItem.schedule
              };
            } else {
              return {
                name: '',
                credit: '',
                teacher: '',
                className: '',
                schedule: ''
              };
            }
          });
        }
      }).flat().filter(Boolean); // Loại bỏ các giá trị null hoặc undefined
    });

    return { registeredModulesInfo };
  },
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
