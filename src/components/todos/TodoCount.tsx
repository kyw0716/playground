import { useQuery } from '@tanstack/react-query';
import { TodoType } from '../types';
import axios from 'axios';

function TodoCount() {
  const { data: todoList, isLoading } = useQuery<TodoType[]>({
    queryKey: ['todos'],
    queryFn: () => axios.get<TodoType[]>('/todo').then((response) => response.data),
  });

  if (isLoading) {
    return <>로딩중...</>;
  }

  return <>할일 목록: {todoList?.length}개</>;
}

export default TodoCount;
