import React, { Component } from 'react';
import SkillsStyles from '../Styles/SkillsStyles.css';
import SkillsPieChart from '../Assets/SkillsPieChart';
import SkillsBarChart from '../Assets/SkillsBarChart';





class SkillsPage extends Component {



  render() {
    return (
        <div className="skills-page">
          Skills Page
            <SkillsPieChart />
            <SkillsBarChart />
        </div>
    );
  }
}

export default SkillsPage;
