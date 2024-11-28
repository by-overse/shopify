import { useState } from 'react';

function useFetchState() {
    const stateArray = useState({
        data: null,
        loading: true,
        error: null,
    });
    return stateArray;
}

export { useFetchState };
