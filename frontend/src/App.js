import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ContactScreen from './screens/ContactScreen';


function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
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
                <Link to="/signin">Sign In</Link>
            </div>
        </header> 
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/" component={HomeScreen} ></Route>
          <Route path="/contact" component={ContactScreen}></Route>
           
        </main>


        <footer className=" row center ">&copy; 2021. Project | Copyright All rights reserved.</footer>
    </div>
       </BrowserRouter>
  );
}

export default App;
