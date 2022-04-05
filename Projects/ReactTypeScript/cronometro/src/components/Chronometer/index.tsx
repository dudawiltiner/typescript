import React from 'react'
import { useContext } from 'react'
import { AppChronometerContext } from '../../context/AppChronometerContext';

const Chronometer: React.FC = () => {
  const context = useContext(AppChronometerContext);
  const time = context?.timeValues;
  
  return (
    <div>
      <p >{`${time?.hour}:${time?.minutes}:${time?.seconds}`}</p>  
      <button>Play</button>
      <button>Stop</button>
      <button>Clear</button>
    </div>
  )
}

export default Chronometer;