import React from 'react'
import '../css/enroll.css';
import { Helmet } from 'react-helmet';
import { useState } from "react";

function Enroll() {
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
        <div className="enroll-body">
            <Helmet>
                <title>In Motion Dance | Enroll</title>
            </Helmet>
            <div className="enroll-container">
                <div className="enroll-title">Enrollment Form</div>
                <form onSubmit={submitEmail} id="enrollment-form">
                            <div className="enroll-user-details">
                                <div className="enroll-topleft-column">
                                    <div className="enroll-input-box">
                                        <span className="enroll-details">Parent Full Name</span>
                                        <input type="text" maxlength="100" name="name" onChange={handleStateChange} value={mailerState.name }placeholder="Enter your full name" required />
                                    </div>
                                    <div className="enroll-input-box">
                                        <span className="enroll-details">Parent Email</span>
                                        <input type="email" maxlength="150" name="email" onChange={handleStateChange} value={mailerState.email} placeholder="Enter your email address" required />
                                    </div>
                                    <div className="enroll-input-box">
                                        <span className="enroll-details">Parent Phone Number</span>
                                        <input type="text" maxlength="20" name="parentPhone" onChange={handleStateChange} value={mailerState.parentPhone} placeholder="Enter your phone number" required />
                                    </div>
                                </div>
                                <div className="enroll-bottomright-column">
                                    <div className="enroll-input-box">
                                        <span className="enroll-details">Student Full Name</span>
                                        <input type="text" maxlength="50" name="studentName" onChange={handleStateChange} value={mailerState.studentName} placeholder="Enter Student's Name" required />
                                    </div>
                                    <div className="enroll-input-box">
                                        <span className="enroll-details">Student Age</span>
                                        <input type="text" name="studentAge" onChange={handleStateChange} value={mailerState.studentAge} placeholder="Enter Student's Age" maxlength="3" required />
                                    </div>
                                    <div className="enroll-input-box">
                                        <span className="enroll-details">Desired class</span>
                                        <input type="text" maxlength="50" name="studentClass" onChange={handleStateChange} value={mailerState.studentClass} placeholder="Enter class and time" required />
                                    </div>
                                </div>
                            </div>
                            {/* Stuff that needs to be below the 2 columns in large view, or 1 column in mobile.*/}
                            <div className="enroll-comment-box">
                                    <span className="enroll-details">Comments</span>
                                    <textarea maxlength="500" name="message" onChange={handleStateChange} value={mailerState.message}></textarea>
                            </div>
                            {/* <div className="enroll-button">
                                    <input type="submit" value="Send" />
                            </div> */}
                            <button>Send Enrollment</button>
                                
                </form>
                <p className="enroll-info">If you're registering multiple students, please submit a new form for each student and include mention 
                                    of the other students in the comment box.<br/><br/>Please text or call (801)850-1497 with a credit/debit card. 
                                    We do not accept American Express.</p>
            </div>             
        </div>
    )
}

export default Enroll;
