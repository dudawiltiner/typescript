import React from 'react'
import { useSetTimeInput } from '../../hooks/useSetTimeInput';

const TimeToType: React.FC = () => {
  const {setStartTimeValuesInput} = useSetTimeInput();

  return (
    <form>
      <input name='hour' type='number' onChange={setStartTimeValuesInput}  min="0" max="24" placeholder="hour" /> 
      <input name='minutes' type='number' onChange={setStartTimeValuesInput} min="0" max="59" placeholder="minutes" /> 
      <input name='seconds' type='number' onChange={setStartTimeValuesInput} min="0" max="59" placeholder="seconds" /> 
    </form>
  )
}

export default TimeToType;