import React from 'react'

import './App.css';
import { Jumbotron, Button, Container, Row, Col, Card, CardTitle, CardText, CardImg } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer'

import portpic from "./imgs/portpic.jpg" 
import unsplash from "./imgs/unsplash.png"
import arbiter from "./imgs/arbiter.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase, faMouse, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <div>
        <Jumbotron>
      <Row>
      <Col className="d-none d-sm-block" lg="3"><CardImg id="portpic" src={portpic} ></CardImg></Col>
      <Col lg="9" sm="12">
        <h1 className="display-3 success">Tom Nicholson - UX Designer</h1>
        <p className="lead">I am a UX Designer with a multidisciplinary background, looking to get involved with a new career.</p>
        <hr className="my-2" />
        <p>Skip the pleasantries and head straight to...</p>
        <p className="lead">
          <Button color="primary" href='#projects'>My Recent Work</Button>
        </p>
        </Col>
        </Row>
      </Jumbotron>
      <hr className="my-2" />
    <Container fluid className='justify-content-center'>
      <Row>
        <Col xs="12" md="3">
          <Row className='justify-content-center'>
              <FontAwesomeIcon icon={faGraduationCap} className='success' size="3x"></FontAwesomeIcon>
          </Row>
          <Row className='justify-content-center'><h4>Education</h4></Row>
          <Row><p className='about-info-para'>MA Psychology 2:1, University of Edinburgh, 2010-2014</p></Row>
        </Col>
        <Col xs="12" md="3">
          <Row className='justify-content-center'>
            <FontAwesomeIcon icon={faBriefcase} className='success' size="3x"></FontAwesomeIcon>
          </Row>
          <Row className='justify-content-center'><h4>Professional Background</h4></Row>
          <Row><p className='about-info-para'>Experience teaching adults and children, as well as with Curriculum Design and
          QA Testing</p></Row>
        </Col>
        <Col xs="12" md="3">
          <Row className='justify-content-center'>
            <FontAwesomeIcon icon={faMouse} className='success' size="3x"></FontAwesomeIcon>
          </Row>
          <Row className='justify-content-center'><h4>Web Development</h4></Row>
          <Row><p className='about-info-para'>Created a portfolio of freelance Front End Development projects over 2 years</p></Row>
        </Col>
        <Col xs="12" md="3">
        <Row className='justify-content-center'>
          <FontAwesomeIcon icon={faStar} className='success' size="3x"></FontAwesomeIcon>
          </Row>
          <Row className='justify-content-center'><h4>UX Skills</h4></Row>
          <Row><p className='about-info-para'>Case Studies involving User Research, Information Architecture, Prototyping,
           and Usability Testing</p></Row>
        </Col>
      </Row>
      </Container>
      <hr className="my-2" />
      <Container fluid >
      <Row>
        <Col md={{ size: 8, offset: 2 }} className='text-center align-items-center justify-content-center' id='projects'>
          <h2>Projects</h2>
          <p>Below are reports on two projects I recently made to showcase my UX skills. They include every stage of the process, 
            detailing how and I why I made each decision along the way.
          </p>
        </Col>
      </Row>
      <Row >
        <Col className='text-center'>
          <Card body>
            <CardTitle><Link to='/unsplash' style={{boxShadow: "none"}}><h4>Remaking an Unsplash</h4></Link></CardTitle> 
            <CardText>User Research / Redesign / Testing</CardText>
              <Link to='/unsplash'>
                  <CardImg src={unsplash}></CardImg>
                  <Button color='primary'>View Case Study</Button>
              </Link>
          </Card></Col>
        <Col className='text-center'>
          <Card body>
              <CardTitle><Link to='/arbiter'><h4>After All The Bells And Whistles</h4></Link></CardTitle> 
              <CardText>App Design / User Research / Wireframing / Prototyping / Testing</CardText>
              <Link to='/arbiter'>
              <CardImg src={arbiter}></CardImg>
              <Button color='primary'>View Case Study</Button>
              </Link>
          </Card></Col>
      </Row>
      </Container>
      <hr className="my-2" />
      <Footer />
    </div>
    )
}
