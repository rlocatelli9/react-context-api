import styled from 'styled-components';

export const Container = styled.footer`
  grid-area: footer;
  background: linear-gradient(135deg, ${props => props.theme.colors.background}, ${props => props.theme.colors.background});
  font-size: 1.2em;
  line-height: 1.6;
  letter-spacing: -0.005em;
  p {
    color: white;
    text-align: center;
    padding: 30px;
    font-weight: bold;
  }
`;
