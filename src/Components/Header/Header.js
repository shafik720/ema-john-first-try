import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <div>
                <a href="/home">Home</a>
                <a href="/home">Menu</a>
                <a href="/home">About Us</a>
                <a href="/home">Contact</a>
            </div>
        </div>
    );
};

export default Header;