import Square from "../Square";
import "./styles.css";
import { useEffect, useState, useRef } from "react";
import board from "./mockBoard";
import React from 'react';

const Board = ({boardStyle}) => {
  const [currentSelect, setCurrentSelect] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [matrix, setMatrix] = useState(board);
  const [p1Pieces, setP1Pieces] = useState(12);
  const [p2Pieces, setP2Pieces] = useState(12);
  const [winnerText, setWinnerText] = useState("");

  const container  = useRef();
  const innerContainer = useRef();

  const handleReset = () => {
    window.location.reload();
  }

  // boardStyle.board.borderColor = ''
  // borderStyle.board.borderSize = ''

  useEffect(() => {

    
    
    
    if (boardStyle.boardTheme === 'b/w') {
      
      container.current.style.backgroundColor = 'transparent'
      container.current.style.border = '5px solid black'

  
    }
    
    
    let borderProps;
    if (boardStyle.board && (boardStyle.board.borderColor || boardStyle.board.borderSize)) {
      borderProps = `${boardStyle.board.borderSize ? boardStyle.board.borderSize : '5px'} solid ${boardStyle.board.borderColor ? boardStyle.board.borderColor : 'white'}`
      container.current.style.border = borderProps ? borderProps : 'none';
    }
  }, [])

  useEffect(() => {
    if (p2Pieces === 0) {
      setWinnerText("Player 1 has won!");
    } else if (p1Pieces === 0) {
      setWinnerText("Player 2 has won!");
    }
  }, [p1Pieces, p2Pieces]);

  return (
    <div className="board-page-container">
      <div className="player-info">
        <p>Player 1 pieces: {p1Pieces}</p>
        {
          winnerText.length > 0 
          ? <header>{winnerText}</header> 
          : <header>{playerTurn ? "Player 1 turn" : "Player 2 turn"}</header> 


        }
        <p>Player 2 pieces: {p2Pieces}</p>
      </div>
      {winnerText.length > 0 && <button className="reset-button" onClick={handleReset}>RESET</button>}
      <div className="board-container" ref={container}>
        <div className="inner-board" ref={innerContainer}>
          {matrix.map((arr, i) => {
            return arr.map((square, j) => {
              return (
                <Square
                  value={square}
                  index={[i, j]}
                  setCurrentSelect={setCurrentSelect}
                  currentSelect={currentSelect}
                  boardState={[...matrix]}
                  setMatrix={setMatrix}
                  playerTurn={playerTurn}
                  setPlayerTurn={setPlayerTurn}
                  p1Pieces={p1Pieces}
                  p2Pieces={p2Pieces}
                  setP1Pieces={setP1Pieces}
                  setP2Pieces={setP2Pieces}
                  boardStyle={boardStyle}
                />
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
