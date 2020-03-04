import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import SidBar from "./Views/SidBar.jsx";
import Login from "./Views/Login/Components/Login.jsx";
import SignUp from "./Views/SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={SidBar} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Redirect from='*' to='/login' />
          </div>
        </Router>
      </AuthProvider>
  );
};

export default Routes;
