import React from 'react';
import Product from '../components/Product';
import data from '../data';

function HomeScreen() {
    return (
        <div >
        <div className = "row center" > {
            data.products.map((product) => ( <
                Product key = { product.id }
                product = { product } > < /Product>
            ))
        } </div> {
             <div className="global ">


                            <div className="row ">
                                <div className="col-md-6 col-md-3 ">
                                    <h6>The Project</h6>
                                    <p>Our aim is to become the leading online fast fashion brand and empower everyone's dream.</p>
                                </div>
                                    <div className="col-sm-6 col-md-2 ">
                                    <h6>About</h6>
                                    <ul>
                                        <li><a href="about.html">Our Story</a> </li>
                                        <li><a href="careers.html">Careers</a> </li>
                                        <li><a href="/contact">Contact us</a> </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-md-2 ">
                                    <h6>Services</h6>
                                    <ul>

                                        <li><a href="paymentMethod.html">Payment Methods</a> </li>
                                        <li><a href="returns.html">Returns</a> </li>
                                        <li><a href="sizeGuides.html">Size and Fit Guides</a> </li>
                                    </ul>
                                </div>

                                

                                <div className="col-sm-6 col-md-2 ">
                                    <h6>Legal</h6>
                                    <ul>
                                        <li><a href="privacyPolicy.html">Privacy Policy</a> </li>
                                        <li><a href="cookiesPolicy.html">Cookies Policy</a> </li>
                                        <li><a href="termsConditions.html">Terms and Conditions</a> </li>

                                    </ul>
                                </div>

                                <div className="social ">
                                    <h6 className="center ">Follow us</h6>
                                    <a href="https://www.facebook.com/FabNetStudio/ "><i className="fa fa-facebook "></i> </a>
                                    <a href="https://twitter.com/mismatchit "><i className="fa fa-twitter "></i> </a>
                                    <a href="https://www.snapchat.com/add/fabnetstudio "><i className="fa fa-snapchat-ghost "></i> </a>
                                    <a href="https://www.instagram.com/fabnetstudio/?hl=en "><i className="fa fa-instagram "></i> </a>
                                    <a href="# "><i className="fa fa-google-plus "></i> </a>
                                </div>


                            </div>

                      </div> 
        } <
        /div>

    );
}
export default HomeScreen;