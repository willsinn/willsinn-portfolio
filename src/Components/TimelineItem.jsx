import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import 



class TimelineItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      id: [1,2,3,4],
      text: '',
      items: []
      }
    }

  postItems(props) {
    const header = props.items.map((item) =>
    <div key={item.id}>
    <h3>{item.title}</h3>
    </div>
  );
    const content = props.items.map((item) =>
    <div key={item.id}>
      <p>{item.text}</p>
    </div>
   );
   return(
     <div>
     {header}
     <hr/>
     {content}
     </div>
   );
  }


  render() {
    const { classes } = this.props;

    const items = [
      { id: 1, title: 'Title1', text: 'ThisIsTitle1'},
      { id: 2, title: 'Title2', text: 'ThisIsTitle2'},
      { id: 3, title:'Body1', text:'ThisIsBody1'},
      { id: 4, title:'Body2', text:'ThisIsBody2'},
    ];
    const content = {props.items.map((item) =>
    <Content
      key={item.id}
      id={item.id}
      text={item.text}
    />
  });
    const Content = this.props.items;

    return(
      <div className={classes.root}>
        <div className={classes.timelineContainer}>

            <div className={classes.timelineHeader}>
            <li>{this.props.header}</li>
            </div>

            <div className={classes.timelineBody}>
            </div>
        </div>
      </div>

    );
  }
}

const styles = theme => ({
  root: {
    height: '20%',
    width: '80%',
    backgroundColor: 'purple',

  },

  timelineContainer: {},


  timelineHeader: {},

  timelineBody: {},

});

export default withStyles(styles, {})(TimelineItem);
