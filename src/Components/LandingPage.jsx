import React, { Component } from 'react';
import LandingStyles from '../Styles/LandingStyles.css';
import AbsoluteProfile from '../Images/AbsoluteProfile.jpeg';




class LandingPage extends Component {



  render() {
    return (
        <div className="landing-page">
         <img className="profile-background" src={AbsoluteProfile} />
          Landing Page with Sticky Header
        </div>
    );
  }
}

export default LandingPage;
