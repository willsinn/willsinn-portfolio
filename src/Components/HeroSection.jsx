import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroImage from '../Images/HeroImage.jpg';
import ContactDrawerButton from '../Assets/ContactDrawerButton';

class HeroSection extends Component {
  render() {
    const { classes } = this.props;

    return (
        <section className={classes.root}>
          <div className={classes.heroImage}>
            <ContactDrawerButton className={classes.contactButton}
            />
          </div>
        </section>
    );
  }
}
const styles = theme => ({
  root: {
    width: '100%',
  },
  heroImage: {
    backgroundImage: `url(${ HeroImage })`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },
  contactButton: {
  },

});

export default withStyles(styles, {})(HeroSection);
