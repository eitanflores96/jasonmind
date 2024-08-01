import React from 'react';

import './PageTwo.css';
import backgroundImage from '../assets/ason mind boceto.png';
import Background from '../components/Background';

const PageTwo = () => {
  return (
    <div className="page-two">
      <Background image={backgroundImage} />
      <div className="content">
        <div className="description">
          <p>This is a paragraph describing who you are.</p>
        </div>
        <div className="links">
          <a href="/page1">Page 1</a>
          <a href="/page2">Page 2</a>
          <a href="/page3">Page 3</a>
          <a href="/page4">Page 4</a>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
