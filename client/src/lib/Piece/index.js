import './styles.css'
import { useEffect, useState, useRef } from 'react';
import red from '../assets/piecered.png';
import black from '../assets/pieceblack.png';
import brown from '../assets/piecebrown.png';
import kingblack from '../assets/kingblack.png';
import kingred from '../assets/kingred.png';
import kingbrown from '../assets/kingbrown.png';
import React from 'react';

const Piece = ( { val, boardStyle } ) => {


  // piece 1 color
  // piece 2 color

  const [ piece1, setPiece1 ] = useState(red);
  const [ piece2, setPiece2 ] = useState(black);
  const [ king1, setKing1 ] = useState(kingred);
  const [ king2, setKing2] = useState(kingblack);

  const player1 = useRef();
  const player2 = useRef();

  useEffect(() => {
    if (boardStyle && boardStyle.p1) {
      console.log(boardStyle)
      if (boardStyle.p1 === 'black') {
        setPiece1(black)
        setKing1(kingblack)
      }
      else if (boardStyle.p1 === 'brown') {
        setPiece1(brown);
        setKing1(kingbrown)
      }
    }
    else {
      if (player1.current) {

     
      }
    }
    if (boardStyle && boardStyle.p2) {

      if (boardStyle.p2 === 'red') {
        setPiece2(red)
        setKing2(kingred)
      }
      else if (boardStyle.p2 === 'brown') {
        setPiece2(brown);
        setKing2(kingbrown)
      }
    }

    if (player1.current && boardStyle.p1 !== 'red') {
      console.log('in')
      player1.current.style.width = '60%'
      player1.current.style.height = '110%'
    }
     
    if (player2.current && boardStyle.p2 !== 'red') {
      console.log('in')
      player2.current.style.width = '60%'
      player2.current.style.height = '110%'
    }
    
  }, [])


  return (
    <div className="piece">
      {val === 1 && <img className="piece-img" src={piece1} ref={player1}/>}
      {val === 2 && <img className="piece-img" src={piece2} ref={player2}/>}
      {val === 0 && ''}
      {val === 3 && <img className="piece-img redking" src={king1} />}
      {val === 4 && <img className="piece-img blackking" src={king2} />}
    </div>
  )
}

export default Piece;
