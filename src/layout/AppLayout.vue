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
                    <WaterMark :config="waterMarkConfig"/>
                    <AppContent :title="title" @add="parentClick"/>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import AppMenu from './AppMenu/index.vue';
import AppHeader from './AppHeader/index.vue'
import AppContent from './AppContent/index';
import WaterMark from '@/components/WaterMark.vue';
import { WaterMarkConfig } from '@/components/Watermark.vue'
import imgUrl from '../assets/logo.webp'

import { ref } from 'vue';
const title = ref('TSX')
const parentClick = (value:string) => {
    console.log(value);
}
const waterMarkConfig:WaterMarkConfig = {
    msg:'宫内莲华',
    width:300,
    height:300,
    imgURL:imgUrl
}
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