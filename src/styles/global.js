import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    font-family: Josefin Sans sans-serif;
    font-size: 18px;
  }
`;
