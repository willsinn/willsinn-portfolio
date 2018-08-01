import React, { Component } from 'react';
import SkillsStyles from '../Styles/SkillsStyles.css';
import SkillsPieChart from '../Assets/SkillsPieChart';
import SkillsBarChart from '../Assets/SkillsBarChart';
import LinearDeterminate from '../Assets/LinearDeterminate';
import { withStyles } from '@material-ui/core/styles';

class SkillsSection extends Component {
  render() {
    const { classes } = this.props;
    return (

        <section className={classes.root}>
          Skills Page
            <SkillsPieChart/>
            <LinearDeterminate/>
        </section>
    );
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    
  },

});


export default withStyles(styles, {})(SkillsSection);
