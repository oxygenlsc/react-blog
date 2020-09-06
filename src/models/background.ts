import api from '@/services/blog';
const { getBlogList, getUpdateBlogDetail, updateBlog } = api;
export default {
  namespace: 'background',
  state: {
    backgroundBlog: [],
    backgroundTotle: '',
  },
  effects: {
    *backgroundGetItem({ payload }, { call, put, select }) {
      const response = yield call(getBlogList, payload);
      yield put({
        type: 'saveBlogItem',
        payload: response.data.data,
      });
      yield put({
        type: 'saveTotle',
        payload: response.data.totle,
      });
      return response;
    },
    *getUpdateBlogDetail({ payload }, { call, put, select }) {
      const response = yield call(getUpdateBlogDetail, payload);
      return response.data;
    },
    *updateBlogs({ payload }, { call, put, select }) {
      const response = yield call(updateBlog, payload);
      return response.data;
    },
  },
  reducers: {
    saveBlogItem(state, action) {
      return {
        ...state,
        backgroundBlog: action.payload,
      };
    },
    saveTotle(state, action) {
      return {
        ...state,
        backgroundTotle: action.payload,
      };
    },
  },
};
