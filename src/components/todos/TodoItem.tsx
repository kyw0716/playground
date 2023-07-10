import { useState } from 'react';
import { TodoType } from '../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import TodoModifyInput from './TodoModifyInput';

function TodoItem({ id, todo }: TodoType) {
  const [isModifyButtonClicked, setIsModifyButtonClicked] = useState(false);

  const todoClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id: string) => axios.delete(`/todo?todoId=${id}`),
    onMutate: async () => {
      await todoClient.cancelQueries(['todos']);

      const previousTodos = todoClient.getQueryData<TodoType[]>(['todos']);

      todoClient.setQueryData(['todos'], () => previousTodos?.filter((todo) => todo.id !== id));

      return { previousTodos };
    },
    onError(error, _, context) {
      alert('할일을 삭제하는 중에 에러가 발생했습니다!');

      todoClient.setQueryData(['todos'], context?.previousTodos);
    },
    onSettled: () => {
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
    <>
      <li>{todo}</li>
      <button onClick={deleteTodo}>삭제</button>
      <button onClick={openModifyInput}>수정</button>
      {isModifyButtonClicked && (
        <TodoModifyInput id={id} todo={todo} closeModifyInput={closeModifyInput} />
      )}
    </>
  );
}

export default TodoItem;
