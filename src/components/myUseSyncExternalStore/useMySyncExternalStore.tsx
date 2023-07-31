import { useState, useSyncExternalStore } from 'react';
import { createStore, useSyncExternalStoreCustom } from './useSyncExternalStoreCustom';

const store1 = createStore({
  value1: 0,
  value2: 0,
});

const store2 = createStore({
  value1: 0,
  value2: 0,
});

const IncrementValueInStore1 = ({ item: key }: { item: 'value1' | 'value2' }) => (
  <button
    onClick={() => {
      const state = store1.getState();

      store1.setState({
        ...state,
        [key]: state[key] + 1,
      });
    }}
  >
    Increment: {key}
  </button>
);

const IncrementValueInStore2 = ({ item: key }: { item: 'value1' | 'value2' }) => (
  <button
    onClick={() => {
      const state = store2.getState();

      store2.setState({
        ...state,
        [key]: state[key] + 1,
      });
    }}
  >
    Increment: {key}
  </button>
);

const DisplayValue1 = () => {
  const { value1 } = useSyncExternalStoreCustom(store1.subscribe, store1.getState);

  return <div>{value1}</div>;
};

const DisplayValue2 = () => {
  const { value2 } = useSyncExternalStoreCustom(store2.subscribe, store2.getState);

  return <div>{value2}</div>;
};

export const MySyncExternalStore = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  return (
    <div>
      <IncrementValueInStore1 item="value1" />
      <DisplayValue1 />
      <IncrementValueInStore2 item="value2" />
      <DisplayValue2 />
      <button onClick={() => setIsButtonClicked((current) => !current)}>생성</button>
      {isButtonClicked && <DisplayValue2 />}
    </div>
  );
};
