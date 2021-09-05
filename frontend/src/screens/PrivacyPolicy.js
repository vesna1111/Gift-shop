import React  from 'react';
import MapContainer from '../components/Map';

import { Map, GoogleApiWrapper } from 'google-maps-react';


function PrivacyPolicy() {
    return ( <React.Fragment >< div >
     
          <div className="row top">
           <div className="col-2">
            <h1>Privacy Policy</h1>
           <h2>How do we protect your information?</h2>
            <p>You are responsible for your own username and password safety and security on our store. We recommend choosing a strong password and changing it frequently. Please do not use the same login details (email and password) across multiple websites.<br/>That said, we do implement a variety of security measures including offering the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential. After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.</p>
            <h2>Changes to our Privacy Policy</h2>
           <p>If we decide to change our privacy policy, we will post those changes on this page, and/or update the Privacy Policy modification date below.</p>
           <h2>Contact Us</h2>
           <p>If you would like to exercise one of your rights as set out above, or if you have a question or a complaint about this policy, the way your personal information is processed, please contact us.<br/>GDPR Project<br/> Bajina Basta BB,<br/>
           Mandići, <br/>Zaovine <br/>Srbija</p>  
           <h2>Find us on Google Map</h2>

            <MapContainer></MapContainer>
            </div>
           
             <div className="col-2">
              <ul>
        
            <li><h2>What information do we collect?</h2>
            <p>Personal information is information that can be used to directly or indirectly identify you. Personal information also includes anonymous information that is linked to information that can be used to directly or indirectly identify you. Personal information does not include information that has been irreversibly anonymized or aggregated so that it can no longer enable us, whether in combination with other information or otherwise, to identify you.<br/>We will only collect and use personal information which is necessary to comply with our legal obligations and to assist us to administer our business and provide you with the services you request.<br/>We collect information from you when you register on our site, place an order, subscribe to our newsletter or respond to a survey.<br/>When ordering or registering on our site, as appropriate, you may be asked to enter the following information: your name, e-mail address, mailing address and phone number. You may, however, also visit our site anonymously.</p></li>

            <li><h2>What do we use your information for?</h2>
            <p>We use the information you provide to us for the specific purposes for which you provide the information, as stated at the time of collection, and as otherwise permitted by law. The information we collect from you may be used in the following ways:<br/>● To personalize your experience (your information helps us to better respond to your individual needs)<br/>● To improve our website and your shopping experience (we continually strive to improve our website offerings based on the information and feedback we receive from you)<br/>● To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)<br/>● To process transactions including executing your payments and delivering the purchased products or services requested. To administer a contest, special promotion, survey, activity or other site feature<br/>● To send periodic emails. The email address you provide for order processing, may be used to send you important information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.</p></li>

<li><h2>Legal Basis for the Processing of Personal Information</h2>
            <p>If you are located in the European Economic Area (“EEA”), our processing of your personal information will be based on the following: To the extent that we obtain your consent for the processing of your personal information such processing will be justified pursuant to Article 6(1) lit. (a) of the General Data Protection Regulation (EU) 2016/679 (“GDPR”). If the processing of your personal information is necessary for the performance of a contract between you and us or for taking pre-contractual steps upon your request, such processing will be based on GDPR Article 6(1) lit. (b). Where the processing is necessary for us to comply with a legal obligation, we will process your personal information on basis of GDPR Article 6(1) lit. (c), and where the processing is necessary for the purposes of our legitimate interests, such processing will be made in accordance with GDPR Article 6(1) lit. (f).<br/>Please note that where you have given your consent to the processing of your personal information you may withdraw your consent, for example by sending an e-mail to  at any time which withdrawal will not affect the lawfulness of any processing previously made on basis of your consent.</p></li>


           

        
        
                      
             
                   
              </ul>
         
              
           </div>   
        </div> 
        < /div>
        </React.Fragment >
        );
    }
   

    export default PrivacyPolicy;