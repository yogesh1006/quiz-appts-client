import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useHistory } from "react-router";
import "./signup.css";

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading,setLoading] = useState(false);

  const history = useHistory()

  const signupHandler = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "https://quiz--server.herokuapp.com/register",
        { name, email, password }
      );
      console.log(res);
      setLoading(false);
      history.push("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="form">
      <h1>Signup</h1>
      <div className="field">
        <label htmlFor="name">Name</label><br/>
        <input
          placeholder="Enter Name"
          id="name"
          name="name"
          type="text"
          size={40}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label><br/>
        <input
          placeholder="Enter email"
          id="email"
          name="email"
          type="email"
          size={40}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label><br/>
        <input
          placeholder="Enter password"
          id="password"
          name="password"
          type="password"
          size={40}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
      </div>
      <button className="btn" onClick={signupHandler}>
        {isLoading ? "Loading..." : "Signup"}
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
