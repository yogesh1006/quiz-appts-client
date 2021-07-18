import Home from "./components/Home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import {Header,Login,Signup,Quiz } from "./components";
import {Toaster} from "react-hot-toast"
import PrivateRoute from "./PrivateRoute/PrivateRoute";


function App() {
  return (
    <div className="App">
      <Toaster/>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Signup}></Route>
        <PrivateRoute  path="/quiz/:category" component={Quiz}></PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
