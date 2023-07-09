import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TodoType } from '../types';
import axios from 'axios';
import { useState } from 'react';

interface Props extends TodoType {
  closeModifyInput: () => void;
}

function TodoModifyInput({ id, todo, closeModifyInput }: Props) {
  const [newTodo, setNewTodo] = useState(todo);

  const todoClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (newTodo: string) =>
      axios.post('/todo', {
        id,
        todo: newTodo,
      }),

    onSuccess: () => {
      todoClient.invalidateQueries(['todos']);
    },
  });

  const changeTodo = () => {
    mutate(newTodo);
    closeModifyInput();
  };

  return (
    <form onSubmit={changeTodo}>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
      <button>변경</button>
    </form>
  );
}

export default TodoModifyInput;
