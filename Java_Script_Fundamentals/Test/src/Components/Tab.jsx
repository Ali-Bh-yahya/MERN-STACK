import React from 'react';
import './Tab.css';

const Tab = (props) => {
  const { updateTab } = props;
  const Tabs = [1, 2, 3];

  const handleClick = (e, tab) => {
    updateTab(tab);
  };

  return (
    <header className="tab-header">
      {Tabs.map((tab, index) => (
        <button
          className="tab-button" // Updated to correct "className"
          key={index}
          onClick={(e) => handleClick(e, tab)}
        >
          Tab {tab}
        </button>
      ))}
    </header>
  );
};

export default Tab;
