import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimelineItem from './TimelineItem';

class TimelineList extends Component {
  constructor(props){
    super(props);
    this.state = {
      headers:'',
      titles: '',
      details:'',
    }
  }
  render(){
    const { classes } = this.props;

    return(
      <div className={classes.root}>
        <div className={classes.ladderLine}>
        </div>
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
  ladderLine: {
    borderLeft: '4px solid orange',
    height: '100%',
    position: 'absolute',
    left: '13.5%',

  },
});
export default withStyles(styles, {})(TimelineList);
