{
  "name": "<%= name %>",
  "version": "1.0.0",
  "description": "",
  "main": "lib/<%= name %>.js",
  "style": "lib/index.css",
  "files": [
    "lib",
    "es"
  ],
  "scripts": {
    "dev": "pkg-cli dev",
    "test": "pkg-cli test",
    "lint": "pkg-cli lint",
    "build": "pkg-cli build",
    "release": "pkg-cli release",
    "test:coverage": "open test/coverage/index.html",
    "build-site": "pkg-cli build-site && npx gh-pages -d site-dist"
  },
  "author": "",
  "packageManager": "yarn@1.22.22",
  "husky": {
    "hooks": {
      "pre-commit": "nano-staged",
      "commit-msg": "pkg-cli commit-lint"
    }
  },
  "nano-staged": {
    "*.{ts,tsx,js,jsx,vue}": "eslint --fix"
  },
  "peerDependencies": {
    "vue": "^2.6.11",
    "vue-template-compiler": "^2.6.11"
  },
  "devDependencies": {
    "@mfejs/pkg-cli": "^1.0.0",
    "vue": "^2.6.11",
    "vue-template-compiler": "^2.6.11",
    "vitepress": "^1.3.3"
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
    "Android >= 4.0",
    "iOS >= 8"
  ]
}
