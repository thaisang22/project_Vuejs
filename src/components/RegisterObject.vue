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
                <td><input type="checkbox" v-model="selectedModules" :value="moduleItem.id"></td>
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
                <td></td>
                <td><button class="btn btn-primary" @click="confirmRegistration">Xác nhận đăng ký</button></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    <div>
      <div class="pt-5">
        <h4>Danh sách môn học đã đăng ký:  môn,  tín chỉ</h4>
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
              <tr v-for="(moduleItem, index) in registeredModules" :key="moduleItem.id">
                <td><a href="#" @click.prevent="removeFromRegistered(index)">Xóa</a></td>
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
  </div>
</template>

<script>
import { useLoadmodules } from '@/firebase';
import { ref } from 'vue';

export default {
  name: "Listuser_admin",
  setup() {
    const modules = useLoadmodules();
    const selectedModules = ref([]);
    const registeredModules = ref([]);

    const confirmRegistration = () => {
      // Lặp qua các môn học đã chọn
      selectedModules.value.forEach(moduleId => {
        // Tìm môn học trong mảng modules
        const moduleItem = modules.value.find(item => item.id === moduleId);
        if (moduleItem) {
          // Thêm môn học vào mảng registeredModules
          registeredModules.value.push(moduleItem);
        }
      });
      // Xoá các môn học đã chọn khỏi mảng selectedModules
      selectedModules.value = [];
    };

    const removeFromRegistered = (index) => {
      registeredModules.value.splice(index, 1);
    };

    return { modules, selectedModules, registeredModules, confirmRegistration, removeFromRegistered };
  }
};
</script>

<style scoped>

</style>
