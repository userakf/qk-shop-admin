<template>
    <div>
        登陆
    </div>
</template>

<script setup lang="ts">

import { getLoginInfo } from '@/api/common';
import type { Logininfo } from '@/api/types/common'
import { onMounted, ref } from 'vue';

const list = ref<Logininfo['slide']>([])
async function getInfo() {
    const res = await getLoginInfo()
    list.value = res.slide
}
onMounted(() => {
    getInfo()
})

</script>

<style scoped>
</style>