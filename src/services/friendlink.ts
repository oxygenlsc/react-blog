import gen from './index';
import { API } from './commWord';
const friendLink = {
  addFriendLink: `POST ${API}/app/friend/addFriendLink`, //添加友链
  getAllFriendLink: `${API}/app/friend/selectAllFriendLink`, //获取所有的友链
  upDateisShow: `${API}/app/friend/upDateisShow`, //更新友链的isShow字段
  deletLink: `${API}/app/friend/deletLink`, //删除友链
  selectFriendLinkByPage: '/api/app/friend/selectFriendLinkByPage', //更具页码查
};
const APIFunction: any = {};

for (const key in friendLink) {
  APIFunction[key] = gen(friendLink[key]);
}

export default APIFunction;
