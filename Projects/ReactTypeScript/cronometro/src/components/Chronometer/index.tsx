import React from 'react'
import { useChronometer } from '../../hooks/useChronometer';

const Chronometer: React.FC = () => {
  const { clearTime, changeTime, stopTime, time} = useChronometer();
  
  return (
    <div>
      <p >{`${time?.hour}:${time?.minutes}:${time?.seconds}`}</p>  
      <button onClick={changeTime}>Play</button>
      <button onClick={stopTime}>Stop</button>
      <button onClick={clearTime}>Clear</button>
    </div>
  )
}

export default Chronometer;