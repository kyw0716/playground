import { Layout } from '../components/layout/Layout';
import Todo from '../components/todos';

function TodoPage() {
  return (
    <Layout title="TODO">
      <Todo />
      <Todo />
    </Layout>
  );
}

export default TodoPage;
