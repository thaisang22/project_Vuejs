<template>
    <div class="card card-body mt-4">
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="">Name THAI SANG NGU SI</label>
                <input v-model="form.name" class="form-control" type="text" required />
            </div>
            <div class="form-group mt-3">
                <label for="">Email</label>
                <input type="text" v-model="form.email" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-success mt-3">
                Create User
            </button>
        </form>
    </div>
</template>

<script>
import { createUser} from '../firebase.js'
import { reactive } from 'vue';

export default {
    setup() {
        const form = reactive({
            name: '',
            email: ''
        });

        const onSubmit = async () => {
            await createUser({ ...form });
            form.name = '';
            form.email = '';
        };

        return { form, onSubmit }; // Corrected onSubmit variable name
    }
};
</script>
