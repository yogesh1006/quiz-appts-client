import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signupHandler = async () => {
    try {
      const res = await axios.post(
        "https://quiz--server.herokuapp.com/register",
        { name, email, password }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="form">
      <h1>Signup</h1>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          placeholder="Enter Name"
          id="name"
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          placeholder="Enter email"
          id="email"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter password"
          id="password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
      </div>
      <button className="btn" onClick={signupHandler}>
        Signup
      </button>
      <div className="register-link">
        Already registered?
        <Link to="/login" style={{ color: "black", fontWeight: "bold" }}>
           Signin
        </Link>
      </div>
    </form>
  );
};

export default Signup;
