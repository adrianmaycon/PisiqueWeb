import React from "react";

import Dashboard from '../Components/Dashboard/index.jsx';
import NavBar from '../Components/NavBar/index.jsx';

export default class Home extends React.Component {

  render() {
    return (
      <div className="List-Body">
        <NavBar />
        <Dashboard />
      </div>
    );
  }
}