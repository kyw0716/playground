import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { v4 } from 'uuid';

function TodoList() {
  const {
    data: todos,
    isLoading,
    isFetching,
  } = useQuery<string[]>({
    queryKey: ['todos'],
    queryFn: () => axios.get('/todo').then((response) => response.data),
  });

  return (
    <>
      {todos && todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li key={v4()}>{todo}</li>
          ))}
        </ul>
      ) : (
        <div>아직 할일 목록이 없어요!</div>
      )}
      {isLoading && <span>todos loading...</span>}
      {!isLoading && isFetching && <span>todos refetching</span>}
    </>
  );
}

export default TodoList;
