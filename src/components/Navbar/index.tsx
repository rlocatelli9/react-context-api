import React,  {useContext} from 'react';

import {Container, Nav} from './styles'

import Button from '../Button';
import Avatar from '../Avatar';
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
          <Button />
          <Avatar />
        </div>
      </Nav>

      <ThemeSwitcher />
    </Container>
  )
}

export default Navbar;
