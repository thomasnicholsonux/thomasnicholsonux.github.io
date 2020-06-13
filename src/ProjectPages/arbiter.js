import React, { useEffect } from 'react'
import '../App.css'
import { Container, Row, Col, CardImg, Card, CardTitle, CardSubtitle, CardBody, CardText, CardFooter } from 'reactstrap';

import Footer from '../Footer'

import arbiter from '../imgs/arbiter.png'
import feedScreen from '../imgs/arbiterImgs/FeedScreen.png'
import goodreads from '../imgs/arbiterImgs/goodreads.png'
import imdb from '../imgs/arbiterImgs/imdb.png'
import tripadvisor from '../imgs/arbiterImgs/tripadvisor.png'
import goodreadsApp from '../imgs/arbiterImgs/goodreadsApp.png'
import imdbApp from '../imgs/arbiterImgs/imdbApp.jpg'
import tripadvisorApp from '../imgs/arbiterImgs/tripadvisorApp.png'
import eflSurvey from '../imgs/arbiterImgs/eflSurvey.png'
import Sam from '../imgs/arbiterImgs/Sam.jpg'
import Richard from '../imgs/arbiterImgs/Richard.jpg'
import SamFlow from '../imgs/arbiterImgs/SamFlow.png'
import RichardFlow from '../imgs/arbiterImgs/RichardFlow.png'
import Sitemap from '../imgs/arbiterImgs/Sitemap.png'
import ColourScheme from '../imgs/arbiterImgs/ColourScheme.png'
import WireHSN from '../imgs/arbiterImgs/WireHSN.png'
import WirePWE from '../imgs/arbiterImgs/WirePWE.png'
import ProtoSignIn from '../imgs/arbiterImgs/ProtoSignIn.png'
import ProtoSearch from '../imgs/arbiterImgs/ProtoSearch.png'
import ProtoNotifications from '../imgs/arbiterImgs/ProtoNotifications.png'
import ProtoProfile from '../imgs/arbiterImgs/ProtoProfile.png'
import ProtoWrite from '../imgs/arbiterImgs/ProtoWrite.png'
import ProtoEvent from '../imgs/arbiterImgs/ProtoEvent.png'





import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faPenAlt, faUserFriends} from '@fortawesome/free-solid-svg-icons'



