import React, { useState, useEffect } from 'react';

import List from './components/List'
import logo from './logo.svg';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";


import './App.css';



const clearStorage = () => {
  chrome.storage.sync.clear();
};


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
    </div>
  );
}

export default App;
