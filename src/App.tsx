import Home from "./components/Home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import {Header,Login,Signup,Quiz } from "./components";
import {Toaster} from "react-hot-toast"
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import FinalScore from "./components/Quiz/FinalScore";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Toaster/>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Signup}></Route>
        <Route path="/score/:category/:finalScore" component={FinalScore}></Route>
        <PrivateRoute  path="/quiz/:category" component={Quiz}></PrivateRoute>
        <PrivateRoute path="/scoreboard" component={Scoreboard}></PrivateRoute>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
