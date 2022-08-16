<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2022-08-16 10:07:03
 * @LastEditTime: 2022-08-16 11:01:10
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \base_vite_ie11\README.md
-->
# base_vite_ie11
一个基于vite, 兼容ie11的初始化模板


## 技术栈

- vite
- jquery
- sass
- normalize.css
- 手搓 unocss

## vite

vite 是基于 ESmodule 开发的, 而 ie11 不支持, 所以需要 `@vitejs/plugin-legacy` 的加持.
同时还需要 `terser`

## jquery

最新版的jquery 3.6.0 支持 ie10+

## unocss

由于 ie11 不支持 css 变量. 所以要想要使用 unocss 要格外小心, 比如 `bg-sky-400` 要改成 `bg-sky-400:100`. 但有些就不好规避, 比如 `shadow`.

所以, 干脆把常用的样式都扔到 sass 里面.

## .env

开发环境, 请在项目根目录创建文件 `.env.local` 进行本地开发配置.

`.env.test` 为测试环境的配置文件.

`.env.production` 为生产环境的配置文件.

需要注意的是, 仅 `VITE_` 开头的配置才能被访问到. 如需更改, 请参阅[这里](https://cn.vitejs.dev/config/shared-options.html#envprefix)

## 运行

```js
{
    "scripts": {
        "dev": "vite",                          // 开发模式
        "build:test": "vite build --mode test", // 打包测试环境
        "build:prod": "vite build",             // 打包正式环境
        "preview": "vite preview"               // 基于打包内容启动预览服务
    }
}

```

## 另外

- `<script/>` 标签, 一定要增加属性 `type="module"`, 否则无法被 `legacy` 处理.
- `yarn dev` 的 HMR 模式下, ie11 预览有问题. 请在 `bulid` 后预览.


## 目录结构

```
[js]            脚本文件, 按习惯放即可, 这里是每页一个文件. 
[public]        资源文件, 打包后会直接 copy 到 dist 目录中, 不做其它处理.
[scss]          样式文件, 按习惯放即可, 这里是每页一个文件, 统统引入 `common.scss`.
[test]          业务页面. 需在 `vite.config.js` 中配置入口.
.env.*          环境变量
.gitignore      git忽略配置
index.html      业务页面. 需在 `vite.config.js` 中配置入口.
```
