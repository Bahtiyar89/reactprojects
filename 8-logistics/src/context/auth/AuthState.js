import React, { useReducer } from "react";
import { useToasts } from "react-toast-notifications";

import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import { doGet, doPost, doPostFormData } from "../../utils/apiActions";

import {
  CLEAR_ERRORS,
  NEW_CATEGORY,
  AUTH_ERROR,
  SAVE_ERROR,
  LOGIN_SUCCESS,
  LOADING,
  FALSE_REDIRECT,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: localStorage.getItem("user"),
    isAuthenticated: false,
    loading: false,
    error: [],
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const { addToast, toastStack } = useToasts();
  //Login User
  const signin = (FormData) => {
    dispatch({ type: LOADING, payload: true });
    doPost(`/integration/login`, FormData)
      .then((res) => {
        addToast("err.message", { appearance: "info" });
        dispatch({ type: LOADING, payload: false });
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        addToast(err.message, { appearance: "error" });
        dispatch({ type: LOADING, payload: false });
        dispatch({
          type: SAVE_ERROR,
          payload: err,
        });
      });
  };

  const reverseRedirect = () => dispatch({ type: FALSE_REDIRECT });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        loading: state.loading,
        error: state.error,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        //  register,
        signin,
        reverseRedirect,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
