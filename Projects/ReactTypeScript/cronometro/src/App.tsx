import React from 'react';
import Chronometer from './components/Chronometer';
import MinutesToChoice from './components/MinutesToChoice';
import TimeToType from './components/TimeToType';
import AppChronometerProvider from './context/AppChronometerContext';

const App: React.FC = () => {
  return (
    <AppChronometerProvider>
      <Chronometer />
      <MinutesToChoice />
      <TimeToType />
    </AppChronometerProvider>
  );
}

export default App;
