import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';




class TimelineItem extends Component {

  static defaultProps = {
    headers: ['Header 1', 'Header 2', 'Header 2'],
    details: ['Detail 1', 'Detail 2', 'Detail 3']
}
  render() {
    const { classes } = this.props;

    const headerItems = this.props.headers.map(header => {
      return <li key={header} value={header}>{header}</li>
    });
    const detailItems = this.props.details.map(detail => {
      return <li key={detail} value={detail}>{detail}</li>
    });





    return(
      <div className={classes.root}>
        <div className={classes.timelineContainer}>

            <ul className={classes.timelineHeader}>
              {headerItems}
            </ul>

            <ul className={classes.timelineBody}>
              {detailItems}
            </ul>
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

  timelineContainer: {
    display: 'flex',

  },


  timelineHeader: {
    listStyle: 'none',
  },

  timelineBody: {
    listStyle: 'none',

  },

});

export default withStyles(styles, {})(TimelineItem);
