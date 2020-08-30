import gen from './index';
// import {  API_PATIENT ,API_ORDER} from '../utils/constant';
const TagMethods = {
  getTagList: `/api/app/tag/selectAllTag`, //获取博客列表
};
const APIFunction: any = {};

for (const key in TagMethods) {
  APIFunction[key] = gen(TagMethods[key]);
}

export default APIFunction;
