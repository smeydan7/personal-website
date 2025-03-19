import pic from './resources/IMG_6762.jpg'
import github from './resources/github.png'
import linkedin from './resources/hd-square-black-outline-linkedin-icon-png-7017516950455535cziiy18li.png'
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
          I’m a 4th year Computer Science student at the University of Waterloo with real-world experience building full-stack applications. 
          I’m passionate about leveraging cutting-edge technologies to solve complex problems and create user-focused solutions.
          Whether it’s collaborating on cross-functional teams or exploring new tools on my own, 
          I’m driven by a passion for creating user-focused solutions that make a real impact.
          </div>
        </div>
      </div>
        <div id="footer">
          © 2025 - Sam Meydanshahi
        </div>
    </div>
  );
}

export default App;