export default function Arbiter() {

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div>
            <Container fluid>
                <h1 className='text-center project-title'>Arbiter - After All The Bells And Whistles</h1>
                <hr className="my-2" />
                <Row>
                    <Col md='4'>
                        <CardImg src={arbiter} style={{objectFit: 'contain'}}></CardImg>
                    </Col>
                    <Col md='2'>
                        <CardImg src={feedScreen} style={{objectFit: 'contain', maxHeight: '275px'}}></CardImg>
                    </Col>
                    <Col md='6'>
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
                        <li><strong>Design:</strong> Personas | Scenarios | User Flows | Sitemap | Visual Design
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
                            <p>As with Goodreads, <a href='https://www.slant.co/improve/options/19063/~imdb-review'>Slant.co’s </a> 
                                pros included <span className='pro'>the depth of movies available to search for and review</span>. 
                                However, some users expressed concern about <span className='con'>how IMDB recommended movies</span> and whether there were 
                                other sites with better engines for providing recommendations.
                            </p>
                            <p>	IMDB’s <a href='https://apps.apple.com/us/app/imdb-movies-tv-shows/id342792525'>Appstore reviews </a>
                                 praised its <span className='pro'>“Watch List” feature</span> for tracking movies and TV shows that 
                                users have watched or want to watch. Other reviewers showed frustration with the <span className='con'>search bar</span>, 
                                <span className='con'> history</span>, and the <span className='con'>navigation for writing their own reviews</span>.
                            </p>
                            <p><a href='https://medium.muz.li/imdb-redesigned-ux-ui-167a59c27642'>A redesign of the IMDB App by Nourdine Diouane </a> 
                                gave me many ideas for my layouts and user base. This 
                                case study demonstrated the various reasons people used the site, including selecting movies to watch 
                                (43%), saving and sharing movies (25%), and browsing movies (19%). The <span className='pro'>redesigned movie pages</span> helped 
                                me visualise how events could appear in this app.
                            </p>
                        </Col> 
                        <Col md='3'><CardImg src={imdbApp}></CardImg></Col>
                    </Row>
                    <p><u>TripAdvisor</u>
                        </p>
                    <Row>
                        <Col md='3'><CardImg src={tripadvisorApp}></CardImg></Col>
                        <Col md='9'>
                            <p>The <span className='pro'>number of reviews</span> on Tripadvisor for restaurants, hotels, etc. 
                                was viewed positively by users on 
                                <a href='https://www.slant.co/options/14774/~tripadvisor-review'> Slant</a>, whereas <span className='con'>outdated reviews</span>, 
                                <span className='con'> untrusted reviewers</span>, and <span className='con'>the prevalence of sponsored content </span> 
                                negatively impacted their experiences with the site.
                            </p>
                            <p>On the <a href='https://apps.apple.com/us/app/tripadvisor-hotels-vacation/id284876795'>Appstore</a>, 
                                users mentioned <span className='pro'>enjoying reading other people’s reviews</span>, and <span className='pro'>saving or sharing 
                                reviews</span> with their friends, but as with the other review apps found <span className='con'>searching</span> to be an occasionally 
                                unhelpful feature.
                            </p>
                            <p><a href='https://www.abhasmisraraj.com/design/tripadvisor'>Abhas Misraraj's usability testing </a> 
                                for the TripAdvisor app showed the importance of <span className='pro'>average ratings</span> and 
                                <span className='pro'> the total number of reviews</span> in influencing user decisions. They also discovered how important users 
                                found <span className='pro'>filters</span> when searching.
                            </p>
                        </Col> 
                    </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p>Throughout this research, I made notes on the common positive and negative themes that emerged across each 
                        website or app. From this, it became clear that several aspects should be carefully considered when building 
                        my own app.
                    </p>
                    <ol>
                        <li><strong>Highlight</strong> review numbers and averages.
                        </li>
                        <li><strong>Include</strong> an adaptable and accurate search feature.
                        </li>
                        <li><strong>Personalise</strong> what users see based on their history and choices.
                        </li>
                    </ol>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <p><em>User Analysis</em></p>
                    <p>While I intend for this app to be beneficial for fans of a multitude of sports, there appears to be more 
                        data available for some sports than others. To gather data on football fans, I consulted the 
                        <a href='https://www.efl.com/contentassets/5fd7b93168134ee0b9da11fa8e30abd0/efl-supporters-survey-2019-report.pdf'> EFL Supporters 
                        Survey 2019</a>, which has helped inform the design of our app. I also found a research publication by 
                        <a href='https://ec.europa.eu/competition/antitrust/cases/dec_docs/38173/38173_104_7.pdf'> Ofcom</a> on 
                        viewing trends and fan attitudes/behaviour which was helpful in deciding what features might be most important 
                        to our potential users.
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='4'><CardImg src={eflSurvey} style={{marginTop: '40px', marginBottom: '10px'}}></CardImg></Col>
                            <Col md='8'><p>Some interesting findings include:
                                        </p>
                                        <ul>
                                            <li>Participants in the survey were split 45/55 between those under/over 45 years old 
                                                and 86/14 male/female.
                                            </li>
                                            <li>89% of supporters viewed post-match content using at least one of their club’s 
                                                official channels.
                                            </li>
                                            <li>60% of supporters stated the importance of creating memories (in comparison to 
                                                winning games) when engaging with their club.
                                            </li>
                                            <li>In terms of what viewers wanted to find when viewing post-match content, 72% 
                                                searched for highlights/clips, 43% for team performance reviews, and 42% for 
                                                fan opinions and insights.
                                            </li>
                                            <li>Even down to lower levels, 88% of supporters regularly watch teams they do not support.
                                            </li>
                                            <li>Motivations for watching non-live games included relaxation and letting loose.
                                            </li>
                                        </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <p>From this data, it appears that there would be an interest in this sort of app from a wide fan base. 
                            This also helped me decide on what features users may be interested in seeing. The information 
                            regarding motivations influenced my design choices regarding colour schemes and layout.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <p><em>User Interviews</em></p>
                        <p>As a final part of my preliminary research, I conducted two interviews. First, I observed my participants 
                            using some 
                            of the existing review sites. I then asked them several open-ended questions about their reviewing 
                            habits. From this, I gathered data on how they might interact with my app and what they would like to 
                            see included.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Card>
                            <CardBody>
                        <Row>
                            <Col md='12' className='d-flex justify-content-start'><h5><em>"I might leave more reviews
                                if it was easier to do."</em> - Interviewee #1</h5></Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md='12' className='d-flex justify-content-end'>
                                <h5><em>"Sometimes (leaving reviews) feels like giving back after reading other peoples'."</em>
                                - Interviewee #2</h5>
                            </Col>
                        </Row>
                        </CardBody>
                        <Row>
                            <Col md='12'>
                            <CardFooter>Selected Quotes from User Interviews</CardFooter>
                            </Col>
                        </Row>
                        </Card>
                    </Col>    
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}} style={{paddingTop: '20px'}}>
                        <p><em>Areas of Focus</em></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <p>Looking at all my notes from Competitor Analysis, User Analysis, and User Interviews, I decided that a 
                            number of main features should take focus in the next development phases. I therefore wrote up three 
                            goals and kept them visible near me throughout my work to keep me focused when making any future design 
                            choices.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row  className='justify-content-center'>
                            <Col md='4'>
                                <Row className='justify-content-center success'>
                                <FontAwesomeIcon icon={faNewspaper} size='6x' className=''></FontAwesomeIcon>
                                </Row>
                                <Row className='justify-content-center'>
                                <h5>A Well Curated Reviews Feed</h5>
                                </Row>
                            </Col>
                            <Col md='4'>
                                <Row className='justify-content-center success'>
                                <FontAwesomeIcon icon={faPenAlt} size='6x'></FontAwesomeIcon>
                                </Row>
                                <Row className='justify-content-center'>
                                <h5>Easy-to-Create Written Reviews</h5>
                                </Row>
                            </Col>
                            <Col md='4'>
                            <Row className='justify-content-center success'>
                                <FontAwesomeIcon icon={faUserFriends} size='6x'></FontAwesomeIcon>
                                </Row>
                                <Row className='justify-content-center'>
                                <h5>Social Engagement Options</h5>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr className='my-2' />
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <h6 className='text-center project-title'>Design</h6>
                        <p><em>Personas</em></p>
                        <p>Arising out of my initial research, I have created two personas to represent how and why different 
                            users may make use of this app.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                        <Col md='6'>
                            <Card>
                                <CardBody>
                                    <CardTitle className='text-center'><strong>Sam Searcher </strong> - <em>A young adult fan who 
                                        wants to watch exciting recent sporting events without spoilers.
                                    </em></CardTitle>
                                    <CardImg src={Sam} style={{objectFit: 'contain'}}></CardImg>
                                    <CardText><strong>About:</strong> Sam works long, irregular hours and often finds it difficult to 
                                    arrange to see live sporting events. When he returns home, he sometimes watches Sky Sports in the 
                                    background, or searches for highlights on Reddit and other forums on his phone.</CardText>
                                    <CardText><strong>Behaviour:</strong> Sam will use the app when travelling home, or at home on the 
                                    sofa if there is no room to access his phone on the train. He will scroll through recent events or 
                                    sports he is interested in to see if there is anything worth watching that evening before bed.
                                    </CardText>
                                    <CardText><strong>Frustrations:</strong> When he uses his current sources of sports information, they often spoil the 
                                    most interesting happenings before he can see them. This makes watching highlights or replays less interesting for him.</CardText>
                                    <CardText><strong>Motivations:</strong> To not waste time watching boring events and to find events he might 
                                    otherwise have overlooked.
                                    </CardText>
                                    <CardText><strong>Goals:</strong> Find recent events which are worth revisiting, decide whether an 
                                    event he was going to watch is worth the time.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md='6'>
                        <Card>
                                <CardBody>
                                    <CardTitle className='text-center'><strong>Richard Reviewer </strong> - <em>An older fan who wants 
                                        to maintain a connection to his team and general sporting interests.
                                    </em></CardTitle>
                                    <CardImg src={Richard} style={{objectFit: 'contain'}}></CardImg>
                                    <CardText><strong>About:</strong> As a younger man, Richard had a large group of friends with whom he 
                                    attended football games and bought PPV boxing events to watch with. He has since moved away to start a 
                                    family and doesn’t have time to do this anymore, but still wants to stay involved with the social aspect 
                                    of watching sports.
                                    </CardText>
                                    <CardText><strong>Behaviour:</strong> Richard will leave reviews for most events he watches 
                                    immediately after viewing. He will engage with others’ reviews, deciding whether he agrees with 
                                    them or not.
                                    </CardText>
                                    <CardText><strong>Frustrations:</strong> Richard misses having other interested parties listening to his views 
                                    and wants to have his voice heard. As of now, his only outlet is debate on online forums, on which his posts 
                                    are often drowned out or overlooked.
                                    </CardText>
                                    <CardText><strong>Motivations:</strong> Richard wants to re-ignite the social side of sports in his life and 
                                    begin interacting with like-minded fans again.
                                    </CardText>
                                    <CardText><strong>Goals:</strong> Leave his opinion on what he has watched and have others rate his 
                                    reviews as helpful.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}} style={{paddingTop: '20px'}}>
                        <p><em>Scenarios</em></p>
                        <p>From these personas, I created two scenarios which the users might encounter. After writing out the steps 
                            that Richard and Sam would need to go through to achieve their goals, I made flowcharts using draw.io to 
                            determine what information they would need to see on each page and what actions they would need to be able 
                            to take as they continued along their journeys.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='12'>
                                <Card>
                                    <CardBody>
                                        <CardTitle><strong>Wimbledon After Work - Narrative</strong></CardTitle>
                                        <CardText>Sam is on the train home from work on a hot summer day. Wimbledon is on, but he has 
                                            not been able to see any games as he has been in the office all day. He manages to grab a 
                                            seat and open the app to see if there are any games worth checking out when he gets home. 
                                            Several of the day’s most popular matches are listed in order of their rating. Sam clicks 
                                            on one match between two players he likes. He sees how the match has been rated on metrics 
                                            such as overall importance and excitement. He saves the game to his watch list so he 
                                            doesn’t forget when he searches for it at home later.
                                    </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='12'>
                            <Card>
                                    <CardBody>
                                        <CardTitle><strong>Wimbledon After Work - User Flow</strong></CardTitle>
                                        <CardImg style={{objectFit: 'contain', maxHeight: '90%', maxWidth: '90%'}} src={SamFlow}></CardImg>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                        <Col md='12'>
                            <Card>
                                    <CardBody>
                                        <CardTitle><strong>Were They Ready To Rumble? - Narrative</strong></CardTitle>
                                        <CardText>Richard has finished watching a live UFC event at home on his own. He enjoyed the 
                                            event and now wants to see what other people thought about it and give his own opinion. 
                                            He finds writing long messages difficult, but wants to give a short appraisal of what he 
                                            enjoyed and give the event a rating. He opens the app and immediately sees the event 
                                            listed among his interests. He clicks on it to see what other people have thought. He 
                                            reads several reviews he agrees with and clicks on a button to demonstrate this. He then 
                                            makes his own review and adds it to the growing list. When he is finished, he continues 
                                            reading other reviews and waits to see if anyone finds his addition helpful.
                                    </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='12'>
                            <Card>
                                    <CardBody>
                                        <CardTitle><strong>Were They Ready To Rumble? - User Flow</strong></CardTitle>
                                        <CardImg style={{objectFit: 'contain', maxHeight: '90%', maxWidth: '90%'}} src={RichardFlow}></CardImg>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}} style={{paddingTop: '20px'}}>
                        <p><em>Sitemap</em></p>
                        <p>From all my research so far, I began to form a clearer picture of how my app should be structured and 
                            what pages were necessary to form a Minimum Viable Product. I created a sitemap showing how each page 
                            should link together and which would allow our two personas to complete their desired goals.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                    <img src={Sitemap} style={{objectFit: 'contain', maxHeight: '100%', maxWidth: '100%'}}></img>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}} style={{paddingTop: '20px'}}>
                        <p><em>Visual Design</em></p>
                        <p>With the sitemap established, I began making some initial sketches and thinking of some colour scheme 
                            ideas to fit with the theme of the site. 
                        </p>
                        <p>I decided on a monochromatic colour scheme with some complementary accents acquired using a colour wheel (SOURCE). Initially, I considered 
                            using a green theme to resemble common sports pitches and as a neutral team colour, but felt that this 
                            would be too limiting and potentially alienating for fans of other sports. Instead, I chose a shade of 
                            blue not commonly associated with many major sports teams and in keeping with the motivations of our users 
                            for opening the app when they are relaxing. These colours will be contrasted with the reviews and 
                            individual ratings, which are sufficiently distinct to avoid confusing the user about their purpose. 
                        </p>
                        <CardImg src={ColourScheme} style={{objectFit: 'contain'}}></CardImg>
                        <p>In terms of typography, I used the <a href='https://learnui.design/blog/android-material-design-font-size-guidelines.html#md-mobile'>
                            recommended font size</a> of 20px for Headers, 16pt for Input Text and Subheaders, 
                            and 14pt for Body Text. I used Roboto font as this is considered standard for Android apps.
                        </p>
                    </Col>
                </Row>
                <hr className="my-2" />
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <h6 className='text-center project-title'>Build</h6>
                        <p><em>LoFi Wireframes</em></p>
                        <p>To begin with, I made several low fidelity wireframes with Figma to plan out how I wanted to structure the 
                            app based on my earlier sketches. Some of these designs made it into later iterations of the app, and some 
                            were scrapped as better ideas came along.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col><img src={WireHSN} style={{maxWidth: '100%'}}></img></Col>
                        </Row>
                        <Row>
                            <Col><img src={WirePWE} style={{maxWidth: '100%'}}></img></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <p style={{paddingTop: '20px'}}><em>Prototypes</em></p>
                        <p>After creating several wireframes for each level of the app, I began making a working prototype also 
                            using Figma. This incorporated the structure of my wireframes along with several UI and colour scheme 
                            additions, along with hotspots to link the pages together. You can view a working prototype here (LINK).
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='6'>
                            <img src={ProtoSignIn} style={{maxWidth: '100%'}}></img>
                        </Col>
                        <Col md='6' className='my-auto'>
                            <p><strong>Sign In</strong></p>
                            <p>The opening screen is designed to have minimal clutter and a simple layout, with only the logo, slogan, 
                                and sign up/in buttons present. I designed the logo to represent a speedometer or metronome, indicating 
                                increasing review scores and swaying opinions. 
                            </p>
                        </Col>
                        </Row>
                        <Row>
                        <Col md='6' className='my-auto'>
                            <p><strong>Home</strong></p>
                            <p>The home page is divided into two separate feeds, one for overall popular events and one tailored 
                                for the user’s interests. It is further divided up by interests to personalise events to the user. 
                                This is done to avoid cognitive overload by presenting too many options at once. All additional 
                                features (e.g. sharing, saving to watch list, etc) are placed on the Event Info screen instead. As 
                                with all pages, recommended standard sans-serif fonts are used (LINK).
                            </p>
                            <p><strong>Navigation</strong></p>
                            <p>The primary navigation bar is placed at the bottom for ease of access in the most common thumb 
                                positions (LINK). The “Search” button is in the centre to make it as visible as possible. Each nav 
                                icon is taken from the “Evericons” collection of commonly used icons on Figma. At the top, the app 
                                logo is displayed prominently in the center and is clickable to return to the home page as recommended 
                                here (LINK). Settings are in the top right, and a back button is placed in the top left to return to 
                                the previous screen. Drop shadows are included to encourage scrolling through the feed. Both bars are 
                                visible on every page and were made uniform with Figma’s “components” feature.
                            </p>
                        </Col>
                        <Col md='6'>
                            <img src={feedScreen} style={{maxWidth: '100%'}}></img>
                        </Col>
                        </Row>
                        <Row>
                            <Col md='6'>
                            <img src={ProtoSearch} style={{maxWidth: '100%'}}></img></Col>
                            <Col md='6' className='my-auto'>
                                <p><strong>Search</strong></p>
                                <p>Search positioning and layout was created in line with this “best practices” article (LINK). 
                                The suggestion box includes informal, short content to guide the user. User Rating and Number of 
                                Reviews are given prominence due to our research on other review sites. I included tags after 
                                consulting this article (LINK) which recommended their use for content-focused sites with few 
                                different pages but many topics.
                            </p></Col>
                        </Row>
                        <Row>
                            <Col md='6' className='my-auto'>
                                <p><strong>Notifications</strong></p>
                                <p>As with search, the content here is informal and short, with commendations to encourage engagement 
                                    from users. Avatars are also included to improve user engagement, as suggested by this article 
                                    (LINK).
                            </p></Col>
                            <Col md='6'>
                            <img src={ProtoNotifications} style={{maxWidth: '100%'}}></img></Col>
                        </Row>
                        <Row>
                            <Col md='6'>
                            <img src={ProtoProfile} style={{maxWidth: '100%'}}></img></Col>
                            <Col md='6' className='my-auto'>
                                <p><strong>Profile</strong></p>
                                <p>The profile page offers users the chance to adapt the interests they choose when they first 
                                    sign up. Most recent Reviews and Watch List are displayed, while the rest are hidden to avoid 
                                    clutter. Users are assigned a reviewer status based on reviews. This is to encourage participation 
                                    and somewhat gamify (LINK) the app, with users gaining status upgrades as they leave reviews. 
                                    This has the added benefit of helping see which reviewers are most trusted, and would help with 
                                    ranking reviews for display under Event Info.
                            </p></Col>
                        </Row>
                        <Row>
                            <Col md='6' className='my-auto'>
                                <p><strong>Write Review</strong></p>
                                <p>Leaving a review is kept simple. There is only a small amount of space to write a comment, since 
                                    users will be mobile and potentially unwilling to write long messages on a phone. Readers are 
                                    also unlikely to want to read long messages either and we don’t want to dedicate the whole screen 
                                    to a single review. We used Amazon (LINK) as a baseline in deciding precisely how long to allow 
                                    reviews to be. We use icons rather than numbers to make use of the touchscreen and to add colour 
                                    (red to contrast with the blue and add excitement to leaving a review). Each category has an 
                                    information button next to it to clarify its role to users if needed.

                            </p></Col>
                            <Col md='6'>
                            <img src={ProtoWrite} style={{maxWidth: '100%'}}></img></Col>
                        </Row>
                        <Row>
                            <Col md='6'>
                            <img src={ProtoEvent} style={{maxWidth: '100%'}}></img></Col>
                            <Col md='6' className='my-auto'>
                                <p><strong>Event Info</strong></p>
                                <p><em>Note: Images used here are mostly stock and would not be representative of the real image used in 
                                    the app. The main reason for this is so I don’t get sued (Man U link).</em>
                                </p>
                                <p>We open with a relevant picture to draw attention. Overall rating and number of reviews are 
                                    displayed prominently again in line with our research. An external link to highlights might be 
                                    offered if one can be found, as discussion on the EFL survey suggested this is important to 
                                    potential users. Comments written in a review are initially hidden to avoid spoilers and to 
                                    save screen space. Users are able to like reviews both to boost reviewer ratings and to help 
                                    sort reviews, modelled after the success of Amazon’s “Did you find this review helpful?” button.
                                </p>    
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr className='my-2' />
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <h6 className='text-center project-title'>Testing</h6>
                        <p><em>Usability Testing</em></p>
                        <p>To test the functionality and usability of the app, I gave a series of 8 tasks to two volunteer testers. A 
                            selection of the most significant outcomes and implications are displayed below. I took on the role of 
                            facilitator to guide the testers, encouraging them to think aloud throughout, measured their success on the tasks, 
                            and observed their reactions (e.g. frustrations, satisfaction, level of effort required). 
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <Row>
                            <Col md='4'>
                                <Card>
                                    <CardBody>
                                        <CardTitle><strong>Task #1: Writing a Review</strong></CardTitle>
                                        <CardSubtitle>You watched a basketball game this afternoon and want to leave a review.
                                        </CardSubtitle>
                                        <CardText className='pro text-center' style={{paddingTop: '10px'}}>Success: 2/2</CardText>
                                        <CardText><strong>Notes: </strong><em>Users clicked on both the "Write" and "Search" options
                                        to leave a review, which I hadn't considered.
                                        When clarifying their thoughts, one tester reported that their decision depended on 
                                        if they wanted to see other people's reviews first or not.</em></CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card>
                                    <CardBody>
                                        <CardTitle><strong>Task #2: Finding a Review</strong></CardTitle>
                                        <CardSubtitle>You just got home from work and want to find a football game to watch before bed.
                                        </CardSubtitle>
                                        <CardText className='pro text-center' style={{paddingTop: '10px'}}>Success: 2/2</CardText>
                                        <CardText><strong>Notes: </strong><em>One user stated they would check their Notifications tab
                                            to see if there were recommendations there, which I hadn't thought of when brainstorming
                                            what notifications should appear.</em></CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md='4'>
                                <Card>
                                    <CardBody>
                                        <CardTitle><strong>Task #2: Expressing Appreciation for a Review</strong></CardTitle>
                                        <CardSubtitle>You read a review for an event you watched and want to show that you appreciated
                                            the reviewer's help.
                                        </CardSubtitle>
                                        <CardText className='pro text-center' style={{paddingTop: '10px'}}>Success: 2/2</CardText>
                                        <CardText><strong>Notes: </strong><em>Shorthand letters for individual ratings (Importance, etc.)
                                            took one user a few seconds to understand. Changing these to icons or another alternative
                                            might be useful before delivering the final product.</em></CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <p><em>User Feedback</em></p>
                        <p>As part of qualitative interviews with testers following their usability testing, I asked several open ended questions
                            and revisited some statements testers made during the tests for clarification. Pleasingly, both testers found the layout 
                            and flow of each screen clear and easy to use. As we expected from our initial research, they appreciated the filters
                            on the Search page for narrowing down results. Our use of icons was clearly understood at each stage without disruption
                            to task completion. One user required a few seconds to understand the icon for our Settings screen, so in future I  
                            would consider changing this to a more traditional gear icon.
                        </p>
                    </Col>
                </Row>
                <hr className='my-2' />
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <h6 className='text-center project-title'>Summary</h6>
                        <p>This was my first experience with designing UX for an app entirely from the ground up. Doing it for myself 
                            was an interesting and eye-opening experience as to how each section of the design system works together 
                            to create the whole. Throughout the process, I consulted many sources to determine best practices and 
                            this led to me finding new information I had not been exposed to in my online UX courses. 
                        </p>
                        <p>	The process demonstrated to me the importance of testing after building and iterating through the whole 
                            design again, as several areas arose from participants that I had not previously considered. I also 
                            gained the opportunity to build my first working prototypes with Figma, which I found particularly 
                            enjoyable and a lot more straightforward than I had anticipated. 
                        </p>
                        <p>	Personally, I found the User Research and Interface Design sections to be the most stimulating areas of 
                            the project and would be very interested in continuing a career in UX focusing on either of these areas, 
                            although as I go on to work on other projects I am still open to finding out more about other topics, 
                            such as Usability Testing and Information Architecture. 
                        </p>
                    </Col>
                </Row>
                <hr className='my-2' />
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <h6 className='text-center project-title'>References</h6>
                        <p>Before and throughout this project, I consulted a number of articles to help inform and justify my decisions. Most of them
                        are linked throughout this Case Study, but below you can find an exhaustive list of everything I read for this design process.
                        </p>
                        <ul>
                            <li>Article A</li>
                            <li>Article B</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}
