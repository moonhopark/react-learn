import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { StyledButton, FancyButton, SubmitButton, AnimatedLogo, DarkButton } from './Button.styles';
import logo from '../../../logo.svg';

const theme = {
  dark: {
    primary: '#000',
    text: '#fff',
  },
  light: {
    primary: '#fff',
    text: '#000',
  },
  fontFamily: 'Segoe UI',
};

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props) => props.theme.fontFamily}
  }
`;

const Button = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <AnimatedLogo src={logo} />
        <StyledButton type="submit">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <StyledButton variant="outline">Styled Button</StyledButton>
        <div>
          <br />
        </div>
        <FancyButton as="a">Fancy Button</FancyButton>
        <div>
          <br />
        </div>
        <SubmitButton>Submit Button</SubmitButton>
        <div>
          <br />
        </div>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
};

export default Button;
