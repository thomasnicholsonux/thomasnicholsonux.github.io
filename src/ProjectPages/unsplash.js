import React from 'react'
import '../App.css'
import { Container, Row, Col, CardImg, Card, CardTitle, CardSubtitle, CardBody, CardText, CardFooter } from 'reactstrap';

import Footer from '../Footer'

import unsplash from '../imgs/unsplash.png'
import oldLanding from '../imgs/unsplashImgs/oldLanding.png'
import newLanding from '../imgs/unsplashImgs/newlanding.png'
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
import scenario1 from '../imgs/unsplashImgs/scenario1.png'
import scenario3 from '../imgs/unsplashImgs/scenario3.png'
import problems from '../imgs/unsplashImgs/problems.png'
import oldSearchAuto from '../imgs/unsplashImgs/oldSearchAuto.png'
import newSearchAuto from '../imgs/unsplashImgs/newSearchAuto.png'
import newSearchAdv from '../imgs/unsplashImgs/newSearchAdv.png'
import oldSortColour from '../imgs/unsplashImgs/oldSortColour.png'
import oldSortPopular from '../imgs/unsplashImgs/oldSortPopular.png'
import newsortColour from '../imgs/unsplashImgs/newSortColour.png'
import newSortPopular from '../imgs/unsplashImgs/newSortPopular.png'
import oldInfo from '../imgs/unsplashImgs/oldInfo.png'
import newInfo from '../imgs/unsplashImgs/newInfo.png'
import newInfoClick from '../imgs/unsplashImgs/newInfoClick.png'
import oldError from '../imgs/unsplashImgs/oldError.png'
import newError from '../imgs/unsplashImgs/newError.png'
import oldProfile from '../imgs/unsplashImgs/oldProfile.png'
import newProfile from '../imgs/unsplashImgs/newProfile.png'







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
                            Pexels and Pixabay. I consulted <a href='https://www.slant.co/topics/1096/versus/~pexels_vs_unsplash_vs_pixabay'>existing research</a> on these companies to uncover how users feel about their 
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
                        <CardBody>
                            <CardTitle><strong>Task 1: Find and Download a Picture of a Desert</strong></CardTitle>
                            <CardImg src={desert}></CardImg>
                            <CardText className='success text-center'>Success: 3/3</CardText>
                            <CardText>Notes: All users clicked download from small image without expanding it.</CardText>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card>
                        <CardBody>
                            <CardTitle><strong>Task 3: Find and Download a Small image of two dogs</strong></CardTitle>
                            <CardImg src={dogs}></CardImg>
                            <CardText className='success text-center'>Success: 1/3</CardText>
                            <CardText>Notes: Users struggled to find sizing options for downloading images.</CardText>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card>
                        <CardBody>
                            <CardTitle><strong>Task 4: Find a collection of sporting pictures</strong></CardTitle>
                            <CardImg src={sports}></CardImg>
                            <CardText className='success text-center'>Success: 1/3</CardText>
                            <CardText>Notes: Users did not understand the point of collections or how they differed from categories.</CardText>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col md='3'>
                        <Card>
                        <CardBody>
                        <CardTitle><strong>Task 6: Find the account for user "tomnpics"</strong></CardTitle>
                            <CardImg src={smallError}></CardImg>
                            <CardText className='success text-center'>Success: 2/3</CardText>
                            <CardText>Notes: Users had difficult searching by 'User'. Error message seemed to indicate a failed search</CardText>
                        </CardBody>
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
                                <CardBody>
                                    <CardTitle className='text-center'><strong>Sheila Shutterbug </strong> - <em>A Photographer who wants to Engage with a
                                         Creative Community.</em></CardTitle>
                                    <CardImg src={sheila}></CardImg>
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
                                <CardBody>
                                    <CardTitle className='text-center'><strong>Paula Presenter </strong> - <em>An Advertiser who wants to Find and Build 
                                        a collection of images to use in presentations at work.
                                    </em></CardTitle>
                                    <CardImg src={paula}></CardImg>
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
                <Row>
                <Col md={{size: 8, offset: 2}}>
                            <p><em>Scenarios</em></p>
                            <p>Both Sheila and Paula will have several tasks they want to perform:</p>
                </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='6'>
                                <Card>
                                    <CardBody>
                                        <CardTitle><strong>Sheila Scenario #1: Casual Browsing</strong></CardTitle>
                                        <CardText>Sheila arrives on the landing page with the intention of looking through the latest 
                                            photographs uploaded by those users she follows. She remembers one user she wanted to look 
                                            at again, but can’t remember her exact username so forgets about her and continues 
                                            scrolling through the “Following” page. She likes those pictures she enjoys and clicks on 
                                            users she finds interesting. She sees a beautiful image of a camel and tries to find the 
                                            best images of camels uploaded recently, but cannot find any option to do this. Frustrated, 
                                            she leaves the site and looks elsewhere.
                                    </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='6'>
                            <Card>
                                    <CardBody>
                                        <CardTitle><strong>Sheila Scenario #2: Feeling Worthwhile</strong></CardTitle>
                                        <CardText>Sheila has uploaded several images and is eager to see how they have performed. On 
                                            her Stats page she is excited to see that her images have been viewed thousands of times 
                                            and she has several notifications that other users have liked her images. She wants to see 
                                            exactly how many have liked each image, but is unable to do so. Instead, she wants to see 
                                            how her images compare to other pictures uploaded that week. She must search for similar 
                                            terms as her own images and click through each picture individually to see how many times 
                                            it has been viewed or downloaded in comparison to her own and can only compare over the 
                                            last thirty days.
                                    </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md='6'>
                            <Card>
                                    <CardBody>
                                        <CardTitle><strong>Paula Scenario #1: Finding the Right Mood</strong></CardTitle>
                                        <CardText>Paula has an important meeting coming up and must find several high quality images 
                                            of autumn to convey a particular mood. She only wants the best so tries to search and sort 
                                            by Most Popular, but cannot. She then tries to search for images with red, yellow, and 
                                            brown to convey the theme, but must search for these one at a time. Eventually, she finds 
                                            and downloads a number of useful pictures, saves them to a collection in case she needs 
                                            them again, and leaves the site.
                                    </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='6'>
                            <Card>
                                    <CardBody>
                                        <CardTitle><strong>Paula Scenario #2: Reusing Ideas</strong></CardTitle>
                                        <CardText>It’s another autumn presentation and Paula needs to reuse some images from last time. She 
                                            goes to her Autumn collection but realises she needs a lot more pictures. Rushing since she thought 
                                            it would be a fast task, she misspells Autumn in the search and gets no results. She must try again 
                                            until she spells it correctly. She searches and sorts by new, finding several more to add to the 
                                            collection. She downloads them all in their original size and tries to resize them later in 
                                            Powerpoint.
                                    </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p><em>User Flow</em></p>
                    <p>From these scenarios, I created flow charts using <a href='https://www.draw.io/'>Draw.io</a> to simulate the user’s journeys through the site, 
                        highlighting any issues they may face along the way and how these could be mitigated in a redesign (see examples below).
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='6'>
                                <CardImg src={scenario1}></CardImg>
                                <CardFooter>Scenario #1 User Flow</CardFooter>
                            </Col>
                            <Col md='6'>
                                <CardImg src={scenario3}></CardImg>
                                <CardFooter>Scenario #3 User Flow</CardFooter>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col md={{size: 8, offset: 2}} style={{paddingTop: '10px'}}>
                    <p>From combining the issues that became apparent from these charts with the feedback from my participants, 
                        I sorted common issues into areas of the site to improve. As we can see, the three largest areas for 
                        improvement are the Landing Page, Search, and Image Info. Due to limited resources, I chose these three areas 
                        to focus on in the Build phase of my redesign, and made minor adjustments to the other areas.
                    </p>
                </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <CardImg src={problems} style={{objectFit: 'contain'}}></CardImg>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <h6 className='text-center project-title'>Build</h6>
                    <p>Based on my research and personas, I began brainstorming areas to improve on a blackboard. I wrote out the 
                        features each change would require and how they would help my personas complete their scenarios.
                    </p>
                    <p>After forming my initial plans, I made several changes to the Unsplash Landing Page by manipulating the CSS 
                        via the console. I have also created mock-ups of features to add or improve using 
                        <a href='https://www.figma.com/'> Figma</a> and <a href='https://www.gimp.org/'>GIMP</a>. The reasoning 
                        behind each of these changes, along with sample images, can be viewed below.</p>
                    <p><em>Landing Page</em></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='6'>
                                <CardImg src={oldLanding}></CardImg>
                                <CardFooter className='text-center failure'><strong>Before</strong></CardFooter>
                            </Col>
                            <Col md='6'>
                                <CardImg src={newLanding}></CardImg>
                                <CardFooter className='text-center success'><strong>After</strong></CardFooter>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <p style={{paddingTop: '10px'}}>This area underwent the largest cosmetic changes. Each change is listed below:</p>
                        <ol className='landing-list'>
                            <li>My user research showed that few users interacted with the long list of categories at the top 
                                of the page and I felt these would be better served incorporated behind a clickable options menu, 
                                as too many options competing for attention can lead to <a href='https://www.smashingmagazine.com/2016/09/reducing-cognitive-overload-for-a-better-user-experience/'>cognitive overload for the user</a>. I 
                                also changed “Editorial” to “Popular”, as <a href='https://uxdesign.cc/use-plain-language-in-ux-writing-d7d5b0ea35f1'>users prefer simple language they are familiar with</a>, 
                                and “Featured” to “In the Spotlight” to maintain the photographical theme of the site and to avoid 
                                needless repetition. Having just three options in the centre of the screen along with a sample of 
                                images visible underneath just above the fold should prevent <a href='https://usabilla.com/blog/paradox-choice-less-ux-design/'>paralysis of choice</a>.
                            </li>
                            <li>My participants commented on the inviting nature of the “Join Now” button when they were logged out, so I hope that by 
                                adding a similar effect to the Submit button, this will incentivise photographers to contribute more pictures. The use of 
                                colour here is in line with similar uses throughout the site, and so remains in line with Unsplash’s minimalist colour 
                                palette. I considered adding an icon, but decided against the idea after reading <a href='https://www.nngroup.com/articles/icon-usability/'>this article</a> and finding that I could not 
                                think of an appropriate image to use.</li>
                            <li>The Photo of the Day took up a lot of screen real estate, but still did not always give an accurate 
                                representation of the image on display. I have made it shorter both to invite users to look at a 
                                better representation by clicking on it, and to allow for the top of more images to be visible 
                                underneath the category selectors. This will hopefully please both users and customers who have 
                                paid for “Sponsored” images to appear at the top of the results list, as they are now partially 
                                visible without the need to scroll down.</li>
                            <li>I removed the “Home” and “Collections” buttons as they were rarely focused on by users and 
                                felt redundant when there were other options to accomplish the same task. I also moved the “More” 
                                menu dots to the corner of the screen. Again, this helps focus the user on the more common areas 
                                they may wish to use by incorporating greater white space.
                            </li>
                            <li>I shortened the search bar to make room for an “Advanced Search” option next to it with additional 
                                filters, as <a href='https://www.nngroup.com/articles/search-visible-and-simple/'>the vast majority of users do not search for more than two words</a>. NB: This article 
                                offers some thoughts on the Advanced Search feature, but I believe my usage of it here does not contradict
                                any of the messages within.
                            </li>
                        </ol>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p><em>Search (Autofill and Advanced)</em></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='6'>
                                <CardImg src={oldSearchAuto}></CardImg>
                                <CardFooter className='text-center failure'><strong>Search Autofill Before</strong></CardFooter>
                            </Col>
                            <Col md='6'>
                                <CardImg src={newSearchAuto}></CardImg>
                                <CardFooter className='text-center success'><strong>Search Autofill After</strong></CardFooter>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}} className='min-pad'>
                    <p>Taking inspiration from Unsplash’s competitor sites, Pexels and Pixabay, I fleshed out the autofill features 
                        to account for Users and Collections as well as pictures, making it clearer to users what they are able to 
                        search for. The tabs for Pictures, Users, and Collections are also slightly enlarged and given greater weight, 
                        as test participants sometimes struggled to see these options. 
                    </p>
                    <Row>
                            <Col md='12' className='min-pad'>
                                <CardImg src={newSearchAdv} style={{objectFit: 'contain'}}></CardImg>
                                <CardFooter className='text-center success'><strong>Advanced Search</strong></CardFooter>
                            </Col>
                        </Row>
                    <p>The advanced search now also includes the ability to sort by min/max views, downloads and likes, as well 
                        as by location, camera used, and desired image resolution. 
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p><em>Sort Results</em></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='6' className='min-pad'>
                                <CardImg src={oldSortColour} style={{objectFit: 'contain'}}></CardImg>
                                <CardFooter className='text-center failure'><strong>Sort Colour Before</strong></CardFooter>
                            </Col>
                            <Col md='6' className='min-pad'>
                                <CardImg src={newsortColour} style={{objectFit: 'contain'}}></CardImg>
                                <CardFooter className='text-center success'><strong>Sort Colour After</strong></CardFooter>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='6' className='min-pad'>
                                <CardImg src={oldSortPopular} style={{objectFit: 'contain'}}></CardImg>
                                <CardFooter className='text-center failure'><strong>Sort Order Before</strong></CardFooter>
                            </Col>
                            <Col md='6' className='min-pad'>
                                <CardImg src={newSortPopular} style={{objectFit: 'contain'}}></CardImg>
                                <CardFooter className='text-center success'><strong>Sort Order After</strong></CardFooter>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p>Several of my test participants noticed the sort features available after searching, but expressed 
                        disappointment at their limited options. I have therefore expanded on these options to include popularity, 
                        views, and distance from the user, as well as added options for highlighting by multiple colours.
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p><em>Image Info</em></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='6' className='min-pad'>
                                <CardImg src={oldInfo} ></CardImg>
                                <CardFooter className='text-center failure'><strong>Image Expanded Before</strong></CardFooter>
                            </Col>
                            <Col md='6' className='min-pad'>
                                <CardImg src={newInfo} ></CardImg>
                                <CardFooter className='text-center success'><strong>Image Expanded After</strong></CardFooter>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p>To foster the sense of community Unsplash’s manifesto says they offer, I believe it is important to demonstrate that there are 
                        many other users of the site. Currently, download and view numbers are hidden behind another click when viewing images. By adding 
                        them to the first page, I hope this will demonstrate to the user that they are part of a large network all viewing and consuming 
                        these pictures. I hope this will encourage user engagement by <a href='forbesindia.com/article/brand-connect/gamification-in-ux-design-for-enhanced-user-experience-and-engagement/52075/1'>gamifying the process of submitting and viewing pictures</a>.
                    </p>
                    <p>Many users also struggled with the task of finding images of a specific size. I have therefore clarified the use 
                        of the dropdown menu next to “Download” by making them both a distinct colour and added the resolution size of 
                        the image next to the download button in case users accidentally download an oversized image. I also added a 
                        small amount of colour to each icon to draw attention and allow for greater feedback when interacting with them. 
                        I added a <a href='https://uxplanet.org/ux-of-microinteractions-for-user-delight-fac1baed527a'> micro animation</a> of the heart expanding when users click and added a success message underneath to 
                        clarify what clicking the “Like”, “Add to Collection” or “Download” buttons did.
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='12' className='min-pad'>
                                <CardImg src={newInfoClick} style={{objectFit: 'contain'}}></CardImg>
                                <CardFooter className='text-center success'><strong>Image Expanded (Clicking Like)</strong></CardFooter>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p><em>Search Error</em></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='6' className='min-pad'>
                                <CardImg src={oldError} style={{objectFit: 'contain'}}></CardImg>
                                <CardFooter className='text-center failure'><strong>Search Error Before</strong></CardFooter>
                            </Col>
                            <Col md='6' className='min-pad'>
                                <CardImg src={newError} style={{objectFit: 'contain'}}></CardImg>
                                <CardFooter className='text-center success'><strong>Search Error After</strong></CardFooter>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p>The current error page offers no information as to what has gone wrong and may be interpreted by users as 
                        the site crashing. I have added a simple error message underneath the image to convey what has happened, 
                        offered the user a “Did you mean” alternative in case of accidental misspellings, and clarified that they 
                        could also search under “Users” and “Collections” as well. I worded the message <a href='https://medium.com/thinking-design/how-to-write-design-user-friendly-error-messages-87d0207bb902'>
                        to put the onus on the site 
                        rather than the user for the issue and kept it short to aid understanding</a>.
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p><em>User Profile</em></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='6' className='min-pad'>
                                <CardImg src={oldProfile} style={{objectFit: 'contain'}}></CardImg>
                                <CardFooter className='text-center failure'><strong>User Profile Before</strong></CardFooter>
                            </Col>
                            <Col md='6' className='min-pad'>
                                <CardImg src={newProfile} style={{objectFit: 'contain'}}></CardImg>
                                <CardFooter className='text-center success'><strong>User Profile After</strong></CardFooter>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p>
                    Addressing common requests for features on Unsplash and already featuring on competitor sites, 
                    I added an optional Donate button linking to a profile’s Paypal account. 
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <h6 className='text-center project-title'>Test</h6>
                    <p><em>Feedback</em></p>
                    <p>Using the same participants as for my initial testing (again, due to time availability), I asked them to look 
                        over some of the changes to the site. I also asked them to complete tasks they initially struggled with, such 
                        as finding the Users and Collections tabs when searching, and downloading the correct size images. They 
                        expressed appreciation for the clearer error page information on failed searches. All of my participants found 
                        the tasks easier to complete than in the first round of usability testing. 
                    </p>
                    <Row>
                    <Col md={{size: '8', offset:'2'}}>
                        <Row>
                    <Col md='6'>
                        <Card>
                            <CardBody>
                            <CardTitle><strong>Task 3: Find and Download a Small image of two dogs</strong></CardTitle>
                            <CardImg src={dogs}></CardImg>
                            <CardText className='success text-center'>Success: 3/3</CardText>
                            <CardText>Notes: Users found the new download button more informative.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='6'>
                        <Card>
                            <CardBody>
                        <CardTitle><strong>Task 6: Find the account for user "tomnpics"</strong></CardTitle>
                            <CardImg src={smallError}></CardImg>
                            <CardText className='success text-center'>Success: 3/3</CardText>
                            <CardText>Notes: The new error message helped participants realise how they could find 
                                what they were searching for.
                            </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    </Row>
                    </Col>
                </Row>
                    <p style={{paddingTop: '10px'}}><em>Potential Future Testing</em></p>
                    <p>As this is a practice project, I was not able to complete more thorough testing of changes to the site. However, 
                        were I to have more time and access to participants and development, I would have conducted A/B testing with the 
                        original version of the site and my own changes to track how users interacted with both. I would consult 
                        analytics to track user journeys through the site and locate pain points to see if my changes had caused any 
                        unforeseen issues. Eye tracking may also be useful in seeing how users locate information on the site and whether 
                        adding small amounts of colour or increasing font weights had an effect on search speeds.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <h6 className='text-center project-title'>Summary</h6>
                    <p>I found this project to be both enjoyable and educational. Conducting user research gave me an insight into how 
                        other users interact with the site that I had not considered myself and showed me how important it is to have a 
                        wide variety of participants with their own preconceptions and mental models. It taught me the importance of 
                        iteration, as I understood how my changes would themselves need to be tested to see whether they did actually improve 
                        the site, and also opened my eyes to the breadth of literature on UX design available online which I consulted to 
                        make my decisions.
                    </p>
                    <p>
                    This was my first time working with a lot of the software I used to create the flowcharts and mock-ups featured 
                    here. I particularly enjoyed using Figma to add features I was not able to incorporate by only making adjustments 
                    to the site’s CSS via the console. In future, I want to learn more about similar software to create interactive 
                    prototypes for some of the more significant features I wanted to add with this redesign.
                    </p>
                </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <h6 className='text-center project-title'>References</h6>
                    <p>Throughout this project, I consulted a number of articles to help inform and justify my decisions. Most of them
                        are linked throughout this Case Study, but below you can find an exhaustive list of everything I read in preparation
                        for and whilst conducting this redesign.
                    </p>
                    <ul>
                        <li>Article A</li>
                        <li>Article B</li>
                    </ul>
                </Col>
                </Row>
            </Container>
            < Footer />
        </div>
    )
}

// NEXT: same two images of Pic Info w/denise chan pic, check for microanimations article, include third image under first text?