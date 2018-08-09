import React, { Component } from 'react';
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
              <h1 className={classes.skillsTitle}>Skills</h1>
              <div className={classes.afterTitle}>_______________</div>
            </div>
          </div>
          <div className={classes.contentWrapper}>
            <div className={classes.contentContainer}>
              <div className={classes.contentText}>Jack of all UX trades, master of a growing list. My passion lies in crafting an emersive UX through beautiful UI & interactions. My current toolset is coding these UIs in Sublime Text, Bootstrap, jQuery, Highcharts and D3.js, but:</div>
              <div className={classes.styledContainer}>
                <div className={classes.contentStyledText}>Any good designer can design in ANY medium just like any good developer can program in ANY language.</div>
              </div>
            </div>
          </div>
          <SkillsCharts className={classes.chartsContainer} />
        </section>
    );
  }
}
const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#7fb0a6',
  },
  titleWrapper: {
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
    marginBottom: '2.5%',
    marginRight: '15%',
    borderBottom: '5px solid rgba(0, 0, 0, 0.25)',
    color: 'transparent',
  },
  skillsTitle: {
    textTransform: 'uppercase',

  },
  afterTitle: {
    marginLeft: '15%',
    marginBottom: '2.5%',
    borderBottom: '5px solid rgba(0, 0, 0, 0.25)',
    color: 'transparent',
  },
  titleText: {
    fontSize: '18px',
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  contentContainer: {
    width: '80%',
    paddingBottom: '5%',
    textAlign: 'center',
  },
  contentText: {
    paddingBottom: '1.5%',
    fontSize: '18px',
    color: 'white',
    fontWeight: '50',

  },
  styledContainer: {
    padding: '1.5%',
    border: '1px solid #53867b',
    backgroundColor: '#609c90',
    borderRadius: '4px',
    borderStyle: 'inset',
    display: 'flex',
    justifyContent: 'center',
  },
  contentStyledText: {
    width: '40%',
    fontSize: '18px',
    color: 'white',
    fontWeight: '50',
  },
  chartsContainer: {
    display: 'block',
  },
});
export default withStyles(styles, {})(SkillsSection);
