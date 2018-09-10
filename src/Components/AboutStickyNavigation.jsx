import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tab, Tabs, AppBar } from '@material-ui/core';


class AboutStickyNavigation extends Component {
    state = {
      activeSection : 0
    };
    handleChange = (event, activeSection) => {
       this.setState({ activeSection });
    };

    render() {
      const { classes } = this.props;
      const { activeSection } = this.state;

        return (
       <div className={classes.root}>
          <AppBar>
              <Tabs
              activeSection={activeSection}
              onChange={this.handleChange}
              >
                <Tab label="About" />
                <Tab label="Portfolio" />
                <Tab label="Skills" href="#basic-tabs" />
                <Tab label="Work" />
                <Tab label="Contact" />
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
