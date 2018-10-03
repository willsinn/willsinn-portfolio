import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';


class ContactDrawerForm extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <form className={classes.contactForm} onSubmit="onSubmit">
          <ul className={classes.inputListWrapper}>
            <h1> Contact Kyle </h1>
            <p> You're awesome and I'm flattered. Whats on your mind? </p>
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
  }
}
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor:'gray',
  },
  contactForm: {
    width: '100%',
  },
  inputListWrapper: {
    listStyle: 'none',
    padding: '1px',
  },
  phoneInput: {
    width: '30px',
  },
});
export default withStyles(styles, {})(ContactDrawerForm);
