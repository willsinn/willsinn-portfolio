import React, { Component } from 'react';
import SkillsStyles from '../Styles/SkillsStyles.css';
import SkillsPieChart from '../Assets/SkillsPieChart';
import SkillsBarChart from '../Assets/SkillsBarChart';
import SkillsProgressChart from '../Assets/SkillsProgressChart';





class SkillsPage extends Component {



  render() {

    return (
        <div className="skills-page">
          Skills Page

            <SkillsPieChart />
            <SkillsProgressChart />
        </div>
    );
  }
}

export default SkillsPage;
