import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
// import {API} from "../../../backend"
import { useAuth } from "../../contexts/Auth/authContext";
import "./login.css"

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setAuth } = useAuth();
  const history = useHistory();

  const loginHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      console.log(res);
      setAuth(res.data.data);
      localStorage.setItem("auth",JSON.stringify(res.data.data.token))
      history.push("/");
      toast.success(res.data.message)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          placeholder=""
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          placeholder=""
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn" onClick={loginHandler}>
        Login
      </button>
    </form>
  );
};

export default Login;
