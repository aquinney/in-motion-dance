import React from 'react'
import { Helmet } from 'react-helmet';
import '../css/class-by-age.css';

export default function ClassbyAge() {
    return (
        <div className="classByAge-content">
            <Helmet>
                <title>In Motion Dance | Classes By Age</title>
            </Helmet>
            <h1>Classes by Age</h1>
            {/* This are the 18 month to 3 year old classes */}
            <div className="classAge-18mon-3yrs">
                <table>
                    <tr>
                        <th>Ages 18 mon - 3 years</th>
                    </tr>
                    <tr>
                        <td>MCT (Mini-combo/Tumb) FULL</td>
                        <td>Wednesday</td>
                        <td>10:45-11:15am</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td>MTumbling Tots (Ages 2-5) 2 Spots</td>
                        <td>Monday</td>
                        <td>10:30-11:15am</td>
                        <td>Maleah</td>
                    </tr>
                    <tr>
                        <td>Tumbling Tots (Ages 2-5) FULL</td>
                        <td>Tuesday</td>
                        <td>3:45-4:30 pm</td>
                        <td>Maren/Natalie</td>
                    </tr>
                </table>
            </div>
            {/* This are the 3 to 5 year old classes */}
            <div className="classAge-3-5yrs">
                <table>
                    <tr>
                        <th>Ages 3-5 years</th>
                    </tr>
                    <tr>
                        <td>BJT (Ballet/Jazz/Tumbling) FULL</td>
                        <td>Monday</td>
                        <td>9:45-10:30 am</td>
                        <td>Joy</td>
                    </tr>
                    <tr>
                        <td>BTT (Ballet/Tap/Tumbling) 2 spots</td>
                        <td>Monday</td>
                        <td>4:45-5:30 pm</td>
                        <td>Karena</td>
                    </tr>
                    <tr>
                        <td>BJT (Ballet/Jazz/Tumbling) FULL</td>
                        <td>Tuesday</td>
                        <td>10:00-10:45 am</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td>BTT (Ballet/Tap/Tumbling)</td>
                        <td>Tuesday</td>
                        <td>10:45-11:30 am</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td>Ballet/Jazz Almost full</td>
                        <td>Tuesday</td>
                        <td>3:00-3:45 pm</td>
                        <td>Zaiah</td>
                    </tr>
                    <tr>
                        <td>BTT (Ballet/Tap/Tumbling) FULL</td>
                        <td>Wednesday</td>
                        <td>10:00-10:45 am</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td>BTT (Ballet/Tap/Tumbling) 2 spots</td>
                        <td>Wednesday</td>
                        <td>11:15 am-12:00 pm</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td>BT+ (Ballet/Tumb/bonus styles) FULL</td>
                        <td>Thursday</td>
                        <td>10:00-11:00 am</td>
                        <td>Lee</td>
                    </tr>
                </table>
            </div>
            {/* This are the 5 to 7 year old classes */}
            <div className="classAge-5-7yrs">
                <table>
                    <tr>
                        <th>Ages 5-7 years</th>
                    </tr>
                    <tr>
                        <td>Int. Ballet/Tap/Tumbling FULL</td>
                        <td>Monday</td>
                        <td>5:30-6:15 pm</td>
                        <td>Karena</td>
                    </tr>
                    <tr>
                        <td>Contemp/Modern 1 &amp; 2 (Ages 5-11)</td>
                        <td>Tuesday</td>
                        <td>3:45-4:30 pm</td>
                        <td>Victoria</td>
                    </tr>
                    <tr>
                        <td>Tumbling 1 FULL</td>
                        <td>Tuesday</td>
                        <td>4:30-5:15 pm</td>
                        <td>Maren/Natalie</td>
                    </tr>
                    <tr>
                        <td>Tumbling 1 FULL</td>
                        <td>Tuesday</td>
                        <td>5:30-6:15 pm</td>
                        <td>Maleah</td>
                    </tr>
                    <tr>
                        <td>Ballet/Jazz 1 FULL</td>
                        <td>Wednesday</td>
                        <td>4:00-4:45 pm</td>
                        <td>Zaiah</td>
                    </tr>
                    <tr>
                        <td>Jazz/Hip Hop 1 FULL</td>
                        <td>Wednesday</td>
                        <td>4:45-5:30 pm</td>
                        <td>Zaiah</td>
                    </tr>
                    <tr>
                        <td>Ballet 1 FULL</td>
                        <td>Thursday</td>
                        <td>4:00-4:45 pm</td>
                        <td>McKenna</td>
                    </tr>
                    <tr>
                        <td>Break 1</td>
                        <td>Thursday</td>
                        <td>4:00-4:45 pm</td>
                        <td>Isaac/Nathan</td>
                    </tr>
                    <tr>
                        <td>MMA (Mixed Martial Arts) FULL</td>
                        <td>Friday</td>
                        <td>5:00-6:00 pm</td>
                        <td>Clorinda</td>
                    </tr>
                </table>
            </div>
            {/* This are the 8 to 11 year old classes */}
            <div className="classAge-8-11yrs">
                <table>
                    <tr>
                        <th>Ages 8-11 years</th>
                    </tr>
                    <tr>
                        <td>Jazz 2 Almost full</td>
                        <td>Monday</td>
                        <td>3:45-4:45 pm</td>
                        <td>Emma</td>
                    </tr>
                    <tr>
                        <td>Tumbling 2 FULL</td>
                        <td>Monday</td>
                        <td>4:15-5:15 pm</td>
                        <td>Maren/Natalie</td>
                    </tr>
                    <tr>
                        <td>Tap 2</td>
                        <td>Monday</td>
                        <td>6:15-7:00 pm</td>
                        <td>Karena</td>
                    </tr>
                    <tr>
                        <td>Tumbling 3/4 FULL</td>
                        <td>Tuesday</td>
                        <td>6:15-7:00 pm</td>
                        <td>Maleah</td>
                    </tr>
                    <tr>
                        <td>Ballet 3/4 (Ages 9+ or placement)</td>
                        <td>Wednesday</td>
                        <td>5:30-6:30 pm</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td>Hip Hop 2/3</td>
                        <td>Wednesday</td>
                        <td>6:30-7:30 pm</td>
                        <td>Olivia</td>
                    </tr>
                    <tr>
                        <td>Tap 3 (Approval required)</td>
                        <td>Wednesday</td>
                        <td>7:30-8:30 pm</td>
                        <td>Karena</td>
                    </tr>
                    <tr>
                        <td>Ballet 2 FULL</td>
                        <td>Thursday</td>
                        <td>4:45-5:45 pm</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td>Break 2</td>
                        <td>Thursday</td>
                        <td>4:45-5:45 pm</td>
                        <td>Nathan</td>
                    </tr>
                </table>
            </div>
            {/* This are the 12 to 17 year old classes */}
            <div className="classAge-12-17yrs">
                <table>
                    <tr>
                        <th>Ages 12-17 years</th>
                    </tr>
                    <tr>
                        <td>Advanced Tumbling (Approval required)</td>
                        <td>Monday</td>
                        <td>5:45-7:15 pm</td>
                        <td>Maren/Natalie</td>
                    </tr>
                    <tr>
                        <td>Ballet 6 (Adv No Pointe) (Approval required)</td>
                        <td>Monday</td>
                        <td>7:00-8:20 pm</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td>Adult/Teen Tap</td>
                        <td>Monday</td>
                        <td>7:20-8:20 pm</td>
                        <td>Karena</td>
                    </tr>
                    <tr>
                        <td>Ballet 7/8 (Int/Adv Pointe)</td>
                        <td>Tuesday</td>
                        <td>4:30-6:00 pm</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td>Adult Ballet</td>
                        <td>Tuesday</td>
                        <td>6:00-7:00 pm</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td>Adult Hip Hop</td>
                        <td>Tuesday</td>
                        <td>7:00-7:45 pm</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td>Adult/Teen MMA (Mixed Martial Arts)</td>
                        <td>Tuesday</td>
                        <td>7:15-8:15 pm</td>
                        <td>Clorinda</td>
                    </tr>
                    <tr>
                        <td>Jazz Company (Try-out/fees required)</td>
                        <td>Wed/Friday</td>
                        <td>3:00-4:30 pm</td>
                        <td>Wendy</td>
                    </tr>
                    <tr>
                        <td>Jr. Company (Try-out/fees required)</td>
                        <td>Wednesday</td>
                        <td>4:30-5:30 pm</td>
                        <td>Emma</td>
                    </tr>
                    <tr>
                        <td>Jazz 3</td>
                        <td>Wednesday</td>
                        <td>5:30-6:30 pm</td>
                        <td>Emma</td>
                    </tr>
                    <tr>
                        <td>Ballet 5 (Approval required)</td>
                        <td>Wednesday</td>
                        <td>6:30-7:30 pm</td>
                        <td>Lee</td>
                    </tr>
                    <tr>
                        <td>Hip Hop 4/5</td>
                        <td>Wednesday</td>
                        <td>7:30-8:30 pm</td>
                        <td>Olivia</td>
                    </tr>
                    <tr>
                        <td>Ballet 7/8 (Int/Adv Pointe)</td>
                        <td>Thursday</td>
                        <td>5:45-7:15 pm</td>
                        <td>Wendy</td>
                    </tr>
                    <tr>
                        <td>Advanced Cont/Modern (Approval required)</td>
                        <td>Thursday</td>
                        <td>6:45-7:45 pm</td>
                        <td>Nathan</td>
                    </tr>
                </table>
            </div>                                        
        </div>
    )
}