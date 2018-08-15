import React, { Component } from 'react';
import SkillsPieChart from '../Assets/SkillsPieChart';
import SkillsBarChart from '../Assets/SkillsBarChart';
import { withStyles } from '@material-ui/core/styles';


class SkillsCharts extends Component {
  render() {
    const { classes } = this.props;
    return (

        <div className={classes.root}>
                <SkillsPieChart
                  className={classes.pieChart} />
                <SkillsBarChart
                  className={classes.barChart} />
        </div>
    );
  }
}
const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#7fb0a6',
    width: '100%',
    justifyContent: 'space-around',
    paddingBottom: '10%',
    marginLeft: '10%',
    marginRight: '5'

  },
  pieChart: {
    width: '65%',
    display: 'flex',
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
