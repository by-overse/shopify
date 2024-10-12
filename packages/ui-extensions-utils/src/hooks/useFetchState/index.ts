import { useState } from 'react';

export function useFetchState<T>() {
  const stateArray = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  return stateArray;
}

type FetchState<T> = {
  data?: T | null;
  loading: boolean;
  error?: unknown | null;
};
