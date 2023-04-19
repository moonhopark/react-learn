import React from 'react';
import './App.css';

import CounterOne from './components/react-basic/CustomHooks/CounterOne';
import CounterTwo from './components/react-basic/CustomHooks/CounterTwo';
import UserForm from './components/react-basic/CustomHooks/UserForm';

const App = () => {
  return (
    <div className="App">
      <UserForm />
    </div>
  );
};

export default App;
