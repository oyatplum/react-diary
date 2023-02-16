import { Routes, Route } from "react-router-dom";
import './App.css';
import Calendar from './calendar/Calendar';

function App() {
  return (
    <div className="container">
      <div className='block'>
          <Routes>
            <Route path='/' element={<Calendar />}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
