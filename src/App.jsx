import React, { Component } from 'react';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import PortfolioSection from './Components/PortfolioSection';
import SkillsSection from './Components/SkillsSection';
import WorkSection from './Components/WorkSection';
import ContactSection from './Components/ContactSection';
import { withStyles } from '@material-ui/core/styles';
import StickyNavBar from './Components/StickyNavBar';

class App extends Component {
  render() {
    const { classes } = this.props;
    return (

      <section className={classes.root}>

            <StickyNavBar />
            <HeroSection />
            <AboutSection />
            <PortfolioSection />
            <SkillsSection />
            <WorkSection />
            <ContactSection />
      </section>
    );
  }
}
const styles = theme => ({
  root: {
  },
});

export default withStyles(styles, {})(App);
