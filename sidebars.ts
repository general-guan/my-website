import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'intro',
    'common-url/index', // 常用地址
    {
      type: 'category',
      label: '面试',
      items: ['interview/javascript/index'],
    },
    {
      type: 'category',
      label: '性能优化',
      items: ['performance-optimization/image-lazy-loading/index'],
    },
    {
      type: 'category',
      label: '浏览器',
      items: ['browser/browser-cache/index'],
    },
    {
      type: 'category',
      label: 'vue',
      items: ['vue/pinia/index'],
    },
    {
      type: 'category',
      label: '服务端',
      items: ['server/nginx/index'],
    },
    {
      type: 'category',
      label: '桌面端',
      items: ['desktop/electron/index'],
    },
    {
      type: 'category',
      label: '图形',
      items: ['graphics/three/index'],
    },
  ],
};

export default sidebars;
