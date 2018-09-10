import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tabs, AppBar } from '@material-ui/core';


class StickyNavigation extends Component {
     render() {
       const { classes } = this.props;
       const { activeTab } = this.state;

       return (
         <div className={classes.root}>
        <AppBar>
          <Tabs activeTab={activeTab}
               onChange={this.handleChange}>
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
export default withStyles(styles, {})(StickyNavigation);
