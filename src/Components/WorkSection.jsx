import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimelineList from './TimelineList';



class WorkSection extends Component {




  render() {
    const { classes } = this.props;
    return (
        <section className={classes.root}>
          <h1> WorkSection Header </h1>
              <TimelineList

              />
        </section>
    );
  }
}


const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: 'yellow',

  },
});

export default withStyles(styles, {})(WorkSection);
