import { useState } from 'react';
import Parent from '../components/batchUpdate/Parent';
import { Layout } from '../components/layout/Layout';

function BatchUpdate() {
  const [isClicked, setIsClicked] = useState(false);

  const startBatchUpdate = () => {
    setIsClicked(true);
  };

  return (
    <Layout title="배치 업데이트 테스트">
      <button onClick={startBatchUpdate}>배치업데이트 시작</button>
      {isClicked && <Parent />}
    </Layout>
  );
}

export default BatchUpdate;
