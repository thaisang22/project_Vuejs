<template>
    <studentscore/>
    <router-view/>
</template>

<script>
import studentscore from '@/components/StudentScores.vue'

export default {
    name: "StudentScore",
    components: {
        studentscore
    }
};
</script>