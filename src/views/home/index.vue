<template>
    <div class="home">
        <div>
            <router-link to="/">首页</router-link>
            <router-link to="/login">登陆</router-link>
        </div>
        <el-button @click="add"> {{ counter.count }} </el-button>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore()
function add() {
    counter.increnemt()
}
</script>

<style lang="scss" scoped>
.home {
    img {
        box-shadow: 0 0 10px $color;
    }
}
</style>