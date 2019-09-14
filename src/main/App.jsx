import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Home from "../Views/Home";
import Login from "../Views/Login";
import SignUp from "../Views/SignUp";
import { AuthProvider } from "../Auth";
import PrivateRoute from "../PrivateRoute";

const App = () => {
  return (
      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Redirect from='*' to='/login' />
          </div>
        </Router>
      </AuthProvider>
  );
};

export default App;
