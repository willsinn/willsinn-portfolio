import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';





class StickyNavBar extends Component {
    render() {
      const { classes } = this.props;

        return (
       <div className={classes.root}>

          <AppBar>
            <nav>
              <ul>
                <li>
                  <Link to = "/about">AboutSection</Link>
                </li>
                <li>
                  <Link to = "/portfolio">PortfolioSection</Link>
                </li>
                <li>
                  <Link to = "/skills">SkillsSection</Link>
                </li>
                <li>
                  <Link to = "/work">WorkSection</Link>
                </li>
                <li>
                  <Link to = "/contact">ContactSection</Link>
                </li>
              </ul>
            </nav>
          </AppBar>
        </div>
       );
     }
   }
const styles = theme => ({
  root: {
  },
});
export default withStyles(styles, {})(StickyNavBar);
