import React, { Component } from 'react';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import PortfolioSection from './Components/PortfolioSection';
import SkillsSection from './Components/SkillsSection';
import WorkSection from './Components/WorkSection';
import ContactSection from './Components/ContactSection';
import { withStyles } from '@material-ui/core/styles';
import StickyNavBar from './Components/StickyNavBar';
import scrollToComponent from 'react-scroll-to-component';
import { AppBar } from '@material-ui/core';


class App extends Component {
  constructor(props) {
  super(props);
  this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
}

componentDidMount() {
  scrollToComponent(this.Blue, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
}

scrollToTopWithCallback() {
  let scroller = scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500});
  scroller.on('end', () => console.log('Scrolling end!') );
}
  render() {
    const { classes } = this.props;
    return (

      <section className={classes.root}>
      <div className='main'>
        <AppBar className='button_group'>
          <button onClick={this.scrollToTopWithCallback}>Go To Violet</button>
          <button onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500})}>Go To Violet</button>
          <button onClick={() => scrollToComponent(this.Indigo, { offset: 0, align: 'bottom', duration: 500, ease:'inExpo'})}>Go To Indigo</button>
          <button onClick={() => scrollToComponent(this.Blue, { offset: -200, align: 'middle', duration: 1500, ease:'inCirc'})}>Go To Blue</button>
          <button onClick={() => scrollToComponent(this.Green, { offset: 0, align: 'middle', duration: 500, ease:'inExpo'})}>Go To Green</button>
          <button onClick={() => scrollToComponent(this.Yellow, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>Go To Yellow</button>
          <button onClick={() => scrollToComponent(this.Orange, { offset: 0, align: 'top', duration: 500, ease:'inCirc'})}>Go To Orange</button>
          <button onClick={() => scrollToComponent(this.Red, { offset: 0, align: 'top', duration: 500})}>Go To Red</button>

        </AppBar>
        <section className='hero' ref={(section) => { this.Violet = section; }}><HeroSection /></section>
        <section className='indigo' ref={(section) => { this.Indigo = section; }}><AboutSection /></section>
        <section className='blue' ref={(section) => { this.Blue = section; }}><PortfolioSection /></section>
        <section className='green' ref={(section) => { this.Green = section; }}><SkillsSection /></section>
        <section className='yellow' ref={(section) => { this.Yellow = section; }}><WorkSection /></section>
        <section className='orange' ref={(section) => { this.Orange = section; }}><ContactSection /></section>
        <section className='red' ref={(section) => { this.Red = section; }}>Red</section>
        <b>Inspired By <a href="https://hopechen1028.github.io/hopechen.me/" target="_blank">Hope</a> with Love and Peace</b>
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
