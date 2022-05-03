<template>
    <button @click="add"> {{ counter.count }} </button>
</template>

<script setup lang="ts">
    import { useCounterStore } from '../../stores/counter';
    const counter = useCounterStore()
    function add(){
        counter.increnemt()
    }
</script>

<style scoped>

</style>