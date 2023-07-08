import axios from 'axios';
import { useEffect, useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { v4 } from 'uuid';

export function Todo() {
  const [todos, setTodos] = useState<string[]>();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    axios.get('/todo').then((response) => setTodos(response.data));
  }, []);

  return (
    <Layout title="TODO">
      <ul>
        {todos?.map((todo) => (
          <li key={v4()}>{todo}</li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          axios
            .post('/todo', {
              body: {
                todo: inputValue,
              },
            })
            .then(() => {
              axios.get('/todo').then((response) => setTodos(response.data));
            });

          setInputValue('');
        }}
      >
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button>submit</button>
      </form>
    </Layout>
  );
}
