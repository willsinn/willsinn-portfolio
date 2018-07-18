import React, { Component } from 'react';
import ContactStyles from '../Styles/ContactStyles.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid, GridList, GridListTile, Paper } from '@material-ui/core';

const styles = theme => ({
  root: {

  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

});



class ContactPage extends Component {



  render() {
    const { classes } = this.props;




    return (

        <div className="contact-page">
        <Grid container classes={{
          root: classes.root,
        }}>
          <Grid item>
           <Paper>Thanks for Visiting </Paper>
          </Grid>

          <Grid item>
            <Paper>Contact Me </Paper>
          </Grid>

          <Grid item>
            <GridList>
                <GridListTile>
                  <Paper> Facebook </Paper>
                </GridListTile>

                <GridListTile>
                  <Paper> Other  </Paper>
                </GridListTile>

                <GridListTile>
                  <Paper> Third </Paper>
                </GridListTile>

                <GridListTile>
                  <Paper> Last </Paper>
                </GridListTile>
            </GridList>
          </Grid>
        </Grid>

        </div>
    );
  }
}



export default withStyles(styles)(ContactPage);
