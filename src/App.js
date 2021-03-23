import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Link to="/login">登录也面</Link>
      <br />
      <Link to="/about">详情页面</Link>
      <br />
      <Link to="/other">其他页面</Link>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
