import './styles.css'
import red from '../assets/piecered.png';
import black from '../assets/pieceblack.png';
import brown from '../assets/piecebrown.png';
import kingblack from '../assets/kingblack.png';
import kingred from '../assets/kingred.png';
import kingbrown from '../assets/kingbrown.png';
import React from 'react';

const Piece = ( { val } ) => {


  // piece 1 color
  // piece 2 color


  return (
    <div className="piece">
      {val === 1 && <img className="piece-img red" src={red} />}
      {val === 2 && <img className="piece-img" src={black} />}
      {val === 0 && ''}
      {val === 3 && <img className="piece-img redking" src={kingred} />}
      {val === 4 && <img className="piece-img blackking" src={kingblack} />}
    </div>
  )
}

export default Piece;
