import "./Banner.css";
import Social from './Social';
import Data from './Data';
import ParticlesComponent from "../../particles";

export const Banner = () =>{
    return (
        <section className="home section" id="home" >
          {/*<div className="particles-background">
            <ParticlesComponent id="particle" />
    </div>*/}
          <div className="home__content container grid">
            
            <Social />

            <div className="home__image"></div>

            <Data />

          </div>
      </section>
    )
}