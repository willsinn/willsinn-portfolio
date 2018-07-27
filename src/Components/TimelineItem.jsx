import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';




class TimelineItem extends Component {

  static defaultProps = {

    posts:[
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}]
  }

  itemList(props) {
    const posts = props.posts;
    const item = (
      <ul>
      {props.posts.map((post) => (
            <li
            key={post.id}>
              {post.title}
             </li>)

)}</ul>

);
return(<div>{itemList}</div>);
}

  render() {
    const { classes } = this.props;
    const post = this.props.post;





    return(
      <li className={classes.root}>
        <div className={classes.timelineContainer}>
            {
              posts.map((post, id) => {})
            }
            <div className={classes.timelineHeader}>

            </div>

            <div className={classes.timelineBody}>
            </div>
        </div>
      </li>

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
