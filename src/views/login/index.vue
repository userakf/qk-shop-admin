<template>
    <div class="login-container">
        <img src="@/assets/logon.webp" alt="">
        <el-form 
            ref="ruleFormRef" 
            :model="ruleForm" 
            status-icon 
            :rules="rules" 
            class="login-ruleForm"
        >
            <el-form-item prop="pass">
                <el-input 
                    v-model="ruleForm.name" 
                    type="text" 
                    autocomplete="off" 
                    :prefix-icon="Avatar" 
                    size="large"
                />
            </el-form-item>
            <el-form-item prop="password">
                <el-input 
                    v-model="ruleForm.password" 
                    type="password" 
                    autocomplete="off" 
                    :prefix-icon="Lock" 
                    size="large"
                />
            </el-form-item>
            <el-form-item>
                <el-button size="large" type="primary">登陆</el-button>
                <el-button size="large">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">

import { getLoginInfo } from '@/api/common';
import type { Logininfo } from '@/api/types/common'
import { onMounted, reactive, ref } from 'vue';
import { Avatar,Lock } from '@element-plus/icons-vue';


const list = ref<Logininfo['slide']>([])
async function getInfo() {
    const res = await getLoginInfo()
    list.value = res.slide
}
onMounted(() => {
    // getInfo()
    document.querySelector('body')!.style.backgroundColor = '#efefef'
})

const ruleForm = reactive({
    name:'',
    password:''
})
const rules = {}
</script>

<style scoped lang="scss">
.login-container{
    padding: 20px;
    border-radius: 10px;
    width: 30%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    padding-top: 50px;
    img{
        position: absolute;
        top: -120px;
        width: 150px;
        z-index: 999;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 100%;
        box-shadow: 0 0 20px rgb(209, 121, 136);
    }
    .el-form{
        .el-input{
            // height: 40px;
            // line-height: 40px;
        }
    }
}
</style>