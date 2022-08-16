/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-08-15 14:29:15
 * @LastEditTime: 2022-08-16 10:17:55
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \base_vite_ie11\vite.config.js
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
    server: {
        host: true
    },
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                test: resolve(__dirname, 'test/index.html')
            }
        }
    },
    plugins: [
        legacy({
            targets: ['IE >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ]
})
