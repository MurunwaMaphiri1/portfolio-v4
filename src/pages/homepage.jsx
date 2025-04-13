import { useState, useEffect } from 'react';
import {
  Cloud,
  fetchSimpleIcons,
  // ICloud,
  renderSimpleIcon,
  // SimpleIcon,
} from "react-icon-cloud";
// import { HTML5, CSS3, NodeJs, JavaScript, TypeScript, Azure, NPM, Git, GitHubLight, CSharp, MongoDB, PostgreSQL, Postman, ExpressJsLight, VisualStudioCode, React } from 'developer-icons';

export default function HomePage() {
  const [icons, setIcons] = useState(null);

  const iconSlugs = [
    'react',
    'sharp',
    'html5',
    'css3',
    'nodedotjs',
    'javascript',
    'typescript',
    'azure',
    'git',
    'github',
    'visualstudiocode',
    'npm',
    'dotnet',
    'mongodb',
    'postgresql',
    'postman',
    'express',
    'rider',
    'intellijidea'
  ];

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setIcons);
  }, []);

  const renderIcons = () => {
    if (!icons) return <div>Loading icons...</div>;
    
    return Object.values(icons.simpleIcons).map((icon) => 
      renderSimpleIcon({
        icon,
        size: 60,
        aProps: {
          onClick: (e) => e.preventDefault(),
          style: { 
            display: 'flex',
            filter: 'brightness(0) invert(1)' // Makes icons white
          }
        }
      })
    );
  };

  return (
    <>
      <div className="container">
        <div className="details-container">
          <img
            src="./images/shoyo.jpg"
            alt="Profile"
          />
          <div className="name-container">
            <h1>
              Hey, I'm Murunwa
            </h1>
            <p>
              Fullstack Developer
            </p>
          </div>
        </div>
        <div className="about-me-container">
          <h3>
            $ cat ~/about-me.txt 
          </h3>
          <p>
            I'm the type of person who loves building cool things with code—whether it's a clean React UI or a solid backend with .NET. I'm constantly learning, experimenting and trying to make each project better than the last. Think of it like my own little tech journey—kind of like a training arc, minus the dramatic music (most of the time). If you're into creating, breaking and fixing stuff in the world of tech, you're in the right place.
          </p>
        </div>
        <div className='about-me-container'>
          <h3>
            $ connect --with me
          </h3>
          <div className='links-container'>
            <a href="https://github.com/MurunwaMaphiri1" target="_blank" rel="noopener noreferrer">
              <i class="devicon-github-original-wordmark" style={{ fontSize: '2em'}}></i>
            </a>
            <a href="https://www.linkedin.com/in/murunwa-maphiri-307b83283/" target="_blank" rel="noopener noreferrer">
              <i class="devicon-linkedin-plain" style={{ fontSize: '2em' }}></i>
            </a>
          </div>
        </div>
        <div className="skills-container">
          <h3>
            $ tail -f my_skills.log
          </h3>
          <div className="inner-skills-container">
            <div className='flex-skills-container'>
              <p>
                C#
              </p>
              <p>
                JavaScript
              </p>
              <p>
                HTML
              </p>
              <p>
                CSS
              </p>
              <p>
                React
              </p>
              <p>
                NodeJS
              </p>
              <p>
                ExpressJS
              </p>
              <p>
                .NET
              </p>
              <p>
                PostgreSQL
              </p>
              <p>
                Git
              </p>
              <p>
                NPM
              </p>
              <p>
                Postman
              </p>
              <p>
                Azure
              </p>
            </div>
            <div className="skill-sphere">
              <Cloud
                id="icon-cloud"
                containerProps={{
                  style: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%'
                  },
                }}
                options={{
                  textColour: '#FFFFFF',
                  outlineColour: 'transparent',
                  depth: 0.8,
                  wheelZoom: false,
                  imageScale: 1.2,
                  activeCursor: 'default',
                  tooltip: 'native',
                  initial: [0.1, -0.1],
                  clickToFront: 500,
                }}
              >
                {renderIcons()}
              </Cloud>
            </div>
          </div>
        </div>
        <div className="about-me-container">
          <h3>
            $ tree ~/dev-journey/projects
          </h3>
          <p>
            The stuff I've cooked up
          </p>
        </div>
        <div className='project-section'>
          <div className='project-container'>
            
          </div>
        </div>
      </div>
    </>
  )
}