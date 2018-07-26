import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';



class TimelineItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      }
    }

renderItem = (props) => {
  const { content } = props;
  return(<text>{content}</text>);
}




  render() {
    const { classes } = this.props;
    const renderItem = (props) => {
    const header = [
      {content: 'Title1'},
      {content: 'Title2'}
    ];
    const body = [
      {content: 'Body1'},
      {content: 'Body2'},
    ];
    const items = { header, body };
  };

    return(
      <div className={classes.root}>
        <div className={classes.timelineContainer}>

            <div className={classes.timelineHeader}>
            <text
              {this.props.renderItem(header, content)}>

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
