import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth/authContext";
import "./header.css";

const Header: React.FC = () => {
  const { auth } = useAuth();

  return (
    <div className="header">
      <Link to="/">NeoQuiz</Link>
      {auth?.token ? (
        <Link to="/login">Scoreboard</Link>
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
