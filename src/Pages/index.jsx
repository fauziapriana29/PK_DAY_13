import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import Student from "./Student/Student.jsx"
import Api from "./API/API.jsx";

const Index = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/student" component={Student} />
            <Route path="/api" component={Api} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Index;
