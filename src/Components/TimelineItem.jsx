import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class TimelineItem extends Component {

  render() {
    const { classes }= this.props;


    return(
      <div className={classes.root}>
        <div className={classes.timelineContainer}>
          <ul className={classes.contentList}>
            <li className={classes.listItem}>
              <div className={classes.ladderItemWrapper}>
                <div className={classes.titleStyle}>
                  <div className={classes.titleBullet}></div>
                </div>
                <div className={classes.ladderItem}>
                  <div className={classes.ladderTitle}>TERADATA</div>
                </div>
                <div className={classes.contentContainer}>
                  <div className={classes.contentTitle}>UX Architect</div>
                  <div className={classes.contentDetail}>Currently doing R&D for next-gen analytics platform interfaces and experiences built on simplicity and natural language processing (NLP).</div>
                </div>
              </div>
            </li>
            <li className={classes.listItem}>
              <div className={classes.ladderItemWrapper}>
                <div className={classes.titleStyle}>
                  <div className={classes.titleBullet}></div>
                </div>
                <div className={classes.ladderItem}>
                  <div className={classes.ladderTitle}>MICROSTRATEGY</div>
                </div>
                <div className={classes.contentContainer}>
                  <div className={classes.contentTitle}>Senior UX Designer</div>
                  <div className={classes.contentDetail}>Created a massive UI library and design language for a real-time big data web app built on Bootstrap, Angular.js, Node.js & D3.js</div>
                </div>
              </div>
            </li>
            <li className={classes.listItem}>
              <div className={classes.ladderItemWrapper}>
                <div className={classes.titleStyle}>
                  <div className={classes.titleBullet}></div>
                </div>
                <div className={classes.ladderItem}>
                  <div className={classes.ladderTitle}>SEARS HOLDINGS</div>
                </div>
                <div className={classes.contentContainer}>
                  <div className={classes.contentTitle}>Principal UX Designer</div>
                  <div className={classes.contentDetail}>Planning & designing entirely new experiences for a new fleet of big data products spanning from customers to developers for both analyst consumption & dba/scientist productivity.</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const styles = theme => ({
  root: {
    width: '80%',
    backgroundColor: 'purple',
  },
  timelineContainer: {
  },
  contentList: {
    listStyleType: 'none',
  },
  listItem: {
  },
  ladderItemWrapper: {
    display: 'flex',
  },
  ladderItem: {
    width: '30%',
    borderBottom: '5px solid orange',
    borderLeft: '5px solid orange',
    marginLeft: '1%',
    alignItems: 'flex-end',
    display: 'flex',

  },
  ladderTitle: {
    paddingLeft: '5%',
  },
  ladderLine: {
    width: '10%',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  },
  titleStyle: {
    paddingTop: '3.5%',
  },
  titleBullet: {
  backgroundColor: '#F80',
  border: '3px solid #FFF',
  borderRadius: '18px',
  boxShadow: '0 0 2px #888',
  height: '14px',
  width: '14px',
  position: 'absolute',
  },
  contentTitle: {
  },
  contentDetail: {},
});
export default withStyles(styles, {})(TimelineItem);
