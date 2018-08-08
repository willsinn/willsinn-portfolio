import React, { Component } from 'react';
import SkillsPieChart from '../Assets/SkillsPieChart';
import LinearDeterminate from '../Assets/LinearDeterminate';
import { withStyles } from '@material-ui/core/styles';

class SkillsSection extends Component {
  render() {
    const { classes } = this.props;
    return (

        <section className={classes.root}>
              <SkillsPieChart className={classes.pieChart} />
        </section>
    );
  }
}
const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#7fb0a6',
  },

});
export default withStyles(styles, {})(SkillsSection);
