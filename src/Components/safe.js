import React from 'react';
import {useState} from 'react';




export default function App() {
    const [date, setdate] = useState('')
    const [time, setTime]=useState('')

  return (
    <div><h1>SAFE TIME CAPSULE!</h1>
    <br/>
    <label>Select the date and time to break the time capsule</label><br/>
    <input type="date" onChange={event => setdate(event.target.value)} />
    <br/><br/>
    <input type="time" onChange={event => setTime(event.target.value)}/>
    <br/><br/>
    Your time capsule will break at {time} on {date}!




    
    </div>
    
  )
}
