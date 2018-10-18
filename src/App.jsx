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
  this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
}

componentDidMount() {
  scrollToComponent(this.Hero, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
}

scrollToTopWithCallback() {
  let scroller = scrollToComponent(this.Hero, { offset: 0, align: 'top', duration: 1500});
  scroller.on('end', () => console.log('Scrolling end!') );
}
  render() {
    const { classes } = this.props;
    return (

      <section className={classes.root}>
      <div className='main'>
        <AppBar className='button_group'>
          <button onClick={this.scrollToTopWithCallback}>Will Sinn</button>
          <button onClick={() => scrollToComponent(this.About, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}>About</button>
          <button onClick={() => scrollToComponent(this.Portfolio, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>Portfolio</button>
          <button onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'middle', duration: 500, ease:'inExpo'})}>Skills</button>
          <button onClick={() => scrollToComponent(this.Work, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>Work</button>
        </AppBar>
        <section className='hero' ref={(section) => { this.Hero = section; }}><HeroSection /></section>
        <section className='about' ref={(section) => { this.About = section; }}><AboutSection /></section>
        <section className='blue' ref={(section) => { this.Portfolio = section; }}><PortfolioSection /></section>
        <section className='green' ref={(section) => { this.Skills = section; }}><SkillsSection /></section>
        <section className='yellow' ref={(section) => { this.Work = section; }}><WorkSection /></section>
      </div>







      </section>
    );
  }
}
const styles = theme => ({
  root: {
  },
});

export default withStyles(styles, {})(App);
