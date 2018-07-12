import React, { Component } from 'react';
import SkillsStyles from '../Styles/SkillsStyles.css';
import SkillsChart from '../Assets/SkillsChart';




class Skills extends Component {



  render() {
    const languages = this.props.languages;
    const focus = this.props.focus;
    var name = [];
    var value = [];

    languages: [
      name: 'Group A', value: 400,
      name: 'Group B', value: 300
    ]

    focus: [
      name: 'Group C', value: 300,
      name: 'Group D', value: 200
    ];
    return (
        <div className="skills-page">
          Skills Page
          <div>
            <SkillsChart
            {props.languages}
            {props.focus}
            />
          </div>
        </div>
    );
  }
}

export default Skills;
