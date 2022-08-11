import React, { useCallback, useState } from 'react';
import Board from '../Board';
import Button from '../Button';
import Input from '../Input';

import { ButtonStyle, Container, InputContainer, InputStyle } from './styles';

export interface ITask {
  content: string;
  completed: boolean;
  id: string;
}

const TasksContainer: React.FC = () => {

  const [tasks, setTasks] = useState<ITask[]>([])
  const [currentTask, setCurrentTask] = useState<string>('')

  const handleAddTask = useCallback(() => {
    console.log(currentTask, 'here')
    if (currentTask) {
      setTasks([...tasks, { content: currentTask, completed: false, id: String(Math.random()) }])
    }
  }, [tasks, currentTask])

  const handleRemoveTask = useCallback((id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }, [tasks])

  return <Container>
      <InputContainer>
        <Input style={InputStyle} placeholder='Adicione uma nova tarefa' onChange={(e) => setCurrentTask(e.target.value)}/>
        <Button style={ButtonStyle} onClick={() => handleAddTask()}>Criar</Button>
      </InputContainer>
      <Board 
      setTasks={setTasks}
      tasks={tasks}
      />
  </Container>
}

export default TasksContainer;