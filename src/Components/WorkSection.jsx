import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimelineList from './TimelineList';
import WorkSectionImage from '../Images/WorkSectionImage.jpg';

class WorkSection extends Component {

  render() {
    const { classes } = this.props;

    return (
        <section className={classes.root}>
          <div className={classes.workBackground}>
            <div className={classes.titleContainer}>
              <div className={classes.beforeTitle}>_______________</div>
              <h1 className={classes.workTitle}>WORK</h1>
              <div className={classes.afterTitle}>_______________</div>
            </div>
            <div className={classes.introContainer}>
              <div className={classes.workIntro}>
                  My career has taken a natural progression from client websites, to template clubs, to UI templates, to UX design, to complex analytical UX design.
              </div>
              <div className={classes.workLine}>_______________________________________</div>
            </div>
            <TimelineList
            />
          </div>
        </section>
    );
  }
}
const styles = theme => ({
  root: {
    width: '100%',
    paddingBottom: '6%',
  },
  workBackground: {
    backgroundImage: `url(${ WorkSectionImage })`,
    backgroundSize: 'auto',
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
    paddingRight: '20%',
    marginBottom: '4%',
  },
  workTitle: {},
  afterTitle: {
    paddingLeft: '20%',
    marginBottom: '4%',
  },
  workLine: {
    borderBottom: '5px solid white',
    color: 'transparent',
  },
  introContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  workIntro: {
    fontSize: '22px',
    fontWeight: '50',
    color: 'white',
 },
});
export default withStyles(styles, {})(WorkSection);
