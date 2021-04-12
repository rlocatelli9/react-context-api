import React, {ButtonHTMLAttributes} from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...restProps}) => {
  return (
    <Container type="button" {...restProps}>
      {children}
    </Container>
  )
}

export default Button;
