import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TimelineItem from './TimelineItem';


class TimelineList extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:[],
      title:'',
      content:'',
      posts:[]
    }
  }


  render(){


    const { classes } = this.props;
    const posts = this.props.posts;

    return(
      <div>
      <ul>
      {
        this.props.posts.map((post, id) => {
          return <TimelineItem
                    key={post.id}
                    title={title}
                    content={content}
                    posts={posts}
                    post={post}

            />;
        })}
        </ul>
      </div>
    );
  }
}





const styles = theme => ({
  root: {},
});
export default withStyles(styles, {})(TimelineList);
