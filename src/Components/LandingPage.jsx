import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AbsoluteProfile from '../Images/AbsoluteProfile.jpeg';
import ContactFormDrawer from '../Assets/ContactFormDrawer';




class LandingPage extends Component {


  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
         <img className={classes.backgroundImage} src={AbsoluteProfile}/>
        <ContactFormDrawer className={classes.contactButton} />
        </div>
    );
  }
}
const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    zIndex: '0',
    opacity: '0.5',
  },


  backgroundImage: {
    zIndex: '-1',
    backgroundImage: 'cover',
    width: '100%',
    height: '100%',
    opactity: '0.3',
    position: 'absolute',

  },

    contactButton: {
    },

});

export default withStyles(styles, {})(LandingPage);
