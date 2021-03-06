import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    --webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    color: ${props => props.theme.colors.text};
  }
  p {
    color: ${props => props.theme.colors.text};
  }
  button {
    cursor: pointer;
  }

  .structure {
    display: flex;
    flex-direction: column;
  }
`;
