import React from 'react';
import Logo from '../../assets/logo.svg';

import { Container, ContainerImage, Content } from './styles';


export interface  IBackground {
    children: React.ReactNode;
}

const Background: React.FC<IBackground> = ({children}) => {
  return <Container>
      
      <Content>
        <ContainerImage >
          <img src={Logo} alt="" />
        </ContainerImage>
        {children}
      </Content>
  </Container>
}

export default Background;