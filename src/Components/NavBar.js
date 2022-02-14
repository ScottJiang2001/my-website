import React, { useState } from 'react'
import "./NavBar.scss"
import { Squash as Hamburger } from 'hamburger-react'
import { useEffect } from 'react/cjs/react.production.min'

const NavBar = props => {
    const [showButtons, setShowButtons] = useState(false)

    return (
        <>
            <div className="Navigation">
                <div className="leftSide">
                    <a className="home"> scottj </a>
                </div>
                <div className="rightSide">
                    <div className="Options">
                        <div className="compact">
                            <Hamburger toggled={showButtons} toggle={() => setShowButtons(!showButtons)} onToggle = {props.showMenu} />
                        </div>
                        <a>About</a>
                        <a>Experience</a>
                        <a>Projects</a>
                        <a>Contact</a>
                        <a>Resume</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar