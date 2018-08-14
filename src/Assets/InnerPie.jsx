import React, { Component } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';
import { withStyles } from '@material-ui/core/styles';


class InnerPie extends Component {
  render()
  const { classes } = this.props;
    return(
      <ResponsiveContainer className={classes.root}>
      </ResponsiveContainer>
    );

}

const styles = theme => ({});

export default withStyles(styles, {})(InnerPie);
