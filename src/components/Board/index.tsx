import React, { useCallback } from 'react';
import EmptyTasks from '../EmptyTasks';
import Task from '../Task';
import { ITask } from '../TasksContainer';
import { Container, ContainerTextNumber, Content, HeaderBoard, TextColor, TextContainer, TextNumber } from './styles';

interface IBoard {
    tasks: ITask[]
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Board: React.FC<IBoard> = ({
    tasks,
    setTasks
}) => {
    const createdTasks = tasks && tasks.length || 0
    const completedTasks = tasks && tasks.filter(task => task.completed).length || 0

    const updateTask = useCallback(
      (id: string) => {
        const currentTask = tasks.find(task => task.id === id)
        if (currentTask) {
            setTasks(
                tasks.map((item) => (
                    item.id === currentTask.id ? {...item, completed: !item.completed} : item
                ))
            )
        }
        console.log(tasks, 'tasks')
      },
      [tasks],
    )

    const deselectTask = useCallback((id: string) => {
        setTasks(tasks.filter((item) => item.id !== id))
    }, [tasks])
    
  
  return <Container>
        <HeaderBoard>
            <TextContainer>
                <TextColor>Tarefas Criadas</TextColor>
                <ContainerTextNumber>
                    <TextNumber>{createdTasks}</TextNumber>
                </ContainerTextNumber>
            </TextContainer>
            <TextContainer>
                <TextColor>Concluídas</TextColor>
                <ContainerTextNumber>
                    <TextNumber>{completedTasks} de {createdTasks}</TextNumber>
                </ContainerTextNumber>
            </TextContainer>
        </HeaderBoard>
        <Content>
            {
                tasks && tasks.length ? tasks.map((task) => (
                    <Task 
                    task={task}
                    key={task.id}
                    updateTask={updateTask}
                    onDelete={deselectTask}
                    />
                ))
                  :
                   <EmptyTasks />
            }
        </Content>
  </Container>;
}

export default Board;