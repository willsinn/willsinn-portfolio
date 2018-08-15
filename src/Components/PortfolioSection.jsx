import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Typography, Tabs, Tab, Paper, Avatar, CardMedia } from '@material-ui/core';


class PortfolioSection extends Component {
  constructor() {
    super();
    this.state = { activeTab:0 };
  }
  handleChange = (event, value) => {
    this.setState({ activeTab : value });
  };
  toggleProjects() {
    return (
      <Card>
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
      </Card>
          );
          if(this.state.activeTab === 0){
            return ( <Card>proj2</Card> )
          } else if (this.state.activeTab === 1){
            return ( <Card>proj3</Card> )
          } else if (this.state.activeTab === 2){
            return ( <Card>proj4</Card> )
          }
        }
        render() {
        const { classes } = this.props;

        return(
          <section className={classes.root}>
            <Paper>
              <Tabs
                value={this.state.activeTab}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                >
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                  <Tab label="Item Four" />
              </Tabs>
            </Paper>
            <Paper className="content">{this.toggleProjects()}</Paper>
          </section>
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
