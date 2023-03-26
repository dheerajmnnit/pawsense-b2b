import {
  SIGNUP_LOADING,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  SIGNIN_LOADING,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  STORE_USER,
  LOGOUT_USER,
} from "./constants";

const initialState = {
  signup: {
    loading: false,
    data: null,
    error: null,
  },
  signin: {
    loading: false,
    data: null,
    error: null,
  },
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        signup: {
          loading: true,
          data: null,
          error: null,
        },
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        signup: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          loading: false,
          data: action.data,
          error: null,
        },
      };

    case SIGNIN_LOADING:
      return {
        ...state,
        signin: {
          loading: true,
          data: null,
          error: null,
        },
      };

    case SIGNIN_ERROR:
      return {
        ...state,
        signin: {
          loading: false,
          data: null,
          error: action.error,
        },
      };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        signin: {
          loading: false,
          data: action.data,
          error: null,
        },
      };

    case STORE_USER:
      return {
        ...state,
        user: action.user,
      };

    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default userReducer;
