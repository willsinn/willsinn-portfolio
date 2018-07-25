import React, { Component } from 'react';
import LandingStyles from '../Styles/LandingStyles.css';
import AbsoluteProfile from '../Images/AbsoluteProfile.jpeg';
import ContactForm from '../Assets/ContactForm';




class LandingPage extends Component {



  render() {
    return (
        <div className="landing-page">
         <img className="profile-background" src={AbsoluteProfile} />
         </div>
    );
  }
}

export default LandingPage;
