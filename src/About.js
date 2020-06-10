import React from 'react'

import { Container, Row, Col, CardImg, Media } from 'reactstrap';
import Footer from './Footer'

import mountain from "./imgs/MountainRoad.jpg"
import writing from "./imgs/writing.png"
import myriorama from "./imgs/myriorama.png"


export default function About() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="d-none d-sm-block" md="4">
                        <CardImg src={mountain} className='about-pics'></CardImg>
                    </Col>
                    <Col className="d-none d-sm-block" md="4">
                    <CardImg src={myriorama} className='about-pics'></CardImg>
                    </Col>
                    <Col className="d-none d-sm-block" md="4">
                    <CardImg src={writing} className='about-pics'></CardImg>
                    </Col>
                </Row>
                <Row>
                    <Col ><h2 className='text-center success' id='about'>About</h2></Col>
                </Row>
                <Row>
                    <Col md={{ size: 8, offset: 2 }} className='text-center align-items-center justify-content-center about-para'>
                        After finishing my degree in Psychology at the University of Edinburgh, I worked around the world as an English Teacher,
                         living in Spain, Colombia, and Vietnam. I also worked as a Curriculum Designer and QA Lead Tester for an online
                         English company, helping create their students' courses and testing the functionality of their teaching app.</Col>
                </Row>
                <Row>
                    <Col md={{ size: 8, offset: 2 }} className='text-center align-items-center justify-content-center about-para'>
                        In addition to my background in education, I also have experience with Web Development, having taught myself JavaScript, 
                        ReactJS, and several other languages. I built this site using React and Bootstrap and have a <a href='https://tomnpython.github.io/Portfolio'>
                        portfolio</a> of other 
                        projects I have made over the last two years. I also designed a <a href='https://www.rachelemoran.com'>Wordpress site</a> for a client who needed their own academic
                        portfolio.</Col>
                </Row>
                <Row>
                    <Col md={{ size: 8, offset: 2 }} className='text-center align-items-center justify-content-center about-para'>
                        When not working or studying, I enjoy photography and writing. I have <a href='https://unsplash.com/@tomnpics'>an active portfolio on Unsplash</a> and have had several short
                        stories published in anthologies in the UK, Ireland, and <a href='https://www.scarletleafreview.com/short-stories21/category/thomas-nicholson'>Canada.</a> </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
