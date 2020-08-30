import api from '@/services/login';
const { LoginByAccunt } = api;
export default {
  namespace: 'login',
  state: {
    TagArr: [],
  },
  effects: {
    *ToLogin({ payload }, { call, put }) {
      const response = yield call(LoginByAccunt, payload);
      return response;
    },
  },
  reducers: {},
};
