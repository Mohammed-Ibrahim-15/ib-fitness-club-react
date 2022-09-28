import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>IB-Fitness-Club</h1>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;