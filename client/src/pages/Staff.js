import React from 'react'
import '../css/staff.css';
import coming_soon from '../images/coming_soon.jpg';
import lee from '../images/staff/LeAndrena-Hadlock.jpg'
import joy from '../images/staff/Joy-Quinney.jpg'
import karena from '../images/staff/Karena-Soderborg.jpg'
import wendy from '../images/staff/Wendy-Francis.jpg'
import nathan from '../images/staff/Nathan-Hadlock.jpg'
import natalie from '../images/staff/Natalie-Hadlock.jpg'
import maleah from '../images/staff/Maleah-Quinney.jpg'
import shanna from '../images/staff/Shanna-Davies.jpg'
import melisa from '../images/staff/Melisa-Chehda.jpg'
import zaiah from '../images/staff/Zaiah-Johnson.jpg'
import mckenna from '../images/staff/McKenna-Law.jpg'
import victoria from '../images/staff/Victoria-Seda.jpg'
import maren from '../images/staff/Maren-Hatch.jpg'
import olivia from '../images/staff/Olivia-Huish.jpg'
import emma from '../images/staff/Emma-Barnes.jpg'
import { Helmet } from 'react-helmet';


export default function Staff() {
    return (
        <div className="content">
            <Helmet>
                <title>In Motion Dance | Staff</title>
            </Helmet>
            <h1 className="staff-topText"> Meet our team! </h1>

            {/* LeAndrena Hadlock */}
            <div class="container">
                <div class="row" id="staff-firstRow">
                <div class="staff-column-33">
                        <img src={lee} alt='LeAndrena_Hadlock' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>LeAndrena Hadlock</h2>
                        <h3>Owner/Instructor, Director of En Pointe Ballet Company  – Misc Classes:</h3>
                        <p>Lee started dance training at 19. Within a year, she was a professional
                             dancer in LA. She trained in hip-hop, ballet/pointe, tap, clogging, 
                             jazz, tumbling and modern. She was a College cheerleader in California
                              and has taught for many studios, the LA &#38; Alpine School District, and
                               choreographed for school plays &#38; community organizations. She also 
                               trained at BYU (dance minor) where she was on Dancensemble (modern 
                               company) and earned a BS in Human Development. She also started a Hip-Hop
                                Crew at BYU, (Y-Girls).  She trained hip hop with Shane Sparks (SYTYCD 
                                Choreographer/America’s Best Dance Crew), Rick Robinson (Center Stage, Vibe)
                                 and Jaymz Tuialeva (SYTYCD/High School Musical/Dancing with the Stars). 
                                 She has danced in ballets such as: Swan Lake, Sleeping Beauty, Nutcracker,
                                  Alice in Wonderland and Giselle. She coached Rockwell High Dance Team and 
                                  has taught for over 30 years. She taught Zumba for 8 years and loves spending 
                                  time with her 5 children (ages 14 -23), who have all taught and danced at In Motion.</p>
                    </div>
                </div>
            </div>

            {/* Joy Quinney */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={joy} alt='Joy_Quinney' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Joy Quinney</h2>
                        <h3>Office Manager — BJT:</h3>
                        <p>Joy was born in Idaho and is a mother of 5 and grandma of 1 precious grandchild. This is Joy’s 4th year
                             teaching dance classes at In Motion.  She has coached at Olympus Gymnastics, worked in the education 
                             field and also the Radiology field. She enjoyed Cheer and Dance in high school and was also on the BYU-Idaho
                              Competition clogging team. She graduated from Idaho State with a Bachelor’s Degree in X-ray.  
                              Joy excels at keeping our studio organized and families well informed.</p>
                    </div>
                </div>
            </div>

            {/* Karena Soderborg */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={karena} alt='Karena_Soderborg' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Karena Soderborg</h2>
                        <h3>Tap 2 &#38; 3, Adult Tap, BTT Combo:</h3>
                        <p>Karena was born in Napa, California where she enrolled in tap and ballet classes at the age of three. 
                             Since then Karena has taken lessons in many other forms of dance and enjoys them all, but considers 
                             tap and clogging to be her favorites.  As an adult, Karena has danced in productions in both California 
                             and Utah.  Along with her love for dancing, she has a love for teaching.  She received her B.S. in 
                             Elementary Education from Brigham Young University and currently teaches in the Alpine School District.
                               She enjoys teaching at In Motion Dance Studio in her spare time.</p>
                    </div>
                </div>
            </div>

            {/* Wendy Francis */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={wendy} alt='Wendy_Francis' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Wendy Francis</h2>
                        <h3>Ballet 7/8, Pointe, Elite Dance Company:</h3>
                        <p>Wendy has been dancing since the age of 4. She has had extensive training in many forms of dance, including 
                            Jazz and Modern, but by the age of 11, she had developed a strong love of ballet. She trained at the Cachet 
                            School of Ballet and was a member of the Cachet Ballet Company, under the direction of JoAnn Loveland.  
                            Wendy has performed in several productions, including “The Little Match Girl”, “A Night with Gershwin”, 
                            “The Nutcracker”, “Paquita”, and “Swan Lake”, to name a few. She has been a ballet instructor for many years 
                            and loves teaching the art of dance. When she’s not dancing, Wendy enjoys spending time with her husband, 
                            Russ, and their 4 children. </p>
                    </div>
                </div>
            </div>

            {/* Nathan Hadlock */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={nathan} alt='Nathan_Hadlock' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Nathan Hadlock</h2>
                        <h3>Breakdance, Modern:</h3>
                        <p>This is Nathan’s fourth year of teaching, after being the breakdance class assistant for 1 year. He has been break-dancing 
                            since he was 5 and has also trained in hip hop, modern, ballet and ballroom. He was on the Westlake Ballroom Freshman Team 
                            for several years. He was awarded the “Best Performer” at Westlake’s End of Year Concert. He won 1st place several times 
                            at the Shakespeare competition as a team, but also 1st place as a member of a trio. He was a member of Frontier Dance 
                            Company and the award-winning Westlake Dance Company. His hobbies include piano, steel drum, painting, reading, &#38; gaming 
                            with friends.</p>
                    </div>
                </div>
            </div>

            {/* Natalie Hadlock */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={natalie} alt='Natalie_Hadlock' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Natalie Hadlock</h2>
                        <h3>Tumbling Tots, Tumbling 1, 2 &#38; Adv Tumbling:</h3>
                        <p>Natalie has been dancing since the age of 1 when her aunt snuck her into a 2 year old dance class that she taught. Since then she 
                            has danced all styles, but loves tumbling. She was a member of Frontier Dance Company.  For Gymnastics, she trained at Lehi Legacy 
                            Center, All American and Gym Cats.  Natalie loves teaching and gets a rush from seeing her students accomplish a skill. She is a 
                            sophomore at Cedar Valley and plays on the varsity soccer team. She feels like dance &#38; tumbling make her a better soccer player 
                            and loves teaching others to reach their goals. This is her 3rd year coaching at In Motion.</p>
                    </div>
                </div>
            </div>

            {/* Maren Hatch */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={maren} alt='Maren_Hatch' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Maren Hatch</h2>
                        <h3>Tumbling Tots, Tumbling 1, 2 &#38; Adv Tumbling:</h3>
                        <p>TBA</p>
                    </div>
                </div>
            </div>

            {/* Maleah Quinney */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={maleah} alt='Maleah_Quinney' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Maleah Quinney</h2>
                        <h3>Tumbling tots, Tumbling 1 &#38; Tumbling 3 &#38; 4:</h3>
                        <p>Maleah has been involved in Gymnastics for 8 years and is training Level 8 gymnastics at Olympus Gymnastics. Participating in gymnastics 
                            has taught her the true meaning of dedication as she has battled through injuries and surgery and still maintains her love for gymnastics
                             as she continues to persevere through it all.  Maleah assisted classes for 2 years and is in her 2nd year of teaching.  She enjoys 
                             bringing her love and knowledge of the sport to her own classes. Maleah has had the opportunity to train at the following facilities: 
                             Olympus Gymnastics, Jump Up Gymnastics and in Upstate New York (Albany area) at World Class Gymnastics and Stepping Star Gymnastics.</p>
                    </div>
                </div>
            </div>

            {/* McKenna Law */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={mckenna} alt='McKenna_Law' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>McKenna Law</h2>
                        <h3>Ballet 1:</h3>
                        <p>McKenna started dancing when she was 4. When she was young she wanted so badly to be a ballerina, so she has worked through the years to become 
                            a pointe dancer. Along the way she has also found a love for jazz, and lyrical dance and joined the IMDS Elite Company. She has loved working
                             with her amazing team the past 4 years! She was a member of the FMS Mustang movers in middle school and is now a member of Cedar Valley dance
                              company!</p>
                    </div>
                </div>
            </div>

            {/* Zaiah Johnson */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={zaiah} alt='Zaiah_Johnson' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Zaiah Johnson</h2>
                        <h3>Ballet/Jazz &#38; Jazz/Hip Hop:</h3>
                        <p>Zaiah has danced for 5 years and has been on Ballet Pointe and in the Ballet Company for 1 year.  She enjoys every minute of dancing and was 
                            able to dance the part of “White Cat” in the IMDS production of Sleeping Beauty.  She is a currently in the 10th grade at Utah Virtual Academy.
                              Zaiah enjoys singing, painting, sketching and writing; she is currently working on a book.  She has had the opportunity to teach multiple 
                              age groups during the last 2 summer sessions and is very excited to take on her own class this year.</p>
                    </div>
                </div>
            </div>

            {/* Victoria Seda */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={victoria} alt='Victoria_Seda' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Victoria Seda</h2>
                        <h3>Modern/Contemporary 1:</h3>
                        <p>Victoria is currently a 10th grader at Cedar Valley High School and teaches piano in her spare time.  Her love for dance began at the age of 3 
                            and she has been dancing ever since.  This is her 3rd year as a member of the IMDS Elite Dance Company and second year on pointe and as a 
                            member of the IMDS Ballet Company.  Victoria has assisted and taught various dance classes and is excited this year to help dancers improve 
                            their dance skills and abilities.</p>
                    </div>
                </div>
            </div>

            {/* Olivia Huish */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={olivia} alt='Olivia_Huish' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Olivia Huish</h2>
                        <h3>Hip Hop 2, 3, 4:</h3>
                        <p>TBA</p>
                    </div>
                </div>
            </div>

            {/* Emma Barnes */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={emma} alt='Emma_Barnes' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Emma Barnes</h2>
                        <h3>Jazz/Hip Hop 1, Jazz 2, 3 &#38; 4/5 (Eclipse Company):</h3>
                        <p>This is Emma’s second year teaching dance and first year teaching at In Motion Dance Studio.  She has been dancing from the age of 5 and has danced
                             at In Motion since she was 7 where her love for dance has continued to grow.  Emma is trained in Ballet, Jazz, Lyrical &#38; Hip Hop.  When she isn’t 
                             dancing, Emma loves to play the piano, read and write and is involved in two school clubs.</p>
                    </div>
                </div>
            </div>

            {/* Shanna Davies */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={shanna} alt='Shanna_Davies' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Shanna Davies</h2>
                        <h3>Zumba:</h3>
                        <p>began her dance training at age 5 in Long Beach, CA and continued to dance from ages 9 – 15 when she lived in Sydney, Australia with her family. 
                             She had many opportunities to perform at the Sydney Opera house, winning 1st place in a dance competition.  After moving to Utah she continued 
                             her study in Ballet, in roles including Clara in the Nutcracker, Snow Queen, Arabian dancer, Spanish dancer, and Waltz of the Flowers soloist. 
                             She attended BYU’s summer ballet workshop, and was on Alta High School’s Dance company for 3 years.  She was accepted into the intense ballet 
                             program at the University of Utah as a ballet major and studied there for 1 year.  After taking a break, she was introduced to Zumba and was 
                             instantly addicted (where she now gets her dance fix).  She enjoys sharing her love of dance &#38; fitness and keeps busy as a wife &#38; mother of 6.</p>
                    </div>
                </div>
            </div>

            {/* Melisa Chehda */}
            <div class="container">
                <div class="row">
                <div class="staff-column-33">
                        <img src={melisa} alt='Melisa_Chehda' width='80%'/>
                    </div>
                    <div class="staff-column-66">
                        <h2>Melisa Chehda</h2>
                        <h3>Zumba, High/Low Fitness:</h3>
                        <p>Melisa is a mother of 3 very active children. As a native of Argentina, Latin dancing has always been a part of her life. She has been a member of
                             different Latin Folklore groups and performed in a variety of venues such as BYU Fiesta and UVU Latin-American Celebration. Melisa found Zumba
                              and immediately knew it would help her stay fit and healthy to take care of her family. Every Zumba class feels like a party and with moves that
                               are easy to follow, everyone can have a great workout! She was certified in 2012, she enjoys the opportunity to meet amazing people from all 
                               walks of life and be a part of their health journey.</p>
                    </div>
                </div>
            </div>




        </div>
            
    )
}
