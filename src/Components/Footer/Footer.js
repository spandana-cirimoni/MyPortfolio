import { Container, Row, Col } from "react-bootstrap";
import gitlogo from '../../assets/Images/github-logo.svg';
import Linkedinlogo from '../../assets/Images/linkedin.svg';
import homeLogo from '../../assets/Images/home-logo.svg';
import maillogo from '../../assets/Images/mail-logo.svg';
import './Footer.css';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <div className="social-icon">
            <a href="#home"><img src={homeLogo} alt="Icon" /></a>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/spandana-cirimoni" target="_blank" rel="noreferrer"><img src={gitlogo} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/cirimoni-spandana" target="_blank" rel="noreferrer"><img src={Linkedinlogo} alt="Icon" /></a>
              <a href="mailto:spandana.cirimonirao@gmail.com"><img src={maillogo} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}