import React from "react";
import Logo from "../Logo/logo";
import './header.css'

export default () => {

    return <header>
        <Logo/>
        <div className="logo" />
        <input type="search" />

        <nav>
            <a href="">Favorites</a>
            <a href="">Card</a>
            <a href="">Profile</a>
        </nav>

    </header>
    
}