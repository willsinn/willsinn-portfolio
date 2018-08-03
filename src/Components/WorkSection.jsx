import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimelineList from './TimelineList';

class WorkSection extends Component {

  render() {
    const { classes } = this.props;

    return (
        <section className={classes.root}>
          <div className={classes.titleContainer}>
          <div className={classes.beforeTitle}>
          _______________</div>
            <h1 className={classes.workTitle}>WORK</h1>
          <div className={classes.afterTitle}>
          _______________</div>
          </div>
          <TimelineList
          />
        </section>
    );
  }
}
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: 'orange',
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
});
export default withStyles(styles, {})(WorkSection);
