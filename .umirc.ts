import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  proxy: {
    '/api': {
      target: 'http://192.168.31.27:12306',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
