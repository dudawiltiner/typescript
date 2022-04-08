import  { MouseEvent, useContext } from 'react';
import { AppChronometerContext } from '../context/AppChronometerContext';
import { ajustDigit } from '../help/ajustDigitString';

export const useSetTimeButton = () => {
  const context = useContext(AppChronometerContext);
 
  const setStartTimeValuesButton = (eventValueTime: MouseEvent<HTMLInputElement>) => {
    const typeTime = eventValueTime.currentTarget;
    const timeValues = context?.timeValues;
    const newTimeValue = !typeTime.value ? '00': typeTime.value;
    let nameOfTypeTime = typeTime.name
   
    if(timeValues !== undefined) { // type guard
      context?.setUpdate(false);
      context?.setTimeValues({...timeValues, [nameOfTypeTime]: ajustDigit(newTimeValue)});
    }
  }

  return {setStartTimeValuesButton}
 }