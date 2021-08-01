import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/Auth/authContext";
import "./header.css";
import {FiLogOut} from 'react-icons/fi'

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
      <Link to="/" style={{color:"white",textDecoration:"none",fontSize:"1.5rem",fontWeight:"bold",letterSpacing:"3px"}}>Brainzee</Link>
      {auth?.token ? (
        <div className="links">
          <NavLink to="/scoreboard" style={{textDecoration:"none",color:"white",marginRight:"8px"}}>Scoreboard</NavLink>
          <FiLogOut onClick={logoutHandler} style={{cursor:"pointer"}}>Logout</FiLogOut>
        </div>
      ) : (
        <div className="links">
          <Link to="/login" style={{textDecoration:"none",color:"white",marginLeft:"5px"}}>Login</Link>
          <Link to="/register" style={{textDecoration:"none",color:"white",marginLeft:"5px"}}>Signup</Link>
        </div>
      )}
    </div>
  );
};

export default Header;
