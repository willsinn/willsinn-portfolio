import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Email from '../Icons/Email.png';

class ContactButton extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
      <button onClick className={classes.contactButton}>
      <div className={classes.contactButton}>
        <div className={classes.buttonWrapper}>
          <img className={classes.buttonIcon} src={Email} />
          <div className={classes.buttonName}>
            Contact Me
          </div>
        </div>
      </div>
      </button>
    </div>

    );
  }
}
const styles = theme => ({
  root: {
    width: '100%',

  },
  contactButton: {
    backgroundColor: 'transparent',
    borderRadius: '6px',
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
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

});
export default withStyles(styles, {})(ContactButton);
