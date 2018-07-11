import React, { Component } from 'react';
import './Styles/App.css';
import Landing from './Components/Landing';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';




class App extends Component {
  render() {
    return (
      <div className="App">

            <Landing />
            <About />
            <Portfolio />
            <Skills />
            <Work />
            <Contact />

      </div>
    );
  }
}

export default App;
