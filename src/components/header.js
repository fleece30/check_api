import React from 'react';
import './header.css';

const Header = () => {
    return(
        <div className="header">
            <div>
            <a href="#landing">umang.ai</a>
            </div>
            <div className="links">
                <a href="#landing">HOME</a>
                <a href="#applications">OTHER PRODUCTS</a>
                <a href="#chatbot">CHATBOT</a>
            </div>
        </div>
    )
}

export default Header;