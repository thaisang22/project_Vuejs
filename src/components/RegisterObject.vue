<template>
  <div>
    <div>
      <div class="pt-5">
        <h3>ĐĂNG KÝ MÔN HỌC HỌC KÌ 2 - NĂM HỌC 2023 - 2024</h3>
        <h4>Danh sách môn học mở cho đăng ký</h4>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th>Tên môn học</th>
                <th>Số tín chỉ</th>
                <th>Giảng viên</th>
                <th>Lớp</th>
                <th>Số lượng</th>
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
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div>
      <div class="pt-5">
        <h4>Danh sách môn học đã đăng ký: {{ selectedModulesInfo.length }} môn, {{ totalCredits }} tín chỉ</h4>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th>Xóa</th>
                <th>Tên môn học</th>
                <th>Số tín chỉ</th>
                <th>Giảng viên</th>
                <th>Lớp</th>
                <th>Thời khóa biểu</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(moduleItem, index) in selectedModulesInfo" :key="moduleItem.id">
                <td><a href="#" @click.prevent="removeFromSelected(index)">Xóa</a></td>
                <td>{{ moduleItem.name }}</td>
                <td>{{ moduleItem.credit }}</td>
                <td>{{ moduleItem.teacher }}</td>
                <td>{{ moduleItem.className }}</td>
                <td></td>
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
      for (const moduleItem of selectedModules.value) {
        if (!isModuleSelected(moduleItem.id)) {
          const id_modules = selectedModules.value.map(moduleItem => moduleItem.id);
          const subjectCollect = { uid: userId.value, id_modules: id_modules };

          await createdModuled(subjectCollect);

          selectedModules.value = [];
          break; 
        } else {
          window.alert(`Học phần ${moduleItem.name} đã được đăng ký.`);        }
      }
    };

    const removeFromSelected = (index) => {
      selectedModules.value.splice(index, 1);
    };

    return { modules, selectedModules, confirmRegistration, removeFromSelected, selectedModulesInfo, totalCredits };
  }
};

</script>

<style scoped></style>
