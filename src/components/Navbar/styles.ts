import styled from 'styled-components';
import Avatar from '../Avatar';
import Button from '../Button';


export const Container = styled.header`
  width: 100vw;
  height: 60px;
  background: ${props => props.theme.colors.background};
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
  }
`;

export const AvatarStyled = styled(Avatar)`
  width: 5rem;
  height: 2rem;
  width: 50px;
  height: 50px;
  /* border-radius: 25%; */
  border: 1px solid #333;
`;

export const ButtonStyled = styled(Button)`
  width: 5rem;
  height: 2.5rem;
  color: #fefefe !important;
  background: ${props => props.theme.colors.primary};
  border-radius: 5px;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
