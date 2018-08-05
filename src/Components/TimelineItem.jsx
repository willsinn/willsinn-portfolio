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
                <div className={classes.ladderItemVertLine}>
                  <div className={classes.ladderTitleHorzLine}>TERADATA</div>
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
                <div className={classes.ladderItemVertLine}>
                  <div className={classes.ladderTitleHorzLine}>MICROSTRATEGY</div>
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
                <div className={classes.ladderItemVertLine}>
                  <div className={classes.ladderTitleHorzLine}>SEARS HOLDINGS</div>
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
  ladderItemVertLine: {
    width: '30%',
    borderLeft: '4px solid orange',
    marginLeft: '0.5%',
    alignItems: 'center',
    display: 'flex',
  },
  ladderTitleHorzLine: {
    display: 'block',
    paddingLeft: '5%',
    borderBottom: '4px solid orange',
    width: '100%',
  },
  titleStyle: {
    paddingTop: '4.5%',
  },
  titleBullet: {
  backgroundColor: '#F80',
  border: '3px solid #FFF',
  borderRadius: '18px',
  boxShadow: '0 0 2px #888',
  height: '12px',
  width: '12px',
  position: 'absolute',
  },
  contentContainer: {
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    backgroundColor: 'orange',
    borderRadius: '2px',
    marginBottom: '1%',

  },
  contentTitle: {
    fontSize: '18px',
    fontWeight: '900',
    padding: '1%',
  },
  contentDetail: {
    padding: '1%',

  },
});
export default withStyles(styles, {})(TimelineItem);
