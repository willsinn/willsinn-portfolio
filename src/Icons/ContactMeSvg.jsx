import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { SvgIcon } from '@material-ui/core';

import classNames from 'classnames';






function ContactMeSvg(props) {
  const {
    children,
    classes,
    className: Icons,
    color,
    component: Component,
    fontSize,
    nativeColor,
    titleAccess,
    viewBox,


  } = props;


  const className = classNames(
    classes.root,
    {
      [classes.fontSizeInherit]: fontSize === 'inherit',
      [classes[`color${capitalize(color)}`]]: color !== 'inherit',
    },
    icons,
  );

// Functionality goes in the component, ContactPage
    iconLink(titleAccess, () => {

    let shallow;
    let mount;
    let classes;
    const path=   <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
     ;
      it('should be able to make an icon accessible', () => {
        const wrapper = shallow(
          <SvgIcon title="Go to link" titleAccess="Network">
            {path}
          </SvgIcon>,
        );
        assert.strictEqual(wrapper.find('title').text(), 'Network');
        assert.strictEqual(wrapper.props()['aria-hidden'], 'false');
      });



  return (
    <Component
      className={className}
      focusable="false"
      viewBox={viewBox}
      color={nativeColor}
      aria-hidden={titleAccess ? 'false' : 'true'}
      path={<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>}
    >

      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  );
}



SvgIcon.propTypes = {
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `nativeColor` property to apply a color attribute to the SVG element.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: PropTypes.oneOf(['inherit', 'default']),
  /**
   * Applies a color attribute to the SVG element.
   */
  nativeColor: PropTypes.string,
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: PropTypes.string,
};

ContactMeSvg.defaultProps = {
  color: 'inherit',
  component: 'svg',
  fontSize: 'default',
  viewBox: '0 0 24 24',


},


ContactMeSvg.iconLink = 'IconLink';

export default withStyles(styles, { icon: 'IconLink'  })(SvgIcon);
