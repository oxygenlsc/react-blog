import gen from './index';
// import {  API_PATIENT ,API_ORDER} from '../utils/constant';
import { API } from './commWord';

const BlogMethods = {
  getBlogList: `${API}/app/blog/selectBlogByPage`, //获取博客列表
  getBlogDetail: `${API}/app/blog/selectBlogByType`, //获取文章细节
  addBlog: `POST ${API}/app/blog/addblog`,
  getAllBlog: `${API}/app/blog/getAllblog`,
  getUpdateBlogDetail: `${API}/app/blog/getBlogDetail`, //修改页面的回显
  updateBlog: `POST ${API}/app/blog/updateBlog`,
  updateBlike: `${API}/app/blog/BlikeBlog`,
};
const APIFunction: any = {};

for (const key in BlogMethods) {
  APIFunction[key] = gen(BlogMethods[key]);
}

export default APIFunction;
