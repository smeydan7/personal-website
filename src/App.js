// import pic from './resources/1-cb2185ca.jpg'
import pic from './resources/Headshot.png'
import github from './resources/github.png'
import linkedin from './resources/hd-square-black-outline-linkedin-icon-png-7017516950455535cziiy18li.png'
import resume from './resources/Sept2025_Resume.pdf'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="container">
        <header className="App-header">
          <h1>Hi, I'm Sam Meydanshahi 👋🏽</h1>
            <div id="bio">
              <img src={pic} alt="Sam Meydanshahi" className="profile-photo"/>
            </div>
            <div id="icons">
              <button><img src={github} alt=""/><a href='https://github.com/smeydan7'>GitHub</a></button>
              <button><img src={linkedin} alt="" /><a href='https://www.linkedin.com/in/sam-meydanshahi/'>LinkedIn</a></button>
            </div>
        </header>
        <div id="main">
          <div id="info">
          I’m a 4th year Computer Science student at the University of Waterloo with experience building software 
          used by financial institutions, real estate professionals, and everyday users. My work spans from optimizing 
          large scale payment systems at Payments Canada to developing full stack apps and AI driven tools, with a focus 
          on creating reliable, intuitive, and impactful technology. I thrive both in collaborative teams and working 
          independently, and I’m driven to do well and make a real impact wherever I contribute.
          </div>
          <div id="seeking">
            I am currently seeking 2026 internships in SWE and new grad roles for late 2026.
          </div>
          <section id="resume" style={{ textAlign: 'center', marginTop: '40px' }}>
          <h2>Resume</h2>
          <button className="resume-button">
            <a href={resume} target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </button>
        </section>
          <div id="previously">
            I previously worked at...
          </div>
        </div>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#f76c6c', color: '#fff' }}
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
          >
            <h3 className="vertical-timeline-element-title">wat.ai</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Machine Learning Engineer
            </h4>
            <p>
              September 2025 - Present
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#f76c6c', color: '#fff' }}
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
          >
            <h3 className="vertical-timeline-element-title">Payments Canada</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Developer
            </h4>
            <p>
              May 2025 - August 2025
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#f76c6c', color: '#fff' }}
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
          >
            <h3 className="vertical-timeline-element-title">Teranet</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Developer
            </h4>
            <p>
              January 2024 - April 2024
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#f76c6c', color: '#fff' }}
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
          >
            <h3 className="vertical-timeline-element-title">Teranet</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Engineer
            </h4>
            <p>
            January 2023 - April 2023
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div id="education">
          My Education:
        </div>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#f76c6c', color: '#fff' }}
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
          >
            <h3 className="vertical-timeline-element-title">Univeristy of Waterloo</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Computer Science
            </h4>
            <p>
              2021 - 2026
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#f76c6c', color: '#fff' }}
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fff' }}
          >
            <h3 className="vertical-timeline-element-title">Earl Haig Secondary School</h3>
            <h4 className="vertical-timeline-element-subtitle">
              High School (with French Certificate)
            </h4>
            <p>
            2017 - 2021
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div id="info">
          In my free time I like to:
            <p>⚽️ Play soccer</p>
            <p>📺 Watch live sports</p>
            <p>☀️ Hangout with friends and family</p>
            <p>📈 Try not to lose all my money investing in stocks</p>
        </div>
        <div id="emailText">
          Feel free to reach out at <a className="emailLink" href='mailto:smeydans@uwaterloo.ca'>smeydans@uwaterloo.ca</a> 😃
        </div>
      </div>
        <div id="footer">
          © 2025 - Sam Meydanshahi
        </div>
    </div>
  );
}

export default App;
