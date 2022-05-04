
<template>
    <el-icon @click="collapse()"><operation /></el-icon>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores';
const commonStore = useCommonStore()
const collapse = () => {
    commonStore.setIsCollapse()
}
</script>

<style scoped>

</style>