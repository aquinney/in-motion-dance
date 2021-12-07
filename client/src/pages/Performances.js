import React from 'react'
import '../css/performances.css';
import { Helmet } from 'react-helmet';

export default function Schedule() {
    return (
        <div className="performances-content">
            <Helmet>
                <title>In Motion Dance | Performances &#38; Recitals</title>
            </Helmet>
            <h1> Performances &#38; Recitals </h1>
            <p id="performances-topNote">All performances are optional.  Since most dancers do perform, if you choose not to participate 
                you are required to fill out an opt out form.</p><br/>
            <div className="performances-main">
                <h2>Small Performances</h2>
                <p><strong>Pony Express Days Talent Show</strong> - This performance is at the end of the 1st week in June (June 2nd, 3rd 
                    or 4th, 2022): It will be held outside at the Pony Express Days Carnival. No fee is required, we use 
                    costumes &#38; choreography from the June Recital. </p>
                <h2>Large Performances</h2>
                <p><strong>Winter Showcase:</strong> - (Younger classes) We hold an Open House holiday performance on December 4th, 2021 
                in the evening (time TBA) at Vista Heights Middle School.  Those invited to perform at the Festival of Trees (info below) 
                will not perform in this Winter Showcase.  Costume &#38; Participation fee required.</p><br/><br/>

                <p><strong>Festival of Trees</strong> - (Dec 4th, 2021: call time is 10:45 am): A fundraising event for Primary Children’s 
                Hospital, held in the South Towne Expo Center in Sandy.  Some older classes will be invited to perform, but we do not have
                 a performance date at this time. Those invited to perform in the Festival of Trees will not perform in the Winter Showcase. 
                 Requires costume fee ($30-$55) and entrance fee for spectators.</p><br/><br/>

                 <p><strong>End of Year Dance Recital</strong> - (June): Our End of the year dance recital will be in June (date 
                 TBD-dependent on school availability).  To participate in the recital, there are two fees that need to be paid by March 19th.
                   See below:</p><br/><br/>
            </div>
            <div className="performances-recitals">
                <h2>Recital Fees</h2>
                <p><strong>Costume fee: </strong></p>   
                <ul>
                        <li>$30-$55 fee per child for costumes (per class)</li>
                </ul><br/>
                <p><strong>Participation fee:</strong></p>
                <ul>
                    <li>1 child = $30</li>
                    <li>2 children = $50</li>
                    <li>3+ children = $60 (only 1 fee, even if they're in all 3 recitals)</li>
                </ul><br/>
                <p>If your child is in more than one class you may choose which ones to participate in for recital. All fees 
                    must be paid in full by March 19th.  If you are participating, you may pay by check or charge to your 
                    debit/credit card. We need the recital/costume fees paid early since this helps the teachers to begin 
                    ordering costumes. There are no other mandatory fees (like ticket sales, professional photographs, etc)
                     associated with recital.</p> 
            </div>
            <br/><br/><p id="performances-bottomNote"><i><u>Note:</u> We are charged a very high fee to lease out a school for the full day of the recitals and there 
            are other significant costs associated with putting on a recital at a school. This is the reason for the recital
             fee. By paying this fee, you are free to invite anybody you would like to watch your dancers perform (per current
              Covid rules) since there are not tickets required for admission.</i></p>            
        </div>
    )
}