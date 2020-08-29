import gen from './index';
// import {  API_PATIENT ,API_ORDER} from '../utils/constant';
const BlogMethods = {
  getBlogList: `/api/app/blog/selectBlogByPage`, //获取博客列表
};
const APIFunction: any = {};

for (const key in BlogMethods) {
  APIFunction[key] = gen(BlogMethods[key]);
}

export default APIFunction;
