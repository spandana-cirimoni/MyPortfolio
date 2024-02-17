import React,{useState,useEffect} from "react"
import { Container, Row,Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/Images/self.jpeg';
import './Banner.css';

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 50);
    const [index, setIndex] = useState(1);
    const toRotate = [ "<Full Stack Developer/>", "<Web Developer/>", "<Coder/>" ];
    const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    return (
        <section className="banner" id="home" >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>Hi,</h1>
                        <h1>I'm Spandana</h1>
                        <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                        <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                   </Col>
                   <Col xs={12} md={6} xl={5}>
                         <div className="bg-image hover-zoom">
                           <img src={headerImg} alt="Header Img"/>
                         </div>
                   </Col>
                </Row>
            </Container>

        </section>
    )
}