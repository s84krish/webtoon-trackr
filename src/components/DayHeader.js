import React from 'react';

import '../App.css';

const DayHeader = ({day}) => {

  

  return (
    <h1>{format(currDay, 'EEEE')}</h1>
  )
}

export default DayHeader