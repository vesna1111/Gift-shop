import React from 'react';

function AboutUs() {
    return  (<div>
        <div className="row top">
            <div className="col-2">
               <img
                className="large"
                src="images/slajder4.jpg"
                alt="slajder"
              ></img> 
            </div>
            <div className="col-2">
              <ul>
                <li>
                  <h1>Our Story</h1>
                </li>
                
                
                <li>        
                 <p>We are one-stop online shop for today's most daring, exciting and edgy fashion apparel. Our affordable collections are all about redefining trends, design excellence and exceptional quality to satisfy the needs of every aspiring fashionista.</p>
                </li>
                <li><h2>OUR DESIGN</h2></li>
                <li>        
                 <p>Everything comes with a method. From the fashion trend research to the clothing design, we make our product as a creature of your emotions, your lifestyle, rather than a garment you wear.</p>
                </li>
                <li><h2>MANUFACTURING</h2></li>
                <li>        
                 <p>From the pattern making to the inks using, we aim at generating a green way of manufacturing. We embrace the feelings and thoughts of all people.</p>
                </li>
               
              </ul>
            </div>
        </div>
    </div>
        );
  }      

export default AboutUs;