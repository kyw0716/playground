import { useEffect, useState } from 'react';
import { Layout } from '../components/layout/Layout';

const mockData = Array.from({ length: 10 }).map((_, i) => {
  return i;
});

const mockData2 = Array.from({ length: 11 })
  .map((_, i) => i)
  .reverse();

const mockData3 = Array.from({ length: 5 })
  .map((_, i) => i)
  .sort(() => (Math.random() > 0.5 ? 1 : -1));

const ArrayMap = () => {
  const [array, setArray] = useState<number[]>(mockData);

  const modifyArray = () => {
    setArray(Math.random() > 0.5 ? mockData2 : mockData3);
  };

  return (
    <Layout title="배열 key값 테스트">
      {array.map((data, i) => (
        <Child key={i} content={data} />
      ))}
      <button onClick={modifyArray}>배열 수정</button>
    </Layout>
  );
};

const Child = ({ content }: { content: number }) => {
  useEffect(() => {
    console.log(content);

    return () => console.log('dom 삭제', content);
  }, []);

  return <div>{content}</div>;
};

export default ArrayMap;
