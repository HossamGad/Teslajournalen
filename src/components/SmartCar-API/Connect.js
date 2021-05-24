
import React from 'react';

export default ({onClick}) => (
  <div style={{marginLeft:'50px'}}>
    <h5>Connect your vehicle</h5>

    <button onClick={onClick}>Connect</button>
  </div>
);