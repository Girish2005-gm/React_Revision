import React, { useState } from 'react'

function Navbar() {
    const [mode, setmode] = useState("Light");
    function HandleMode(){
        mode==="Light"?setmode("dark"):setmode("Light");
    }
    console.log(mode)
    return (
        <div className='flex flex-row justify-between h-16 items-center  shadow-md w-full'>
            <h2 className='m-9 bg-indigo-200 py-3 px-10 rounded-md text-lg font-bold'>JinuStore</h2>
            <div className='flex mx-3 items-center justify-center'>
            <ul className='flex gap-3 mx-7'>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Cart</li>
            </ul>
            <button onClick={HandleMode} className='bg-green-300 px-3 rounded-sm py-1'>{mode}</button>
            </div>
        </div>
    )
}

export default Navbar
