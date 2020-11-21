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
      target: 'http://localhost:9999',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
