import React from 'react';

import {Container, Nav, AvatarStyled, ButtonStyled} from './styles'

import ThemeSwitcher from '../ThemeSwitcher';


const Navbar: React.FC = () => {
  const logo = "<Dev />"

  return (
    <Container>
      <Nav>
        <h1>
          {logo}
        </h1>

        <div className="side">
          <ButtonStyled value="Sair">
            Teste
          </ButtonStyled>
          <AvatarStyled
            src={'https://media-exp1.licdn.com/dms/image/C4E03AQE7Hiwojo4jdQ/profile-displayphoto-shrink_200_200/0/1517438549423?e=1623888000&v=beta&t=APHdB22AarWy9ycnbGW9X8wYFlnaemEjfJ3UbvEFel8'}
            radius={50}
          />
        </div>
      </Nav>

      <ThemeSwitcher />
    </Container>
  )
}

export default Navbar;
