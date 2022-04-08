import { MutableRefObject } from "react";
import { SetTimeModel, Time } from "../context/AppChronometerContext";
import { convertSubtraiString } from "./ajustDigitString";

const stopChronometer = (context: SetTimeModel | null, interval: MutableRefObject<NodeJS.Timer | null>) => {
  interval.current && clearInterval(interval.current);
  context?.setStart(false);
}

const clearChronometer = (context: SetTimeModel | null, interval: MutableRefObject<NodeJS.Timer | null>) => {
  // const time = context?.timeValues;
  interval.current && clearInterval(interval.current);
  context?.setTimeValues({
    seconds: '00',
    minutes: '00',
    hour: '00',
  });

  context?.setUpdate(false);
  context?.setStart(false);
}

const changeSecondsValue = (prevTime: Time) => {
  return parseInt(prevTime.seconds) === 0 ? '59' : (convertSubtraiString(prevTime.seconds).length === 2 ? convertSubtraiString(prevTime.seconds) : (`0${convertSubtraiString(prevTime.seconds)}`));
}

const changeMinutesValue = (prevTime: Time) => {
  return parseInt(prevTime.minutes) === 0 && parseInt(prevTime.seconds) === 0? '59' : (parseInt(prevTime.seconds) === 0 ? (convertSubtraiString(prevTime.minutes).length === 2 ? convertSubtraiString(prevTime.minutes) : (`0${convertSubtraiString(prevTime.minutes)}`)) : prevTime.minutes);
}

const changeHoursValue = (prevTime: Time) => {
  return parseInt(prevTime.minutes) === 0 && parseInt(prevTime.seconds) === 0 && parseInt(prevTime.hour) === 0? (convertSubtraiString(prevTime.hour).length === 2 ? convertSubtraiString(prevTime.hour) : (`0${convertSubtraiString(prevTime.hour)}`)) : prevTime.hour;
}

const changeChronometer = (context: SetTimeModel | null, interval: MutableRefObject<NodeJS.Timer | null>) => {
  let time = context?.timeValues;
  
  if((time?.seconds !== '00' || time?.minutes !== '00' || time?.hour !== '00') && context?.start === false){
    interval.current = setInterval(() => {

      context.setTimeValues((prevTime) => ({...prevTime, ...{
        seconds: changeSecondsValue(prevTime),
        minutes: changeMinutesValue(prevTime),
        hour: changeHoursValue(prevTime),
      }}));
    
      context.setUpdate(true);
      context.setStart(true);
      
    }, 1000);
  }
}

export {stopChronometer, clearChronometer, changeChronometer}