import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroImage from '../Images/HeroImage.jpg';
import ContactFormDrawer from '../Assets/ContactFormDrawer';




class HeroSection extends Component {


  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
         <img className={classes.backgroundImage} src={HeroImage}/>
        <ContactFormDrawer className={classes.contactButton} />
        </div>
    );
  }
}
const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    zIndex: '0',
    opacity: '1.',
  },


  backgroundImage: {
    zIndex: '-1',
    backgroundImage: 'cover',
    width: '100%',
    height: '100%',
    opactity: '0.8',
    position: 'absolute',

  },

    contactButton: {
    },

});

export default withStyles(styles, {})(HeroSection);
