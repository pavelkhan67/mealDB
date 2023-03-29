import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav'>
            <h4 style={{paddingLeft:"50px"}}>MealDB</h4>
            <div style={{paddingRight:"50px"}}>
                <a href="/home">home</a>
                <a href="/about">about</a>
                <a href="/meals">meals</a>
                <a href="/login">login</a>
            </div>
        </nav>
    );
};

export default Header;