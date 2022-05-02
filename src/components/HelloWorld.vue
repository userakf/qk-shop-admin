<script setup lang="ts">
  import { onMounted, ref , computed } from 'vue'
  interface book {
    a:number,
    b:string
  }
  defineProps<{ 
    msg: string,
  }>()

  const emit = defineEmits<{
    (e:'update',value:string):void
  }>()

  const count = ref(0)
  const foo = ref<book | null>(null)
  const title = ref<HTMLHeadElement | null>(null)
  onMounted(() => {
    // console.log(title.value);
  })
  foo.value = {
    a:11,
    b:'hello' 
  }

  let doubleCount = computed(() => {
    return count.value * 2
  })
  const handleChange = ():void => {
    count.value++
    emit('update','hello')
  }
</script>

<template>
  <h1 ref="title">{{ msg }}</h1>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    双倍：{{ doubleCount }}
  </p>
  <button type="button" @click="handleChange">double count</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
