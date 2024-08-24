import{_ as s,c as a,o as n,a3 as i}from"./chunks/framework.DclZkTcH.js";const E=JSON.parse('{"title":"目录结构","description":"","frontmatter":{},"headers":[],"relativePath":"directory.md","filePath":"directory.md"}'),p={name:"directory.md"},e=i(`<h1 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h1><h2 id="源代码目录" tabindex="-1">源代码目录 <a class="header-anchor" href="#源代码目录" aria-label="Permalink to &quot;源代码目录&quot;">​</a></h2><p>基于 Pkg CLI 搭建的组件库的基本目录结构如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>project</span></span>
<span class="line"><span>├─ src                # 组件源代码</span></span>
<span class="line"><span>│   ├─ button        # button 组件源代码</span></span>
<span class="line"><span>│   └─ dialog        # dialog 组件源代码</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├─ docs               # 静态文档目录</span></span>
<span class="line"><span>│   ├─ .vitepress    # vitepress配置文件</span></span>
<span class="line"><span>│   ├─ index.md       # 文档首页</span></span>
<span class="line"><span>│   ├─ components     # 组件目录</span></span>
<span class="line"><span>│         ├─ home.md     # 介绍</span></span>
<span class="line"><span>│         └─ dialog      # 快速上手</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├─ pkg.config.mjs    # PKG CLI 配置文件</span></span>
<span class="line"><span>├─ package.json</span></span>
<span class="line"><span>└─ README.md</span></span></code></pre></div><p>单个组件的目录如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>button</span></span>
<span class="line"><span>├─ demo             # 示例目录</span></span>
<span class="line"><span>│   └─ index.vue   # 组件示例</span></span>
<span class="line"><span>├─ index.vue        # 组件源码</span></span>
<span class="line"><span>└─ README.md        # 组件文档</span></span></code></pre></div><p>使用 .vue 文件编写组件时，编译后会生成对应的 JS 和 CSS 文件，且 JS 文件中会自动引入 CSS 文件。</p><p>如果需要将 JS 和 CSS 解耦，实现主题定制等功能，在编写代码时就要使用独立的 JS 和 CSS 文件，如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>button</span></span>
<span class="line"><span>├─ demo             # 组件示例</span></span>
<span class="line"><span>│   └─ index.vue   # 组件示例入口</span></span>
<span class="line"><span>├─ index.js         # 组件入口</span></span>
<span class="line"><span>├─ index.less       # 组件样式，可以为 less 或 scss</span></span>
<span class="line"><span>└─ README.md        # 组件文档</span></span></code></pre></div><p>采用这种目录结构时，组件的使用者需要分别引入 JS 和 CSS 文件。</p><p>通过引入样式源文件（less 或 scss）并修改样式变量，可以实现主题定制功能。</p><h2 id="构建结果目录" tabindex="-1">构建结果目录 <a class="header-anchor" href="#构建结果目录" aria-label="Permalink to &quot;构建结果目录&quot;">​</a></h2><p>运行 build 命令会在 <code>es</code> 和 <code>lib</code> 目录下生成可用于生产环境的组件代码，结构如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>project</span></span>
<span class="line"><span>├─ es                   # es 目录下的代码遵循 esmodule 规范</span></span>
<span class="line"><span>│   ├─ button          # button 组件编译后的代码目录</span></span>
<span class="line"><span>│   ├─ dialog          # dialog 组件编译后的代码目录</span></span>
<span class="line"><span>│   └─ index.js        # 引入所有组件的入口 (ESModule)</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└─ lib                  # lib 目录下的代码遵循 commonjs 规范</span></span>
<span class="line"><span>    ├─ button           # button 组件编译后的代码目录</span></span>
<span class="line"><span>    ├─ dialog           # dialog 组件编译后的代码目录</span></span>
<span class="line"><span>    ├─ index.js         # 引入所有组件的入口</span></span>
<span class="line"><span>    ├─ index.less       # 所有组件未编译的样式入口</span></span>
<span class="line"><span>    ├─ index.css        # 打包后的组件样式，用于 CDN 引入</span></span>
<span class="line"><span>    ├─ [name].js        # 打包后的组件脚本，UMD 格式</span></span>
<span class="line"><span>    ├─ [name].es.js     # 打包后的组件脚本，ESModule 格式</span></span>
<span class="line"><span>    ├─ [name].min.js    # 打包和压缩后的组件脚本，UMD 格式</span></span>
<span class="line"><span>    └─ [name].es.min.js # 打包和压缩后的组件脚本，ESModule 格式</span></span></code></pre></div><p>单个组件编译后的目录如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>button</span></span>
<span class="line"><span>├─ index.js         # 组件编译后的 JS 文件</span></span>
<span class="line"><span>├─ index.css        # 组件编译后的 CSS 文件</span></span>
<span class="line"><span>├─ index.less       # 组件编译前的 CSS 文件，可以为 less 或 scss</span></span>
<span class="line"><span>└─ style            # 按需引入样式的入口</span></span>
<span class="line"><span>    ├─ index.js     # 按需引入编译后的样式</span></span>
<span class="line"><span>    └─ less.js      # 按需引入未编译的样式，可用于主题定制</span></span></code></pre></div><h3 id="生成类型声明" tabindex="-1">生成类型声明 <a class="header-anchor" href="#生成类型声明" aria-label="Permalink to &quot;生成类型声明&quot;">​</a></h3><p>当组件库使用 TS 编写，且根目录下存在 <code>tsconfig.declaration.json</code> 文件，Pkg CLI 会自动生成 <code>.d.ts</code> 类型声明文件。</p><p><code>tsconfig.declaration.json</code> 的参考格式如下：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;extends&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./tsconfig.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;declaration&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;declarationDir&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;emitDeclarationOnly&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;include&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;es/**/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lib/**/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;exclude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node_modules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;**/test/**/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;**/demo/**/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>成功生成类型声明后，请在 <code>package.json</code> 中添加类型入口声明：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;typings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lib/index.d.ts&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,22),l=[e];function t(o,h,d,c,k,r){return n(),a("div",null,l)}const g=s(p,[["render",t]]);export{E as __pageData,g as default};
