import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Header:React.FC = () => {
    return (
        <div className="header">
            <h2>NeoQuiz</h2>
            <Link to="/login">Login</Link>            
        </div>
    )
}

export default Header
