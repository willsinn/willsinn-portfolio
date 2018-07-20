import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, SvgIcon } from '@material-ui/core';
import { ContactMeSvg } from '../Icons/ContactMeSvg';



class ContactPage extends Component {




  IconLink(props) {
    const icon = props;
   <svg className={`icon icon-${props.icon}`}>
     <use xlinkHref={`#icons_${props.icon}`} />
   </svg>
 };




  render() {
    const { classes } = this.props;


    return (

        <div className={classes.root}>

            <Grid container  className={classes.gridWrapper}  spacing={16}>


                <Grid  item   className={classes.titleWrapper}  xs={12}>
                    <Paper className={classes.titleThanks}> Thanks! </Paper>
                    <Paper className={classes.titleQuestion}> Want To chat about something? </Paper>
                </Grid>



              <Grid item className={classes.contactWrapper}  xs={12}>

                    <a className={classes.contactButton} href='/'  onClick>
                      <Paper>
                          <SvgIcon>  </SvgIcon>
                          Contact Me
                      </Paper>
                    </a>

              </Grid>

              <Grid item xs={3} className={classes.socialWrapper}>
                <Paper> FB </Paper>
              </Grid>

              <Grid item xs={3} className={classes.socialWrapper}>
                <Paper> Git  </Paper>
              </Grid>

              <Grid item xs={3} className={classes.socialWrapper}>
                <Paper> E-Mail </Paper>
              </Grid>

              <Grid item xs={3} className={classes.socialWrapper}>
                <Paper> Insta </Paper>
              </Grid>

              <Grid item className={classes.creationWrapper}  xs={12}>
              </Grid>



          </Grid>


        </div>
    );
  }
}
const styles = theme => ({

  root: {
    height: '50%',
    width: '100%',
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '10%'

  },
  gridWrapper: {
    maxHeight: 100,
    maxWidth: 250,

  },

  titleWrapper: {
    height: '100%',

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
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  contactButton: {

  },
  socialWrapper: {
    height: '60%',
    textAlign: 'center',

  },



});




export default withStyles(styles, { })(ContactPage);
