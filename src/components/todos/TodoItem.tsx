import { Fragment, useState } from 'react';
import { TodoType } from '../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import TodoModifyInput from './TodoModifyInput';

function TodoItem({ id, todo }: TodoType) {
  const [isModifyButtonClicked, setIsModifyButtonClicked] = useState(false);

  const todoClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id: string) => axios.delete(`/todo?todoId:${id}`),
    onSuccess: () => {
      todoClient.invalidateQueries(['todos']);
    },
  });

  const deleteTodo = () => {
    mutate(id);
  };

  const openModifyInput = () => {
    setIsModifyButtonClicked(true);
  };

  const closeModifyInput = () => {
    setIsModifyButtonClicked(false);
  };

  return (
    <Fragment>
      <li>{todo}</li>
      <button onClick={deleteTodo}>삭제</button>
      <button onClick={openModifyInput}>수정</button>
      {isModifyButtonClicked && (
        <TodoModifyInput id={id} todo={todo} closeModifyInput={closeModifyInput} />
      )}
    </Fragment>
  );
}

export default TodoItem;
