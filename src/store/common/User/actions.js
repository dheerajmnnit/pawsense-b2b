import {
  SIGNUP_LOADING,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNIN_LOADING,
  SIGNIN_ERROR,
  STORE_USER,
  LOGOUT_USER,
} from "./constants";

import { signin, signup } from "../../../api";
import { LOCAL_STORAGE } from "../../../utils/constants/siteSettings";

export const signupAction = (data) => {
  return async (dispatch) => {
    dispatch(setSignupLoading());
    try {
      const response = await signup(data);
      if (response?.status === 200) {
        dispatch(storeSignupSuccess(response.data));
      } else {
        dispatch(storeSignupError(response.data || "Something went wrong!"));
      }
    } catch (error) {
      console.error("Signup Error:", error);
      if (error?.response?.data) {
        dispatch(storeSignupError(error?.response?.data));
      }
    }
  };
};

export const storeSignupSuccess = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    data,
  };
};

export const setSignupLoading = () => {
  return {
    type: SIGNUP_LOADING,
  };
};

export const storeSignupError = (error) => {
  return {
    type: SIGNUP_ERROR,
    error,
  };
};

export const signinAction = (data) => {
  return async (dispatch) => {
    dispatch(setSigninLoading());
    try {
      const response = await signin(data);
      if (response?.status === 200) {
        if (response?.data?.success) {
          dispatch(storeUser(response?.data?.data));
          localStorage.setItem(
            LOCAL_STORAGE.AUTH_USER,
            JSON.stringify(response?.data?.data)
          );
        }
        // dispatch(storeSigninSuccess(response.data));
      } else {
        dispatch(storeSigninError(response.data || "Something went wrong!"));
      }
    } catch (error) {
      console.error("Signin Error:", error);
      if (error?.response?.data) {
        dispatch(storeSigninError(error?.response?.data));
      }
    }
  };
};

export const storeUser = (user) => {
  return {
    type: STORE_USER,
    user,
  };
};

export const logOutAction = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const storeSigninSuccess = (data) => {
  return {
    type: SIGNIN_SUCCESS,
    data,
  };
};

export const setSigninLoading = () => {
  return {
    type: SIGNIN_LOADING,
  };
};

export const storeSigninError = (error) => {
  return {
    type: SIGNIN_ERROR,
    error,
  };
};
