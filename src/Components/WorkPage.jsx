import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimelineItem from './TimelineItem';




class WorkPage extends Component {



  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <h1> WorkPage Header </h1>
        <TimelineItem />
        </div>
    );
  }
}

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: 'orange',

  },

});

export default withStyles(styles, {})(WorkPage);
