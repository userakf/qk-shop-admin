<template>
    <div class="home">
        <img src="@/assets/logo.png" alt="">
        <div>
            首页
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