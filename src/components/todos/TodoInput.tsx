import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';

function TodoInput() {
  const todoClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (newTodo: { todo: string }) => {
      return axios.post('/todo', newTodo);
    },
    onSuccess: () => {
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
