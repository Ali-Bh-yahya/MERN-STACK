import React, { useState } from 'react';
import Tab from './Components/Tab.jsx';
import Content from './Components/Content.jsx';
import './App.css';

function App() {
  const [clickedTab, setClickedTab] = useState(1);

  const update = (tab) => {
    setClickedTab(tab);
  };

  return (
    <>
      <Tab updateTab={update} />
      <div className="tab-content">
        <Content showContent={clickedTab} />
      </div>
    </>
  );
}

export default App;
