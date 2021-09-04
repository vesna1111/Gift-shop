import React from 'react';

function PaymentMethods() {
    return (<div>
        <div className="row top">
            <div className="col-2">
             <h1>Payment Methodis</h1>
             <h2>We accept a number of secure and convenient payment methods:</h2>
               <img
                className="smole"
                
                src="images/Checkout.jpg"
                alt="slajder"
              ></img> 
            </div>
            <div className="col-2">
              <ul>
                <li>
                  <h2>1. Pay With Paypal</h2>
                </li>
                <li>        
                <img
                className="smole"
                
                src="images/paypal1.png"
                alt="slajder"
              ></img></li>
              <li>        
                 
                 <p>When you place an order with Paypal you will be redirected to the PayPal payment page, where you can confirm your payment by logging in with your PayPal username and password.</p>
                 <p>f you are already a PayPal customer, you can log in with your user data and make a payment. Are you a newcomer to PayPal? You can then log in as a guest or open your PayPal account and confirm your payment.</p>
                 
                </li>   
                <li>
                  <h2>2. Pay With Paypal Credit</h2>
                </li>
               
              <li>        
                 <p>WPayPal Credit(Visa, MasterCard, Discover, American Express, etc.) For USA customers only at the moment.</p>
                </li>    
                <li>
                  <h2>3. Pay With Credit/Debit Card</h2>
                </li>
                <li>        
                <img
                className="smole"
                
                src="images/Credit-Card-Logos1.jpg"
                alt="slajder"
              ></img></li>
              <li>        
                 <p>We accept Visa, MasterCard, American Express ,Discover,Diners, Maestro,JCB,etc.Please note that ZAFUL does not collect your credit/debit card number or personal information when you make a payment. For questions regarding your transactions on our site, please consult your card-issuing bank for information..</p>
                </li>                
              </ul>
            </div>
        </div>
    </div>);
}
export default PaymentMethods;