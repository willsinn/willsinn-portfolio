import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';



class TimelineItem extends Component {

  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <div className={classes.timelineContainer}>

            <div className={classes.timelineHeader}>
            </div>
            <div className={classes.timelineBody}>
            </div>
        </div>
      </div>

    );
  }
}

const styles = theme => ({
  root: {
    height: '20%',
    width: '80%',
    backgroundColor: 'purple',

  },

  timelineContainer: {},


  timelineHeader: {},

  timelineBody: {},

});

export default withStyles(styles, {})(TimelineItem);
