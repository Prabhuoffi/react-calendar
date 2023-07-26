import './App.css';
import React, { useState } from 'react';
import Calendar from 'react-calendar';


function App() {
  const [date,setDate]=useState(new Date());
  return (
    <div className="App">
      <h1 className='text-center'>React Calendar</h1>
      <div className='calender-container'>
      <Calendar  onChange={setDate}value={date}/>
    </div>
    <div>
    <p className='selectDate'>
      <span className='bold'>Selected Date:</span>{''}
      {date.toDateString()}

    </p>
    </div>
    </div>
  );
}

export default App;
