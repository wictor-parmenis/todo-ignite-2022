import React from 'react';
import Button from '../Button';
import Input from '../Input';

import { Container, InputContainer } from './styles';



const TasksContainer: React.FC = () => {
  return <Container>
      <InputContainer>
        <Input style={{
            height: '50px',
            width: '600px',
        }} placeholder='Adicione uma nova tarefa'/>
        <Button style={{
            height: '73px',
            paddingLeft: '20px',
            paddingRight: '20px',
        }}>Criar</Button>
      </InputContainer>
  </Container>
}

export default TasksContainer;