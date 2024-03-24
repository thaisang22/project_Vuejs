<template>
  <div>
    <div class="pt-5">
      <div>
        <table class="table">
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
          <tbody>
            <tr v-for="(moduleItem, index) in registeredModulesInfo" :key="index">
              <td><a href="#" @click.prevent="removeFromSelected(index, moduleItem.id)"><i class="fas fa-times"></i></a>
              </td>

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
import { useLoadmodules, useLoadmoduled, getUserSubjectDocuments } from '@/firebase';
import { removeModuleIdFromDocument } from '@/firebase';
import { ref, watchEffect, onMounted  } from 'vue';
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
    const subjectDocuments = ref([]);

    onMounted(async () => {
      // Fetch subject documents for the current user
      subjectDocuments.value = await getUserSubjectDocuments(userId);
    });
    // Theo dõi sự thay đổi trong registeredModules và modules để cập nhật registeredModulesInfo
    watchEffect(() => {
      registeredModulesInfo.value = registeredModules.value.map(registeredModule => {
        // Chỉ chọn các module có uid khớp với id của người dùng đăng nhập
        if (registeredModule.uid === userId) {
          return registeredModule.id_modules.map(id_module => {
            const moduleItem = modules.value.find(module => module.id === id_module);
            if (moduleItem) {
              return {
                id: moduleItem.id,
                name: moduleItem.name,
                credit: moduleItem.credit,
                teacher: moduleItem.teacher,
                className: moduleItem.className,
                quantity: moduleItem.quantity,
                schedule: moduleItem.schedule
              };
            } else {
              return {
                id: '',
                name: '',
                credit: '',
                teacher: '',
                className: '',
                quantity: '',
                schedule: ''
              };
            }
          });
        }
      }).flat().filter(Boolean); 
    });

    return { registeredModulesInfo, subjectDocuments };
  },

  methods: {
    // Trong phương thức removeFromSelected
   async removeFromSelected(index) {
    if (confirm('Bạn có chắc chắn muốn xóa môn học đã đăng ký này không?')) {
      try {
        // Lấy ID của môn học từ mảng registeredModulesInfo dựa trên chỉ số index
        const moduleId = this.registeredModulesInfo[index].id;
        // Xóa phần tử tại vị trí index trong mảng registeredModulesInfo
        this.registeredModulesInfo.splice(index, 1);

        // Lấy giá trị id của mảng từ subjectDocuments bằng await
        const documentId = (await this.subjectDocuments)[0].id;
        await removeModuleIdFromDocument(documentId, moduleId);

        console.log('Đã xóa môn học khỏi danh sách đăng ký và cơ sở dữ liệu thành công.');
      } catch (error) {
        console.error('Lỗi khi xóa môn học:', error);
      }
    }
  },
}
}
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
