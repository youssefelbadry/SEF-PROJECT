import React, { useState } from 'react';

function ProgressBarComponent() {


  return (
  
     <div
    className="progress-bar btn1"
    role="progressbar"
    style={{ width: `90%` }}
    aria-valuenow='90%'
    aria-valuemin="0"
    aria-valuemax="100"
  >
    
  </div>
 
  
  
  );
}

export default ProgressBarComponent;
