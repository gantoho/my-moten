import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'
import { isVue2 } from 'vue-demi'

const name = isVue2 ? "vue2" : "vue3"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ isVue2 ? createVuePlugin() : vue()],
  build: {
    outDir: `dist/${name}`,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'moten',
      fileName: 'moten'
    },
    rollupOptions: {
      external: ['vue', 'vue-demi'],
      output: {
        // 在UMD构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'vue-demi': 'VueDemi'
        }
      }
    }
  }
})
