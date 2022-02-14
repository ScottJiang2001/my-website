import React, { useState } from 'react'
import "./SideDrawer.scss"

const SideDrawer = props => {
    return (
        <div className={props.show ? "dropDown" : "dropDown hide"}>
                <a>About</a>
                <a>Experience</a>
                <a>Projects</a>
                <a>Contact</a>
                <a>Resume</a>
        </div>
    )
}

export default SideDrawer