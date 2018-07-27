import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimelineList from './TimelineList';



class WorkPage extends Component {




  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <h1> WorkPage Header </h1>
              <TimelineList

              />
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
