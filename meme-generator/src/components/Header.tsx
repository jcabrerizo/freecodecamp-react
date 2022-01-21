import React from "react";
import HeaderImg from "../img/meme.png"
import './header.css'

export default function Header() {
    return (
        <header className="header--container">
            <img src={HeaderImg} className="header--image"/>
            <h1 className="header--title">Memeneator</h1>
            <span className="header--project">Project three</span>
        </header>
    )
}