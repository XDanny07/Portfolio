import React from 'react';
import * as Styled from './SectionHeader.styles';

export interface Props {
  variant: 'large' | 'medium' | 'small' | 'extraSmall';
  headerText?: string;
  margin: string;
  color: string;
  withGradient?: boolean;
}

/**
 *@TYPOGRAPHY re-usable section header
 *@function TextHeader
 *@param {enum} variant - specifies font-size to be applied
 *@param {string} margin - margin to be applied
 *@param {string} headerText - text content of header
 *@param {string} color - text color
 *@param {boolean} withGradient - specifies whether gradient color should be applied
 *@returns {JSX.Element} - Rendered TextHeader component
 */
const TextHeader: React.FunctionComponent<Props> = ({
  margin,
  headerText,
  color,
  variant,
  withGradient,
  children,
}): JSX.Element => {
  return (
    <Styled.H1
      variant={variant}
      margin={margin}
      color={color}
      withGradient={withGradient}
    >
      {headerText ?? children}
    </Styled.H1>
  );
};

export default TextHeader;
