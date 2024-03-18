<template>
    <div>
        <div class="card mt-4">
            <table class="table m-0">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="{id,name,email} in users" :key="id">
                        <td>{{ name }}</td>
                        <td>{{ email }}</td>
                        <td>
                            <router-link :to="`/edit/${id}`">
                                <button class="btn btn-primary btn-sm me-2">
                                    Edit
                                </button>
                            </router-link>
                            <button class="btn btn-primary btn-sm me-2" @click="deleteUser(id)">
                                    Delete
                                </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { deleteUser , useLoadUsers } from '@/firebase';

export default {
    setup() {
        const users = useLoadUsers()
        return { users , deleteUser}
    }
}
</script>

<style scoped>
/* Your style code goes here */
</style>
