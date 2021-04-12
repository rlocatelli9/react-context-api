import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    color: ${props => props.theme.colors.deactivate}
  }

  .active {
    color: ${props => props.theme.colors.active};
  }
`;

