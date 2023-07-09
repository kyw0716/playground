import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { TodoType } from '../types';
import { Fragment } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const {
    data: todos,
    isLoading,
    isFetching,
  } = useQuery<TodoType[]>({
    queryKey: ['todos'],
    queryFn: () => axios.get('/todo').then((response) => response.data),
  });

  return (
    <>
      {todos && todos.length > 0 ? (
        <ul>
          {todos.map((todoData) => (
            <TodoItem key={todoData.id} id={todoData.id} todo={todoData.todo} />
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
