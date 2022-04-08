import React from 'react';
import { useSetTimeButton } from '../../hooks/useSetTimeButton';

const MinutesToChoice: React.FC = () => {
  const {setStartTimeValuesButton} = useSetTimeButton();

  return (
    <form>
      <input onClick={setStartTimeValuesButton} name='minutes' type='button'  value='5:00'/>
      <input onClick={setStartTimeValuesButton} name='minutes' type='button'  value='10:00'/>
      <input onClick={setStartTimeValuesButton} name='minutes' type='button' value='15:00'/>
    </form>
  )
}

export default MinutesToChoice;