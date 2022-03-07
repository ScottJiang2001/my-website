import React, { useState } from 'react'
import "./NavBar.scss"
import { Squash as Hamburger } from 'hamburger-react'
import { useEffect } from 'react/cjs/react.production.min'

const NavBar = props => {
    const [navBar, setNavBar] = useState(false)

    const changeNavBar = () => {
        if (window.scrollY >= 20) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeNavBar)

    return (
        <>
            <div className={navBar ? "Navigation scroll" : "Navigation"}>
                <div className="leftSide">
                    <a className="home"> scott 江 </a>
                </div>
                <div className="rightSide">
                    <div className="Options">
                        <div className="compact">
                            <Hamburger toggled={props.menu} onToggle = {() => props.showMenu()} />
                        </div>
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                        <a href="#resume">Resume</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar