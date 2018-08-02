import React, { Component } from 'react';
import './Styles/App.css';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import PortfolioSection from './Components/PortfolioSection';
import SkillsSection from './Components/SkillsSection';
import WorkSection from './Components/WorkSection';
import ContactSection from './Components/ContactSection';

class App extends Component {
  render() {
    return (

      <section className="App">
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
export default App;
