import React from 'react';

import {Container} from './styles';

import Avatar from "../Avatar";
import Button from "../Button";

const Sidebar: React.FC = () => {

  return (
    <Container>

      <Avatar />

      <h1>Sidebar</h1>

      <Button />
    </Container>
  )
}

export default Sidebar;
