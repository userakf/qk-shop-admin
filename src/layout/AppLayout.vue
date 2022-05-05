<template>
    <div class="common-layout">
        <el-container>
            <el-aside>
                <AppMenu />
            </el-aside>
            <el-container>
                <el-header>
                    <AppHeader />
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import AppMenu from './AppMenu/index.vue';
import AppHeader from './AppHeader/index.vue'
</script>

<style scoped lang="scss">
.el-header,
.el-footer {
    color: #000;
}
.el-aside {
    width: auto;
    background-color: #304156;
    color: #333;
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
}
.el-container{
    height: 100vh;
}
</style>