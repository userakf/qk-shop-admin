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
import { ElMessage, ElMessageBox } from 'element-plus';
import { Ilogout } from '@/api/common'
import { useRouter } from 'vue-router';
const router = useRouter()
const userInfo = useUserInfoStore()
const logout = async () => {
    // 退出提示
    await ElMessageBox.confirm('确认退出？')
    // 确认发出退出请求
    // await Ilogout()
    ElMessage.success('退出成功')
    userInfo.removeUser()
    // 跳转到登陆页
    router.push({
        name:'login'
    })
}
</script>