import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Typography, Tabs, Tab, Paper, Avatar, CardMedia, AppBar,  } from '@material-ui/core';


class PortfolioSection extends Component {
    state = {
      activeTab : 0
    };
    handleChange = (event, activeTab) => {
       this.setState({ activeTab });
     };

     render() {
       const { classes } = this.props;
       const { activeTab } = this.state;

       return (
         <section className={classes.root}>
           <div className={classes.titleWrapper}>
             <div className={classes.titleContainer}>
               <div className={classes.beforeTitle}>_______________</div>
               <h1 className={classes.portfolioTitle}>Portfolio</h1>
               <div className={classes.afterTitle}>_______________</div>
             </div>
           </div>
           <div className={classes.projectsWrapper}>
           <div className={classes.projectsContainer}>

           <AppBar className={classes.projectNav}>
             <Tabs activeTab={activeTab}
                  onChange={this.handleChange}>
               <Tab label="Item One" />
               <Tab label="Item Two" />
               <Tab label="Item Three" href="#basic-tabs" />
             </Tabs>
           </AppBar>
           {activeTab === 0 && <Card>
               <CardHeader
                 avatar={
                   <Avatar aria-label="Recipe">
                     R
                   </Avatar>
                 }
                 title="Shrimp and Chorizo Paella"
                 subheader="September 14, 2016"
               />
               <CardMedia

                 image="/static/images/cards/paella.jpg"
                 title="Contemplative Reptile"
               />
               <CardContent>
                 <Typography component="p">
                   This impressive paella is a perfect party dish and a fun meal to cook together with
                   your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                 </Typography>
               </CardContent>
               <button>
                 View Code
               </button>
               <button>
                 Try it Out
               </button>
           </Card>}
           {activeTab === 1 && <Card>
               <CardHeader
                 avatar={
                   <Avatar aria-label="Website">
                     W
                   </Avatar>
                 }
                 title="Site"
                 subheader="Blah Blah"
               />
               <CardMedia

                 image="/static/images/cards/paella.jpg"
                 title="Whatchu talking about"
               />
               <CardContent>
                 <Typography component="p">
                   This impressive paella is a perfect party dish and a fun meal to cook together with
                   your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                 </Typography>
               </CardContent>
               <button>
                 View Code
               </button>
               <button>
                 Try it Out
               </button>
           </Card> }
           {activeTab === 2 && <Card>Item Three</Card>}
           </div>
           </div>
         </section>
       );
     }
   }

const styles = theme => ({
  root: {
    backgroundColor: '#e39f1c',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleContainer: {
    paddingTop: '5%',
    margin: '0',
    fontSize: '36px',
    fontWeight: '600',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  beforeTitle: {
    marginBottom: '2.5%',
    marginRight: '15%',
    borderBottom: '5px solid rgba(0, 0, 0, 0.25)',
    color: 'transparent',
  },
  portfolioTitle: {
    textTransform: 'uppercase',

  },
  afterTitle: {
    marginLeft: '15%',
    marginBottom: '2.5%',
    borderBottom: '5px solid rgba(0, 0, 0, 0.25)',
    color: 'transparent',
  },
  titleText: {
    fontSize: '18px',
  },
  projectsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectsContainer: {
    width: '70%',    
  },
  projectNav: {
    position: 'static',
  },
  firstCard: {},
  firstAvatar: {},
  firstMedia: {},
});
export default withStyles(styles, {})(PortfolioSection);
