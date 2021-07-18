import Home from "./components/Home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import {Header,Login,Signup,Quiz } from "./components";
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
        <Route exact path="/quiz/:category" component={Quiz}></Route>
      </Switch>
    </div>
  );
}

export default App;
