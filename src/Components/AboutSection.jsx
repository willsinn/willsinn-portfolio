import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';



class AboutSection extends Component {



  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
          <div className={classes.aboutIntroduction}>
            <h1>
              About Kyle
            </h1>
            <h2>
              My career began in Louisiana designing Flash and 3D animation, and I’ve arrived as an all around UX designer working in Texas & California.
            </h2>
            <h2>
              I wonder what’s next...
            </h2>
          </div>
          <div className={classes.aboutContent}>
            <div classname={classes.contentColumn}> </div>
            <div classname={classes.contentColumn}> </div>
            <div classname={classes.contentColumn}> </div>

          </div>

        </div>
    );
  }
}
const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundColor: 'gray',
    display: 'flex',
    flexDirection: 'column',

  },
  aboutIntroduction: {
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '10% 10% 0 10%'

  },

  aboutContent: {
    height: '50%'

  },


});

export default withStyles(styles, {})(AboutSection);
