import { useContext, useEffect, useRef } from "react";
import { AppChronometerContext } from "../context/AppChronometerContext";
import { changeChronometer, clearChronometer, stopChronometer } from "../help/chronometerController";

export const useChronometer = () => {
  const context = useContext(AppChronometerContext);
  const time = context?.timeValues;
  let interval = useRef(null);

  const clearTime = () => clearChronometer(context, interval);
  const changeTime = () => changeChronometer(context, interval);
  const stopTime = () => stopChronometer(context, interval);

  useEffect(() => {
    if(context?.update && time){
      if( time.seconds === '00' && time.minutes === '00' && time.hour === '00' && context.start === true){
        clearTime();
        context.setStart(false);
      }
      else if( time.seconds === '00' && time.minutes === '00'){
        context.setTimeValues({...time, ...{
          seconds: '59',
          minutes: '59',
          hour: (parseInt(time.hour) -1).toString(),
        }});
      }
    }
  }, [time])

  return { clearTime, changeTime, stopTime, time}
}