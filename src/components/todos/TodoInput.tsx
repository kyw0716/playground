import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import { TodoType } from '../types';
import { v4 } from 'uuid';

function TodoInput() {
  const todoClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (newTodo: { todo: string }) => {
      return axios.post('/todo', newTodo);
    },
    onMutate: async (newTodo: { todo: string }) => {
      await todoClient.cancelQueries({ queryKey: ['todos'] });

      const previousTodos = todoClient.getQueryData<TodoType[]>(['todos']);

      todoClient.setQueryData<TodoType[]>(['todos'], () => [
        ...(previousTodos ?? []),
        { id: v4(), todo: newTodo.todo },
      ]);

      return { previousTodos };
    },
    onSettled: () => {
      todoClient.invalidateQueries(['todos']);
    },
  });

  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          mutate({ todo: inputValue });

          setInputValue('');
        }}
      >
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button>submit</button>
      </form>
      {isLoading && <span>adding todos...</span>}
    </>
  );
}

export default TodoInput;
