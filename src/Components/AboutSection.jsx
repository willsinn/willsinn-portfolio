import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CA from '../Images/States/CA.png';
import LA from '../Images/States/LA.png';
import TX from '../Images/States/TX.png';

class AboutSection extends Component {
  render() {
    const { classes } = this.props;
    var backgroundCA = {
      width: '33%',
      backgroundImage: `url(${ CA })`,
      backgroundSize: 'cover',
      height: '50%',
    };

    return (
      <section className={classes.root}>

        <div className={classes.aboutContainer}>
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
            <div style={ backgroundCA } classname={classes.contentColumn}>

            </div>
            <div classname={classes.contentColumn}>
            </div>
            <div classname={classes.contentColumn}>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: 'gray',
  },
  aboutContainer: {
      padding: '0 10% 0 10%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
  },
  aboutIntroduction: {

  },
  aboutContent: {
    display: 'flex',

  },
  contentColumn: {
    width: '33%',
  },
});

export default withStyles(styles, {})(AboutSection);
