import React from "react";
import "./AboutMe.scss"
import UsersLogos from ".";
import { Skills } from "./Images/SkillsLogos";

const AboutMe = () => {
    return (
        <div className = "About">
            <p> About Me </p>
            <UsersLogos users={Skills}/>
        </div>
    )
}

export default AboutMe