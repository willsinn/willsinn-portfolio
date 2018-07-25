import React, { Component } from 'react';
import { Paper, SwipeableDrawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import LandingStyles from '../Styles/LandingStyles.css';
import AbsoluteProfile from '../Images/AbsoluteProfile.jpeg';
import ContactFormDrawer from '../Assets/ContactFormDrawer';




class LandingPage extends Component {

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

    return (
        <div className={classes.root}>

         <img className={classes.backgroundImage} src={AbsoluteProfile}/>
          <ContactFormDrawer />
        </div>
    );
  }
}
const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },

  mainPage: {
    zIndex: '1'

  },
  rightPage: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    bottom: 0,
    transition: 'transform .3s ease-out',
    WebkitTransition: '-webkit-transform .3s ease-out',
    willChange: 'transform',
    overflowY: 'auto',

  },
  formDrawerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
    transition: 'left .3s ease-out, right .3s ease-out',
  },


  contactButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  closeDrawerButton: {},


});

export default withStyles(styles, {})(LandingPage);
