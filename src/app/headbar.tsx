import React from 'react';
import { useTheme } from '@mui/material/styles';

const Headbar = () => {

  return (
    <div className='py-2 px-6 flex fixed' >
      <h1 className="text-black" >ARTinder</h1>
    </div>
  );
}

export default Headbar;