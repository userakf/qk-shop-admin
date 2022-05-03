import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // 配置选项
    })
  ],
  resolve:{
    alias:{
      '@':path.join(__dirname,'src')
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/styles/variables.scss";'
      }
    }
  }
})
