import React, { Component } from 'react';
import SkillsPieChart from '../Assets/SkillsPieChart';
import LinearDeterminate from '../Assets/LinearDeterminate';
import { withStyles } from '@material-ui/core/styles';

class SkillsSection extends Component {
  render() {
    const { classes } = this.props;
    return (

        <section className={classes.root}>
          <div className={classes.contentContainer}>
            <div className={classes.titleContainer}>
              <div className={classes.beforeTitle}>_______________</div>
              <h1 className={classes.skillsTitle}>Work</h1>
              <div className={classes.afterTitle}>_______________</div>
            </div>
          </div>
              <SkillsPieChart className={classes.pieChart} />
              <div className={classes.pieChart}>
                aksdlhfhweiuhriqowlberqiuewhrlqhweriquwheruqhwerihqwuehrqwehriqwuehr
                aksdlhfhweiuhriqowlberqiuewhrlqhweriquwheruqhwerihqwuehrqwehriqwuehr
                aksdlhfhweiuhriqowlberqiuewhrlqhweriquwheruqhwerihqwuehrqwehriqwuehr
                aksdlhfhweiuhriqowlberqiuewhrlqhweriquwheruqhwerihqwuehrqwehriqwuehr
                aksdlhfhweiuhriqowlberqiuewhrlqhweriquwheruqhwerihqwuehrqwehriqwuehr
                aksdlhfhweiuhriqowlberqiuewhrlqhweriquwheruqhwerihqwuehrqwehriqwuehr
              </div>
        </section>
    );
  }
}
const styles = theme => ({
  root: {
    display: 'block',
    backgroundColor: '#7fb0a6',
    paddingBottom: '20%',
  },
  contentContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  titleContainer: {
    paddingTop: '5%',
    margin: '0',
    fontSize: '36px',
    fontWeight: '600',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  beforeTitle: {
    marginBottom: '3%',
    marginRight: '15%',
    borderBottom: '5px solid rgba(0, 0, 0, 0.25)',
    color: 'transparent',
  },
  skillsTitle: {
    textTransform: 'uppercase',
  },
  afterTitle: {
    marginLeft: '15%',
    marginBottom: '3%',
    borderBottom: '5px solid rgba(0, 0, 0, 0.25)',
    color: 'transparent',
  },
  workLine: {
    borderBottom: '5px solid white',
    color: 'transparent',
  },
  pieChart: {
    width: '80%',
    overflow: 'visible',
  },
  barChart: {
    width: '20%',
  }
});
export default withStyles(styles, {})(SkillsSection);
