import gen from './index';
// import {  API_PATIENT ,API_ORDER} from '../utils/constant';
import { API } from './commWord';

const TagMethods = {
  LoginByAccunt: `${API}/app/Login/selectAdmin`,
};
const APIFunction: any = {};

for (const key in TagMethods) {
  APIFunction[key] = gen(TagMethods[key]);
}

export default APIFunction;
