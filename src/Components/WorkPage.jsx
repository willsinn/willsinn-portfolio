import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';




class WorkPage extends Component {



  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          Work page
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
