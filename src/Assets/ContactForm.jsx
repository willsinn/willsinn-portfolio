import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';




class ContactForm extends Component {

  constructor(props){
    super(props);
    const { children } = this.props;
      if (children) {
        React.Children.forEach(children, child => {
          if (!isMuiElement(child, ['Input', 'Select', 'NativeSelect'])) {
            return;
          }

          if (isFilled(child.props, true)) {
            this.state.filled = true;
          }

          const input = isMuiElement(child, ['Select', 'NativeSelect']) ? child.props.input : child;

          if (input && isAdornedStart(input.props)) {
            this.state.adornedStart = true;
          }
        });
      }
    }

    state: {
      adornedStart: false,
      filled: false,
      focused: false,
    };



    getChildContext() {
    const { disabled, error, required, margin } = this.props;
    const { adornedStart, filled, focused } = this.state;
    return {
      muiFormControl: {
        adornedStart,
        disabled,
        error,
        filled,
        focused,
        margin,
        onBlur: this.handleBlur,
        onEmpty: this.handleClean,
        onFilled: this.handleDirty,
        onFocus: this.handleFocus,
        required,
      },
    };
  }

  handleFocus = () => {
    this.setState(state => (!state.focused ? { focused: true } : null));
  };

  handleBlur = () => {
    this.setState(state => (state.focused ? { focused: false } : null));
  };

  handleDirty = () => {
    if (!this.state.filled) {
      this.setState({ filled: true });
    }
  };

  handleClean = () => {
    if (this.state.filled) {
      this.setState({ filled: false });
    }
  };


  render() {
    const { classes,
      className,
      disabled,
      error,
      fullWidth,
      margin,
      required,
        } = this.props;

        ContactForm.defaultProps = {
          component: 'div',
          disabled: false,
          error: false,
          fullWidth: false,
          margin: 'none',
          required: false,
        };
    


    return(
      <div>
        <form onSubmit="onSubmit">
          <input name="firstName" type="text" />
            First
          <input name="lastName" type="text" />
            Last
          <input name="email" type="text" />
            Email
          <textarea name="message" rows="10" cols="50">

          </textarea>
        </form>
      </div>
    );
  }
}

const styles = theme => ({
  root:  {},

});

export default withStyles(styles, { })(ContactForm);
