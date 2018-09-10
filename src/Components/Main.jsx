import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import SkillsSection from './SkillsSection';
import WorkSection from './WorkSection';
import ContactSection from './ContactSection';

const Main = () => (
      <div>
      <Route path='/about' component={AboutSection}/>
      <Route path='/portfolio' component={PortfolioSection}/>
      <Route path='/skills' component={SkillsSection}/>
      <Route path='/work' component={WorkSection}/>
      <Route path='/contact' component={ContactSection}/>
      </div>
);

export default Main;
