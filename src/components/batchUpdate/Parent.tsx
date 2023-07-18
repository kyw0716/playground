import { useState } from 'react';
import Child from './Child';

function Parent() {
  const [parentArray, setParentArray] = useState<number[]>([]);

  console.log(parentArray);

  return (
    <ul>
      {Array.from({ length: 3000 }).map((_, i) => {
        return <Child key={i} value={i} setParentArray={setParentArray} />;
      })}
    </ul>
  );
}

export default Parent;
