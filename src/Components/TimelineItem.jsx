import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class TimelineItem extends Component {
  static defaultProps = {
    headers:  [
                'UX Architect',
                'Senior UX Designer',
                'Principal UX Designer',
              ],
    titles:   [
                'TERADATA',
                'MICROSTRATEGY',
                'SEARS HOLDINGS',
              ],
    details:  [
                'Planning & designing entirely new experiences for a new fleet of big data products spanning from customers to developers for both analyst consumption & dba/scientist productivity',
                'Currently doing R&D for next-gen analytics platform interfaces and experiences built on simplicity and natural language processing (NLP).',
                'Created a massive UI library and design language for a real-time big data web app built on Bootstrap, Angular.js, Node.js & D3.js',
              ]
}
  render() {
    const { classes } = this.props;
    const headerItems = this.props.headers.map(header => {
      return <ul className={classes.headerWrapper}>
                <li className={classes.headerContent}
                    key={header}
                    value={header}>
                        {header}
                </li>
            </ul>
    });
    const titleItems = this.props.titles.map(title => {
      return <ul className={classes.bodyWrapper}>
                <li className={classes.bodyContent}
                    key={title}
                    value={title}>
                        {title}
                </li>
            </ul>
    });
    const detailItems = this.props.details.map(detail => {
      return <ul className={classes.bodyWrapper}>
                <li className={classes.bodyContent}
                    key={detail}
                    value={detail}>
                        {detail}
                </li>
            </ul>
    });

    return(
      <div className={classes.root}>
        <div className={classes.timelineContainer}>
            <div className={classes.timelineLadder}>
            </div>
            <div className={classes.headerContainer}>
              {headerItems}
            </div>

            <div className={classes.bodyContainer}>
              {titleItems}
              {detailItems}
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
  headerContainer: {
    border: '1px solid black',
  },
  headerWrapper: {
    listStyle: 'none',
    border: '1px solid black',
  },
  headerContent: {
    border: '1px solid white',
    paddingTop: '15%',
  },
  bodyContainer: {
  },
  bodyWrapper: {
    listStyle: 'none',
  },
  bodyContent: {
  },
});
export default withStyles(styles, {})(TimelineItem);
