import React, { Component } from 'react';
import OuterPieChart from '../Assets/OuterPieChart';
import BarChart from '../Assets/BarChart';
import { withStyles } from '@material-ui/core/styles';
import InnerPieChart from '../Assets/InnerPieChart';


class SkillsCharts extends Component {
  render() {
    const { classes } = this.props;
    return (

        <section className={classes.root}>
              <InnerPieChart />
              <OuterPieChart
                className={classes.pieChart} />
              <BarChart
                className={classes.barChart} />
        </section>
    );
  }
}
const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#7fb0a6',
    width: '100%',
    justifyContent: 'space-around',
    position: 'relative',
  },
  pieChart: {
    width: '65%',
  },
  barChart: {
    width: '35%',
  },

});
export default withStyles(styles, {})(SkillsCharts);
