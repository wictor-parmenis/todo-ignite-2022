import React from 'react';
import { ITask } from '../TasksContainer';
import Trash from '../../assets/trash.svg';

import { Container, ContainerInput, ContainerText, ContainerTrash, Text } from './styles';
import colors from '../../config/colors';

interface ITaskComponent {
    task: ITask;
    updateTask: (id: string) => void;
    onDelete: (id: string) => void;
}

const colorInput = {
    completed: colors.purple,
    notCompleted: colors.gray400,
}

const Task: React.FC<ITaskComponent> = ({
    task: {completed, content, id}, updateTask, onDelete
}) => {

  return <Container >
      <ContainerInput backgroundColor={completed ? colorInput.completed : colorInput.notCompleted}>
          <input type="checkbox" checked={completed} name="" id={id} onChange={() => updateTask(id)}   />
      </ContainerInput>
      <ContainerText>
            <Text>{content}</Text>
      </ContainerText>
      <ContainerTrash>
            <img src={Trash} alt="trash" onClick={() => onDelete(id)}/>
      </ContainerTrash>
  </Container>;
}

export default Task;