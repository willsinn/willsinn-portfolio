import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


class BarChart extends Component {
  render() {
    const { classes } = this.props;
    return (

        <section className={classes.root}>
          <div className={classes.barChart}>
            <div className={classes.barWrapper}>
              <div className={classes.barContainer}>
                <div className={classes.skillTitle}>
                  ui design
                </div>
                <div className={classes.barTotalValue}>
                  <div className={classes.barSkillValue}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}
const styles = theme => ({
  root: {
    width: '100%',
  },
  barChart: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
  barWrapper:{
    display: 'flex',
  },
  barContainer: {
    padding: '3%',
    border: '1px solid #53867b',
  },
  skillTitle: {
    fontSize: '14px',
    textTransform: 'uppercase',
    color: 'white',
  },
  barTotalValue: {
    height: '20px',
    width: '340px',
    border: '1px solid #007f79',
    borderRadius: '12px',
  },
  barSkillValue: {
    height: '20px',
    width: '300px',
    backgroundColor: '#007f79',
    borderRadius: '12px 0px 0px 12px',
  },



});
export default withStyles(styles, {})(BarChart);
