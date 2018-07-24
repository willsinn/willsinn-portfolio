import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';




class ContactForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      focused: false,
    }
}

  handleFocus = (event, focused) => {

    this.setState(state => (!state.focused ? { focused: true } : null));
    console.log('clicked' );

  }



  render() {


    return(
      <div>
        <form onSubmit="onSubmit">
          <input name="firstName" type="text" focused="false" handleFocus={handleFocus}  />
            First
          <input name="lastName" type="text" focused="false" />
            Last
          <input name="email" type="text" focused="false" />
            Email
          <textarea name="message" rows="10" cols="50">

          </textarea>
        </form>
      </div>
    );
  }
}

const styles = theme => ({
  root:  {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',

  },

});

export default withStyles(styles, { })(ContactForm);
