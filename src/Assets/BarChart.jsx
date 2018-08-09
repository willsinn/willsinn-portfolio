import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


class BarChart extends Component {
  render() {
    const { classes } = this.props;
    return (

        <section className={classes.root}>
          <div className={classes.chartTitle}>
            <div className={classes.titleName}>Focus</div>
            <hr className={classes.titleHR} />
          </div>
          <div className={classes.barChart}>

            <div className={classes.barWrapper}>
              <div className={classes.topBorderRadiusBar}>
                <div className={classes.skillTitle}>
                  responsive design
                </div>
                <div className={classes.barTotalValueDark}>
                  <div className={classes.barSkillValue1}></div>
                </div>
              </div>
            </div>
            <div className={classes.barWrapper}>
              <div className={classes.barContainerDark}>
                <div className={classes.skillTitle}>
                  ui design
                </div>
                <div className={classes.barTotalValueDark}>
                  <div className={classes.barSkillValue2}></div>
                </div>
              </div>
            </div>
            <div className={classes.barWrapper}>
              <div className={classes.barContainerLight}>
                <div className={classes.skillTitle}>
                  interaction design
                </div>
                <div className={classes.barTotalValueLight}>
                  <div className={classes.barSkillValue3}></div>
                </div>
              </div>
            </div>
            <div className={classes.barWrapper}>
              <div className={classes.barContainerDark}>
                <div className={classes.skillTitle}>
                  usability
                </div>
                <div className={classes.barTotalValueLight}>
                  <div className={classes.barSkillValue4}></div>
                </div>
              </div>
            </div>
            <div className={classes.barWrapper}>
              <div className={classes.barContainerLight}>
                <div className={classes.skillTitle}>
                  chart scripts
                </div>
                <div className={classes.barTotalValueLight}>
                  <div className={classes.barSkillValue5}></div>
                </div>
              </div>
            </div>
            <div className={classes.barWrapper}>
              <div className={classes.barContainerDark}>
                <div className={classes.skillTitle}>
                  branding
                </div>
                <div className={classes.barTotalValueYellow}>
                  <div className={classes.barSkillValue6}></div>
                </div>
              </div>
            </div>
            <div className={classes.barWrapper}>
              <div className={classes.bottomBorderRadiusBar}>
                <div className={classes.skillTitle}>
                  information arcitecture
                </div>
                <div className={classes.barTotalValueRed}>
                  <div className={classes.barSkillValue7}></div>
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
    width: '100%',
  },
  barChart: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '2%',
  },
  chartTitle: {
    color: 'white',
    fontSize: '18px',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  titleName: {
    marginRight: '40%',
  },
  titleHR: {
    width: '50%',
  },
  barWrapper:{
    display: 'flex',
  },
  topBorderRadiusBar: {
    padding: '2.25%',
    border: '1px solid #53867b',
    borderRadius: '6px 6px 0 0',
  },
  bottomBorderRadiusBar: {
    padding: '2.25%',
    border: '1px solid #53867b',
    borderRadius: '0 0 6px 6px ',
  },
  barContainerLight: {
    padding: '2.25%',
    border: '1px solid #53867b',
  },
  barContainerDark: {
    padding: '2.25%',
    border: '1px solid #53867b',
    backgroundColor: '#609c90',
  },
  skillTitle: {
    fontSize: '14.5px',
    textTransform: 'uppercase',
    color: 'white',
    paddingTop: '1%',
    paddingBottom: '1%',
  },
  barTotalValueDark: {
    height: '20px',
    width: '340px',
    border: '1px solid #004c48',
    backgroundColor: '#bed7d2',
    borderRadius: '12px',
  },
  barTotalValueLight: {
    height: '20px',
    width: '340px',
    border: '1px solid #aecdc7',
    backgroundColor: 'white',
    borderRadius: '12px',
  },
  barTotalValueYellow: {
    height: '20px',
    width: '340px',
    borderRadius: '12px',
    backgroundColor: '#f4d9a4',
    border: '1px solid #cc8f19',
  },
  barTotalValueRed: {
    height: '20px',
    width: '340px',
    borderRadius: '12px',
    border: '1px solid #d24a27',
    backgroundColor: '#f6d7cf',
  },
  barSkillValue1: {
    height: '20px',
    width: '300px',
    backgroundColor: '#007f79',
    borderRadius: '12px 0px 0px 12px',
  },
  barSkillValue2: {
    height: '20px',
    width: '275px',
    backgroundColor: '#007f79',
    borderRadius: '12px 0px 0px 12px',
  },
  barSkillValue3: {
    height: '20px',
    width: '240px',
    backgroundColor: '#aecdc7',
    borderRadius: '12px 0px 0px 12px',
  },
  barSkillValue4: {
    height: '20px',
    width: '225px',
    backgroundColor: '#aecdc7',
    borderRadius: '12px 0px 0px 12px',
  },
  barSkillValue5: {
    height: '20px',
    width: '180px',
    backgroundColor: '#aecdc7',
    borderRadius: '12px 0px 0px 12px',
  },
  barSkillValue6: {
    height: '20px',
    width: '155px',
    backgroundColor: '#cc8f19',
    borderRadius: '12px 0px 0px 12px',
  },
  barSkillValue7: {
    height: '20px',
    width: '120px',
    backgroundColor: '#d24a27',
    borderRadius: '12px 0px 0px 12px',
  },



});
export default withStyles(styles, {})(BarChart);
