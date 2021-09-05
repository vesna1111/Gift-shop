import React from 'react';


function SizeGuide() {
    return (<div > 
        <div className="row top">
            <div className="col-2">
            <h1>Size and Fit Guides</h1>
            <p>* Measurements shown in the size guide refer to body measurements.</p>
               <img
                className="large"
                src="images/Sizes-Womens-Clothing-Size-Chart-2-1024x463.jpg"
                alt="slajder"
              ></img> 
            </div>
            <div className="col-2">
              <ul>
                <li>
                  <h2>HOW TO MEASURE</h2>
                </li>
                
                
                <li>        
                 <p>*This size chart is for reference purposes only.</p>
                </li>
                <li><img
                className="medium"
                src="images/sizeguide.jpg"
                alt="slajder"
              ></img> </li>
                
               
              </ul>
            </div>
        </div>
    </div> );

}
export default SizeGuide;