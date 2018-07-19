import React, { Component } from 'react';
import ContactStyles from '../Styles/ContactStyles.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';



class ContactPage extends Component {



  render() {
    const { classes } = this.props;




    return (

        <div className="contact-page">
          <div className="grid-wrapper">
            <Grid
            container
            spacing={16}
            className={classes.contact}
            >
              <Grid item xs={12}>
               <Paper>Thanks for Visiting </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper>Contact Me </Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper> Facebook </Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper> Other  </Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper> Third </Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper> Last </Paper>
              </Grid>

          </Grid>

        </div>
        </div>
    );
  }
}
const styles = theme => ({
  contact: {
    direction: 'row',
    alignItems: 'center',
    justify: 'center',

  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

});




export default withStyles(styles)(ContactPage);
