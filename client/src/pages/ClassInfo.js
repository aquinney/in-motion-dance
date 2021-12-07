import React from 'react'
import { Helmet } from 'react-helmet';
import '../css/class-info.css';
import {Link} from 'react-router-dom';

export default function ClassInfo() {
    return (
        <div className="classInfo-content">
            <Helmet>
                <title>In Motion Dance | Class Info</title>
            </Helmet>
            <h1> Class Information </h1>
            <p>Here you'll find any and all information you need for classes, performances, schedules, etc.</p><br/><br/>
            
            <p>Click <Link to="/performances">HERE</Link> for information on performances!</p>
            <p>Click <Link to="/rates">HERE</Link> for infomation on costs and rates!</p>
            <p>Click <Link to="/policy">HERE</Link> for information on our studio's policies and dress code!</p>
            <p>Click <Link to="/classbyage">HERE</Link> for information on our classes, catagorized by age for your convenience!</p>
            <p>Click <Link to="/fitness">HERE</Link> for information on our fitness program!</p>
            <p>Click <Link to="/schedule">HERE</Link> for a convenient overview of our studio's weekly schedule! </p>
            
        </div>
    )
}
