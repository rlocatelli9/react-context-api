import React from 'react';

import {Container} from './styles';

import Avatar from "../Avatar";
import Button from "../Button";

const Sidebar: React.FC = () => {

  return (
    <Container>

      <Avatar
        src={'https://media-exp1.licdn.com/dms/image/C4E03AQE7Hiwojo4jdQ/profile-displayphoto-shrink_200_200/0/1517438549423?e=1623888000&v=beta&t=APHdB22AarWy9ycnbGW9X8wYFlnaemEjfJ3UbvEFel8'}
        sizes={"large"}
        radius={50}
      />

      <h1>Sidebar</h1>

      <Button>
        Mesmo botão. Outro texto.
      </Button>
    </Container>
  )
}

export default Sidebar;
