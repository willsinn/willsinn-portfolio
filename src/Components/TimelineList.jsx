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
    const posts = this.props.posts;

    return(
      <div>


            <TimelineItem

            />

      </div>
    );
  }
}





const styles = theme => ({
  root: {},
});
export default withStyles(styles, {})(TimelineList);
