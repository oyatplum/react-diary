import logo from './logo.svg';
import { Outlet, Routes, Route } from "react-router-dom";
import './App.css';
import Calendar from '../src/calendar/Calendar'

function App() {
  return (
    <div className="container">
      <div className='block'>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
