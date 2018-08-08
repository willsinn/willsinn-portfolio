import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


class PortfolioSection extends Component {
  render() {
    const { classes } = this.props;
    return (

        <section className={classes.root}>
          Portfolio Page
        </section>
    );
  }
}
const styles = theme => ({
  root: {
  },
});
export default withStyles(styles, {})(PortfolioSection);
