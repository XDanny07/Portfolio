import { useActions } from '../../../hooks/useActions';
import VsCode from '../VsCode/VsCode';
import React from 'react';
import GoogleSearch from '../GoogleSearch/GoogleSearch';
import Resume from '../../Portfolio/Resume/Resume';
import Desktop from '../../Desktop/Desktop';
import SystemTray from '../../SystemTray/SystemTray';
import styled from 'styled-components';

export const useTerminalConfig = (): {
  openVSCode: () => void;
  openGoogle: () => void;
  openResume: () => void;
  openLanding: () => void;
  greetingMessage: string;
  hack: string;
  sad: string;
} => {
  const { openWindow } = useActions();

  const openVSCode = () => {
    openWindow({
      windowName: 'VSCode',
      isOpen: true,
      windowIcon: '/assets/icons/startmenu/vscode.svg',
      size: {
        width: 0.75 * window.innerWidth,
        height: 0.7 * window.innerHeight,
      },
      windowContent: <VsCode />,
    });
  };

  const openGoogle = () => {
    openWindow({
      windowName: 'Google',
      isOpen: true,
      windowIcon: '/assets/icons/startmenu/chrome.svg',
      size: {
        width: 0.75 * window.innerWidth,
        height: 0.7 * window.innerHeight,
      },
      windowContent: <GoogleSearch />,
    });
  };

  const openResume = () => {
    openWindow({
      windowName: 'Resume',
      isOpen: true,
      windowIcon: '/assets/icons/recommended/word.png',
      size: {
        width: 0.75 * window.innerWidth,
        height: 0.7 * window.innerHeight,
      },
      windowContent: <Resume />,
    });
  };
  const openLanding = () => {
    openWindow({
      windowName: 'Resume',
      isOpen: true,
      windowIcon: '/assets/icons/recommended/word.png',
      size: {
        width: 0.75 * window.innerWidth,
        height: 0.7 * window.innerHeight,
      },
      windowContent: (
        <Wrapper>
          <Desktop />
          <SystemTray />
        </Wrapper>
      ),
    });
  };

  const greetingMessage = `
              ██╗░░░██╗░█████╗░██╗░░░██╗░█████╗░  ░█████╗░░█████╗░██████╗░███████╗░██████╗
              ██║░░░██║██╔══██╗██║░░░██║██╔══██╗  ██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝
              ╚██╗░██╔╝██║░░██║╚██╗░██╔╝███████║  ██║░░╚═╝██║░░██║██║░░██║█████╗░░╚█████╗░
              ░╚████╔╝░██║░░██║░╚████╔╝░██╔══██║  ██║░░██╗██║░░██║██║░░██║██╔══╝░░░╚═══██╗
              ░░╚██╔╝░░╚█████╔╝░░╚██╔╝░░██║░░██║  ╚█████╔╝╚█████╔╝██████╔╝███████╗██████╔╝
              ░░░╚═╝░░░░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝  ░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═════╝░
              
                              👊 (͡👁 ͜ʖ͡👁) 👋  GLAD TO MEET YOU STRANGER 👋 ᕙ(͡ಠ ͜ʖ͡ಠ)ᕗ
                                             TYPE "HELP" FOR FULL LIST OF COMMANDS
              `;

  const hack = `
                              ▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄▄
                            █░░░░░░░░░░░░░░░░░░▀▀▄
                            █░░░░░░░░░░░░░░░░░░░░░░█
                            █░░░░░░▄██▀▄▄░░░░░▄▄▄░░░░█
                        ░▄▀░▄▄▄░░█▀▀▀▀▄▄█░░░██▄▄█░░░░█
                        █░░█░▄░▀▄▄▄▀░░░░░░░░█░░░░░░░░░█
                        █░░█░█▀▄▄░░░░░█▀░░░░▀▄░░▄▀▀▀▄░█
                          █░▀▄░█▄░█▀▄▄░▀░▀▀░▄▄▀░░░░█░░█
                          █░░░▀▄▀█▄▄░█▀▀▀▄▄▄▄▀▀█▀██░█
                           █░░░░██░░▀█▄▄▄█▄▄█▄▄██▄░░█
                            █░░░░▀▀▄░█░░░█░█▀█▀█▀██░█
                            ▀▄░░░░░▀▀▄▄▄█▄█▄█▄█▄▀░░█
                              ▀▄▄░░░░░░░░░░░░░░░░░░░█
                                  ▀▀▄▄░░░░░░░░░░░░░░░█
                                      ▀▄▄▄▄▄░░░░░░░░█
                                          ██▄▄▄▄▄▄▄▄▀
                        WI-FI HAS BEEN SUCCESSFULLY DE-ACTIVATED
                                          ...                    
  `;

  const sad = `
                           ───────▄▀▀▀▀▀▀▀▀▀▀▄▄
                          ────▄▀▀░░░░░░░░░░░░░▀▄
                          ──▄▀░░░░░░░░░░░░░░░░░░▀▄
                          ──█░░░░░░░░░░░░░░░░░░░░░▀▄
                          ─▐▌░░░░░░░░▄▄▄▄▄▄▄░░░░░░░▐▌
                          ─█░░░░░░░░░░░▄▄▄▄░░▀▀▀▀▀░░█
                          ▐▌░░░░░░░▀▀▀▀░░░░░▀▀▀▀▀░░░▐▌
                          █░░░░░░░░░▄▄▀▀▀▀▀░░░░▀▀▀▀▄░█
                          █░░░░░░░░░░░░░░░░▀░░░▐░░░░░▐▌
                          ▐▌░░░░░░░░░▐▀▀██▄░░░░░░▄▄▄░▐▌
                          ─█░░░░░░░░░░░▀▀▀░░░░░░▀▀██░░█
                          ─▐▌░░░░▄░░░░░░░░░░░░░▌░░░░░░█
                          ──▐▌░░▐░░░░░░░░░░░░░░▀▄░░░░░█
                          ───█░░░▌░░░░░░░░▐▀░░░░▄▀░░░▐▌
                          ───▐▌░░▀▄░░░░░░░░▀░▀░▀▀░░░▄▀
                          ───▐▌░░▐▀▄░░░░░░░░░░░░░░░░█
                          ───▐▌░░░▌░▀▄░░░░▀▀▀▀▀▀░░░█
                          ───█░░░▀░░░░▀▄░░░░░░░░░░▄▀
                          ──▐▌░░░░░░░░░░▀▄░░░░░░▄▀
                          ─▄▀░░░▄▀░░░░░░░░▀▀▀▀█▀
                          ▀░░░▄▀░░░░░░░░░░▀░░░▀▀▀▀▄▄▄▄▄
  `;

  return {
    openVSCode,
    openGoogle,
    openResume,
    openLanding,
    greetingMessage,
    hack,
    sad,
  };
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
