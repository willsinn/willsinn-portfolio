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
                  <div className={classes.ladderTitleHorzLine}>UX Architect</div>
                  <div className={classes.arrowRight}></div>
                </div>
                <div className={classes.contentContainer}>
                  <div className={classes.contentTitle}>Teradata</div>
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
                  <div className={classes.ladderTitleHorzLine}>Senior UX Designer</div>
                    <div className={classes.arrowRight}></div>
                </div>
                <div className={classes.contentContainer}>
                  <div className={classes.contentTitle}>Microstrategy</div>
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
                  <div className={classes.ladderTitleHorzLine}>Principal UX Designer</div>
                    <div className={classes.arrowRight}></div>
                </div>
                <div className={classes.contentContainer}>
                  <div className={classes.contentTitle}>Sears Holdings</div>
                  <div className={classes.contentDetail}>Planning & designing entirely new experiences for a new fleet of big data products spanning from customers to developers for both analyst consumption & dba/scientist productivity.</div>
                </div>
              </div>
            </li>
            <li className={classes.listItem}>
              <div className={classes.ladderItemWrapper}>
                <div className={classes.titleStyle}>
                  <div className={classes.titleBullet}></div>
                </div>
                <div className={classes.ladderItemVertLine}>
                  <div className={classes.ladderTitleHorzLine}>Principal Usability Engineer</div>
                    <div className={classes.arrowRight}></div>
                </div>
                <div className={classes.contentContainer}>
                  <div className={classes.contentTitle}>EBAY incorporated.</div>
                  <div className={classes.contentDetail}>Designed the UI for a collaborative analytics platform web app with everything from blogs to charts, built on Bootstrap, PHP & Highcharts.js</div>
                </div>
              </div>
            </li>
            <li className={classes.listItem}>
              <div className={classes.ladderItemWrapper}>
                <div className={classes.titleStyle}>
                  <div className={classes.titleBullet}></div>
                </div>
                <div className={classes.ladderItemVertLine}>
                  <div className={classes.ladderTitleHorzLine}>Bachelor of Fine Arts</div>
                    <div className={classes.arrowRight}></div>
                </div>
                <div className={classes.contentContainer}>
                  <div className={classes.contentTitle}>ULL & LSU</div>
                  <div className={classes.contentDetail}>Began as a Graphic Designer for LSU and graduated as a 3D animator from ULL with an internship building Flash websites. Go figure...</div>
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
    borderLeft: '4px solid #b67f16',
    marginLeft: '1%',
    alignItems: 'center',
    display: 'flex',
  },
  ladderTitleHorzLine: {
    display: 'block',
    paddingLeft: '5%',
    borderBottom: '4px solid #b67f16',
    width: '90%',
    color: 'gray',
    fontWeight: '600',
    fontSize: '16px',
  },
  titleStyle: {
    paddingTop: '4.5%',
  },
  titleBullet: {
  backgroundColor: '#ebbc60',
  border: '4px solid #b67f16',
  borderRadius: '18px',
  height: '15px',
  width: '15px',
  position: 'absolute',
  },
  arrowRight: {
    width: '0',
    height: '0',
    borderTop: '15px solid transparent',
    borderBottom: '15px solid transparent',
    borderRight: '15px solid rgba(255, 255, 255, 0.6)',
    paddingLeft: '3%',
    marginTop: '5%',
  },
  contentContainer: {
    alignSelf: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '2px',
    marginBottom: '1.5%',
  },
  contentTitle: {
    fontSize: '18px',
    fontWeight: '900',
    padding: '1%',
    fontSize: '16px',
    color: 'gray',
    textTransform: 'uppercase',
  },
  contentDetail: {
    padding: '1%',
    color: 'gray',
    fontSize: '16px',
    fontWeight: '100',
  },
});
export default withStyles(styles, {})(TimelineItem);
