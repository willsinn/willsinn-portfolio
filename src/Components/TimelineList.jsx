import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimelineItem from './TimelineItem';


class TimelineList extends Component {
  constructor(props){
    super(props);
    this.state = {
      header:'',
      detail:'',
    }
  }


  render(){


    const { classes } = this.props;

    return(
      <div className={classes.root}>


            <TimelineItem

            />

      </div>
    );
  }
}





const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
});
export default withStyles(styles, {})(TimelineList);
