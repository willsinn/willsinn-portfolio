import React, { Component } from 'react';
import './Styles/App.css';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import PortfolioPage from './Components/PortfolioPage';
import SkillsPage from './Components/SkillsPage';
import WorkPage from './Components/WorkPage';
import ContactPage from './Components/ContactPage';




class App extends Component {

  render() {
    return (
      <div className="App">

            <HeroSection />
            <AboutSection />
            <PortfolioPage />
            <SkillsPage />
            <WorkPage />
            <ContactPage />

      </div>
    );
  }
}

export default App;
