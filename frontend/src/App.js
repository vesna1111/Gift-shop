import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ContactScreen from './screens/ContactScreen';


function App() {
  return (
    <BrowserRouter> 
    <div className=" grid-container ">
        <header className="row ">
            <div>
                <a className="brand " href="/">project</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header> 
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/" component={HomeScreen} exact></Route>
          <Route path="/contact" component={ContactScreen}></Route>
           
        </main>


        <footer className=" row center ">&copy; 2021. Project | Copyright All rights reserved.</footer>
    </div>
       </BrowserRouter>
  );
}

export default App;
