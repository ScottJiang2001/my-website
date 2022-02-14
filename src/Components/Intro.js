import React from "react";
import Typed from "react-typed";
import { skillStrings } from "./Images/SkillsLogos";
import "./Intro.scss"


const Intro = () => {
    return (
        <div className="Intro">
            <p> Hey! 👋  Thanks for stopping by. My name’s Scott and I’m an undergraduate student at UBC who loves anything related to
                <br />
                <Typed
                    strings={skillStrings}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                />
            </p>
        </div>
    )
}

export default Intro