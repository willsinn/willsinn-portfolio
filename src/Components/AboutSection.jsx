import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CA from '../Images/States/CA.png';
import LA from '../Images/States/LA.png';
import TX from '../Images/States/TX.png';

class AboutSection extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <div className={classes.aboutWrapper}>
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
            <div className={classes.contentColumnState1}>
              <p> Born in Lafayette and raised in Baton Rouge where I attended LSU and graduated from ULL in 3D animation. I visit New Orleans as much as possible and am a Tiger fan. I will always choose Cajun food over Creole.</p>
            </div>
            <div className={classes.contentColumnState2}>
              <p>I moved to Austin in 2003 with no job and started a web design firm. I met my lovely wife one year later and we’ve grown our businesses and lives together in ATX. We now live in the area of Dirty Six in downtown. Ive become a BBQ and taco snob.</p>
            </div>
            <div className={classes.contentColumnState3}>
              <p>I first travelled to Cali in 2010 for a Joomla convention. A year and half later I was hired by eBay to head up the UX for a massive analytics portal. After that I moved on to a Sears analytics team also in CA. Something tells me Ill be back...</p>
            </div>
          </div>
         </div>
        </div>
      </section>
    );
  }
}
const styles = theme => ({
  root: {
    backgroundColor: 'gray',

  },
  aboutWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '60%',

  },
  aboutIntroduction: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  aboutContent: {
    display: 'flex',
    alignItems: 'center'

  },

  contentColumnState1: {
    width: '33%',
    backgroundImage: `url(${ CA })`,
    backgroundSize: 'cover',

  },
  contentColumnState2: {
    width: '33%',
    backgroundImage: `url(${ LA })`,
    backgroundSize: 'cover',

  },
  contentColumnState3: {
    width: '33%',
    backgroundImage: `url(${ TX })`,
    backgroundSize: 'cover',

  },
});

export default withStyles(styles, {})(AboutSection);
