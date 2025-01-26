import React from 'react';
import './Content.css';

const Content = (props) => {
  const {showContent} = props;
  return (
    <div className='contentDiv'>
      {showContent === 1 && <p>This is the first content for Tab 1</p>}
      {showContent === 2 && <p>This is the second content for Tab 2</p>}
      {showContent === 3 && <p>This is the third content for Tab 3</p>}

    </div>
  );
}


export default Content;