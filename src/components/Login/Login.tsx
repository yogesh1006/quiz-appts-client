import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// import {API} from "../../../backend"
import { useAuth } from "../../contexts/Auth/authContext";
import "./login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("yogesh123@gmail.com");
  const [password, setPassword] = useState<string>("1234567");
  const [isLoading,setLoading] = useState(false);
  const { setAuth } = useAuth();
  const history = useHistory();

  const loginHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("https://quiz--server.herokuapp.com/login", {
        email,
        password,
      });
      console.log(res);
      setAuth(res.data.data);
      localStorage.setItem(
        "auth",
        JSON.stringify({
          username: res.data.data.name,
          token: res.data.data.token,
        })
      );
      setLoading(false);
      history.push("/");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="form">
      <h1>Signin</h1>
      <div className="field">
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          placeholder="Enter email"
          id="email"
          name="email"
          className="input-field"
          type="email"
          size={40}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label><br/>
        <input
          placeholder="Enter password"
          id="password"
          name="password"
          type="password"
          className="input-field"
          size={40}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn" onClick={loginHandler}>
        {isLoading ? "Loading..." : "Login"}
      </button>
      <div className="register-link">Don't have Account? <Link to="/register" style={{color:"black",fontWeight:"bold"}}>Signup</Link></div>
    </form>
  );
};

export default Login;
