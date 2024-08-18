# 配置指南

- [配置指南](#----)
  - [rsbuild.config.mjs](#rsbuildconfigmjs)
  - [vite.config.mjs](#viteconfigmjs)
  - [pkg.config.mjs](#pkgconfigmjs)
    - [name](#name)
    - [build.css.base](#buildcssbase)
    - [build.css.preprocessor](#buildcsspreprocessor)
    - [build.site.publicPath](#buildsitepublicpath)
    - [build.srcDir](#buildsrcdir)
    - [build.namedExport](#buildnamedexport)
    - [build.packageManager](#buildpackagemanager)
    - [site.title](#sitetitle)
    - [site.logo](#sitelogo)
    - [site.description](#sitedescription)
    - [site.nav](#sitenav)
  - [PostCSS](#postcss)
    - [默认配置](#-----1)
  - [browserslist](#browserslist)

## rsbuild.config.mjs

Pkg CLI 使用 [Rsbuild](https://github.com/web-infra-dev/rsbuild) 来构建文档站点，你可以在 `pkg.config.mjs` 的同级目录下创建 Rsbuild 的配置文件，文件内容会被 Pkg CLI 自动读取。

```js
// rsbuild.config.mjs 或 rsbuild.config.ts
export default {
  plugins: [
    // 配置 Rsbuild 插件
  ],
  dev: {
    // 与本地开发有关的选项
  },
  html: {
    // 与 HTML 生成有关的选项
  },
  // 其他选项
};
```

> 请参考 [配置 Rsbuild](https://rsbuild.dev/zh/guide/basic/configure-rsbuild) 了解更多。

## vite.config.mjs

Pkg Cli 使用 Vite 来构建组件库代码，你可以在 `pkg.config.mjs` 的同级目录下创建 Vite 的配置文件，在该文件中你可以添加任意的 Vite 配置。

> 请参考 [Vite 配置](https://vitejs.dev/config/) 了解更多。

## pkg.config.mjs

`pkg.config.mjs` 中包含了 `pkg-cli` 的打包配置和文档站点配置，请创建此文件并置于项目根目录下。下面是一份基本配置的示例：

```js
export default {
  // 组件库名称
  name: 'demo-ui',
  // 构建配置
  build: {
    site: {
      publicPath: '/demo-ui/',
    },
  },
  // 文档站点配置
  site: {
    // 标题
    title: 'Demo UI',
    // 图标
    logo: 'https://avatars.githubusercontent.com/u/133242655?s=200&v=4',
    // 描述
    description: '示例组件库',
    // 左侧导航
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'my-button',
            title: 'MyButton 按钮',
          },
        ],
      },
    ],
  },
};
```

### name

- Type: `string`
- Default: `''`

组件库名称，建议使用中划线分割，如 `demo-ui`。

### build.css.base

- Type: `string`
- Default: `'style/base.less'`

全局样式文件的路径，可以为相对路径或绝对路径。

相对路径基于 `src` 目录计算。

```js
module.exports = {
  build: {
    css: {
      base: 'style/global.scss',
    },
  },
};
```

### build.css.preprocessor

- Type: `string`
- Default: `'less'`

CSS 预处理器配置，目前支持 `less` 和 `sass` 两种预处理器，默认使用 `less`。

```js
module.exports = {
  build: {
    css: {
      preprocessor: 'sass',
    },
  },
};
```

### build.css.removeSourceFile

- Type: `boolean`
- Default: `'false'`

是否在构建后移除样式文件的源代码。

```js
module.exports = {
  build: {
    css: {
      removeSourceFile: true,
    },
  },
};
```

### build.site.publicPath

- Type: `string`
- Default: `/`

等价于 vite 的 `build.outDir` 配置。

一般来说，我们的文档网站会部署在一个域名的子路径上，如 `https://my.github.io/demo-ui/`，这时候 `publicPath` 需要跟子路径保持一致，即 `/demo-ui/`。

```js
module.exports = {
  build: {
    site: {
      publicPath: '/demo-ui/',
    },
  },
};
```

### build.srcDir

- Type: `string`
- Default: `src`

```js
module.exports = {
  build: {
    srcDir: 'myDir',
  },
};
```

### build.namedExport

- Type: `boolean`
- Default: `false`

是否通过 Named Export 对组件进行导出。

未开启此选项时，会通过 `export default from 'xxx'` 导出组件内部的默认模块。

开启此选项后，会通过 `export * from 'xxx'` 导出组件内部的所有模块、类型定义。

### build.packageManager

- Type: `'npm' | 'yarn' | 'pnpm' | 'bun'`
- Default: `yarn`

指定使用的包管理器。

### build.bundleOptions

- Type: `BundleOptions[]`

指定打包后产物的格式。

产物格式由三个配置项控制：

```ts
type BundleOption = {
  // 是否压缩代码（注意 es 产物无法被 vite 压缩）
  minify?: boolean;
  // 产物类型，可选值为 'es' | 'cjs' | 'umd' | 'iife'
  formats: LibraryFormats[];
  // 需要 external 的依赖（Vue 默认会被 external）
  external?: string[];
};
```

该选项的默认值为：

```ts
const DEFAULT_OPTIONS: BundleOption[] = [
  {
    minify: false,
    formats: ['umd'],
  },
  {
    minify: true,
    formats: ['umd'],
  },
  {
    minify: false,
    formats: ['es', 'cjs'],
    external: allDependencies,
  },
];
```

### site.title

- Type: `string`
- Default: `''`

文档站点的标题。

### site.logo

- Type: `string`
- Default: `''`

文档站点的 Logo。

### site.description

- Type: `string`
- Default: `''`

标题下方的描述文案。

### site.nav

- Type: `object[]`
- Default: `undefined`

文档站点的左侧导航，数组中的每个对象表示一个导航分组。

```js
module.exports = {
  site: {
    nav: [
      {
        // 分组标题
        title: '开发指南',
        // 导航项
        items: [
          {
            // 导航项路由
            path: 'home',
            // 导航项文案
            title: '介绍',
            // 是否隐藏当前页右侧的手机模拟器（默认不隐藏）
            hideSimulator: true,
          },
        ],
      },
    ],
  },
};
```

## PostCSS

通过根目录下的`postcss.config.js`文件可以对 PostCSS 进行配置。

### 默认配置

`pkg-cli` 中默认的 PostCSS 配置如下：

```js
module.exports = {
  plugins: {
    autoprefixer: {},
  },
};
```

## browserslist

推荐在 `package.json` 文件里添加 browserslist 字段，这个值会被 `autoprefixer` 用来确定目标浏览器的版本，保证编译后代码的兼容性。

在移动端浏览器中使用，可以添加如下配置：

```json
{
  "browserslist": ["Chrome >= 51", "iOS >= 10"]
}
```
