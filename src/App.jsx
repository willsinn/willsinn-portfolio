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
import ContactDrawerButton from './Components/ContactDrawerButton';



class App extends Component {
  constructor(props) {
  super(props);
}

componentDidMount() {
  scrollToComponent(this.Hero, { offset: 0, align: 'middle', duration: 0, ease:'inExpo'});
}

  render() {
    const { classes } = this.props;
    return (

      <div className={classes.root}>
        <AppBar className='button_group'>
          <button onClick={() => scrollToComponent(this.About, { offset: 0, align: 'middle', duration: 300, ease:'inExpo'})}>About</button>
          <button onClick={() => scrollToComponent(this.Portfolio, { offset: 0, align: 'middle', duration: 300, ease:'inCirc'})}>Portfolio</button>
          <button onClick={() => scrollToComponent(this.Hero, { offset: 0, align: 'middle', duration: 300, ease:'inExpo'})}>Will Sinn</button>
          <ContactDrawerButton />
          <button onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'middle', duration: 300, ease:'inExpo'})}>Skills</button>
          <button onClick={() => scrollToComponent(this.Work, { offset: 0, align: 'middle', duration: 300, ease:'inCirc'})}>Work</button>
        </AppBar>
        <section className='hero' ref={(section) => { this.Hero = section; }}><HeroSection /></section>
        <section className='about' ref={(section) => { this.About = section; }}><AboutSection /></section>
        <section className='portfolio' ref={(section) => { this.Portfolio = section; }}><PortfolioSection /></section>
        <section className='skills' ref={(section) => { this.Skills = section; }}><SkillsSection /></section>
        <section className='work' ref={(section) => { this.Work = section; }}><WorkSection /></section>
      </div>







    );
  }
}
const styles = theme => ({
  root: {
  },
});

export default withStyles(styles, {})(App);
