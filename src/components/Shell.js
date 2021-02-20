import React from 'react';

const Shell = (props) => {
  const rotation = props.flipped ? 180 : 0;
  return (
    <div 
      className="shell"
      style={{transform: `rotateY(${rotation}deg)`}} 
      onClick={() => props.flipShell(props)}
      >
      <div className="shell-front"></div>
      <div className="shell-back">
        <p className="pearl">{props.symbol}</p>
      </div>
    </div>
  )
}

export default Shell