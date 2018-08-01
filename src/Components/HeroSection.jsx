import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroImage from '../Images/HeroImage.jpg';
import ContactFormDrawer from '../Assets/ContactFormDrawer';




class HeroSection extends Component {

  render() {
    const { classes } = this.props;

    return (
        <section className={classes.root}>
         <div className={classes.heroImage}>
         </div>

        <ContactFormDrawer className={classes.contactButton} />
        </section>
    );
  }
}
const styles = theme => ({
  root: {
    width: '100%',
    zIndex: '0',
  },


  heroImage: {
    zIndex: '-1',
    backgroundImage: `url(${ HeroImage })`,
    width: '100%',
    height: '100%',
    opactity: '0.8',

  },

    contactButton: {
    },

});

export default withStyles(styles, {})(HeroSection);
