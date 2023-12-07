import React, { useState } from 'react';
import './CoinFlip.css';

const CoinFlip = () => {
  const [isHeads, setIsHeads] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);


  const flipCoin = () => {
    // setIsHeads(Math.random() < 0.5);
    setIsFlipping(true);

    // Simulate a delay for the flip effect
    setTimeout(() => {
      setIsHeads(Math.random() < 0.5);
      setIsFlipping(false);
    }, 1000);
  };

  return (
    <div className={`coin-flip-container ${isFlipping ? 'flipping' : ''}`}>
      <div className={`coin ${isHeads ? 'heads' : 'tails'}`}></div>
      <button className="flip-button" onClick={flipCoin} disabled={isFlipping}>
        {isFlipping ? 'Flipping...' : 'Flip Coin'}
      </button>
    </div>
  );
};

export default CoinFlip;
