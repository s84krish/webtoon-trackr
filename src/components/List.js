import React from 'react';

const List = ({data}) => {

  const removeItem = (index, data) => {
    data?.splice(index, 1);
    chrome.storage.sync.set({ list: data });
  }
  
  return (
    <ul>
      {data?.map((item, index) => {
        return (
          <li key={index}>
            <a href={item}></a>
            <button onClick={() => removeItem(index, data)}>x</button>
          </li>
        )
      })}
    </ul>
  )
}

export default List