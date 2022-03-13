import React from 'react';

const pStyle={
    backgroundColor: 'rgba(0,0,0,0.7)',
    color:'pink',
    display: 'inline-block',
     borderRadius: '5px',
     position: 'absolute',
     zIndex:2
    };

const TextHovered = () => {
  
  return (
    <> 
        <p style={pStyle} className="info">Welcome to Yummy in my Tummy!<br/>
        You need to insert the calories amount you would like to have today,<br/>
        and the "yummy tummy" will present you with a daily meals.<br/>
        Hope you'll enjoy it 🐷
        </p>
    </>
  )
  
};

export default TextHovered;
