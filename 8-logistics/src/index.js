import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { ToastProvider } from "react-toast-notifications";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AuthState from "./context/auth/AuthState";

ReactDOM.render(
  <ToastProvider autoDismissTimeout={1000} autoDismiss={true} placement="top">
    <AuthState>
      <App />
    </AuthState>
  </ToastProvider>,
  document.getElementById("root")
);
