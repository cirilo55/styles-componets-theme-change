import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html{
    height: 100%;
    margin: 0;
  }
  body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    font-family: Josefin Sans sans-serif;
    margin: 0;
    font-size: 18px;
    height: 100%;
  }
  #root{
    height: 100%;
  }
`;
