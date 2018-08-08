import React, { Component } from 'react';
import SkillsPieChart from '../Assets/SkillsPieChart';
import LinearDeterminate from '../Assets/LinearDeterminate';
import { withStyles } from '@material-ui/core/styles';
import SkillsCharts from './SkillsCharts';

class SkillsSection extends Component {
  render() {
    const { classes } = this.props;
    return (

        <section className={classes.root}>
          <div className={classes.titleWrapper}>
            <div className={classes.titleContainer}>
              <div className={classes.beforeTitle}>_______________</div>
              <h1 className={classes.skillsTitle}>Work</h1>
              <div className={classes.afterTitle}>_______________</div>
            </div>
          </div>
            <div className={classes.contentContainer}>
              <div className={classes.contentText}>Jack of all UX trades, master of a growing list. My passion lies in crafting an emersive UX through beautiful UI & interactions. My current toolset is coding these UIs in Sublime Text, Bootstrap, jQuery, Highcharts and D3.js, but:</div>
              <div className={classes.contentTextDesigned}>Any good designer can design in ANY medium just likeany good developer can program in ANY language.</div>
            </div>

          <SkillsCharts />
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
  titleWrapper: {
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
  titleText: {
    fontSize: '18px',
  },
  contentContainer: {
  },
  contentText: {},
  contentTextDesigned: {},
});
export default withStyles(styles, {})(SkillsSection);
