import React from 'react'
import '../css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <div id='footerWrapper'>
            <h1>In Motion Dance Studio</h1>
            <p>3535 E. Ranches Parkway, suite E, Eagle Mountain, UT 84005</p>
            <p>#801-850-1497</p>
            <div className="footer-icon"><a href="https://www.facebook.com/In-Motion-Dance-Studio-223602444325523/"><FontAwesomeIcon icon={faFacebook} size="2x" onClick="https://www.facebook.com/In-Motion-Dance-Studio-223602444325523/"></FontAwesomeIcon></a></div>
        </div>
    )
}
