import React from "react";
import './Skills.css';

export const Skills = () =>{
    return(
        <section className="skills section" id="skills">
            <h1 className="section__title">
              <span className="word1">TECHNICAL </span> 
              <span className="word2">SKILLS</span>
            </h1>
            <span className="section__subtitle">The skills, tool & technologies i use to bring your products to life:</span>
            
            <div className="skills__container ">
                <div className="skills__content">
                    <i className="uil uil-html5 skills-icon" ></i>
                    <h3 className="skills__title">PROGRAMMING<br/>LANGUAGES</h3>
                    <p className="skills__data">Java, C++, C#, Python,<br/>JavaScript, R</p>
                </div>

                <div className="skills__content">
                    <i className="uil uil-browser skills-icon"></i>
                    <h3 className="skills__title">WEB<br/>TECHNOLOGIES</h3>
                    <p className="skills__data">React, Redux, Angular, HTML, CSS, Typescript<br/>Bootstrap, NodeJS, JSP, REST, MaterialUI</p>
                </div>

                <div className="skills__content">
                    <i className="uil uil-database skills-icon"></i>
                    <h3 className="skills__title">DATABASES &<br/>FRAMEWORKS</h3>
                    <p className="skills__data">DB: MySQL, MS SQL, MongoDB
                        <br/>
                        Frameworks: Spring, Spring Boot, ASP.NET</p>
                </div>


                <div className="skills__content">
                    <i className="uil uil-setting skills-icon"></i>
                    <h3 className="skills__title">OPERATING SYSTEMS <br/>& OTHERS</h3>
                    <p className="skills__data">OS: Windows, Mac, Linux<br/>
                    Others: AWS, S3, Lambda, GIT, LLMs, GenerativeAI
                    </p>
                </div>
            </div>
        </section>
    )
}