import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ContactScreen from './screens/ContactScreen';
import PaymentMethods from './screens/PaymentMethods';
import SizeGuide from './screens/SizeGuide';
import PrivacyPolicy from './screens/PrivacyPolicy';
import TermsConditions from './screens/TermsConditions';
import AboutUs from './screens/AboutUs';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
 const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
  
    <BrowserRouter> 
    <div className=" grid-container ">
        <header className="row ">
            <div>
                <Link className="brand " to="/">project</Link>
            </div>
            <div>
                <Link to="/cart">Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}</Link>
             {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : ( 
              <Link to="/signin">Sign In</Link>
            )}
            </div>
        </header> 
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/" component={HomeScreen} ></Route>
          <Route path="/contact" component={ContactScreen}></Route>
          <Route path="/paymentmethods" component={PaymentMethods}></Route>
          <Route path="/sizeguide" component={SizeGuide}></Route>
          <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
          <Route path="/termsconditions" component={TermsConditions}></Route>
          <Route path="/about" component={AboutUs}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
        </main>


        <footer className=" row center ">&copy; 2021. Project | Copyright All rights reserved.</footer>
    </div>
       </BrowserRouter>
  );
}

export default App;
