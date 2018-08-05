import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class TimelineItem extends Component {

  render() {
    const { classes }= this.props;


    return(
      <div className={classes.root}>
        <div className={classes.timelineContainer}>
          <div className={classes.timelineLadder}>
          </div>

            <div className={classes.headerContainer}>
            </div>
            <div className={classes.bodyContainer}>

                          'TERADATA',
                          'MICROSTRATEGY',
                          'SEARS HOLDINGS',

                          'UX Architect',
                          'Senior UX Designer',
                          'Principal UX Designer',

                          'Currently doing R&D for next-gen analytics platform interfaces and experiences built on simplicity and natural language processing (NLP).',
                          'Created a massive UI library and design language for a real-time big data web app built on Bootstrap, Angular.js, Node.js & D3.js',
                          'Planning & designing entirely new experiences for a new fleet of big data products spanning from customers to developers for both analyst consumption & dba/scientist productivity',



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
  timelineContainer: {
    display: 'flex',
  },
  timelineLadder: {
    left: '10%',
    width: '5px',
    height: '20%',
    borderLeft: '5px solid #cc8f19',
    position: 'absolute',
    display: 'block'
  },
});
export default withStyles(styles, {})(TimelineItem);
