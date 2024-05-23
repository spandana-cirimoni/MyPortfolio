import { ArrowRightCircle } from 'react-bootstrap-icons';
import React,{useState,useEffect} from "react";
import './Banner.css';

const Data = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 50);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Full Stack Developer/>","Programmer/>","Web Developer/>"];
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

    return(
        <div className="home__data">
            <div className="heading__container">
                <h3 className='home__subtitle'>Hi, I am</h3>
                <h1 className='home__title' >Spandana Cirimoni</h1>
                <h3 className='home__subtitle'>&lt;{text}</h3>
                <h3 className='home__subtitle' style={{textAlign:'justify'}}>I speak fluent Java, React, SQL and Sarcasm.</h3>
            </div>
            <div className='home__button'>
              <a href="#projects" className='button button--flex'>Check out my projects! <ArrowRightCircle className="button__icon" size={30} /></a>
            </div>
          </div>
    )
}

export default Data