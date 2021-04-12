import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

/**
 * Dispatch e SetStateAction
 * intefaces que o React dispões para tipar o useState()
 */

type Respose<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

const usePersistedState = <T>(key: string, initialState: T): Respose<T> => {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if(storageValue){
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return[state, setState]

}

export default usePersistedState;
