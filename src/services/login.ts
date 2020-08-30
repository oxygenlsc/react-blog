import gen from './index';
// import {  API_PATIENT ,API_ORDER} from '../utils/constant';
const TagMethods = {
  LoginByAccunt: `/api/app/Login/selectAdmin`,
};
const APIFunction: any = {};

for (const key in TagMethods) {
  APIFunction[key] = gen(TagMethods[key]);
}

export default APIFunction;
