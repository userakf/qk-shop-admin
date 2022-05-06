<template>
    <el-dropdown trigger="click">
        <span class="el-dropdown-link">
            {{ userInfo.user?.account || 'amdin' }}
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item @click="logout">退出登陆</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { useUserInfoStore } from '@/stores';
const userInfo = useUserInfoStore()
const logout = () => {
    userInfo.removeUser()
}
</script>