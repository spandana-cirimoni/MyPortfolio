import {useState,useEffect} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import anime from 'animejs/lib/anime.es.js';
import './Header.css';

export const Header = () =>  {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor);
    const anim = anime.timeline({
      loop: false,
      direction: 'alternate',
    });

    anim
      .add({
        targets: '#hexagon path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        duration: 2000,
        delay: function(el, i) { return i * 250 },
      })
      .add({
        targets: '#hexagon #B',
        duration: 1000,
        opacity: 1,
        easing: 'easeInOutQuart'
      });

    return () => {
      window.removeEventListener("scroll", changeHeaderColor);
    };
  }, []);

  const handleClick = () => setClick(!click);


  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
        <a href="index.html">
          <div className="logo">
            <svg className="svg__logo" id="hexagon" viewBox="0 0 100 100" fill="none" >
            <g>
            <g id="B" transform="translate(36, 33)" fill="#cf332b" style={{ opacity: 0 }} 
            font-family="system-ui,Calibre-Medium, Calibre,sans-serif" font-size="50" font-weight="400" 
            letter-spacing="4.16666603">
            <text>
              <tspan x="0.141666985" y="33">S</tspan>
            </text>
          </g>
        <path 
          stroke="#cf332b" 
          stroke-width="5" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      d="M 50, 5
         L 11, 27
         L 11, 72
         L 50, 95
         L 89, 73
         L 89, 28 z"
          />
      </g>
  </svg>
</div>
        </a>
          <ul className={click ? "nav-menu active" : "nav-menu" } onClick={handleClick}>
            <li>
              <a href="#home">
                <i className="uil uil-estate nav-icon"></i>HOME
              </a>
            </li>
            <li>
              <a href="#about" >
                <i className="uil uil-user nav-icon"></i>ABOUT
              </a>
            </li>
            <li>
              <a href="#skills" >
                <i className="uil uil-file-alt nav-icon"></i>SKILLS
              </a>
            </li>
            <li >
              <a href="#projects">
                <i className="uil uil-briefcase-alt nav-icon"></i>PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="uil uil-message nav-icon"></i>CONTACT
              </a>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={25} />) :(<FaBars size={25} />)}
          </div>
    </div>
  );
}