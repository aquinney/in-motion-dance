import React from 'react'
import { Helmet } from 'react-helmet';
import '../css/fitness.css';
/* Import the image to be shown on the page */
import schedule from '../images/fitness-schedule-2021.jpg';

export default function Fitness() {
    return (
        <div className="fitness-content">
            <Helmet>
                <title>In Motion Dance | Fitness</title>
            </Helmet>
            <h1> In Motion Dance Studio Fitness </h1>
            <img src={schedule} alt='Fitness Schedule for 2021'/>            
        </div>
    )
}