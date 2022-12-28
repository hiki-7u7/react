import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './useState/CounterApp'
// import { CounterCustomHooks } from './useState/CounterCustomHooks'
// import { FormWithCustomHook } from './useEffect/FormWithCustomHook';
// import { MultiCustomHooks } from './03-examples/MultiCustomHooks';
// import { Counter } from './04-memo/Counter';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-reducer/intro-reducer';
// import { TodoApp } from './08-reducer/TodoApp';
import { MainApp } from './09-context/MainApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    < BrowserRouter>
    
      <MainApp />

    </ BrowserRouter>

  //</React.StrictMode>,
)
