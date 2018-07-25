import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';




class ContactForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      focused: false,
    }
}


  render() {


    return(
      <div className="formContainer">
        <form onSubmit="onSubmit">
        <input className="contactInput"
          name="highlight" type="text"
          value='basic input, bottom border'
        />
        <span className='highlightInput'>
          basic input, bottom border
        </span>
          <input name="firstName" type="text"   />
            First {this.handleFocus}
          <input name="lastName" type="text"/>
            Last
          <input name="email" type="text"  />
            Email
          <textarea name="message" rows="10" cols="50">

          </textarea>
          <button onClick="onSubmit">
            Submit
          </button>
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
  formContainer: {
    backgroundColor: 'white',

  },

  contactInput: {
    height: '30px',
    width: '100%',
    minWidth: '100%',
    padding: '0',
    borderRadius: '0',
    backgroundColor: 'white',
    color: 'white',
    border: 'none',
    outline: 'none',
  },

  highlightInput: {
    maxWidth: '100%',
 borderTop: '3px solid white',
 position: 'absolute',
 left: 0,
 bottom: 0,
 height: 0,
  }

});

export default withStyles(styles, { })(ContactForm);
