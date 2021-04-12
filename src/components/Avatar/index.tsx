import React, {HTMLAttributes} from 'react';

import { Container } from './styles';

type DivProps = HTMLAttributes<HTMLDivElement>;

const Avatar: React.FC<DivProps> = ({children, ...restProps}) => {
  return (
    <Container>
      <img src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200" sizes="small" alt=""/>
    </Container>
  )
}

export default Avatar;
