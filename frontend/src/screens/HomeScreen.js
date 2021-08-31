import React, { useEffect } from 'react';

import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

 function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (<React.Fragment>
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center"style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + 'images/backgroundcolor.jpg'})` 
}}>
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
            <div class="global ">


                <div class="row ">
                    <div class="col-md-6 col-md-3 ">
                        <h6>The Project</h6>
                        <p>Our aim is to become the leading online fast fashion brand and empower everyone's dream.</p>
                    </div>

                    <div class="col-sm-6 col-md-2 ">
                        <h6>Services</h6>
                        <ul>

                            <li><a href="paymentMethod.html">Payment Methods</a> </li>
                            <li><a href="returns.html">Returns</a> </li>
                            <li><a href="sizeGuides.html">Size and Fit Guides</a> </li>
                        </ul>
                    </div>

                    <div class="col-sm-6 col-md-2 ">
                        <h6>About</h6>
                        <ul>
                            <li><a href="about.html">Our Story</a> </li>
                            <li><a href="careers.html">Careers</a> </li>
                            <li><a href="contact.html ">Contact us</a> </li>
                        </ul>
                    </div>

                    <div class="col-sm-6 col-md-2 ">
                        <h6>Legal</h6>
                        <ul>
                            <li><a href="privacyPolicy.html">Privacy Policy</a> </li>
                            <li><a href="cookiesPolicy.html">Cookies Policy</a> </li>
                            <li><a href="termsConditions.html">Terms and Conditions</a> </li>

                        </ul>
                    </div>

                    <div class="social ">
                        <h6 class="center ">Follow us</h6>
                        <a href="https://www.facebook.com/FabNetStudio/ "><i class="fa fa-facebook "></i> </a>
                        <a href="https://twitter.com/mismatchit "><i class="fa fa-twitter "></i> </a>
                        <a href="https://www.snapchat.com/add/fabnetstudio "><i class="fa fa-snapchat-ghost "></i> </a>
                        <a href="https://www.instagram.com/fabnetstudio/?hl=en "><i class="fa fa-instagram "></i> </a>
                        <a href="# "><i class="fa fa-google-plus "></i> </a>
                    </div>


                </div>
     
</div>
    </React.Fragment>);
}
export default HomeScreen;