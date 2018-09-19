import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CA from '../Assets/Images/States/CA.png';
import LA from '../Assets/Images/States/LA.png';
import TX from '../Assets/Images/States/TX.png';

class AboutSection extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section className={classes.root}>
        <div className={classes.aboutWrapper}>
        <div className={classes.aboutContainer}>
          <div className={classes.aboutIntroduction}>
            <div className={classes.introName}>
              <div className={classes.nameLineBefore}>
              _______________</div>
            <h1 className={classes.aboutName}>About</h1>
            <h1 className={classes.aboutName}>Kyle</h1>
              <div className={classes.nameLineAfter}>
              _______________</div>
          </div>
            <h2 className={classes.introDescribe}>
              My career began in Louisiana designing Flash and 3D animation, and I’ve arrived as an all around UX designer working in Texas & California.
            </h2>
            <h2 className={classes.introNext}>
              I wonder what’s next...
            </h2>
            <div className={classes.aboutLine}>
              _______________________________________
            </div>
          </div>
          <div className={classes.aboutContent}>
            <div className={classes.contentColumnState1}>
              <p className={classes.columnStateText}> Born in Lafayette and raised in Baton Rouge where I attended LSU and graduated from ULL in 3D animation. I visit New Orleans as much as possible and am a Tiger fan. I will always choose Cajun food over Creole.</p>
            </div>
            <div className={classes.contentColumnState2}>
              <p className={classes.columnStateText}>I moved to Austin in 2003 with no job and started a web design firm. I met my lovely wife one year later and we’ve grown our businesses and lives together in ATX. We now live in the area of Dirty Six in downtown. Ive become a BBQ and taco snob.</p>
            </div>
            <div className={classes.contentColumnState3}>
              <p className={classes.columnStateText}>I first travelled to Cali in 2010 for a Joomla convention. A year and half later I was hired by eBay to head up the UX for a massive analytics portal. After that I moved on to a Sears analytics team also in CA. Something tells me Ill be back...</p>
            </div>
          </div>
          <div className={classes.aboutButtonWrapper}>
            <button className={classes.aboutViewDesignsButton} onClick> View Recent Designs </button>
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
      width: '75%',
      alignItems: 'center',
  },
  aboutIntroduction: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  introName: {
    paddingTop: '5%',
    margin: '0',
    fontSize: '36px',
    fontWeight: '600',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  nameLineBefore: {
    marginBottom: '2.5%',
    marginRight: '15%',
    borderBottom: '5px solid rgba(0, 0, 0, 0.25)',
    color: 'transparent',
  },
  aboutName: {
    paddingRight:'1%',
    paddingLeft: '1%',
    textTransform: 'uppercase',
  },
  nameLineAfter: {
    marginLeft: '15%',
    marginBottom: '2.5%',
    borderBottom: '5px solid rgba(0, 0, 0, 0.25)',
    color: 'transparent',
  },
  introDescribe: {
    padding: '0',
    marginTop: '0',
    textAlign: 'center',
    width: '92%',
    fontSize: '30px',
    color: 'white',
    fontWeight: '50',

  },
  introNext: {
    paddingTop: '1%',
    margin: '0',
    color: 'white',
    fontSize: '30px',
    fontWeight: '50',
  },
  aboutLine: {
    borderBottom: '5px solid white',
    color: 'transparent',
  },
  aboutContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '1%',
    height: 'inherit',

  },
  contentColumnState1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '30%',
    height: '325px',
    backgroundImage: `url(${ LA })`,
    backgroundSize: '300px 325px',
    backgroundRepeat: 'no-repeat',
  },
  contentColumnState2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '30%',
    height: '325px',
    backgroundImage: `url(${ TX })`,
    backgroundSize: '300px 325px',
    backgroundRepeat: 'no-repeat',

  },
  contentColumnState3: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '30%',
    height: '325px',
    backgroundImage: `url(${ CA })`,
    backgroundSize: '300px 325px',
    backgroundRepeat: 'no-repeat',

  },
  columnStateText: {
    color: 'white',
    fontSize: '19px',
    width: '100%',
    fontWeight: '10',
  },
  aboutButtonWrapper: {
    paddingTop: '3%',
  },
  aboutViewDesignsButton: {
    fontSize: '18px',
  },
});
export default withStyles(styles, {})(AboutSection);
