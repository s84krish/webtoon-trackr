import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

import { Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import List from './components/List'
import logo from './images/logo.svg';
import DayHeader from './components/DayHeader';

import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import './App.css';


const clearStorage = () => {
  chrome.storage.sync.clear();
};

const App = () => {
  const currDay = new Date();
  const [data, setData] = useState([]);
  const [dayList, setDayList] = useState([]);
  const [displayDay, setDisplayDay] = useState(currDay.getDay())

  // function getDayList(day){
  //   const tempList = [];
  //   for (let i=0; i<data.length; i++){
  //     if (data[i].day === day){
  //       tempList.push(data[i]);
  //     }
  //   }
  //   setDayList(tempList);
  // }

  useEffect(() => {
    chrome.storage.sync.get(["list"]).then((list) => {
      setData(list.list);
    });
  }, [data])

  useEffect(() => {
    if (displayDay === '7'){
      setDayList(data);
    } else {
      const tempList = [];
      if (data){
        for (let i=0; i<data.length; i++){
          if (data[i].day === displayDay){
            tempList.push(data[i]);
          }
        }
        setDayList(tempList);
      }
    }
  }, [displayDay]) 


  return (
    <div className='main-popup'>
        <div className='header'>
          <img src={logo} alt='Logo' className='logo'/>
        </div>
        <DayHeader day={displayDay}/>
        <ToggleButtonGroup type='radio' size="sm" style={{margin: '15px 0', border: '2px solid black'}} name='days' defaultValue={[9]}> 
          <ToggleButton onClick={() => setDisplayDay('1')} variant="success" value={1} id='10'>Mon</ToggleButton>
          <ToggleButton onClick={() => setDisplayDay('2')} variant="success" value={2} id='11'>Tues</ToggleButton>
          <ToggleButton onClick={() => setDisplayDay('3')} variant="success" value={3} id='12'>Wed</ToggleButton>
          <ToggleButton onClick={() => setDisplayDay('4')} variant="success" value={4} id='13'>Thurs</ToggleButton>
          <ToggleButton onClick={() => setDisplayDay('5')} variant="success" value={5} id='14'>Fri</ToggleButton>
          <ToggleButton onClick={() => setDisplayDay('6')} variant="success" value={6} id='15'>Sat</ToggleButton>
          <ToggleButton onClick={() => setDisplayDay('0')} variant="success" value={7} id='16'>Sun</ToggleButton>
          <ToggleButton onClick={() => setDisplayDay('7')} variant="success" value={8} id='17'>All</ToggleButton>
          <ToggleButton onClick={() => setDisplayDay(String(currDay.getDay()))} variant="secondary" value={9} id='18'>Today</ToggleButton>
        </ToggleButtonGroup>
        {dayList &&
          <div className="list-wrapper">
            <List data={dayList}/>
          </div>
        }
        <form onSubmit={clearStorage}>
          <button>Clear</button>
        </form>
    </div>
  );
}

export default App;
