<template>
    <div class="common-layout">
        <el-container>
            <el-aside>
                <AppMenu />
            </el-aside>
            <el-container>
                <el-header>
                    <ToggleSidebarVue />
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
import ToggleSidebarVue from './AppHeader/ToggleSidebar.vue';
</script>

<style scoped lang="scss">
.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
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