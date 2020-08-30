import api from '@/services/blog';
const { getBlogList, getBlogDetail, addBlog } = api;
export default {
  namespace: 'blog',
  state: {
    blogItemArr: [],
    totle: 0,
    curpage: 1,
    curSlimit: 'id',
  },
  effects: {
    *getItem({ payload }, { call, put, select }) {
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
    *getDetail({ payload }, { call, put, select }) {
      console.log(payload);
      if (payload.type == 'id') {
        const response = yield call(getBlogDetail, payload);
        return response.data;
      } else {
        const response = yield call(getBlogDetail, payload);
        yield put({
          type: 'saveBlogItem',
          payload: response.data.data,
        });
        yield put({
          type: 'saveTotle',
          payload: response.data.totle,
        });
        return response;
      }
    },
    *addBlog({ payload }, { call, put, select }) {
      const jsonData = JSON.stringify(payload);
      const response = yield call(addBlog, {
        jsonData,
      });
      return response.data;
    },
  },
  reducers: {
    saveBlogItem(state, action) {
      return {
        ...state,
        blogItemArr: action.payload,
      };
    },
    saveTotle(state, action) {
      return {
        ...state,
        totle: action.payload,
      };
    },
    saveCurPage(state, action) {
      return {
        ...state,
        curpage: action.payload,
      };
    },
    saveType(state, action) {
      return {
        ...state,
        curSlimit: action.payload,
      };
    },
  },
};
