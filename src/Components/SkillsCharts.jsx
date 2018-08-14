import React, { Component } from 'react';
import SkillsPieChart from '../Assets/SkillsPieChart';
import SkillsBarChart from '../Assets/SkillsBarChart';
import { withStyles } from '@material-ui/core/styles';


class SkillsCharts extends Component {
  render() {
    const { classes } = this.props;
    return (

        <section className={classes.root}>
                <SkillsPieChart />
                <SkillsBarChart
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
  },
  pieChart: {
    width: '65%',
  },
  innerPie: {
  },
  outerPie: {
  },
  barChart: {
    width: '35%',
  },

});
export default withStyles(styles, {})(SkillsCharts);
