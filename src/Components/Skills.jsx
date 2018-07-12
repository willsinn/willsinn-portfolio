import React, { Component } from 'react';
import SkillsStyles from '../Styles/SkillsStyles.css';
import SkillsChart from '../Assets/SkillsChart';




class Skills extends Component {



  render() {
    return (
        <div className="skills-page">
          Skills Page
          <div>
            <SkillsChart />
          </div>
        </div>
    );
  }
}

export default Skills;
