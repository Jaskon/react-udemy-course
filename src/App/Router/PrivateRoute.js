import {Redirect, Route} from "react-router-dom";
import React from "react";

function PrivateRoute({ children, condition, ...props }) {
  if (condition) {
    return <Route {...props}>
      {children}
    </Route>;
  }

  return <Redirect to="/404"/>;
}

export default PrivateRoute;
