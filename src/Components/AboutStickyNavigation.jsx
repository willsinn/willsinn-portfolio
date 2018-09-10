import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import SkillsSection from './SkillsSection';
import WorkSection from './WorkSection';
import ContactSection from './ContactSection';




class AboutStickyNavigation extends Component {
    render() {
      const { classes } = this.props;

        return (
       <div className={classes.root}>

          <AppBar>
              <Tabs>
                <Tab label='About'>
                  <Link to = "/about">About</Link>
                </Tab>
                <Tab>
                  <Link to = "/portfolio">Portfolio</Link>
                </Tab>
                <Tab>
                  <Link to = "/skills">Skills</Link>
                </Tab>
                <Tab>
                  <Link to = "/work">Work</Link>
                </Tab>
                <Tab>
                  <Link to = "/contact">Contact</Link>
                </Tab>
              </Tabs>
              <Route path="/about" render={(props) => <AboutSection />}/>
              <Route path='/portfolio' render={(props) => <PortfolioSection />}/>


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
