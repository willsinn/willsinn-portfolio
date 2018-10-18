import React, { Component } from 'react';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import PortfolioSection from './Components/PortfolioSection';
import SkillsSection from './Components/SkillsSection';
import WorkSection from './Components/WorkSection';
import ContactSection from './Components/ContactSection';
import { withStyles } from '@material-ui/core/styles';
import scrollToComponent from 'react-scroll-to-component';
import { AppBar } from '@material-ui/core';



class App extends Component {
  constructor(props) {
  super(props);
}

componentDidMount() {
  scrollToComponent(this.Hero, { offset: 0, align: 'middle', duration: 0, ease:'inQuad'});
}


  render() {
    const { classes } = this.props;
    return (

      <div className={classes.root}>
        <AppBar className={classes.navBar}>
          <button className={classes.navButton} onClick={() => scrollToComponent(this.About, { offset: 0, align: 'middle', duration: 300, ease:'inQuad'})}>About</button>
          <button className={classes.navButton} onClick={() => scrollToComponent(this.Portfolio, { offset: 0, align: 'middle', duration: 300, ease:'inQuad'})}>Portfolio</button>
          <button className={classes.navButton} onClick={() => scrollToComponent(this.Hero, { offset: 0, align: 'middle', duration: 300, ease:'inQuad'})}>Will Sinn</button>
          <button className={classes.navButton} onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'middle', duration: 300, ease:'inQuad'})}>Skills</button>
          <button className={classes.navButton} onClick={() => scrollToComponent(this.Work, { offset: 0, align: 'middle', duration: 300, ease:'inQuad'})}>Work</button>
        </AppBar>
        <section className='hero' ref={(section) => { this.Hero = section; }}><HeroSection /></section>
        <section className='about' ref={(section) => { this.About = section; }}><AboutSection /></section>
        <section className='portfolio' ref={(section) => { this.Portfolio = section; }}><PortfolioSection /></section>
        <section className='skills' ref={(section) => { this.Skills = section; }}><SkillsSection /></section>
        <section className='work' ref={(section) => { this.Work = section; }}><WorkSection /></section>
        <ContactSection />
      </div>







    );
  }
}
const styles = theme => ({
  root: {
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(56,56,56,0.7)',
    padding: '1.5% 12.5% 1.5% 12.5%',
  },
  navButton: {
    padding: '0',
    border: 'none',
    background: 'none',
    fontSize: '15px',
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: '650',
  },
  navCenter: {
    display: 'inline-block',
  },
  contactButtonWrapper: {
    width: 'inherit',
    height: 'inherit',
  }

});

export default withStyles(styles, {})(App);
