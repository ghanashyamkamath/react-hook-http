import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataFetching1 from './components/DataFetching1';
import DataFetching2 from './components/DataFetching2';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className="App">
      {/* <DataFetching1 /> */}
      {/* <DataFetching2 /> */}
      {/* <FocusInput /> */}
      <HookTimer />
    </div>
  );
}

export default App;
