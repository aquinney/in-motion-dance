import React from 'react'
import '../css/home.css';
import philosophy from '../images/philosophy.jpg';
import modesty from '../images/modesty.jpg';
import teachers from '../images/teachers.jpg';
import team from '../images/team.jpeg';
import { Helmet } from 'react-helmet';

export default function Home() {
    return (
        
        <div className="home-content">  
            <Helmet>
                <title>In Motion Dance | Home</title>
            </Helmet>

                <div id='welcomeMsg'>
                    <h1 id="pageTitle"> Welcome to our website!</h1>
                    <ul>
                    <li>We are still accepting fall registrations, please check our fall schedule link.</li>
                    </ul>
                </div>
                <div className="welcomeImg">
                        <img src={team} alt='team_picture'/>
                </div>
                {/* This are the three 'zig-zag' boxes. Philosophy, Modesty, and Teachers. */}
            <div class="home-container">
                <div class="home-row">
                    <div class="home-column-66">
                        <h2>Philosophy</h2>
                        <p>One of our main goals is to foster a fun dance environment that is warm and supportive. Our instructors 
                            teach a full range of classes for ages 18 months to adult. We also offer several adult fitness and dance
                             classes.<br/><br/>

                        Most dancers attend classes once a week to share in movement and their love of dance. For teen dancers who have
                         higher aspirations in mind, we have two competing dance companies and the option of additional technical classes
                          to help them achieve their dance goals.<br/><br/>

                        We have dancers on teams at Vista Heights, Frontier, Westlake (Drill, Alliance, Dance, and Ballroom), Cedar Valley
                         (Drill, Cheer and Dance) and Snow College. Dancers have also participated at BYU, UVU, Snow College and SALT 
                         choreography workshop and competition (1st place) in Salt Lake City.</p>
                    </div>
                    <div class="home-column-33">
                        <img src={philosophy} alt='philosophy_image'/>
                    </div>
                </div>
            </div>
            <div class="home-container">
                <div class="home-row">
                <div class="home-column-33">
                        <img src={modesty} alt='modesty_image'/>
                    </div>
                    <div class="home-column-66">
                    <h2>Modesty</h2>
                        <p>We carefully select music, costumes and choreography that are appropriate for a family community.</p>
                    </div>
                </div>
            </div>
            <div class="home-container">
                <div class="home-row">
                    <div class="home-column-66">
                    <h2>Teachers</h2>
                        <p>Our amazing instructors have danced professionally, studied dance in college or performed at the college level
                             and have many years experience in teaching dancers/gymnasts of all ages. Several have degrees and all of our
                              teen teachers assisted for years before teaching their own class. We attend conferences, workshops, educational
                               classes and reach out to others in our community for continued learning.</p>
                    </div>
                    <div class="home-column-33">
                        <img src={teachers} alt='teachers_image'/>
                    </div>
                </div>
            </div>
                {/* This is Events and Closures section (side by side in large view, and stack in mobile) */}
            <div class="card-row">
                <div class="card-column">
                    <div class="card">
                        <h2>Events</h2>
                        <ul>
                            <li>Our summer session will be 6 weeks (the week of June 28th – the week of August 2nd).  No registration and one tuition
                                 charge for the entire 6 week session.</li>
                            <li>Our Fall 2021-2022 Schedule is posted and we are accepting registrations.  Please check our “rates” page for your monthly
                                 tuition payment.  Our annual registration fee is a once a year charge which is due upon registration, tuition is a
                                  separate charge from our annual registration fee.  Tuition is charged on the first day of each month.</li>
                            <li>Fall/Spring classes go from September  – the middle of June.</li>
                        </ul>
                    </div>
                </div>
                <div class="card-column">
                    <div class="card">
                        <h2>Closures</h2>
                        <ul>
                            <li>Thanksgiving Break: November 24th – 27th, 2021 (Wed – Sun)</li>
                            <li>Christmas Break: Tuesday December 21st, 2021 – Sunday January 2nd, 2022</li>
                            <li>Martin Luther King Day: Monday January 17th, 2022</li>
                            <li>President’s Day: Monday February 21st, 2022</li>
                            <li>Spring Break: April 4th – 10th, 2022 (Mon – Sun)</li>
                            <li>Memorial Day: Monday May 30th, 2022</li>
                            <li>Last Day of Classes: Friday June 10th, 2022</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
