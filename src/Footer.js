import React from 'react'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        
        <div className='footer'>
        <p>Thomas Nicholson &copy; 2020
        <span className='right'>
            <a href='http://www.linkedin.com'><FontAwesomeIcon icon={faLinkedinIn} className='pad' size='2x'></FontAwesomeIcon></a>
            <a href='http://www.github.com'><FontAwesomeIcon icon={faGithub} className='pad' size='2x'></FontAwesomeIcon></a>
            <a href='http://www.linkedin.com'><FontAwesomeIcon icon={faEnvelope} className='pad' size='2x'></FontAwesomeIcon></a>
</span>
        </p>
        </div>
    )
}
