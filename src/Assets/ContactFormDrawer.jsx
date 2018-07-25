import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, SwipeableDrawer } from '@material-ui/core';





class ContactFormDrawer extends Component {

  state = {
    right: false,
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

    render() {
    const { classes } = this.props;

    const sideForm = (
      <form onSubmit="onSubmit">
        <input name="firstName" type="text" />
            First
        <input name="lastName" type="text"/>
            Last
        <input name="email" type="text" />,
            Email

          <textarea name="message" rows="10" cols="50" />



        <button onClick="onSubmit">
          Submit
        </button>
        </form>
    );



    return (
      <div className={classes.root}>
      <button
         className={classes.contactButton}
        onClick={this.toggleDrawer('right', true)}
      >
         <Paper className={classes.contactButton}>
        <i class="material-icons">email</i>
        Contact Me
        </Paper>
      </button>
      <SwipeableDrawer
         className={classes.formDrawerContainer}
         anchor='right'
         open={this.state.right}
         onClose={this.toggleDrawer('right', false)}
         onOpen={this.toggleDrawer('right', true)}
       >
         <button
           className={classes.closeDrawerButton}
           onClick={this.toggleDrawer('right', false)}>
         Close
         </button>
         {sideForm}
       </SwipeableDrawer>




      </div>
    );
  }
}


const styles = theme => ({
  root:  {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

  },

});

export default withStyles(styles, { })(ContactFormDrawer);
