/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-08-15 14:29:15
 * @LastEditTime: 2022-08-26 16:49:01
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \base_vite_ie11\vite.config.js
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import transformerDirective from '@unocss/transformer-directives' // @apply

import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
    server: {
        host: true
    },
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                page: resolve(__dirname, 'page.html')
            }
        },
        manifest: true
    },
    plugins: [
        Unocss({
            presets: [presetUno()],
            transformers: [transformerDirective({})]
        }),
        legacy({
            targets: ['IE >= 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        })
    ]
})
