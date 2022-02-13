import React, { useState } from 'react'
import "./NavBar.scss"
import { Squash as Hamburger } from 'hamburger-react'
import { useEffect } from 'react/cjs/react.production.min'

const NavBar = () => {
    const [compact, setCompact] = useState(window.innerWidth)
    const [showButtons, setShowButtons] = useState(false)
    const breakpoint = 830

    // useEffect(() => {
    //     const updateCompact = () => setCompact(window.innerWidth)
    //     window.addEventListener("resize", updateCompact)
    //     return () => window.removeEventListener("resize", updateCompact)
    // })

    return (
        <>
            <div className="Navigation">
                <div className="leftSide">
                    <a className="home"> scott jiang </a>
                </div>
                <div className="rightSide">
                    <div className="Options">
                        <div className="compact">
                            <Hamburger toggled={showButtons} toggle={setShowButtons} />
                        </div>
                        <a>About</a>
                        <a>Experience</a>
                        <a>Projects</a>
                        <a>Contact</a>
                        <a>Resume</a>
                    </div>
                </div>
            </div>
                <div className="dropDown">
                    <div className={showButtons ? "collapsibleShow" : "collapsible"}>
                        <a>About</a>
                        <a>Experience</a>
                        <a>Projects</a>
                        <a>Contact</a>
                        <a>Resume</a>
                    </div>
                </div>
        </>
    )
}

export default NavBar