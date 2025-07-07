// import React from 'react'
// import { useState, useMemo } from 'react';
// function MemoAndRef() {
//     const [number, setNumber] = useState(1);
//     const [count, setCount] = useState(0);

// This calculation runs every time App re-renders
//     const double = (() => {
//       console.log('Calculating double...');
//       return number * 2;
//     })();
// Only re-calculates if number changes
//     const double = useMemo(() => {
//         console.log('Calculating double...');
//         return number * 2;
//     }, [number]);

//     return (
//         <div>
//             <h2>Double: {double}</h2>
//             <button onClick={() => setCount(count + 1)}>
//                 Click Me ({count})
//             </button>
//             <button onClick={() => setNumber(number + 1)}>
//                 Increase Number ({number})
//             </button>
//         </div>
//     );
// }

// export default MemoAndRef









import React, { useRef, useState } from 'react';

function MemoAndRef() {
    let normalVar = 0;
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);

    const handleLet = () => {
        normalVar++;
        console.log('let count: ' + normalVar);
    };

    const handleState = () => {
        setStateCount(stateCount + 1);
    };

    const handleRef = () => {
        refCount.current++;
        console.log('ref count: ' + refCount.current);
    };

    return (
        <div>
            <h2>State Count (Causes Re-render): {stateCount}</h2>
            <br /><br />
            <button onClick={handleLet} className='border border-black'>Increase Let</button>
            <br /><br /><br />
            <button onClick={handleState} className='border border-black'>Increase State</button>
            <br /><br /><br />
            <button onClick={handleRef} className='border border-black'>Increase Ref</button>
        </div>
    );
}

export default MemoAndRef