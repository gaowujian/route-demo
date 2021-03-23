import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Link to="/">登录也面</Link>
      <br />
      <Link to="/home/about">详情页面</Link>
      <br />
      <Link to="/home/other">其他页面</Link>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
