import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import WorkTimelineItem from './WorkTimelineItem';

class WorkTimelineList extends Component {
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
      <WorkTimelineItem
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
export default withStyles(styles, {})(WorkTimelineList);
