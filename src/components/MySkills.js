import React from 'react';
import '../components/MySkills.css';
import Github from '../skills/github.jpeg';
import Npm from '../skills/npm.jpeg';
import Csss from '../skills/css.jpeg';
import HTMLL from '../skills/html.jpeg';
import Material from '../skills/materialUI.jpeg';
import Reactt from '../skills/react.jpeg';
import Redux from '../skills/redux.jpeg';
import Jss from '../skills/javascript.jpeg';

function MySkills() {
  return (
  <div>
    <br></br>
    <div className='title_skills'><h1>My Skills</h1></div>
    <br></br>
    <div className='mskill' id='section-3'>
      <div className="skillsItem">
        <img src={Github} className="skillsLogo" alt="GitHub" />
        <h1>GitHub</h1>
      </div>
      <div className="skillsItem">
        <img src={Jss} className="skillsLogo" alt="JavaScript" />
        <h1>JavaScript</h1>
      </div>
      <div className="skillsItem">
        <img src={Redux} className="skillsLogo" alt="React Redux" />
        <h1>React Redux</h1>
      </div>
      <div className="skillsItem">
        <img src={Reactt} className="skillsLogo" alt="React" />
        <h1>React</h1>
      </div>
      <div className="skillsItem">
        <img src={HTMLL} className="skillsLogo" alt="HTML" />
        <h1>HTML</h1>
      </div>
      <div className="skillsItem">
        <img src={Material} className="skillsLogo" alt="Material UI" />
        <h1>Material UI</h1>
      </div>
      <div className="skillsItem">
        <img src={Npm} className="skillsLogo" alt="Npm" />
        <h1>Npm</h1>
      </div>
    </div>
    </div>  
  );
}

export default MySkills;
