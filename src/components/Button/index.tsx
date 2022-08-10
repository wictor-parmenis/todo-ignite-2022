import React, { ButtonHTMLAttributes } from 'react';
import Add from '../../assets/add.png';
import { Container, TextButton } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    style,
    onClick,
    ...rest
}) => {
  return <Container onClick={onClick} style={style} {...rest} >
            <TextButton>{children}</TextButton>
            <img src={Add} alt="" />
       </Container>

}

export default Button;