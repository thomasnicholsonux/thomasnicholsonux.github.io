import React from 'react'
import '../App.css'
import { Container, Row, Col, CardImg, Card, CardTitle, CardSubtitle, CardBody, CardText } from 'reactstrap';

import unsplash from '../imgs/unsplash.png'
import oldLanding from '../imgs/unsplashImgs/oldLanding.png'
import manifesto from '../imgs/unsplashImgs/manifesto.png'
import slant from '../imgs/unsplashImgs/slantUnsplash.png'
import slantCons from '../imgs/unsplashImgs/slantCons.png'
import desert from '../imgs/unsplashImgs/desert.jpg'
import dogs from '../imgs/unsplashImgs/dogs.jpg'
import sports from '../imgs/unsplashImgs/sports.jpg'
import smallError from '../imgs/unsplashImgs/smallError.png'
import sus from '../imgs/unsplashImgs/sus.png'
import sheila from '../imgs/unsplashImgs/sheila.jpg'
import paula from '../imgs/unsplashImgs/paula.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleArrows, faFighterJet, faEye } from '@fortawesome/free-solid-svg-icons'





export default function Unsplash() {
    return (
        <div>
            <Container fluid>
                <h1 className='text-center project-title'>Remaking an Unsplash</h1>
                <Row>
                    <Col md='6'>
                        <CardImg src={unsplash}></CardImg>
                    </Col>
                    <Col md='6'>
                    <h6>Project</h6>
                    <p><a href='https://www.unsplash.com'>Unsplash</a> is a stock photography website which gives photographers a platform to share their work to a 
                        worldwide audience. Their website states the overall goal of “celebrating and enabling contributors and 
                        fostering creativity in our community and their manifesto is built on the three pillars of “Share, Care, and 
                        Create”. I used the <a href='https://www.thegymnasium.com/courses/GYM/103/0/about'>Learn - Design - Build - 
                        Test</a> method of UX design to reshape the website.</p>
                    <h6>Role</h6>
                    <p>I have conducted this project entirely by myself, taking on the roles of User Researcher, UX/UI Designer, 
                        Content Strategist, and a small amount of Front End Web Development work.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <h6 className='text-center project-title'>Problem</h6>
                        <p>
                        I have used Unsplash to host my own pictures and to search for images to use in various projects for several
                         years. This is for the most part a seamless process. However, I believe that there remain areas for
                        improvement in streamlining the user’s experience and expanding on their goals for community engagement. 
                        Building on the principle of <a href='https://www.sarahdoody.com/the-big-impact-of-small-changes/#.XszcumgvNPY'>
                        "small changes, big effects”</a>, I aim to research and implement several
                        small quality of life adjustments to the website for desktop and laptop users. The form these adjustments
                        take will arise out of my user research.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <CardImg src={oldLanding} className='project-images'>
                    </CardImg>
                </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <h6 className='text-center project-title'><em>Disclaimer</em></h6>
                        <p><em>
                        I am in no way affiliated with Unsplash. Their website design is fantastic as it is and I am sure they have 
                        worked incredibly hard on making it as accessible and streamlined as possible. I do not have access to any of 
                        the analytics they no doubt use extensively to make their decisions. This is purely a practice project for 
                        myself to improve my UX design skills. I do not advocate that Unsplash use any of my designs on 
                        their website.</em>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <h6 className='project-title'>Contents</h6>
                    <ol>
                        <li><strong>Learning:</strong> Manifesto and Challenges | Competitor Analysis | Initial User Impressions | 
                        Task Based Testing | Usability Testing Scale | 3 Areas of Focus
                        </li>
                        <li><strong>Design:</strong> Personas | Scenarios | User Flows 
                        </li>
                        <li><strong>Build:</strong> Charting Plans | CSS Style Adjustments | Mock-Ups
                        </li>
                        <li><strong>Test:</strong> Feedback | Potential Future Testing
                        </li>
                        <li><strong>Summary</strong></li>
                        <li><strong>References</strong></li>
                    </ol>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <h6 className='text-center project-title'>Learning</h6>
                        <p><em>Manifesto and Challenges</em></p>
                        <p>Unsplash’s manifesto highlights how they focus more on the free availability of images rather than 
                            appealing to commercial buyers. They assert that the company has a responsibility to help everyone to 
                            create and share their work. </p>
                        <CardImg src={manifesto} className='project-images d-none d-sm-block'></CardImg>
                        <p>Unsplash’s website uses a minimalist, monochrome design. In all my redesigns I have challenged myself 
                            to adhere to this philosophy as if instructed to do so during a real commission by the company. Whereas 
                            normally <a href="https://designmodo.com/color-attention-design/">a large amount of colour</a> might be used to improve the user’s experience navigating the site 
                            , I will attempt to use other means to draw attention and highlight points of interest. I will 
                            only use colours already appearing on the website and will attempt to use them in similar areas as they 
                            are currently displayed.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <p><em>Competitor Analysis</em></p>
                        <p>There are two main competitor websites which also host stock photography freely uploaded by contributors; 
                            Pexels and Pixabay. I consulted existing research on these companies to uncover how users feel about their 
                            design and experience compared to Unsplash currently.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                        <Col>
                            <CardImg src={slant} className='project-images thin-pic d-none d-sm-block'></CardImg>
                        </Col>
                            <Col>
                            <CardImg src={slantCons} className='project-images thin-pic d-none d-sm-block'></CardImg>
                        </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <p>This research revealed several aspects on which Unsplash could focus to please its users:
                        </p>
                        <ol>
                            <li><strong>The “Free” licensing aspect:</strong> highlighting this seems important to users of all three sites.</li>
                            <li><strong>Incentivising photographers: </strong> this is an area in which Unsplash appears to lag behind its competitors. 
                                Participants mentioned the presence of a “Donate” button and challenge rewards on Pexels as a Pro of 
                                the website and the belief that Unsplash makes money off of contributors’ work as a Con of the site. 
                                NB: This was also mentioned in an <a href="https://petapixel.com/2019/10/07/i-tried-unsplash-for-two-years-heres-what-i-learned/">article</a> I consulted as a reason why one photographer stopped using 
                                Unsplash to host his photographs.</li>
                            <li><strong>Community:</strong> users mentioned social links and the user community as pros of both 
                            Unsplash and other sites.
                            </li>
                        </ol>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}> 
                    <p><em>Initial User Impressions</em></p>
                    <p>I interviewed three participants who had not used the site before and noted their initial impressions. Again, 
                        it became apparent that the “free license” offered by Unsplash incentivised users to look through the site 
                        further. One participant mentioned that her usual alternative for finding pictures (Google Images) often felt 
                        “a little like stealing” due to the presence of watermarks or the use of images by other sites. The “join now” 
                        button in the top-right corner was also mentioned repeatedly as the use of colour in an otherwise monochrome 
                        landing page drew the eye. </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}> 
                    <p><em>Task Based Testing</em></p>
                    <p>I gave each participant 8 tasks to complete on the website (see examples below). Each task was presented orally and with written 
                        instructions. I observed each participant attempting the tasks and noted any difficulties or pain points they 
                        experienced. </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: '8', offset:'2'}}>
                        <Row>
                    <Col md='3'>
                        <Card>
                            <CardTitle><strong>Task 1: Find and Download a Picture of a Desert</strong></CardTitle>
                            <CardImg src={desert}></CardImg>
                            <CardText className='success text-center'>Success: 3/3</CardText>
                            <CardText>Notes: All users clicked download from small image without expanding it.</CardText>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card>
                            <CardTitle><strong>Task 3: Find and Download a Small image of two dogs</strong></CardTitle>
                            <CardImg src={dogs}></CardImg>
                            <CardText className='success text-center'>Success: 1/3</CardText>
                            <CardText>Notes: Users struggled to find sizing options for downloading images.</CardText>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card>
                            <CardTitle><strong>Task 4: Find a collection of sporting pictures</strong></CardTitle>
                            <CardImg src={sports}></CardImg>
                            <CardText className='success text-center'>Success: 1/3</CardText>
                            <CardText>Notes: Users did not understand the point of collections or how they differed from categories.</CardText>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card>
                        <CardTitle><strong>Task 6: Find the account for user "tomnpics"</strong></CardTitle>
                            <CardImg src={smallError}></CardImg>
                            <CardText className='success text-center'>Success: 2/3</CardText>
                            <CardText>Notes: Users had difficult searching by 'User'. Error message seemed to indicate a failed search</CardText>
                        </Card>
                    </Col>
                    </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p style={{paddingTop: '15px'}}>As we can see, participants found some tasks easy, such as searching for and downloading a picture. However, 
                        other tasks proved more difficult. Users struggled to find extra information about the pictures, such as the 
                        resolution. Collections and specific Users were also difficult to find as the search criteria for finding them 
                        proved unclear.
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p><em>Systems Usability Scale</em>
                    </p>
                    <p>After completing the tasks, users filled out a <a href="https://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/">Systems Usability Scale</a>, consisting of ten questions on 
                        a Likert scale aiming to discover how usable a site is. Taking the average of all three participants scores, 
                        Unsplash received a 79.2 / 100, falling just short of an A rating (again, were I to have greater resources I 
                        would have asked more people and this may well have bumped Unsplash up to the highest grade). This rating 
                        verifies our initial impression that on the whole the website is very well designed and may only require minor 
                        tweaks to improve it further.
                    </p>
                    </Col>
                    <Col md={{size: 8, offset: 2}}>
                        <CardImg src={sus} className='project-images'></CardImg>
                    </Col>
                    <Col md={{size: 8, offset: 2}}>
                        <p><em>3 Areas of Focus</em></p>
                        <p>From my user research, I came to the conclusion that in the design process I should focus on three areas to 
                            improve:
                        </p>
                    </Col>
                    </Row>
                    <Row>
                        <Col md={{size: 8, offset: 2}}>
                            <Row>
                                <Col md='2'>
                                <FontAwesomeIcon icon={faPeopleArrows} size='6x'></FontAwesomeIcon>
                                </Col>
                                <Col md='2'>
                                    <p><strong>User Engagement</strong></p>
                                    <p>Incensitiving Photographers</p>
                                    <p>Creating Competition</p>
                                    <p>Allow users to personalise their profile</p>
                                </Col>
                                <Col md='2'>
                                <FontAwesomeIcon icon={faFighterJet} size='6x'></FontAwesomeIcon>
                                </Col>
                                <Col md='2'>
                                    <p><strong>Streamlining Layout</strong></p>
                                    <p>Removing Redundancies</p>
                                    <p>Clarifying Links/Text/Buttons</p>
                                </Col>
                                <Col md='2'>
                                <FontAwesomeIcon icon={faEye} size='6x'></FontAwesomeIcon>
                                </Col>
                                <Col md='2'>
                                    <p><strong>Drawing Attention</strong></p>
                                    <p>Gaining User notice above and below the fold</p>
                                    <p>Maintaining minimalist site philosophy</p>
                                </Col>
                            </Row>
                        </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                            <h6 className='text-center project-title'>Design</h6>
                            <p><em>Personas</em></p>
                            <p>In the absence of analytics to determine where and how users engage with the site, I have used both the 
                                impressions from my research participants and the site’s own manifesto to create two personas who each 
                                use the site in different ways and for different means. 
                            </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                        <Col md='6'>
                            <Card>
                                <CardBody className='success'>
                                    <CardImg src={sheila}></CardImg>
                                    <CardTitle className='success'><strong>Sheila Shutterbug </strong> - <em>A Photographer who wants to Engage with a
                                         Creative Community.</em></CardTitle>
                                    <CardText><strong>About:</strong> Sheila is a 21 year old student studying creative design at university.</CardText>
                                    <CardText><strong>Behaviour:</strong> Sheila will use the site a few times a week to check on the output of the 
                                        photographers she follows. She will also upload several images of her own and check their 
                                        performance regarding Views and Downloads.
                                    </CardText>
                                    <CardText><strong>Frustrations:</strong> She can’t see how her work is doing compared to others. She can view when 
                                        someone has liked her work, but can’t see how many in total have added to it, nor can she 
                                        easily find other users or their collections.</CardText>
                                    <CardText><strong>Motivations:</strong> She wants to share her creative side and see how others are showing theirs, 
                                        picking up on current trends and tips in photography. 
                                    </CardText>
                                    <CardText><strong>Goals:</strong> Engage with other photographers and receive feedback on her own work.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md='6'>
                        <Card>
                                <CardBody className='success'>
                                    <CardImg src={paula}></CardImg>
                                    <CardTitle className='success'><strong>Paula Presenter </strong> - <em>An Advertiser who wants to Find and Build 
                                        a collection of images to use in presentations at work.
                                    </em></CardTitle>
                                    <CardText><strong>About:</strong> Paula is a 35 year old employee at an advertising firm who often has to give 
                                    presentations to sell her ideas to clients.
                                    </CardText>
                                    <CardText><strong>Behaviour:</strong> Paula will visit the site to find images to add to her presentations. She may create 
                                    collections of images she has used before so she can find them again if she needs to give a similar presentation on another topic later.
                                        .
                                    </CardText>
                                    <CardText><strong>Frustrations:</strong> Making collections can be a frustrating process for Paula and she often doesn’t have time to find 
                                    where to make them and how to add new, similar images to existing collections. It can also be a hassle for her to find the most popular pictures and 
                                    sometimes she will spend a lot of time scrolling to find the perfect fit.
                                    </CardText>
                                    <CardText><strong>Motivations:</strong> Wow clients with her innovative and visually stunning presentations of themed images. 
                                    </CardText>
                                    <CardText><strong>Goals:</strong> Quickly find new images and re-use those she has already collected.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
            
        </div>
    )
}
