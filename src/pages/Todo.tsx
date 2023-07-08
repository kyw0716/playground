import { Layout } from '../components/layout/Layout';
import TodoList from '../components/todos/TodoList';
import TodoInput from '../components/todos/TodoInput';

export function Todo() {
  return (
    <Layout title="TODO">
      <TodoList />
      <TodoInput />
    </Layout>
  );
}
