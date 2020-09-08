import api from '../services/friendlink';
const {
  addFriendLink,
  getAllFriendLink,
  upDateisShow,
  deletLink,
  selectFriendLinkByPage,
} = api;
export default {
  namespace: 'friendlink',
  state: {
    allFriendLink: [],
  },
  effects: {
    *addFriendLink({ payload }, { call, put, select }) {
      const jsonData = JSON.stringify(payload);
      const response = yield call(addFriendLink, {
        jsonData,
      });
      return response.data;
    },
    *getAllLink({ payload }, { call, put, select }) {
      const response = yield call(getAllFriendLink, payload);
      return response.data;
    },
    *selectFriendLinkByPage({ payload }, { call, put, select }) {
      const response = yield call(selectFriendLinkByPage, payload);
      yield put({
        type: 'saveAllLink',
        payload: response.data.data,
      });
      return response.data;
    },
    *upDateisShow({ payload }, { call, put, select }) {
      const response = yield call(upDateisShow, payload);
      return response.data;
    },
    *deletLink({ payload }, { call, put, select }) {
      const response = yield call(deletLink, payload);
      return response.data;
    },
  },
  reducers: {
    saveAllLink(state, action) {
      return {
        ...state,
        allFriendLink: action.payload,
      };
    },
  },
};
