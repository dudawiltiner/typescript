import  { ChangeEvent, useContext } from 'react';
import { AppChronometerContext } from '../context/AppChronometerContext';
import { ajustDigit } from '../help/ajustDigitString';

export const useSetTimeInput = () => {
  const context = useContext(AppChronometerContext);

  const setStartTimeValuesInput = (eventValueTime: ChangeEvent<HTMLInputElement>): void => {
    const typeTime = eventValueTime.target;
    const timeValues = context?.timeValues;
    const newTimeValue = !typeTime.value ? '00': typeTime.value;
    let nameOfTypeTime = typeTime.name
   
    if(timeValues !== undefined) { // type guard
      context?.setUpdate(false);
      context?.setTimeValues({...timeValues, [nameOfTypeTime]: ajustDigit(newTimeValue)});
    }
  }

  return {setStartTimeValuesInput};
 }