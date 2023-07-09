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
    onMutate: async (newTodo: string) => {
      await todoClient.cancelQueries(['todos']);

      const previousTodos = todoClient.getQueryData<TodoType[]>(['todos']);

      todoClient.setQueryData(['todos'], () =>
        previousTodos?.map((todoData) => {
          if (todoData.id === id) return { id, todo: newTodo };
          return todoData;
        })
      );

      return { previousTodos };
    },
    onError: (err, todos, context) => {
      todoClient.setQueryData(['todos'], context?.previousTodos);
    },
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
