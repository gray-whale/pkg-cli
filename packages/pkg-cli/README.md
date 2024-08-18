# Pkg CLI

Pkg CLI 是一个基于 Vite 实现的 Vue 组件库构建工具，通过 Pkg CLI 可以快速搭建一套功能完备的 Vue 组件库。

### 特性

- 基于 Vite 实现，享受愉悦的开发体验
- 提供丰富的命令，涵盖从开发测试到构建发布的完整流程
- 基于约定的目录结构，自动生成优雅的文档站点和组件示例
- 内置 ESLint 校验规则，提交代码时自动执行校验
- 构建后的组件库默认支持按需引入、主题定制、Tree Shaking

### 快速上手

执行以下命令可以快速创建一个基于 Pkg CLI 的项目：

```bash
yarn create create-pkg-cli
```

npm命令

```bash
npx create-pkg-cli
```

### 手动安装

```shell
# 通过 npm
npm i @mfejs/pkg-cli -D

# 通过 yarn
yarn add @mfejs/pkg-cli -D

# 通过 pnpm
pnpm add @mfejs/pkg-cli -D

# 通过 Bun
bun add @mfejs/pkg-cli -D
```

安装完成后，请将以下配置添加到 package.json 文件中

```json
{
  "scripts": {
    "dev": "pkg-cli dev",
    "test": "pkg-cli test",
    "lint": "pkg-cli lint",
    "build": "pkg-cli build",
    "prepare": "husky",
    "release": "pkg-cli release",
    "build-site": "pkg-cli build-site"
  },
  "nano-staged": {
    "*.md": "prettier --write",
    "*.{ts,tsx,js,vue,less,scss}": "prettier --write",
    "*.{ts,tsx,js,vue}": "eslint --fix"
  },
  "eslintConfig": {
    "root": true,
    "extends": ["@mfejs/pkg"]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": ["Chrome >= 51", "iOS >= 10"]
}
```
