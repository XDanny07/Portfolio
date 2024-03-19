import React, { FC, useEffect, useRef, useState } from 'react';
import * as Styled from './Slide.styles';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

export interface Props {
  anchorID: string;
  bgColor: string;
  height: string;
}

/**
 *Renders full-viewport slide wrapper for resume content
 *@function Slide
 *@param {string} anchorID - slide anchorID
 *@param {string} bgColor - slide background color
 *@param {string} height - slide height
 *@param {ReactNode} children - wrapped content
 *@returns {JSX.Element} - Rendered CardContent component
 */
const Slide: FC<Props> = ({
  anchorID,
  bgColor,
  height,
  children,
}): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isElementVisible] = useIntersectionObserver(containerRef, {
    threshold: 0.35,
  });
  const [isOnScreen, setIsOnScreen] = useState(false);
  useEffect(() => {
    if (isElementVisible && !isOnScreen) setIsOnScreen(true);
  }, [isElementVisible, isOnScreen]);

  return (
    <Styled.Container
      id={anchorID}
      ref={containerRef}
      bgColor={bgColor}
      height={height}
    >
      {isOnScreen ? children : ''}
    </Styled.Container>
  );
};

export default Slide;
