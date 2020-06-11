import React from 'react'
import '../App.css'
import { Container, Row, Col, CardImg, Card, CardTitle, CardSubtitle, CardBody, CardText, CardFooter } from 'reactstrap';

import Footer from '../Footer'

import arbiter from '../imgs/arbiter.png'
import goodreads from '../imgs/arbiterImgs/goodreads.png'
import imdb from '../imgs/arbiterImgs/imdb.png'
import tripadvisor from '../imgs/arbiterImgs/tripadvisor.png'
import goodreadsApp from '../imgs/arbiterImgs/goodreadsApp.png'
import imdbApp from '../imgs/arbiterImgs/imdbApp.jpg'
import tripadvisorApp from '../imgs/arbiterImgs/tripadvisorApp.png'





export default function Arbiter() {
    return (
        <div>
            <Container fluid>
                <h1 className='text-center project-title'>Arbiter - After All The Bells And Whistles</h1>
                <hr className="my-2" />
                <Row>
                    <Col md='5'>
                        <CardImg src={arbiter} style={{objectFit: 'contain', maxHeight: '275px'}}></CardImg>
                    </Col>
                    <Col md='7'>
                    <h6>Project</h6>
                    <p>To better understand the entire UX design process, I completed the design
                        of a new sports review app. I felt this would both teach me more about how UX design work flows and functions
                        as well as help demonstrate my own UX skills. I used an <a href='https://www.enginess.io/insights/what-is-iterative-design'> iterative design process </a>
                        to simulate a real working environment as closely as possible.</p>
                    <h6>Role</h6>
                    <p>In completing this project, I served as User Researcher, Market Researcher, UI/UX Designer, Information 
                        Architect, and Usability Tester, overseeing the entire design process from start to finish.</p>
                    </Col>
                </Row>
                <hr className="my-2" />
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <h6 className='text-center project-title'>Problem</h6>
                        <p>
                        Living away from where I grew up, time zones become a problem for watching sports live. I would wake up 
                        the morning after an important match and have to ask my partner to find a highlights package or link to the 
                        event in full, even going so far as to press play so I didn’t know how long the video lasted for boxing 
                        matches. Often, the event turned out to be a dud anyway and I’d wasted both our time. I tried searching 
                        online but failed to find any relevant review site for sports that didn’t include major spoilers on the 
                        front page. So, I decided to make one myself.
                        </p>
                        <p>
                        The idea was to create an app to host spoiler free reviews of recent sporting events, with the aim of 
                        appealing to both casual fans who want to find out what events are worth watching, and to ardent supporters 
                        who desire an outlet to share their opinions with others. I feel the problem this solves is currently unusable 
                        by established sporting sites which base many of their articles and pages around coverage of events which 
                        inevitably contain spoilers. However, as the design process continued, it became clear that this app could 
                        solve other problems for users as well.
                        </p>
                    </Col>
                </Row>
                <hr className="my-2" />
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <h6 className='project-title'>Contents</h6>
                    <ol>
                        <li><strong>Research:</strong> Competitor Analysis | User Analysis | 
                        User Interviews | Areas of Focus
                        </li>
                        <li><strong>Design:</strong> Personas | Scenarios | User Flows | Sitemap | UI Layouts
                        </li>
                        <li><strong>Build:</strong> LoFi Wireframes | Prototypes
                        </li>
                        <li><strong>Test:</strong> Usability Testing | User Feedback
                        </li>
                        <li><strong>Iterate</strong></li>
                        <li><strong>Summary</strong></li>
                        <li><strong>References</strong></li>
                    </ol>
                    </Col>
                </Row>
                <hr className="my-2" />
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <h6 className='text-center project-title'>Research</h6>
                        <p><em>Competitor Analysis</em></p>
                        <p>In the course of my research, I attempted to find apps and sites which serve a similar role to Arbiter in 
                            order to see how they designed their experiences. However, it was difficult to find anything with such a 
                            purpose purely for sports. Googling revealed only sites which offered end of year review lists of the 
                            best events, or -  as I previously found by spoiling several boxing matches for myself - short articles 
                            describing the facts without giving an opinion on excitement or watchability.
                        </p>
                    </Col>
                </Row>
                    <Row>
                        <Col md={{size: 8, offset: 2}}>
                            <Row>
                                <Col><CardImg src={goodreads}  className='review-site-imgs'></CardImg></Col>
                                <Col><CardImg src={imdb}  className='review-site-imgs'></CardImg></Col>
                                <Col><CardImg src={tripadvisor}  className='review-site-imgs'></CardImg></Col>
                            </Row>
                        </Col>
                    </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <p>I instead chose to focus on review websites and apps for non-sporting areas, but those which might be used 
                            in similar ways. I decided to look at the strengths and weaknesses, user reviews, and other UX redesign 
                            projects for <a href='https://www.goodreads.com/'>Goodreads</a> (book information and ratings/reviews), <a href='https://www.imdb.com/'>IMDB</a> (movie information and 
                            ratings/reviews), and <a href='https://www.tripadvisor.com/'>TripAdvisor</a> (travel information and ratings/reviews). My research uncovered a 
                            number of themes which I felt would be pertinent when designing my own app.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <p><u>Goodreads</u>
                        </p>
                    <Row>
                        <Col md='3'><CardImg src={goodreadsApp}></CardImg></Col>
                        <Col md='9'>
                            <p>Firstly, I looked at existing user experiences with the Goodreads app and website. <a href='https://www.slant.co/options/2734/~goodreads-review'>Slant.co</a> offers both 
                                pros and cons that users have submitted for various websites. For Goodreads, the pros included the <span className='pro'>depth of 
                                their selection of books</span> and the <span className='pro'>constant flow of new user reviews</span>, while the cons included <span className='con'>the large 
                                amount of ads</span> and <span className='con'> poor navigation</span>.</p>
                            <p>On the <a href='https://apps.apple.com/us/app/goodreads-book-reviews/id355833469'>Appstore</a>, the Goodreads App has a score of 4.8/5 from over 300,000 reviews. From consulting the 
                                most highly ranked of these reviews, common benefits included <span className='pro'>the ability to save books to view later</span> 
                                and <span className='pro'>annual votes on top books</span>, while complaints included <span className='con'>the abundance of false reviews</span>.</p>
                            <p><a href='https://medium.muz.li/goodreads-app-ux-case-study-2e63214fc005'>Sylvie Stephanie recently conducted a UX Case Study on Goodreads</a> and made some very interesting and 
                                beneficial changes to the app in her redesign. She stressed the importance of <span className='pro'>trusted ratings and 
                                reviews</span> to users, as well as <span className='pro'>personalised recommendations</span>, and <span className='pro'>a viewable history of the user’s 
                                reviews and read books</span>. 
                            </p>
                        </Col> 
                    </Row>
                    <p><u>IMDB</u>
                        </p>
                    <Row>
                        <Col md='9'>
                            <p>Firstly, I looked at existing user experiences with the Goodreads app and website. <a href='https://www.slant.co/options/2734/~goodreads-review'>Slant.co</a> offers both 
                                pros and cons that users have submitted for various websites. For Goodreads, the pros included the <span className='pro'>depth of 
                                their selection of books</span> and the <span className='pro'>constant flow of new user reviews</span>, while the cons included <span className='con'>the large 
                                amount of ads</span> and <span className='con'> poor navigation</span>.</p>
                            <p>On the <a href='https://apps.apple.com/us/app/goodreads-book-reviews/id355833469'>Appstore</a>, the Goodreads App has a score of 4.8/5 from over 300,000 reviews. From consulting the 
                                most highly ranked of these reviews, common benefits included <span className='pro'>the ability to save books to view later</span> 
                                and <span className='pro'>annual votes on top books</span>, while complaints included <span className='con'>the abundance of false reviews</span>.</p>
                            <p><a href='https://medium.muz.li/goodreads-app-ux-case-study-2e63214fc005'>Sylvie Stephanie recently conducted a UX Case Study on Goodreads</a> and made some very interesting and 
                                beneficial changes to the app in her redesign. She stressed the importance of <span className='pro'>trusted ratings and 
                                reviews</span> to users, as well as <span className='pro'>personalised recommendations</span>, and <span className='pro'>a viewable history of the user’s 
                                reviews and read books</span>. 
                            </p>
                        </Col> 
                        <Col md='3'><CardImg src={imdbApp}></CardImg></Col>
                    </Row>
                    <p><u>TripAdvisor</u>
                        </p>
                    <Row>
                        <Col md='3'><CardImg src={tripadvisorApp}></CardImg></Col>
                        <Col md='9'>
                            <p>Firstly, I looked at existing user experiences with the Goodreads app and website. <a href='https://www.slant.co/options/2734/~goodreads-review'>Slant.co</a> offers both 
                                pros and cons that users have submitted for various websites. For Goodreads, the pros included the <span className='pro'>depth of 
                                their selection of books</span> and the <span className='pro'>constant flow of new user reviews</span>, while the cons included <span className='con'>the large 
                                amount of ads</span> and <span className='con'> poor navigation</span>.</p>
                            <p>On the <a href='https://apps.apple.com/us/app/goodreads-book-reviews/id355833469'>Appstore</a>, the Goodreads App has a score of 4.8/5 from over 300,000 reviews. From consulting the 
                                most highly ranked of these reviews, common benefits included <span className='pro'>the ability to save books to view later</span> 
                                and <span className='pro'>annual votes on top books</span>, while complaints included <span className='con'>the abundance of false reviews</span>.</p>
                            <p><a href='https://medium.muz.li/goodreads-app-ux-case-study-2e63214fc005'>Sylvie Stephanie recently conducted a UX Case Study on Goodreads</a> and made some very interesting and 
                                beneficial changes to the app in her redesign. She stressed the importance of <span className='pro'>trusted ratings and 
                                reviews</span> to users, as well as <span className='pro'>personalised recommendations</span>, and <span className='pro'>a viewable history of the user’s 
                                reviews and read books</span>. 
                            </p>
                        </Col> 
                    </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
