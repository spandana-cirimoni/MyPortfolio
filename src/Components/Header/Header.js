import './Header.css';
import {useEffect, useState} from "react";
import {Container,Nav,Navbar} from 'react-bootstrap';
import gitlogo from '../../assets/Images/github-logo.svg';
import Linkedinlogo from '../../assets/Images/linkedin.svg';
import maillogo from '../../assets/Images/mail-logo.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";

export const Header = () =>  {
  const[activeLink, setActiveLink] = useState('home');
  const[isScrolled, setIsScrolled] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50){
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll",onScroll);
  },[]);

  return (
    <BrowserRouter>
      <Navbar expand="md" className={isScrolled ? "Scrolled" : ""}>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                <a href='https://www.linkedin.com/in/cirimoni-spandana' target="_blank" rel="noreferrer"><img src={Linkedinlogo} alt="Default Logo"/></a>
                <a href='https://github.com/spandana-cirimoni' target="_blank" rel="noreferrer"><img src={gitlogo} alt="Default Logo"/></a>
                <a href='mailto:spandana.cirimonirao@gmail.com'><img src={maillogo} alt="Default Logo"/></a>
                </div>
               <HashLink to='#connect'>
                  <button className="vvd"><span>Contact Me!</span></button>
                </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
}