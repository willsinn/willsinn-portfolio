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
         <div className={classes.root}>
           <AppBar position="static">
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
           {activeTab === 1 && <Card>Item Two</Card>}
           {activeTab === 2 && <Card>Item Three</Card>}
         </div>
       );
     }
   }

const styles = theme => ({
  root: {
  },
  firstCard: {},
  firstAvatar: {},
  firstMedia: {},
});
export default withStyles(styles, {})(PortfolioSection);
