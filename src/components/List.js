import React, {useState} from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

import '../App.css';

const List = ({data}) => {
  const [miniNav, setMiniNav] = useState(-1);

  const openMiniNav = (index) => {
    setMiniNav(index);
  }

  const closeMiniNav = () => {
    setMiniNav(-1)
  }

  const removeItem = (index, data) => {
    data?.splice(index, 1);
    chrome.storage.sync.set({ list: data });
  }

  const openTab = (item) => {
    chrome.tabs.create({url: item});
  }
  
  function getName(item) {
    let text = item.split("/");
    if (text[2] === "www.webtoons.com"){
      text = text[5];
    } 
    else if (!text[3]) {
      text = text[2];
    } else {
      text = text[3];
    }
    return text;
  }

  return (
    <ul className='list-unstyled'>
      {data?.map((item, index) => {
        const text = getName(item);
        return (
          <li key={index} className="list" onMouseEnter={() => {openMiniNav(index)}} onMouseLeave={closeMiniNav}>
            <Button className="list-item" onClick={() => openTab(item)}>{text}</Button>
            {(miniNav === index) && 
              <ButtonGroup size="sm">
                <Button onClick={() => removeItem(index, data)} variant="outline-danger">X</Button>
              </ButtonGroup>
            }
          </li>
        )
      })}
    </ul>
  )
}

export default List