import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/Auth/authContext";
import "./header.css";

const Header: React.FC = () => {
  const { auth, setAuth } = useAuth();
   console.log("header",auth);
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.clear();
    setAuth({
      token: "",
      user: {
        _id: "",
        name: "",
        email: "",
        gameScore: [
          {
            category: "",
            score: "",
            played_date: "",
          },
        ],
      },
    });
    history.push("/login");
  };

  return (
    <div className="header">
      <Link to="/" style={{color:"white",textDecoration:"none",fontSize:"1rem",fontWeight:"bold"}}>NeoQuiz</Link>
      {auth?.token ? (
        <div className="links">
          <Link to="/login">Scoreboard</Link>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      ) : (
        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/register">Signup</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
