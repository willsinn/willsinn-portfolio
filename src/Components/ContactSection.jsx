import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, SwipeableDrawer } from '@material-ui/core';
import ContactFormDrawer from '../Assets/ContactFormDrawer';
import Git from '../Icons/Git.png';
import Instagram from '../Icons/Instagram.png';
import Facebook from '../Icons/Facebook.png';

class ContactSection extends Component {
  render() {
    const { classes } = this.props;
    return (
            <section className={classes.root}>
              <div className={classes.titleContainer}>
                <div className={classes.beforeTitle}>_______________</div>
                <h1 className={classes.contactTitle}>Thanks!</h1>
                <div className={classes.afterTitle}>_______________</div>
              </div>
              <Grid container className={classes.gridWrapper}  spacing={8}>
                <Grid  item   className={classes.titleWrapper}  xs={12}>

                    <Paper className={classes.titleQuestion}>
                        Want To chat about something?
                    </Paper>
                </Grid>
                <Grid item className={classes.contactWrapper}  xs={12}>
                  <ContactFormDrawer
                    className={classes.contactButton}
                  />
                </Grid>
                <Grid item xs={3} className={classes.socialWrapper}>
                  <Paper className={classes.socialBackground}>
                    <img className={classes.socialLink}
                        src={Facebook}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={3} className={classes.socialWrapper}>
                  <Paper className={classes.socialBackground}>
                    <img className={classes.socialLink}
                        src={Git}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={3} className={classes.socialWrapper}>
                  <Paper className={classes.socialBackground}>
                    <i className={classes.socialLink} class="material-icons">
                        email
                    </i>
                  </Paper>
                </Grid>
                <Grid item xs={3} className={classes.socialWrapper}>
                  <Paper className={classes.socialBackground}>
                    <img className={classes.socialLink}
                      src={Instagram}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} className={classes.creationWrapper} >
                  <Paper className={classes.creationText}>
                    Created with ReactJS, MaterialUI
                  </Paper>
                </Grid>
              </Grid>
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
    height: 'auto',
    paddingTop: '10%',
    paddingBottom: '10%',
  },
  titleContainer: {
    paddingTop: '5%',
    margin: '0',
    fontSize: '36px',
    fontWeight: '600',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  beforeTitle: {
    marginBottom: '3%',
    marginRight: '15%',
    borderBottom: '5px solid rgba(0, 0, 0, 0.25)',
    color: 'transparent',
  },
  contactTitle: {
    textTransform: 'uppercase',
  },
  afterTitle: {
    marginLeft: '15%',
    marginBottom: '3%',
    borderBottom: '5px solid rgba(0, 0, 0, 0.25)',
    color: 'transparent',
  },
  gridWrapper: {
    maxHeight: 120,
    maxWidth: 250,
  },
  titleWrapper: {
  },
  titleThanks: {
    fontSize: 'large',
    textAlign: 'center',
  },
  titleQuestion: {
    fontSize: 'small',
    textAlign: 'center',

  },
  contactWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  socialBackground: {
    height: '38px',
    width: '38px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '18px',
  },
  socialLink: {
    height: '24px',
    width: '24px',
    padding: '0',
    margin: '0',
  },
  creationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    margin: '0',
  },
  creationText: {
  },
});
export default withStyles(styles, { })(ContactSection);
