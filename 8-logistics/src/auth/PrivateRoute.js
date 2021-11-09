import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthonticated } from "../utils/helpers";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAuthonticated() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/signin", state: { from: props.location } }}
            />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
