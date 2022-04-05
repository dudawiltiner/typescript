import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

interface Time {
  [typeTime: string]: string,
}

interface SetTimeModel {
  timeValues: Time,
  update: boolean,
  start: boolean,
  setTimeValues: Dispatch<SetStateAction<Time>>,
  setUpdate: Dispatch<SetStateAction<boolean>>,
  setStart: Dispatch<SetStateAction<boolean>>,
}

export const AppChronometerContext = createContext<SetTimeModel | null>(null);

// o tipo children(JSX ELEMENT) já está embutido no FC React.
const AppChronometerProvider: React.FC = ({ children}) => {
  const initialValuesTime: Time = {hour: '00', minutes: '00', seconds: '00'};
  const [timeValues, setTimeValues] = useState(initialValuesTime);
  const [update, setUpdate] = useState(false);
  const [start, setStart] = useState(false);

  const valueContext: SetTimeModel = { 
    timeValues, 
    setTimeValues,
    update,
    setUpdate,
    start,
    setStart,
  }

  return (
    <AppChronometerContext.Provider value={valueContext}>
      {children}
    </AppChronometerContext.Provider>
  )
}

export default AppChronometerProvider;