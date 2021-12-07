import React from 'react'
import '../css/contact.css';
import { Helmet } from 'react-helmet';
import { useState } from "react";

// 4 imports to use our icons for the contact page (courtesy of FontAwesome)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { faCoffee } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    const [mailerState, setMailerState] = useState({
        name: "",
        email: "",
        parentPhone: "",
        studentName: "",
        studentAge: "",
        studentClass: "",
        message: "",
      });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

const submitEmail = async (e) => {
   e.preventDefault();
   console.log({ mailerState });
   const response = await fetch("http://localhost:5000/send", {
     method: "POST",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify({ mailerState }),
   })
     .then((res) => res.json())
     .then(async (res) => {
       const resData = await res;
       console.log(resData);
       if (resData.status === "success") {
         alert("Message Sent");
       } else if (resData.status === "fail") {
         alert("Message failed to send");
       }
     })
     .then(() => {
       setMailerState({
        name: "",
        email: "",
        parentPhone: "",
        studentName: "",
        studentAge: "",
        studentClass: "",
        message: "",
       });
     });
 };


    return (
        <section className="contact">
            <Helmet>
                <title>In Motion Dance | Contact Us</title>
            </Helmet>
            <div className="content">
            <h1>Contact Us</h1>
            <h2>Please fill out this form if you wish to contact our studio.</h2>
            </div>
            <div className="contact-container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon></div>
                        <div className="text">
                            <h3>Address (Studio)</h3>
                            <p>3535 E. Ranches Parkway, suite E<br/>Eagle Mountain, UT 84005 <br/></p>
                        </div>    
                    </div>
                    <div className="box">
                        <div className="icon"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></div>
                        <div className="text">
                            <h3>Address (Send correspondence)</h3>
                            <p>4299 E. Half Timber Way<br/>Eagle Mountain, UT 84005<br/></p>
                        </div>    
                    </div>
                    <div className="box">
                        <div className="icon"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></div>
                        <div className="text">
                            <h3>Phone Number</h3>
                            <p>801-850-1497</p>
                        </div>    
                    </div>    
                </div>
                <div className="contactForm">
                    <form onSubmit={submitEmail}>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name="name" onChange={handleStateChange} value={mailerState.name} required="required" />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="email" onChange={handleStateChange} value={mailerState.email} required="required" />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea name="message" onChange={handleStateChange} value={mailerState.message} required="required"></textarea>
                            <span>Type your message...</span>
                        </div>
                        {/* <div className="inputBox" id="contact-send-button">
                            <input type="submit" value="Send" />
                        </div> */}
                        <button>Send Message</button>
                    </form>
                </div>     
            </div>
        </section>
    )
}

export default Contact;
