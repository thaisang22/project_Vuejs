<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>SỬA ĐIỂM SINH VIÊN</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">EDIT ĐIỂM SINH VIÊN</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="container">
                <div>
                    <div class="card card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Chỉnh sửa thông tin điểm sinh viên</h3>
                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="update">
                                <div class="form-group mt-3">
                                    <label for="name">Tên học phần</label>
                                    <input type="text" id="name" v-model="form.name" class="form-control"  required min="0" max="10" />
                                </div>
                                <div class="form-group mt-3">
                                    <label for="tx1">Điểm TX1</label>
                                    <input type="number" id="tx1" v-model="form.tx1" class="form-control"  required min="0" max="10" />
                                </div>
                                <div class="form-group mt-3">
                                    <label for="tx2">Điểm TX2</label>
                                    <input type="number" id="tx2" v-model="form.tx2" class="form-control"  required min="0" max="10" />
                                </div>
                                <div class="form-group mt-3">
                                    <label for="midTerm">Điểm Giữa kỳ</label>
                                    <input type="number" id="midTerm" v-model="form.midTerm" class="form-control"
                                         required min="0" max="10" />
                                </div>
                                <div class="form-group mt-3">
                                    <label for="finalTerm">Điểm Cuối kỳ</label>/-strong/-heart:>:o:-((:-h<input type="number" id="finalTerm" v-model="form.finalTerm" class="form-control"
                                         required min="0" max="10" />
                                </div>
                                <button type="submit" class="btn btn-success mt-3">
                                    Cập nhật
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getScore, updateScore } from '@/firebase';

export default {
    name: "EditScore",
    setup() {
        const router = useRouter();
        const route = useRoute();
        const scoreboardId = route.params.id;
        const form = ref({
            name: '',
            tx1: '',
            tx2: '',
            midTerm: '',
            finalTerm: ''
        });

        // Method to get score information
        const getScoreInfo = async () => {
            try {
                const score = await getScore(scoreboardId); // Sử dụng scoreboardId để lấy thông tin điểm từ scoreboard
                if (score) {
                    form.value.name = score.moduleName;
                    form.value.tx1 = score.tx1;
                    form.value.tx2 = score.tx2;
                    form.value.midTerm = score.midTerm;
                    form.value.finalTerm = score.finalTerm;
                } else {
                    console.error('Score not found for scoreboard ID:', scoreboardId);
                }
            } catch (error) {
                console.error('Error fetching score:', error);
            }
        };


        // Call the method on component mount
        onMounted(() => {
            getScoreInfo();
        });

        // Method to update score information
        const update = async () => {
            try {
                await updateScore(scoreboardId, form.value);
                router.push('/admin/addscore');
            } catch (error) {
                console.error('Error updating score:', error);
            }
        };

        return { form, update };
    }
};
</script>


<style scoped>
/* CSS cho component này nếu cần */
</style>