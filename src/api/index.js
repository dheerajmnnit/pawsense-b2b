import { get, patch, post } from "./config";
import endpoints from "./endpoints";

export const signup = (data) => {
  return post(endpoints.SIGNUP, {}, data);
};

export const signin = (data) => {
  return post(endpoints.SIGNIN, {}, data);
};
