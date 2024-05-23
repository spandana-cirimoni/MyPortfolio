import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
        <a href="index.html">
          <div className="footer__logo">
            <svg className="footer__svg_logo" id="hexagon" viewBox="0 0 100 100" fill="none" >
            <g>
            <g id="B" transform="translate(36, 33)" fill="#ec5b53" style={{ opacity: 0 }} 
            font-family="system-ui,Calibre-Medium, Calibre,sans-serif" font-size="50" font-weight="400" 
            letter-spacing="4.16666603">
            <text>
              <tspan x="0.141666985" y="33">S</tspan>
            </text>
          </g>
        <path 
          stroke="#ec5b53" 
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
        <h1 className="footer__title">Spandana Cirimoni</h1>
        <ul className="footer__social">
          <li>
            <a href="https://www.linkedin.com/in/cirimoni-spandana" 
            className="footer__social-link" target='_blank' rel="noreferrer">
              <i className='bx bxl-linkedin-square' ></i>
            </a>
        </li>

          <li>
          <a href="https://www.instagram.com/spandana_cirimoni/" 
            className="footer__social-link" target='_blank' rel="noreferrer">
                <i className="bx bxl-instagram-alt" ></i>
          </a>          
          </li>

          <li>
          <a href="https://github.com/spandana-cirimoni" 
            className="footer__social-link" target='_blank' rel="noreferrer">
                <i className='bx bxl-github' ></i>
          </a>
        </li>
        </ul>
        </div>
        <div className="footer__copy">
          &#169; Copyright 2023. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}