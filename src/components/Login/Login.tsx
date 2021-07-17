import axios from "axios";
import React, { useState } from "react";
// import {API} from "../../../backend"
import {useAuth} from "../../contexts/Auth/authContext"

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password,setPassword] = useState<string>("")
   const {setAuth} = useAuth();

  const loginHandler=async () => {
       try {
           const res = await axios.post("http://localhost:8080/login",{email,password})
           console.log(res);
        setAuth(res.data.data)
       } catch (error) {
           console.log(error);
           
       }
  }
  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input placeholder="" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input placeholder="" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div>
          <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
