import React from 'react';
import { ITask } from '../TasksContainer';
import { Container, Content, HeaderBoard, TextColor, TextContainer, TextNumber } from './styles';

interface IBoard {
    tasks: ITask[]
}

const Board: React.FC<IBoard> = ({
    tasks
}) => {
    const createdTasks = tasks && tasks.length || 0
    const completedTasks = tasks && tasks.filter(task => task.completed).length || 0
  
  return <Container>
        <HeaderBoard>
            <TextContainer>
                <TextColor>Tarefas Criadas</TextColor>
                <TextNumber>{createdTasks}</TextNumber>
            </TextContainer>
            <TextContainer>
                <TextColor>Concluídas</TextColor>
                <TextNumber>{completedTasks} de {createdTasks}</TextNumber>
            </TextContainer>
        </HeaderBoard>
        <Content>
            {
                tasks ? <></>  : <></>
            }
        </Content>
  </Container>;
}

export default Board;