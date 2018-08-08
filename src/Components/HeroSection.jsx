import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import HeroImage from '../Images/HeroImage.jpg';
import ContactDrawerButton from '../Assets/ContactDrawerButton';
import Github from '../Icons/Github.png';
import Instagram from '../Icons/Instagram.png';
import Facebook from '../Icons/Facebook.png';
import Email from '../Icons/Email.png';

class HeroSection extends Component {
  render() {
    const { classes } = this.props;

    return (
        <section className={classes.root}>
          <div className={classes.heroImage}>
            <div className={classes.heroContent}>
                <div className={classes.titleText1}>User Experience & User Interface</div>
                <div className={classes.titleText2}>Front End Developer</div>
              <div className={classes.heroLine}>_______________________________________</div>
              <ContactDrawerButton/>
              <div className={classes.socialContainer}>
                <div className={classes.socialIcon}>
                  <img className={classes.socialLink} src={Facebook}/>
                </div>
                <div className={classes.socialIcon}>
                  <img className={classes.socialLink} src={Github} />
                </div>
                <div className={classes.socialIcon}>
                  <img className={classes.socialLink} src={Email} />
                </div>
                <div className={classes.socialIcon}>
                  <img className={classes.socialLink} src={Instagram} />
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}
const styles = theme => ({
  root: {
    width: '100%',
    height: 'auto',
  },
  heroImage: {
    backgroundImage: `url(${ HeroImage })`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    paddingTop: '15%',
    paddingBottom: '20%',
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText1: {
    fontSize: '48px',
    fontWeight: '50',
    color: 'white',
    textTransform: 'uppercase',
  },
  titleText2: {
    fontSize: '60px',
    fontWeight: '300',
    color: 'white',
    textTransform: 'uppercase',
  },
  heroLine: {
    color: 'transparent',
    borderBottom: '5px solid white',
    marginBottom: '2.5%',
  },
  socialContainer: {
    width: '25%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '3%',
  },
  socialIcon: {
  },
  socialLink: {
    height: '52px',
    width: '52px',
  },
});

export default withStyles(styles, {})(HeroSection);
