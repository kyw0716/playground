import { useEffect, useState } from 'react';

export const CleanUp = () => {
  const [arr, setArr] = useState(Array.from({ length: 10 }).map((_, i) => i));
  const [isShow, setIsShow] = useState(true);

  const deleteLastElement = () => {
    setArr((prevArr) => prevArr.filter((_, i) => i !== prevArr.length - 1));
  };

  return (
    <>
      {isShow && <Child content={'조건부 렌더링 진행중입니다'} />}
      <ul>
        {arr.map((_, i) => (
          <Child key={i} content={i} />
        ))}
      </ul>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button style={{ width: 200, height: 40 }} onClick={() => setIsShow((prev) => !prev)}>
          {isShow ? 'hide' : 'show'}
        </button>
        <button style={{ width: 200, height: 40 }} onClick={deleteLastElement}>
          리스트 마지막 요소 삭제하기
        </button>
      </div>
    </>
  );
};

const Child = ({ content }: { content: number | string }) => {
  useEffect(() => {
    return () => {
      console.log(`${content}(이)가 dom에서 해제됨`);
    };
  }, []);

  return <li>{content}</li>;
};
