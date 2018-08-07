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
            <div className={classes.heroContent}>
              <div className={classes.heroTitleContainer}>
                <div className={classes.titleText1}>User Experience & User Interface</div>
                <div className={classes.titleText2}>Front End Developer</div>
              </div>
              <div className={classes.heroLine}>_______________________________________</div>
              <ContactDrawerButton/>
            </div>
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
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50%',
  },
  heroTitleContainer: {
    flex: 'none',
    maxWidth: '50%',
  },
  titleText1: {},
  titleText2: {},
  heroLine: {},

});

export default withStyles(styles, {})(HeroSection);
