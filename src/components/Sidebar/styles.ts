import styled, { keyframes } from 'styled-components';

const animationArrow = keyframes`
  from {
    right: 30px;
  }
  to {
    right: 20px;
  }
`;

export const Container = styled.aside`
  grid-area: sidebar;
  background: ${props => props.theme.colors.background};
  padding: 1.875rem;
  max-height: minmax(80px 25vh);
  color: ${props => props.theme.colors.text};

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.secundary};

  li a {
    display: block;
    min-width: 60px;
    max-width: 140px;
    margin: 0 auto 1.875rem auto;
    background: white;
    padding: 1.25rem;
    border-radius: 5px;
    box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
    transition: 0.1 ease-out;
  }
  li a:hover {
    background: ${props => props.theme.colors.background};
  }
  @media (max-width: 760px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    position: relative;
    margin-bottom: 10px;
    &::after {
      content: '→';
      position: absolute;
      top: 5px;
      right: 30px;
      color: rgba(0, 0, 0, 0.3);
      animation: ${animationArrow} 0.5s ease-in 0s infinite alternate;
    }
    ul {
      display: flex;
    }
    ul li {
      flex: 1 0 60px;
    }
    padding: 0 30px;
    li a {
      margin: 30px 30px 30px 0;
    }
  }
`;
