import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkPropType } from 'typedefs';
import Anchor from 'components/atoms/anchor';
import { trimWhiteSpace } from 'functions/utils';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  link: LinkPropType.isRequired,
  rest: PropTypes.any,
};

/**
 * Stylized anchor that looks like a button.
 * Dependent on the `Anchor` component.
 */
const AnchorButton = ({
  className = '',
  link,
  children,
  ...rest
}) => (
  <Anchor
    className={ trimWhiteSpace`btn ${className}` }
    link={ link }
    { ...rest }
  >
    { children }
  </Anchor>
);

AnchorButton.propTypes = propTypes;

export default AnchorButton;