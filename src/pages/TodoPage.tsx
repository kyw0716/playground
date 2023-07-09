import { FlexBox } from '../components/layout/FlexBox';
import { Layout } from '../components/layout/Layout';
import { Margin } from '../components/layout/Margin';
import Todo from '../components/todos';

function TodoPage() {
  return (
    <Layout title="TODO">
      <Margin direction="column" size={20} />
      <FlexBox direction={'column'} alignItems="center">
        <Todo />
        <Margin direction="column" size={20} />
        <Todo />
      </FlexBox>
    </Layout>
  );
}

export default TodoPage;
