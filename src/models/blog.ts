import api from '@/services/blog';
const { getBlogList } = api;
export default {
  namespace: 'blog',
  state: {
    blogItemArr: [],
  },
  effects: {
    *getItem({ payload }, { call, put, select }) {
      const response = yield call(getBlogList, payload);
      yield put({
        type: 'saveBlogItem',
        payload: response.data.data,
      });
      return response;
    },
  },
  reducers: {
    saveBlogItem(state, action) {
      return {
        ...state,
        blogItemArr: action.payload,
      };
    },
  },
};
