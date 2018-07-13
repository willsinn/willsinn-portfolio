import React, { Component } from 'react';
import SkillsStyles from '../Styles/SkillsStyles.css';
import SkillsPieChart from '../Assets/SkillsPieChart';




class SkillsPage extends Component {



  render() {
    return (
        <div className="skills-page">
          Skills Page
          <div>
            <SkillsPieChart />
          </div>
        </div>
    );
  }
}

export default SkillsPage;
