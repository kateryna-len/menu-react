import React from 'react';

function Title({ text }) {
  return (
    <div>
      <h2 className="title">{text}</h2>
      <div className="title-underline "></div>
    </div>
  );
}

export default Title;
