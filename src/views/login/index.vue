<template>
    <div class="login-container">
        <img src="@/assets/logon.webp" alt="">
        <el-form ref="loginRuleFormRef" :model="loginRuleForm" status-icon :rules="loginRules" class="login-ruleForm"
            @submit.prevent="handleSubmit">
            <el-form-item prop="pass">
                <el-input v-model="loginRuleForm.account" type="text" autocomplete="off" :prefix-icon="Avatar"
                    size="large" placeholder="用户名" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginRuleForm.pwd" type="password" autocomplete="off" :prefix-icon="Lock"
                    size="large" placeholder="密码" />
            </el-form-item>
            <el-form-item>
                <el-button size="large" type="primary" :loading="loading" native-type="submit">登陆</el-button>
                <el-button size="large">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">

import { getLoginInfo, Login } from '@/api/common';
import type { Logininfo } from '@/api/types/common'
import { onMounted, reactive, ref } from 'vue';
import { Avatar, Lock } from '@element-plus/icons-vue';
import { IElForm,FormRule } from '@/types/element-plus'
import { useRouter } from 'vue-router';
import { useUserInfoStore } from '@/stores';

const list = ref<Logininfo['slide']>([])
async function getInfo() {
    const res = await getLoginInfo()
    list.value = res.slide
}
onMounted(() => {
    // getInfo()
    document.querySelector('body')!.style.backgroundColor = '#efefef'
})
const router = useRouter()
const loginRuleFormRef = ref<IElForm | null>(null)
const loading = ref(false)
const loginRuleForm = reactive({
    account: 'admin',
    pwd: '123456'
})

const loginRules = ref<FormRule>({
    account: [
        {
            required:true,
            message: '请输入用户名',
            trigger: 'change'
        }
    ],
    pwd: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'change'
        }
    ]
})
const userInfo = useUserInfoStore()
const handleSubmit = async () => {
    // 表单验证
    const valid = await loginRuleFormRef.value?.validate()
    if (!valid) {
        return false
    }
    // 验证通过，展示loading
    loading.value = true

    // 请求提交
    const { user_info } = await Login(loginRuleForm).finally(() => {
        loading.value = false
    })
    
    userInfo.setUser(user_info)
    // 处理响应
    router.replace({
        name: 'home'
    })
}
</script>

<style scoped lang="scss">
.login-container {
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding-top: 50px;

    img {
        position: absolute;
        top: -120px;
        width: 150px;
        z-index: 999;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 100%;
        box-shadow: 0 0 20px rgb(209, 121, 136);
    }
}
</style>