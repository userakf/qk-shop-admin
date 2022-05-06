<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="it in routes" :key="it.path">{{ it.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

// this.$router
const router = useRouter()

const routes = computed(() => {
    return router.currentRoute.value.matched.filter(it => it.meta.title)
})
</script>

<style scoped lang="scss">

</style>