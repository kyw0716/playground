import { useState } from 'react';
import { Layout } from '../components/layout/Layout';

const mockData = Array.from({ length: 10 }).map((_, i) => {
  return {
    content: i,
  };
});

const ArrayMap = () => {
  const [array, setArray] = useState<{ content: number }[]>(mockData);

  const modifyArray = () => {
    setArray((current) => [{ content: 10 }, ...current]);
  };

  const alertContent = (content: number) => {
    alert(content);
  };

  return (
    <Layout title="배열 key값 테스트">
      {array.map((data, i) => (
        <div key={i} onClick={() => alertContent(data.content)}>
          {data.content}
        </div>
      ))}
      <button onClick={modifyArray}>배열 수정</button>
    </Layout>
  );
};

export default ArrayMap;
