<template>
    <div class="student-info-page">
        <header>
            <h1>THÔNG TIN SINH VIÊN</h1>
        </header>

        <div class="student-details" v-for="{id,codeuser,fullName,email,phone,local_address,address,major,majorMain,dateuser,classuser} in users" :key="id">
            <div class="student-info">
                <div class="d-flex">
                    <div class="label">Mã sinh viên:</div>
                    <div class="value">{{ codeuser }}</div>
                </div>
                <div class="d-flex">
                    <div class="label">Họ tên:</div>
                    <div class="value">{{ fullName }}</div>
                </div>
                <div class="d-flex">
                    <div class="label">Ngày sinh:</div>
                    <div class="value">{{ dateuser }}</div>
                </div>
                <div class="d-flex">
                    <div class="label">Nơi sinh:</div>
                    <div class="value">{{ local_address }}</div>
                </div>
                <div class="d-flex">
                    <div class="label">Địa chỉ:</div>
                    <div class="value">{{ address }}</div>
                </div>
                <div class="d-flex">
                    <div class="label">Điện thoại:</div>
                    <div class="value">{{ phone }}</div>
                </div>
                <div class="d-flex">
                    <div class="label">email:</div>
                    <div class="value">{{ email }}</div>
                </div>
            </div>

            <div class="student-education">
                <div class="d-flex">
                    <div class="label">Ngành đào tạo:</div>
                    <div class="value">{{ major }}</div>
                </div>
                <div class="d-flex">
                    <div class="label">Chuyên ngành:</div>
                    <div class="value">{{ majorMain }}</div>
                </div>
                <div class="d-flex">
                    <div class="label">Lớp học:</div>
                    <div class="value">{{ classuser }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Replace this with your actual student data
            studentData: {
                MSSV: "123456789",
                HoTen: "Nguyễn Văn A",
                NgaySinh: "2000-01-01",
                NoiSinh: "Hà Nội",
                NganhDaoTao: "Công nghệ thông tin",
                ChuyenNganh: "Hệ thống thông tin",
                LopHoc: "CT18B",
                LoaiDaoTao: "Chính quy",
                BacDaoTao: "Đại học",
            },
        };
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
    width: 385px;
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
