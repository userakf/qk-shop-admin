
<template>
    <el-icon @click="handleCollapse()">
        <fold v-if="!commonStore.isCollapse"/>
        <expand v-else/>
    </el-icon>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores';
const commonStore = useCommonStore()
const handleCollapse = () => {
    commonStore.setIsCollapse()
}
</script>

<style scoped>
.el-icon{
}
</style>