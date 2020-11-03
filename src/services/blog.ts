import gen from './index';
// import {  API_PATIENT ,API_ORDER} from '../utils/constant';
const BlogMethods = {
  getBlogList: `/api/app/blog/selectBlogByPage`, //获取博客列表
  getBlogDetail: `/api/app/blog/selectBlogByType`, //获取文章细节
  addBlog: `POST /api/app/blog/addblog`,
  getAllBlog: `/api/app/blog/getAllblog`,
  getUpdateBlogDetail: `/api/app/blog/getBlogDetail`, //修改页面的回显
  updateBlog: `/api/app/blog/updateBlog`,
  updateBlike: `/api/app/blog/BlikeBlog`,
};
const APIFunction: any = {};

for (const key in BlogMethods) {
  APIFunction[key] = gen(BlogMethods[key]);
}

export default APIFunction;
