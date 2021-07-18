import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// import {API} from "../../../backend"
import { useAuth } from "../../contexts/Auth/authContext";
import "./login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setAuth } = useAuth();
  const history = useHistory();

  const loginHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
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
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter password"
          id="password"
          name="password"
          type="password"
          className="input-field"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn" onClick={loginHandler}>
        Login
      </button>
      <div className="register-link">Don't have Account? <Link to="/register" style={{color:"black",fontWeight:"bold"}}>Signup</Link></div>
    </form>
  );
};

export default Login;
