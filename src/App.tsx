import React from "react";
import Home from "./components/Home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
