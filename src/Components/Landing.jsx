import React, { Component } from 'react';
import LandingStyles from '../Styles/LandingStyles.css';
import AbsoluteImage from '../Images/AbsoluteImage.jpeg';




class Landing extends Component {



  render() {
    return (
        <div className="landing-page">
         <img className="absolute-background" src={AbsoluteImage} />
          Landing Page with Sticky Header
        </div>
    );
  }
}

export default Landing;
