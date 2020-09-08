import gen from './index';
// import {  API_PATIENT ,API_ORDER} from '../utils/constant';
const friendLink = {
  addFriendLink: `POST /api/app/friend/addFriendLink`, //添加友链
  getAllFriendLink: '/api/app/friend/selectAllFriendLink', //获取所有的友链
  upDateisShow: '/api/app/friend/upDateisShow', //更新友链的isShow字段
  deletLink: '/api/app/friend/deletLink', //删除友链
  selectFriendLinkByPage: '/api/app/friend/selectFriendLinkByPage', //更具页码查
};
const APIFunction: any = {};

for (const key in friendLink) {
  APIFunction[key] = gen(friendLink[key]);
}

export default APIFunction;
