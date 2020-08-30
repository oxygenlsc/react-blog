import api from '@/services/tag';
const { getTagList } = api;
export default {
  namespace: 'tag',
  state: {
    TagArr: [],
  },
  effects: {
    *getTag({ payload }, { call, put, select }) {
      const response = yield call(getTagList, payload);
      yield put({
        type: 'saveTagItem',
        payload: response.data.data,
      });
      return response;
    },
  },
  reducers: {
    saveTagItem(state, action) {
      return {
        ...state,
        TagArr: action.payload,
      };
    },
    saveTotle(state, action) {
      return {
        ...state,
        totle: action.payload,
      };
    },
  },
};
