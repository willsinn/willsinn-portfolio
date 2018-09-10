import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import SkillsSection from './SkillsSection';
import WorkSection from './WorkSection';
import ContactSection from './ContactSection';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={AboutSection}/>
      <Route path='/portfolioSection' component={PortfolioSection}/>
      <Route path='/skillsSection' component={SkillsSection}/>
      <Route path='/workSection' component={WorkSection}/>
      <Route path='/contactSection' component={ContactSection}/>
    </Switch>
  </main>
)

export default Main;
