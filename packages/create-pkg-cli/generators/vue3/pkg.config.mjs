export default {
  name: '<%= name %>',
  build: {
    css: {
      preprocessor: '<%= preprocessor %>',
    },
    site: {
      publicPath: '/<%= name %>/',
    },
  },
  site: {
    title: '<%= name %>',
    logo: 'https://avatars.githubusercontent.com/u/133242655?s=200&v=4',
    description: '示例组件库',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
        ],
      },
    ],
  },
};
