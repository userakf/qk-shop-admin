<template>
    <el-menu 
        active-text-color="#ffd04b" 
        background-color="#304156" 
        class="el-menu-vertical-demo" 
        default-active="2"
        text-color="#fff"
        router
        :collapse="commonStore.isCollapse"
    >
        <el-sub-menu index="/">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
            <el-icon>
                <icon-menu />
            </el-icon>
            <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <el-icon>
                <document />
            </el-icon>
            <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <span>Navigator Four</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCommonStore } from '@/stores/index'
// const isCollapse = ref<boolean>(false)
const commonStore = useCommonStore()
</script>

<style scoped lang="scss">
.el-menu{
    border-right: none;
    &:not(.el-menu--collapse){
        width: 200px;
        min-height: 400px;
    }
}
</style>