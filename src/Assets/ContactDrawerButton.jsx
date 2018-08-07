import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SwipeableDrawer, TextField } from '@material-ui/core';
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
    const sideForm = (
      <div className={classes.formContainer}>
        <form onSubmit="onSubmit">
          <ul className={classes.inputListWrapper}>
            <li> What should I call you?* </li>
            <li>
              <input type="text" name="firstName" />
              <input type="text"  name="lastName" />
            </li>
            <li>First Last</li>
            <li>Email</li>
            <li>
              <input type="email" name="user_email" />
            </li>
            <li>Phone</li>
            <li>
              1-<input className={classes.phoneInput} type="text" name="phone" pattern="[0-9]{3}" title="areaCode" min="3" max="3"  />
              -<input className={classes.phoneInput} type="text" name="phone" pattern="[0-9]{3}" title="firstThreeDigits" min="3" max="3" />
              -<input className={classes.phoneInput} type="text" name="phone" pattern="[0-9]{4}" title="lastFourDigits" min="4" max="4"/>
            </li>
            <li>
              <textarea name="message" rows="10" cols="120">
              </textarea>
            </li>
            <input type="Submit" value="submit" />
          </ul>
        </form>
      </div>
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
  formDrawerContainer: {
  },
  sideFormContainer: {
  },
  formContainer: {
    backgroundColor:'gray',
    width: '20%',
  },
  inputListWrapper: {
    listStyle: 'none',
    padding: '1px',
  },
  phoneInput: {
    width: '30px',
  },
});
export default withStyles(styles, { })(ContactDrawerButton);
