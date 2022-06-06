import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 3003,
    open: true,
    strictPort: true,
    cors: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8088',   //代理接口
    //     // target: 'http://go.lwlsl.top:8088', 
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   },
    //   '/dpc': {
    //     // target: 'http://localhost:8088',   //代理接口
    //     target: 'http://go.lwlsl.top:8088',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/dpc/, '')
    //   }
    // }
  }
})
