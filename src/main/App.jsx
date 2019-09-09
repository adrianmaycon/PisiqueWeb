import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import { AuthProvider } from "../Auth";
import PrivateRoute from "../PrivateRoute";
import './index.css'

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
