import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom';





class StickyNavBar extends Component {
    render() {
      const { classes } = this.props;

        return (
       <div className={classes.root}>
          <AppBar className={classes.listNavBar}>
              <ul className={classes.linkList}>
                <li><Link to = "/about">AboutSection</Link></li>
                <li><Link to = "/portfolio">PortfolioSection</Link></li>
                <li><Link to = "/skills">SkillsSection</Link></li>
                <li><Link to = "/work">WorkSection</Link></li>
                <li><Link to = "/contact">ContactSection</Link></li>
              </ul>
          </AppBar>
        </div>
       );
     }
   }
const styles = theme => ({
  root: {
  },
  listNavBar: {
  },
  linkList: {
    display: 'flex',
    justifyContent: 'space-evenly',
    listStyleType: 'none',
    fontSize: '18px',
  },
});
export default withStyles(styles, {})(StickyNavBar);
