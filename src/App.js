import { useState } from 'react';

import Projects from './components/projects';
import CookieText from './components/cookie-text';

import './App.css';

function App() {
  
  const [showCookieText, setShowCookieText] = useState(false);

  return (
    <div className="App">
      <header className="mid-div">
        <div className="heading">
            <h1>
            Project Portfolio - Niklas Penttinen              
            </h1>
            <p>
              Welcome to my portfolio of selected latest software projects. Interested in earlier ones? Please check and contact me at <a href="https://www.linkedin.com/in/niklaspenttinen/">LinkedIn</a>.
            </p>        
          </div>
      </header>
      <div className="mid-div">
        {Projects.map( (project) => {
          return (
            <div className="round-box" key={project.id}>
              <div className='grid-container'>
                <div>
                <h3>
                  {project.link 
                    ? <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
                    : <>{project.title}</>
                  }
                </h3>
                <p>{project.description}</p>
                <p>Technologies: {project.tech}</p>
                <p>Role: {project.role}, {project.year}</p>
                </div>
                <div className="project-image-frame">
                  <img className="project-image" src={project.imgUrl} alt={project.altText}></img>
                  <div className="project-image-text">{project.imgText}</div>
                </div>
              </div>
            </div>
          )
        })}
      <div className="footer-div" onClick={() => setShowCookieText(!showCookieText)}>
        &copy; Niklas Penttinen | Cookie policy {showCookieText && <CookieText />}
      </div>  
      </div>
    </div>
  );
}

export default App;
