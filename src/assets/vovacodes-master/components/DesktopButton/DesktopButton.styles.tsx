import styled, { css } from 'styled-components';
import { IconSize } from '../../types/redux/ui-reducer-types';

interface Props {
  variant: 'desktop' | 'systemTray' | 'pinnedApp' | 'recommendedApp';
  iconSize: IconSize;
}

interface DesktopBtnProps {
  iconSize: IconSize;
}

const desktopButtonStyles = css<DesktopBtnProps>`
  padding: ${({ theme }) => `${theme.space.xxs} ${theme.space.md}`};
  cursor: context-menu;

  :hover {
    background: ${({ theme }) => theme.colors.buttons.desktopButton.hover};
  }

  transform: ${({ iconSize }) =>
    iconSize === 'small'
      ? 'scale(0.8)'
      : iconSize === 'medium'
      ? 'scale(1.0)'
      : 'scale(1.2)'};
`;
const systemTrayButtonStyles = css`
  padding: 8px;
  cursor: pointer;

  :hover {
    background: ${({ theme }) =>
      theme.colors.buttons.desktopButton.systemTrayHover};
  }
`;
const pinnedAppButtonStyles = css`
  cursor: pointer;

  :hover {
    background: ${({ theme }) =>
      theme.colors.buttons.desktopButton.pinnedAppHover};
  }
`;

const recommendedAppButtonStyles = css`
  justify-content: flex-start;
  flex-direction: row;
  padding: 0.25rem 1.25rem;
  cursor: pointer;

  figure {
    display: flex;
  }

  :hover {
    background: ${({ theme }) =>
      theme.colors.buttons.desktopButton.pinnedAppHover};
  }
`;

export const ButtonContainer = styled.button<Props>`
  width: 100%;
  position: relative;
  /*  display  */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /*  styling  */
  background: transparent;
  border: 0;

  ${({ variant }) => variant === 'desktop' && desktopButtonStyles};
  ${({ variant }) => variant === 'systemTray' && systemTrayButtonStyles};
  ${({ variant }) => variant === 'pinnedApp' && pinnedAppButtonStyles};
  ${({ variant }) =>
    variant === 'recommendedApp' && recommendedAppButtonStyles};

  border-radius: ${({ theme }) => theme.borderRadius};

  transition: 0.3s all ease;

  :active {
    transform: scale(0.9);
  }
`;

export const Figure = styled.figure``;
export const Figcaption = styled.figcaption``;

export const RecommendedAppDescription = styled.figcaption`
  text-align: start;
  margin-left: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const FileName = styled.h4`
  color: ${({ theme }) => theme.primary.text};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
