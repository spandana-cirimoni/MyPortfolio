import  {Header}  from './Components/Header/Header';
import {Banner} from './Components/Home/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { About } from './Components/About/About';
import { Skills } from './Components/Skills/Skills';
import { Qualifications } from './Components/Qualifications/Qualifications';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { Testimonials } from './Components/Testimonials/Testimonials';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Banner/>
      <About/>
      <Qualifications/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
