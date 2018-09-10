import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tab, Tabs, AppBar } from '@material-ui/core';


class AboutStickyNavigation extends Component {
     render() {
       const { classes } = this.props;

       return (
         <div className={classes.root}>
        <AppBar>
          <Tabs>
            <Tab label="About" />
            <Tab label="Hero" />
            <Tab label="Contact" href="#basic-tabs" />
          </Tabs>
        </AppBar>
           </div>
       );
     }
   }

const styles = theme => ({
  root: {
  },
});
export default withStyles(styles, {})(AboutStickyNavigation);
