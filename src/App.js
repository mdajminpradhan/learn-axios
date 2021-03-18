import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {

  const [apiData, setApiData] = useState({});
  const fetchAPI = async () => {
    const {data} = await Axios.get('https://randomuser.me/api');
    
    const apiData = data.results[0];
    setApiData(apiData);
  }

  useEffect(()=> {
    fetchAPI();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {console.log(apiData.picture?.large)} <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
