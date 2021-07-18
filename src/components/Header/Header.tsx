import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/Auth/authContext";
import "./header.css";

const Header: React.FC = () => {
  const { auth } = useAuth();
   console.log("header",auth);
   const history=useHistory()

   const logoutHandler =() => {
     localStorage.clear();
      history.push('/login')
   }
   
  return (
    <div className="header">
      <Link to="/">NeoQuiz</Link>
      {auth?.token ? (
        <div>
        <Link to="/login">Scoreboard</Link>
        <button onClick={logoutHandler}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Signup</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
