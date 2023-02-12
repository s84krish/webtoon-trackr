import React, { useState, useEffect } from 'react';

import List from './components/List'
import logo from './logo.svg';

import './App.css';



const clearStorage = () => {
  chrome.storage.sync.clear();
};

// const removeItem = (index, data) => {
//   data?.splice(index, 1);
//   chrome.storage.sync.set({ list: data });
// }



const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    chrome.storage.sync.get(["list"]).then((list) => {
      setData(list);
    });
  }, [data])


  return (
    <div className="App">
        <form onSubmit={clearStorage}>
          <button>Clear</button>
        </form>
        <List data={data?.list}/>
        {/* <ul>
          {data.list?.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button onClick={() => removeItem(index, data.list)}>x</button>
              </li>
            )
          })}
        </ul> */}
    </div>
  );
}

export default App;
