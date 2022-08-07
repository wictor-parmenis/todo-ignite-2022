import React from 'react';
import Logo from '../../assets/logo.svg';

import { Container, Content } from './styles';


export interface  IBackground {
    children: React.ReactNode;
}

const Background: React.FC<IBackground> = ({children}) => {
  return <Container>
        <img src={Logo}  alt="Logo" />
      <Content>
        {children}
      </Content>
  </Container>
}

export default Background;