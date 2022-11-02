import Square from '../Square';
import './styles.css';
import { useState } from 'react';
import board from './mockBoard';

const Board = () => {

  const [ currentSelect, setCurrentSelect ] = useState([]);
  const [ playerTurn, setPlayerTurn ] = useState(true);
  const [ matrix, setMatrix ] = useState(board);




  return (

    <div className="board-page-container">
      <header className="player-turn">{playerTurn ? "Player 1 turn" : "Player 2 turn"}</header>
      <div className="board-container">
        {matrix.map((arr, i) => {
          return arr.map((square, j) => {
            return <Square 
            value={square} 
            index={[i, j]} 
            setCurrentSelect={setCurrentSelect} 
            currentSelect={currentSelect} 
            boardState={[...matrix]} 
            setMatrix={setMatrix}
            playerTurn={playerTurn}
            setPlayerTurn={setPlayerTurn}
            />
          })
        })}

      </div>

    </div>

    

  )
}

export default Board;