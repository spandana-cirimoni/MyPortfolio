import React from 'react';
import './Banner.css'

const Social = () =>{
    return(
        <div className="home__social">
            <a href="https://www.linkedin.com/in/cirimoni-spandana" 
            className="home__social-icon" target='_blank' rel="noreferrer">
                <i className='uil uil-linkedin-alt'></i>
            </a>

            <a href="mailto:spandana.cirimonirao@gmail.com" 
            className="home__social-icon" target='_blank' rel="noreferrer">
                <i className="uil uil-envelope-alt"></i>
            </a>

            <a href="https://github.com/spandana-cirimoni" 
            className="home__social-icon" target='_blank' rel="noreferrer">
                <i className='uil uil-github-alt'></i>
            </a>
        </div>
    )
}

export default Social