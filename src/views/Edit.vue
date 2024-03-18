<!-- eslint-disable vue/valid-template-root -->
// eslint-disable-next-line vue/valid-template-root, vue/valid-template-root
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


export default {
  name: "EditView",

};
</script>
