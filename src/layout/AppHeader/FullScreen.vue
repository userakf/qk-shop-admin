<template>
    <el-icon @click="toggleFullScreen">
        <full-screen />
    </el-icon>
</template>

<script setup lang="ts">
const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
</script>

<style scoped>
.el-icon {}
</style>