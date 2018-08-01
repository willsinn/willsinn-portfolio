import React, { Component } from 'react';
import SkillsStyles from '../Styles/SkillsStyles.css';
import SkillsPieChart from '../Assets/SkillsPieChart';
import SkillsBarChart from '../Assets/SkillsBarChart';
import LinearDeterminate from '../Assets/LinearDeterminate';




class SkillsSection extends Component {





  render() {




    return (
        <section className="skills-page">
          Skills Page

            <SkillsPieChart

              />

            <LinearDeterminate
             />
        </section>
    );
  }
}

export default SkillsSection;
