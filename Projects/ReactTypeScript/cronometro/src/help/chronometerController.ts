import { convertSubtraiString } from "./ajustDigitString";

const stopChronometer = (context, interval) => {
  clearInterval(interval.current);
  
  context?.setStart(false);
}

const clearChronometer = (context, interval) => {
  const time = context?.timeValues;
  clearInterval(interval.current);

  context?.setTimeValues(...time, {
    seconds: '00',
    minutes: '00',
    hour: '00',
  });

  context?.setUpdate(false)
}

const changeChronometer = (context, interval) => {
  const time = context?.timeValues;

  if((time.seconds !== '00' || time.minutes !== '00' || time.hour !== '00') && time.start === false){
    interval.current = setInterval(() => {
    context?.setTimeValues(... time, {
        seconds: parseInt(time.seconds) === 0 ? '59' : (convertSubtraiString(time.seconds).length === 2 ? convertSubtraiString(time.seconds) : (`0${convertSubtraiString(time.seconds)}`)),
        minutes: parseInt(time.minutes) === 0 && parseInt(time.seconds) === 0? '59' : (parseInt(time.seconds) === 0 ? (convertSubtraiString(time.minutes).length === 2 ? convertSubtraiString(time.minutes) : (`0${convertSubtraiString(time.minutes)}`)) : time.minutes),
        hour: parseInt(time.minutes) === 0 && parseInt(time.seconds) === 0 && parseInt(time.hour) === 0? (convertSubtraiString(time.hour).length === 2 ? convertSubtraiString(time.hour) : (`0${convertSubtraiString(time.hour)}`)) : time.hour,
    });

    context?.setUpdate(true);
    context?.setStart(true);
    }, 1000);
  }
}

export {stopChronometer, clearChronometer, changeChronometer}