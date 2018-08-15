import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


class PortfolioSection extends Component {
  render() {
    const { classes } = this.props;
    return (

        <section className={classes.root}>
        
        import React, { Component } from 'react';
        import { Tabs, Tab, Cell, Grid, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


        class Projects extends Component {
            constructor() {
              super();
              this.state = { activeTab:0 };
            }

            toggleCategories() {
              /* Create a file for each project page and import into mainpage, Projects, */

              if(this.state.activeTab === 0){

                return (
                  <Card shadow={5} styles={{minWidth: '450', margin:'auto'}}>
                    <CardTitle styles=
                        {{color: '#fff', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) center / cover'}}
                        >React Project #1</CardTitle>
                    <CardText>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </CardText>
                    <CardActions border>
                      <Button colored>GitHub</Button>
                      <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu styles={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
                )
              } else if (this.state.activeTab === 1){
                return(
                    <Card shadow={5} styles={{minWidth: '450', margin:'auto'}}>
                      <CardTitle styles=
                          {{color: '#fff', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) center / cover'}}
                          >React Project #2</CardTitle>
                      <CardText>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                      </CardText>
                      <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                        </CardActions>
                      <CardMenu styles={{color: '#fff'}}>
                        <IconButton name="share" />
                      </CardMenu>
                    </Card>
                )
              } else if (this.state.activeTab === 2){
                return(
                    <Card shadow={5} styles={{minWidth: '450', margin:'auto'}}>
                      <CardTitle styles=
                          {{color: '#fff', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) center / cover'}}
                          >React Project #3</CardTitle>
                      <CardText>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                      </CardText>
                      <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                        </CardActions>
                      <CardMenu styles={{color: '#fff'}}>
                        <IconButton name="share" />
                      </CardMenu>
                    </Card>
                )
              }
              else if (this.state.activeTab === 3){
                return(
                    <Card shadow={5} styles={{minWidth: '450', margin:'auto'}}>
                      <CardTitle styles=
                          {{color: '#fff', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg) center / cover'}}
                          >React Project #4</CardTitle>
                      <CardText>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                      </CardText>
                      <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>LiveDemo</Button>
                        </CardActions>
                      <CardMenu styles={{color: '#fff'}}>
                        <IconButton name="share" />
                      </CardMenu>
                    </Card>
               )
              }
            }

          render() {
            return(
              <div>
              <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab:tabId })} ripple>
                  <Tab>React</Tab>
                  <Tab>GoogleSheets</Tab>
                  <Tab>ReactRedux</Tab>
                  <Tab>Calculator</Tab>
                </Tabs>
              </div>
              <div>
                  <Grid>
                   <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                   </Cell>
                  </Grid>
              </div>
              </div>
            );
          }
        }

        export default Projects;
        </section>
    );
  }
}
const styles = theme => ({
  root: {
  },
});
export default withStyles(styles, {})(PortfolioSection);
