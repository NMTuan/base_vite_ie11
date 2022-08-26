/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-08-15 14:28:28
 * @LastEditTime: 2022-08-26 17:00:07
 * @LastEditors: NMTuan
 * @Description: 首页
 * @FilePath: \base_vite_ie11\js\index.js
 */

import '/scss/index.scss'

console.log('[VITE_API_URL]', import.meta.env.VITE_API_URL)

setTimeout(() => {
    $('#hello').text('你好 世界')
}, 3000)
