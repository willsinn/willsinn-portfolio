import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';




class ContactForm extends Component {
    constructor(props){
      super(props);
      this.state = {
        selected: false,
      }
    }

    handleSelected() {
      this.setState({ selected: '!selected'  })
    }


    render() {
    const { classes } = this.props;


    return (
      <div className={classes.formContainer}>


        <form onSubmit="onSubmit">
          <input name="firstName" type="text" />
              First
          <input name="lastName" type="text"/>
              Last
          <input name="email" type="text" />,
              Email

            <textarea name="message" rows="10" cols="50" />



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
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

  },
  formContainer: {
    backgroundColor: 'white',

  },

});

export default withStyles(styles, { })(ContactForm);
