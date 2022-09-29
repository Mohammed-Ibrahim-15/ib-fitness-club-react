import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <FontAwesomeIcon icon={faHandBackFist} size="3x" />
                <h1>IB-Fitness-Club</h1>
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;