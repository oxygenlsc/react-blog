import gen from './index';
// import {  API_PATIENT ,API_ORDER} from '../utils/constant';
const BlogMethods = {
  getBlogList: `/api/app/blog/selectBlogByPage`, //获取博客列表
  getBlogDetail: `/api/app/blog/selectBlogByType`, //获取文章细节
  addBlog: `POST /api/app/blog/addblog`,
};
const APIFunction: any = {};

for (const key in BlogMethods) {
  APIFunction[key] = gen(BlogMethods[key]);
}

export default APIFunction;
