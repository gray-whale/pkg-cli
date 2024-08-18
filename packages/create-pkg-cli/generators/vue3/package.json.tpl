{
  "name": "<%= name %>",
  "version": "1.0.0",
  "description": "",
  "main": "lib/<%= name %>.js",
  "module": "es/index.js",
  "style": "lib/index.css",
  "typings": "lib/index.d.ts",
  "files": [
    "lib",
    "es"
  ],
  "scripts": {
    "dev": "pkg-cli dev",
    "lint": "pkg-cli lint",
    "build": "pkg-cli build",
    "build:site": "pkg-cli build-site",
    "release:site": "pnpm build:site && npx gh-pages -d site-dist"
  },
  "author": "",
  "nano-staged": {
    "*.md": "prettier --write",
    "*.{ts,tsx,js,vue,less,scss}": "prettier --write",
    "*.{ts,tsx,js,vue}": "eslint --fix"
  },
  "peerDependencies": {
    "vue": "^3.3.4"
  },
  "devDependencies": {
    "@mfejs/pkg-cli": "^1.0.0",
    "@vitepress-demo-preview/component": "^2.3.2",
    "@vitepress-demo-preview/plugin": "^1.2.3",
    "vue": "^3.3.4",
    "sass": "^1.49.7",
    "less": "^4.2.0",
    "vitepress": "^1.3.3",
    "less": "^4.2.0"
  },
  "eslintConfig": {
    "root": true,
    "extends": [
      "@mfejs/pkg"
    ]
  },
  "prettier": {
    "singleQuote": true
  },
  "browserslist": [
    "Chrome >= 51",
    "iOS >= 10"
  ]
}
