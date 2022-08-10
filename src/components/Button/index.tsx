import React, { ButtonHTMLAttributes } from 'react';

import { Container, TextButton } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    style,
    ...rest
}) => {
  return <Container style={style} >
            <TextButton>{children}</TextButton>
           {/* add icon here */}
       </Container>

}

export default Button;