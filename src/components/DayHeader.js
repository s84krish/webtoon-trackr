import React, {useState} from 'react';

import '../App.css';

const DayHeader = ({day}) => {
  const months = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'All Webtoons'];
  const index = parseInt(day);

  return (
    <h1>{months[index]}</h1>
  )
}

export default DayHeader