import React from "react";
import Home from "./components/Home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div className="App">
      <Toaster/>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Signup}></Route>
      </Switch>
    </div>
  );
}

export default App;
