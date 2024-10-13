import { useState } from 'react';
export function useFetchState() {
    const stateArray = useState({
        data: null,
        loading: true,
        error: null,
    });
    return stateArray;
}
