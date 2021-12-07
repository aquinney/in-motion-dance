import React from 'react'
import '../css/rates.css';
import { Helmet } from 'react-helmet';

export default function Rates() {
    return (
        <div className="rates-content">
            <Helmet>
                <title>In Motion Dance | Rates</title>
            </Helmet>
            <h1>Our Rates</h1>
                <div className="rates-paymentMethods">
                    <h2>Payment Methods</h2>
                    <p><strong>1. Credit/Debit Cards</strong> (<i>preferred method</i>): Your card will be automatically charged the first day of the month. We accept VISA, Discover and MasterCard. (We do not accept American Express)
                       <br/><br/><strong>2. Checks/Cash:</strong>  September-December tuition is required by September 1st and January-June tuition is required by January 1st.  You may pre-pay the whole year with a 10% discount (cannot be combined with family discount).
                       <br/><br/><strong>LATE PAYMENTS</strong>– if over 3 weeks late, student may be asked to sit out until payment arrangements are made.</p>
                </div>
                <div className="rates-requiredFees">
                    <h2>Required Fees</h2>
                        <p><strong>1. Annual Registration Fee:</strong><br/><br/>
                            <ul>
                                <li>$35 for individuals – (1 more dancer add $20, 2 or more dancers add $10 each)</li>
                            </ul><br/><br/>
                        <strong>2. Monthly Tuition:</strong><br/><br/>
                            <ul>
                                <li>Pricing is the same no matter how many weeks of class are held in a month. Most months have 4 weeks, but some have 3-5. You are welcome to do make-ups for missed classes.</li>
                            </ul><br/>
                        </p>
                        <p><strong>3. Performance fees:</strong> (<i>recital/costume</i>)<br/><br/>                       
                            <ul>
                                <li>Costume Fee: $30-60 (depends on class) per child, per costume.</li><br/>
                                <li>Recital Fee: $30-60 (prices vary per # of dancers in family) No ticket selling required &#38; no limit on number of guests.</li>
                            </ul><br/> 
                        </p>
                        <p><strong>4. Additional monthly fees for Company students:</strong>
                            <ul>
                                <li>Ballet Company – $20</li><br/>
                                <li>Elite (Sr. Dance Company) – $25</li><br/>
                                <li>Eclipse (Jr. Dance Company) – $10. </li><br/>
                            </ul>
                        <i><u>Note:</u> Competition fees for Elite &#38; Eclipse Dance Companies are a separate fee.</i>
                        </p>
                </div>
                <div className="rates-studentHours">
                    <h2>Student Hours</h2>
                    <div className="rates-studentHourNote">
                        <p><i><u>Note:</u> These are total hours per individual student.</i></p><br/>
                    </div>
                    <ul>
                        <li>30 min/week - $36 per month</li>
                        <li>45 min/week - $46 per month</li>
                        <li>60 min/week - $51 per month</li>
                        <li>1 hr 15 min/week - $56 per month</li>
                        <li>1 hr 30 min/week - $66 per month</li>
                        <li>1 hr 45 min/week - $71 per month</li>
                        <li>2 hrs per week - $81 per month</li>
                        <li>2 hrs 30 min/week - $96 per month</li>
                        <li>2 hrs 45 min/week - $106 per month</li>
                        <li>3 hrs/week = $111 per month</li><br/>
                        <li>Unlimited class pass - $176 per month</li>
                        <p><i><u>Note:</u> (For 1 student only, up to 5.5 hours a week- $30/hour per add’l class)</i></p><br/>
                        <li>Family Pass - $206 per month </li>
                        <p><i><u>Note:</u> (up to 8 classes total), $256 (9-12 classes)</i></p><br/>
                        <li>Private Hourly Room Rental - $35 per hour</li>
                    </ul>
                </div>
                <div className="rates-familyDiscount">
                    <h2>Family Discount</h2>
                    <p>10% family discount for those with more than 1 student (Cannot be applied to exercise classes, adult punch passes or adult dance classes. Cannot be combined with 'pre-pay' discount).</p>
                </div>
                <div className="rates-adultClasses">
                    <h2>Adult Classes</h2>
                    <p><strong>Adult Fitness:</strong> High &#38; Low Fitness, Yoga &#38; Zumba (10 class punch pass $30)<br/><br/>
                    <strong>Adult Dance:</strong> Ballet, Hip Hop &#38; Tap ($25 monthly tuition per dance style)</p>
                </div>
                <div className="rates-cancellation">
                    <h2>Cancellation</h2>
                    <p>You <strong><u>MUST</u></strong> notify us in writing (email, phone or text) at least 2 weeks prior to the 1st day of the month for which you are cancelling enrollment.<br/>  
                    For example: cancelling for February requires notification by January 18th, etc.<br/><br/>
                        <ul>
                            <li>Notification after that date but before the 1st day of the next month = $10 cancellation fee.</li>
                            <li>Notification between the 1st and the 15th of the month = half tuition refund.</li> 
                            <li>Notification after the 15th = no tuition refund for the current month.</li>
                        </ul><br/><br/>
                        *Please notify us if you don’t receive a cancellation confirmation email or text from us.*      
                    </p>
                </div>            
        </div>
    )
}