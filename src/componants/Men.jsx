import React, { useState } from 'react'
import Acoordien from './Acoordien'

const Men = () => {
  const [open, setOpen] = useState(null); // null = nothing open

  const handleToggle = (index) => {
    if (open === index) {
      setOpen(null); // toggle close
    } else {
      setOpen(index); // open new
    }
  };

  const items = ["brand", "men", "women", "gender"];

  return (
    <div className='mx-4'>
      <h1 className='p-3 text-xl font-bold'>Filter Option</h1>
      {items.map((title, index) => (
        <Acoordien
          key={index}
          title={title}
          open={open === index} // true only for the open one
          setopen={() => handleToggle(index)}
        />
      ))}

    </div>
  );
};

export default Men;
