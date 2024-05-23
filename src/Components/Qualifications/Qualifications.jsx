import "./Qualifications.css";
import React,{useState} from "react";

export const Qualifications = () =>{

    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
      <section className="qualifications section" id="qualifications" >
          <h2 className="section__title">
              <span className="word1">QUALIFICATIONS </span>
            </h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? 
                        "qualification__button qualification__active button--flex" : 
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>

                    <div className={toggleState === 2 ? 
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}Experience
                    </div>
                </div>


                <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "} >
                        <div className="qualification__data" style={{textAlign:"right"}}>
                            <div>
                                <h3 className="qualification__title">Masters in Computer and Information Science</h3>
                                <span className="qualification__subtitle">Pudue School of Science - IUPUI</span>
                                 <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__icon"></i>2022 - 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Bachelors in Computer Science and Engineering</h3>
                                <span className="qualification__subtitle">Bhoj Reddy Engineering College for Women - JNTUH</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__icon"></i>2016 - 2020
                                </div>
                            </div>
                        </div>

                    </div> 

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "} >
                        <div className="qualification__data" style={{textAlign:"right"}}>
                            <div>
                                <h3 className="qualification__title">Graduate Teaching Assistant - Data Science</h3>
                                <span className="qualification__subtitle">Pudue School of Science - IUPUI</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__icon"></i>AUG 2023 - MAY 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Engineer</h3>
                                <span className="qualification__subtitle">Infor (India) Pvt Ltd</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__icon"></i>OCT 2020 - AUG 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data" style={{textAlign:"right"}}>
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Bhoj Reddy Engineering College for Women - JNTUH</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt qualification__icon"></i>MAY 2019 - MAR 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div> 

                </div>  
            </div>
      </section>
    )
}