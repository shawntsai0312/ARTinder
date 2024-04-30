import React from 'react';
import { useTheme } from '@mui/material/styles';

const Headbar = () => {

  return (
    <div className='py-2 px-6 flex fixed' >
      <p className="text-black text-2xl" >ARTinder</p>
    </div>
  );
}

export default Headbar;