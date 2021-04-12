import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 60px;
  background: ${props => props.theme.colors.primary};
  position: fixed;
  grid-area: header;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #ccc;

  padding: 0 20px;
`;


export const Nav = styled.nav`
  width: 100vw;
  max-width: 1500px;
  color: #333;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;

  .side {
    width: auto;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #333;

    img {
      transform: scale(0.4);
    }
  }
`;
