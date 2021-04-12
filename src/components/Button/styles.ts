import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  border: none;
  padding: 10px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
`;
