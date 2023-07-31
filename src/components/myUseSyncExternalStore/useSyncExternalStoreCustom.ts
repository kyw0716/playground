import { useEffect, useState } from 'react';

export const createStore = <T>(initialState: T) => {
  let currentState = initialState;
  const listeners = new Set<() => void>();

  return {
    getState: () => currentState,
    setState: (newState: T) => {
      currentState = newState;
      listeners.forEach((listener) => listener());

      console.log(listeners.size);
    },
    subscribe: (listener: () => void) => {
      listeners.add(listener);

      return () => {
        listeners.delete(listener);
      };
    },
  };
};

export const useSyncExternalStoreCustom = <T>(
  subscribe: (listener: () => void) => () => void,
  getSnapshot: () => T
): T => {
  const value = getSnapshot();

  const [snapShot, forceUpdate] = useState(value);

  useEffect(() => {
    if (!Object.is(snapShot, getSnapshot())) {
      forceUpdate(getSnapshot());
    }
    const handleStoreChange = () => {
      if (!Object.is(snapShot, getSnapshot())) {
        forceUpdate(getSnapshot());
      }
    };

    const stopSubscribe = subscribe(handleStoreChange);

    // 구독중인 컴포넌트가 언마운트 되었을 때 구독을 취소하는 함수를 실행시킨다.
    return stopSubscribe;
  }, []);

  return value;
};
