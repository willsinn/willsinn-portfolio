import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, SwipeableDrawer } from '@material-ui/core';
import ContactFormDrawer from '../Assets/ContactFormDrawer';
import Git from '../Icons/Git.png';
import Instagram from '../Icons/Instagram.png';
import Facebook from '../Icons/Facebook.png';




class ContactPage extends Component {

  render() {
    const { classes } = this.props;

    return (

        <div className={classes.root}>
            <Grid container className={classes.gridWrapper}  spacing={8}>

                <Grid  item   className={classes.titleWrapper}  xs={12}>
                    <Paper className={classes.titleThanks}>
                        Thanks!
                    </Paper>
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
        </div>

    );
  }
}
const styles = theme => ({

  root: {
    height: '40%',
    width: '100%',
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: '10%',

  },
  gridWrapper: {
    maxHeight: 120,
    maxWidth: 250,

  },

  titleWrapper: {
    height: '70%',

  },
  titleThanks: {
    fontSize: 'large',
    textAlign: 'center',
    height: '50%',

  },
  titleQuestion: {
    fontSize: 'small',
    textAlign: 'center',
    height: '50%',

  },

  contactWrapper: {
    display: 'flex',
    height: '40%',
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
    height: '40%',

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
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    margin: '0',

  },

  creationText: {
  },

});




export default withStyles(styles, { })(ContactPage);
