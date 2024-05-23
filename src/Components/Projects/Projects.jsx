import './Projects.css';
import proj1 from '../../assets/Images/ExpenseTracker.png';
import proj2 from '../../assets/Images/New_Research.png';
import proj3 from '../../assets/Images/patterns.png';
import proj4 from '../../assets/Images/ORTP.png';
import proj5 from '../../assets/Images/CFRSV.png';



export const Projects = () =>{
    return(
        <section className="projects section" id="projects">
            <h2 className="section__title">
              <span className="word1">PROJECT </span> 
              <span className="word2">HIGHLIGHTS</span>
            </h2>
            <span className="section__subtitle"></span>
            
            <div className="project__container container">

                <div className="project__content even">
                    <div className='project-image'>
                        <img alt="default" src={proj1} /> 
                    </div>
                    <div className='project-info'>
                        <h3 className='project-title'>Spend Wise</h3>
                        <div className='project-description'>
                            <p>Developed an end-to-end expenses/budgeting application using React & React Router DOM, 
                                incorporating local storage to efficiently save and manage user data directly 
                                in the browser.</p>
                        </div>
                        <ul className='project-tech-list'>
                            <li>React</li>
                            <li>React Router DOM</li>
                            <li>Local Storage</li>
                        </ul>
                        <div className="project__social">
                            <a href="https://github.com/spandana-cirimoni/ExpenseTracker" 
                            className="project__social-icon" target='_blank' rel="noreferrer">
                                <i className='uil uil-github-alt'></i>
                            </a>
                            <a href="https://expense-tracker-spandana.netlify.app/" 
                            className="project__social-icon" target='_blank' rel="noreferrer">
                                <i class="uil uil-external-link-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project__content odd">
                    <div className='project-image'>
                        <img alt="default" src={proj2} /> 
                    </div>
                    <div className='project-info'>
                        <h3 className='project-title'>News Research Tool</h3>
                        <div className='project-description'>
                            Developed an end-to-end project leveraging LangChain, OpenAI API, and Streamlit to create a news research tool, enhancing the ability to conduct comprehensive research efficiently.
                            
                        </div>
                        <ul className='project-tech-list'>
                            <li>Python</li>
                            <li>Langchain</li>
                            <li>VectorDB - FAISS</li>
                            <li>GenerativeAI</li>
                            <li>React</li>
                            <li>LLM</li>
                        </ul>
                        <div className="project__social">
                            <a href="https://github.com/spandana-cirimoni" 
                            className="project__social-icon" target='_blank' rel="noreferrer">
                                <i className='uil uil-github-alt'></i>
                            </a>
                            {/*<a href="mailto:spandana.cirimonirao@gmail.com" 
                            className="project__social-icon" target='_blank' rel="noreferrer">
                                <i class="uil uil-external-link-alt"></i>
                            </a>*/}
                        </div>
                    </div>
                </div>

                <div className="project__content even">
                    <div className='project-image'>
                        <img alt="default" src={proj4} /> 
                    </div>
                    <div className='project-info'>
                        <h3 className='project-title'>Optimal Road Trip Planning</h3>
                        <div className='project-description'>
                            <p>Developed a route planning system using Genetic Algorithm to find optimal routes between 
                                source and destination visiting all the points in between on a road map within a time limit. </p>
                        </div>
                        <ul className='project-tech-list'>
                            <li>Python</li>
                            <li>Jupyter</li>
                            <li>Genetic Algorithm</li>
                        </ul>
                    </div>
                </div>

                <div className="project__content odd">
                    <div className='project-image'>
                        <img alt="default" src={proj3} /> 
                    </div>
                    <div className='project-info'>
                        <h3 className='project-title'>Online Store - A Java MVC</h3>
                        <div className='project-description'>
                            <p>A Java RMI-based online store with MVC architecture, 
                                integrating Application Control Patterns and design patterns like Command and Factory for enhanced functionality and secure user management. </p>
                        </div>
                        <ul className='project-tech-list'>
                            <li>Java</li>
                            <li>RMI</li>
                            <li>Command Pattern</li>
                            <li>Factory Pattern</li>
                        </ul>
                        <div className="project__social">
                            <a href="https://github.com/Supriya-cirimoni/JavaRMIOnlineStore" 
                            className="project__social-icon" target='_blank' rel="noreferrer">
                                <i className='uil uil-github-alt'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project__lastcontent even">
                    <div className='project-image'>
                        <img alt="default" src={proj5} /> 
                    </div>
                    <div className='project-info'>
                        <h3 className='project-title'>Online Social Voting</h3>
                        <div className='project-description'>
                            <p>Online Social Network that uses users’ social, group, and feedback data to predict user interests, leading to very accurate recommendations.
                            </p>
                        </div>
                        <ul className='project-tech-list'>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>JSP</li>
                            <li>MYSQL</li>
                            <li>Java</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}