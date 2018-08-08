import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ContactDrawerButton from '../Assets/ContactDrawerButton';
import Github from '../Icons/Github.png';
import Instagram from '../Icons/Instagram.png';
import Facebook from '../Icons/Facebook.png';
import Email from '../Icons/Email.png';

class ContactSection extends Component {
  render() {
    const { classes } = this.props;

    return (
            <section className={classes.root}>
              <div className={classes.titleContainer}>
                <div className={classes.beforeTitle}>_______________</div>
                <h1>
                  <div className={classes.contactTitleWrapper}>
                    <div className={classes.contactTitle}>Thanks!</div>
                    <div className={classes.contactQuestion}>Want to chat about something?</div>
                  </div>
                </h1>
                <div className={classes.afterTitle}>_______________</div>
              </div>
              <ContactDrawerButton
              />
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
              <div className={classes.creationText}>Made in ATX & © Kyle Ledbetter</div>
            </section>
    );
  }
}
const styles = theme => ({
  root: {
    backgroundColor: '#39373a',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: '10%',
  },
  titleContainer: {
    paddingTop: '3.25%',
    fontSize: '38px',
    fontWeight: '600',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  beforeTitle: {
    marginBottom: '2.5%',
    marginRight: '15%',
    borderBottom: '5px solid rgba(0, 0, 0, 0.25)',
    color: 'transparent',
  },
  contactTitleWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactTitle: {
    textTransform: 'uppercase',
  },
  contactQuestion: {
    fontSize: '16px',
    fontWeight: '50',
    color: 'white',
    textTransform: 'none',
  },
  afterTitle: {
    marginLeft: '15%',
    marginBottom: '2.5%',
    borderBottom: '5px solid rgba(0, 0, 0, 0.25)',
    color: 'transparent',
  },
  socialContainer: {
    width: '15%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: '1.5%',
    paddingBottom: '1.5%',
  },
  socialIcon: {
  },
  socialLink: {
    height: '36px',
    width: '36px',
  },
  creationText: {
    color: 'white',
    fontSize: '13px',
    fontWeight: '50',
  },
});
export default withStyles(styles, { })(ContactSection);
