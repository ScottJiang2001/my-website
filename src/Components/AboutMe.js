import React from "react";
import "./AboutMe.scss"
import UsersLogos from ".";
import { Skills } from "./Images/SkillsLogos";
import Header from "./Header";
import scottphoto from './Images/scottphoto.jpeg'

const AboutMe = () => {
    return (
        <div className="About">
            <Header Section="About Me" />
            <div className="descriptionAndPhoto">
                <div className="description">
                    <p>
                        Hi! My name’s Scott and I’m an undergraduate student studying electrical
                        engineering at UBC. I started learning web development right after my first year
                        of university before doing my first Hackathon, where I learned a ton about HTML/CSS and
                        Javascript.
                    </p>
                    <p>
                        So far, I’ve completed an internship at a <a href="https://tryknowhow.com/" target="_blank">startup</a> based in Calgary,
                        and now i’m working at <a href="https://legacy.smarttech.com/en/lumio" target="_blank">SMART Technologies</a> as a Software Engineer Intern.
                    </p>
                    <p>
                        These are some technologies I’ve worked with:
                    </p>
                    <UsersLogos users={Skills} />
                </div>
                <div className="Image">
                    <img src={scottphoto} />
                </div>
            </div>
        </div>
    )
}

export default AboutMe