import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';


const emailEndpoint = 'https://sdjtbwjph7.execute-api.us-east-1.amazonaws.com/default/receiving-emails';

class ContactDrawerForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
          subject: '',
          body: ''
      };

      this.updateSubject = this.updateSubject.bind(this);
      this.updateBody = this.updateBody.bind(this);
      this.submitForm = this.submitForm.bind(this);
  }

  updateSubject(event) {
      const val = event.target.value;
      this.setState({ subject: val });
  }

  updateBody(event) {
      const val = event.target.value;
      this.setState({ body: val });
  }

  submitForm(event) {
      event.preventDefault();
      return fetch('https://cors-anywhere.herokuapp.com/' + emailEndpoint, {
          method: "POST",
          headers: {
              'Access-Control-Allow-Origin':'*',
              "Content-Type": "application/json",
              'x-api-key': 'tGQ3kR4ViO25Xg7B1AZ7M61KcswsnqQf1Q79LJwY',
              mode: "no-cors", // no-cors, cors, *same-origin
          },
          body: JSON.stringify({
            subject: this.state.subject,
            body: this.state.body
          }),
      })
      .then(response => {
          console.log('RESPONSE!!', response.json());
      });
  }

  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <form className={classes.contactForm}>
          <ul className={classes.inputListWrapper}>
            <h1> Contact Kyle </h1>
            <p> You're awesome and I'm flattered. Whats on your mind? </p>
            <li> What should I call you?* </li>
            <li>
              <input
                type="text"
                value={this.state.subject}
                onChange={this.updateSubject}
              />
              <input
                type="text"
                value={this.state.body}
                onChange={this.updateBody}
              />
            </li>
            <button onClick={this.submitForm}>
              Submit
            </button>
          </ul>
        </form>
      </div>
    );
  }
}
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor:'gray',
  },
  contactForm: {
    width: '100%',
  },
  inputListWrapper: {
    listStyle: 'none',
    padding: '1px',
  },
  phoneInput: {
    width: '30px',
  },
});
export default withStyles(styles, {})(ContactDrawerForm);
