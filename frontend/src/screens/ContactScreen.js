import React from 'react';


function ContactScreen() {
    return (
       <div> 
       <div className="row top"><section id="contact-section" style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + 'images/slajder2.jpg'})` 
}}>
        <div class="container">
        
            <h2>Contact Us</h2>
            <p>Email us and keep upto date with our latest news</p>
            <div class="contact-form">


                <div>
                    <i class="fa fa-map-marker"></i><span class="form-info">  23 Boulevard Prince Henri 1724 Luxembourg </span><br/>
                    <i class="fa fa-phone"> </i><span class="form-info">+(1) 360-824-502</span><br/>
                    <i class="fa fa-envelope"></i><span class="form-info">  theproject@gmail.com</span>
                </div>


                <div>
                    <form>
                        <input type="text" placeholder="Your Name" required/>
                        <input type="text" placeholder="Last Name"/><br/>
                        <input type="Email" placeholder="Email" required/><br/>
                        <input type="text" placeholder="Subject of this message"/><br/>
                        <textarea name="message" placeholder="Message" rows="5" required></textarea><br/>
                        <button class="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section></div></div>
    )
}
export default ContactScreen;