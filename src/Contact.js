import React from 'react'


import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

import { Container, Row, Col } from 'reactstrap';

import Footer from './Footer'


export default function Contact() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col><h2 className=' text-center success' id='contact'>Contact</h2></Col>
                </Row>
                <Row >
                    <Col md={{ size: 8, offset: 2 }} className='text-center align-items-center justify-content-center'>
                        <a href='https://www.linkedin.com/in/tom-nicholson-04429089/'><FontAwesomeIcon icon={faLinkedinIn} className='pad success contact-icons' size='6x'></FontAwesomeIcon></a>
                        <a href='https://github.com/TomNPython'><FontAwesomeIcon icon={faGithub} className='pad success contact-icons' size='6x'></FontAwesomeIcon></a>
                        <a href='mailto:thomasnicholsonux@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='pad success contact-icons' size='6x'></FontAwesomeIcon></a>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 8, offset: 2 }} className='text-center align-items-center justify-content-center contact-para'>
                        For any contracted or freelance work, feel free to get in touch with me via LinkedIn and I will get back to
                        you as soon as I can. </Col>
                </Row>
                <Row>
                    <Col md={{ size: 8, offset: 2 }} className='text-center align-items-center justify-content-center about-para'>
                        <a href="https://www.linkedin.com/in/tom-nicholson-04429089/">See my Account here.</a></Col>
                </Row>
                <Row>
                    <Col md={{ size: 8, offset: 2 }} className='text-center align-items-center justify-content-center contact-para'>
                        Alternatively, send me a quick email to discuss anything UX related. </Col>
                </Row>
                <Row>
                    <Col md={{ size: 8, offset: 2 }} className='text-center align-items-center justify-content-center contact-para'>
                        <a href="mailto:thomasnicholsonux@gmail.com">Send a message to thomasnicholsonux@gmail.com</a></Col>
                </Row>
                <Row>
                    <Col md={{ size: 8, offset: 2 }} className='text-center align-items-center justify-content-center contact-para'>
                        If you want to take a look at some of my web development work, take a look at my Github account. Most of 
                        my personal projects over the last few years are in public repositories there.</Col>
                </Row>
                <Row>
                    <Col md={{ size: 8, offset: 2 }} className='text-center align-items-center justify-content-center contact-para'>
                        <a href="https://github.com/TomNPython">Check out my projects on Github.</a></Col>
                </Row>
            </Container>
            <Footer />
           </div>
    )
}
