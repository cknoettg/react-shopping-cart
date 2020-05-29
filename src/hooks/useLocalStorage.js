import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const data = localStorage.getItem(key);
  const [storedValue, setStoredValue] = useState(
    data ? JSON.parse(data) : initialValue
  );
  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export default useLocalStorage;