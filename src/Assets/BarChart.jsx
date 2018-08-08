import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


class BarChart extends Component {
  render() {
    const { classes } = this.props;
    return (
        <section className={classes.root}>
          <div className={classes.barContainer}>
            <div className={classes.skillTitle}>
            </div>
            <div className={classes.barTotalValue}>
              <div className={classes.barSkillValue}></div>
            </div>
          </div>
        </section>
    );
  }
}
const styles = theme => ({
  root: {
  },
});
export default withStyles(styles, {})(BarChart);
