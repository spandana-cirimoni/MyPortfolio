import './Contact.css';

export const Contact = () =>{
    return(
       <section className="contact section" id="contact">
            <h1 className="section__title">
              <span className="word1">CONTACT </span> 
              <span className="word2">ME</span>
            </h1>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container grid">
                <div className="contact__info">
                  <div className="contact__card">
                  <i className="bx bxs-envelope contact__card-icon"></i>
                  <h3 className="contact__card-title">EMAIL</h3>
                  <span className="contact__card-data">spandana.cirimonirao@gmail.com</span>
                  </div>

                  <div className="contact__card">
                  <i className="bx bxs-phone contact__card-icon"></i>
                  <h3 className="contact__card-title">Phone Number</h3>
                  <span className="contact__card-data">+1 317-720-4330</span>
                  </div>

                  <div className="contact__card">
                  <i className="bx bxs-map contact__card-icon"></i>
                  <h3 className="contact__card-title">Address</h3>
                  <span className="contact__card-data">Indianapolis, Indiana, USA</span>
                  </div>
                </div>
              </div>
      </section>
    )
}