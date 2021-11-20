import React from 'react';
import logo from '../assets/movieIcon.svg'

export default function Menu() {
    return (
        <>
        <div className="container logo" >
            <img src={logo} alt="logo"/>
            <span>movie wishlist</span>
        </div>
        <div className="menu-line"></div>
        </>
    )
}
