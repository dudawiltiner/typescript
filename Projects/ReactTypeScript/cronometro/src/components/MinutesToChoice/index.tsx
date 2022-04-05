import React, { MouseEvent, useContext } from 'react'
import { AppChronometerContext } from '../../context/AppChronometerContext';

const MinutesToChoice: React.FC = () => {
  const context = useContext(AppChronometerContext);

  function convertStringWithRightFormatNumber(element: string): string{
    return (parseInt(element)).toString();
  }

  function ajustDigit(valueToAjust: string) {
    return convertStringWithRightFormatNumber(valueToAjust).length === 2 ? convertStringWithRightFormatNumber(valueToAjust) : (`0${convertStringWithRightFormatNumber(valueToAjust)}`);
  }

  const setStartTimeValues = (eventValueTime: MouseEvent<HTMLInputElement>): void => { 
    const typeTime  = eventValueTime.currentTarget;
    const timeValues = context?.timeValues;
    const newTimeValue = !typeTime.value ? '00': typeTime.value;
    let nameOfTypeTime = typeTime.name
   
    if(timeValues !== undefined) { // type guard
      context?.setUpdate(false);
      context?.setTimeValues({...timeValues, [nameOfTypeTime]: ajustDigit(newTimeValue)});
    }
  }

  return (
    <form>
      <h1>{context?.timeValues.minutes}</h1>
      <input onClick={setStartTimeValues} name='minutes' type='button'  value='5:00'/>
      <input onClick={setStartTimeValues} name='minutes' type='button'  value='10:00'/>
      <input onClick={setStartTimeValues} name='minutes' type='button' value='15:00'/>
    </form>
  )
}

export default MinutesToChoice;