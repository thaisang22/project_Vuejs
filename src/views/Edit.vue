<template>
  <h3>Edit sutudent</h3>
  <form @submit.prevent="update">
    <div class="form-group">
      <label for="">Name</label>
      <input v-model="form.name"  class="form-group" type="text" required/>
      <label for="">Email</label>
      <input v-model="form.email"  class="form-group" type="text" required/>
    </div>
      <button type="submit" class="btn btn-primary mt-3">
          update
      </button>
  </form>
</template>


<script>
import { reactive, computed , onMounted } from 'vue';
import {  useRoute , useRouter} from 'vue-router';
import { getUser , updateUser } from '@/firebase';

export default {
  name: "EditView",
  setup() {
    const router = useRouter(); // Fixed typo: changed `userRouter` to `useRouter`
    const route = useRoute(); // Fixed typo: changed `userRoute` to `useRoute`
    const userId = computed(() => route.params.id);

    const form = reactive({ name:'',email:''});

    onMounted(async () => {
      const user = await getUser(userId.value);
      form.name = user.name;
      form.email = user.email;
    });

    const update = async () => {
    
      await updateUser(userId.value, form);
 
      router.push('/');
    };

    return { form, update };
  }
};
</script>
