import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const List = ({data}) => {

  const removeItem = (index, data) => {
    data?.splice(index, 1);
    chrome.storage.sync.set({ list: data });
  }

  const openTab = (item) => {
    chrome.tabs.create({url: item});
  }
  
  return (
    <ul className='list-unstyled'>
      {data?.map((item, index) => {
        return (
          <li key={index}>
            <Button variant="outline-success" onClick={() => openTab(item)}>Hello!</Button>
            <ButtonGroup size="sm">
              <Button onClick={() => removeItem(index, data)} variant="outline-danger">X</Button>
            </ButtonGroup>
          </li>
        )
      })}
    </ul>
  )
}

export default List