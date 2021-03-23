import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
function About() {
  return <Home>我是一个about的页面</Home>;
}
function Other() {
  return <Home>我是一个其他的页面</Home>;
}
function App() {
  return (
    <Router>
      <Link to="/">登录也面</Link>
      <br />
      <Link to="/about">详情页面</Link>
      <br />
      <Link to="/other">其他页面</Link>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/about" component={About} />
        <Route path="/other" component={Other} />
      </Switch>
    </Router>
  );
}

export default App;
