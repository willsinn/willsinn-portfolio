import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SwipeableDrawer } from '@material-ui/core';
import Email from '../Icons/Email.png';
import ContactDrawerForm from './ContactDrawerForm';

class ContactDrawerButton extends Component {
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
    const drawerForm = (
      <ContactDrawerForm/>
    );

    return (
      <div className={classes.root}>
        <button
         className={classes.contactButton}
         onClick={this.toggleDrawer('right', true)}
        >
          <div className={classes.contactButton}>
            <div className={classes.buttonWrapper}>
              <img className={classes.buttonIcon} src={Email} />
              <div className={classes.buttonName}>
                Contact Me
              </div>
            </div>
          </div>
        </button>
        <SwipeableDrawer
          className={classes.toggleDrawerStyle}
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
         {drawerForm}
       </SwipeableDrawer>
      </div>
    );
  }
}
const styles = theme => ({
  root:  {
    display: 'flex',
    flexDirection: 'column',
    width: '15%',
  },
  contactButton: {
    backgroundColor: 'transparent',
    borderRadius: '6px',
  },
  buttonWrapper: {
    display: 'flex',
    padding: '5%',
    justifyContent: 'center',
  },
  buttonIcon: {
    height: '18px',
    width: '18px',
    paddingRight: '1%',
  },
  buttonName: {
    fontSize: '17px',
    color: 'white',
    textTransform: 'uppercase',
  },
  toggleDrawerStyle: {
    },
  closeDrawerButton: {},
});
export default withStyles(styles, { })(ContactDrawerButton);
