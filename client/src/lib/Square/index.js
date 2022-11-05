import { useEffect, useRef } from "react";
import "./styles.css";
import Piece from "../Piece";
import darkwood from '../assets/brownwood.jpeg'
import React from 'react';

const Square = ({
  value,
  index,
  setCurrentSelect,
  currentSelect,
  boardState,
  setMatrix,
  playerTurn,
  setPlayerTurn,
  p1Pieces,
  p2Pieces,
  setP1Pieces,
  setP2Pieces,
  boardStyle
}) => {
  const buttonElement = useRef();

  const handleClick = () => {
    if (value === 0 && currentSelect.length === 0) return;
    if ((value === 1 || value === 3) && !playerTurn) return;
    if ((value === 2 || value === 4) && playerTurn) return;

    if (
      (value === 1 && playerTurn) ||
      (value === 2 && !playerTurn) ||
      (value === 3 && playerTurn) ||
      (value === 4 && !playerTurn)
    ) {
      setCurrentSelect(index);
    }

    // PLAYER 1 LOGIC

    // player 1 move
    if (
      value === 0 &&
      currentSelect &&
      playerTurn &&
      index[0] === currentSelect[0] - 1 &&
      (currentSelect[1] === index[1] + 1 || currentSelect[1] === index[1] - 1) &&
      boardState[currentSelect[0]][currentSelect[1]] !== 3
    ) {
      boardState[index[0]][index[1]] = 1;
      boardState[currentSelect[0]][currentSelect[1]] = 0;
      setMatrix(boardState);
      setCurrentSelect([]);
      setPlayerTurn(!playerTurn);
    }

    // player 1 king move
    else if (
      value === 0 &&
      currentSelect &&
      playerTurn &&
      boardState[currentSelect[0]][currentSelect[1]] === 3 &&
      (currentSelect[1] === index[1] + 1 || currentSelect[1] === index[1] - 1)
    ) {
      if (
        (index[0] === currentSelect[0] - 1 ||
          index[0] === currentSelect[0] + 1) &&
        (currentSelect[1] === index[1] + 1 || currentSelect[1] === index[1] - 1)
      ) {
        boardState[index[0]][index[1]] = 3;
        boardState[currentSelect[0]][currentSelect[1]] = 0;
        setMatrix(boardState);
        setCurrentSelect([]);
        setPlayerTurn(!playerTurn);
      }
    }

    // player 1 take
    else if (
      value === 0 &&
      currentSelect &&
      playerTurn &&
      boardState[currentSelect[0]][currentSelect[1]] === 1 &&
      (currentSelect[1] === index[1] + 2 || currentSelect[1] === index[1] - 2)
    ) {
      if (index[0] === currentSelect[0] - 2) {
        if (currentSelect[1] === index[1] + 2) {
          boardState[index[0]][index[1]] = 1;
          boardState[index[0] + 1][index[1] + 1] = 0;
          boardState[currentSelect[0]][currentSelect[1]] = 0;
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP2Pieces(p2Pieces - 1);
        } else if (currentSelect[1] === index[1] - 2) {
          boardState[index[0]][index[1]] = 1;
          boardState[index[0] + 1][index[1] - 1] = 0;
          boardState[currentSelect[0]][currentSelect[1]] = 0;
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP2Pieces(p2Pieces - 1);
        }
      }
    }

    // player 1 king take
    else if (
      value === 0 &&
      currentSelect &&
      playerTurn &&
      boardState[currentSelect[0]][currentSelect[1]] === 3
    ) {
      if (index[0] === currentSelect[0] + 2) {
        if (index[1] === currentSelect[1] + 2) {
          boardState[index[0]][index[1]] = 3;
          boardState[index[0] - 1][index[1] - 1] = 0;
          boardState[currentSelect[0]][currentSelect[1]] = 0;
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP2Pieces(p2Pieces - 1);
        } else if (index[1] === currentSelect[1] - 2) {
          boardState[index[0]][index[1]] = 3;
          boardState[index[0] - 1][index[1] + 1] = 0;
          boardState[currentSelect[0]][currentSelect[1]] = 0;
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP2Pieces(p2Pieces - 1);
        }
      } else if (index[0] === currentSelect[0] - 2) {
        if (index[1] === currentSelect[1] + 2) {
          boardState[index[0]][index[1]] = 3;
          boardState[index[0] + 1][index[1] - 1] = 0;
          boardState[currentSelect[0]][currentSelect[1]] = 0;
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP2Pieces(p2Pieces - 1);
        } else if (index[1] === currentSelect[1] - 2) {
          boardState[index[0]][index[1]] = 3;
          boardState[index[0] + 1][index[1] + 1] = 0;
          boardState[currentSelect[0]][currentSelect[1]] = 0;
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP2Pieces(p2Pieces - 1);
        }
      }
    }

    // player 2 move

    if (
      value === 0 &&
      currentSelect &&
      !playerTurn &&
      index[0] === currentSelect[0] + 1 &&
      (currentSelect[1] === index[1] + 1 || currentSelect[1] === index[1] - 1) &&
      boardState[currentSelect[0]][currentSelect[1]] !== 4
    ) {
      boardState[index[0]][index[1]] = 2;
      boardState[currentSelect[0]][currentSelect[1]] = 0;
      setMatrix(boardState);
      setCurrentSelect([]);
      setPlayerTurn(!playerTurn);
    }

    // player 2 king move
    else if (
      value === 0 &&
      currentSelect &&
      !playerTurn &&
      boardState[currentSelect[0]][currentSelect[1]] === 4 &&
      (currentSelect[1] === index[1] + 1 || currentSelect[1] === index[1] - 1)
    ) {
      if (
        (index[0] === currentSelect[0] - 1 ||
          index[0] === currentSelect[0] + 1) &&
        (currentSelect[1] === index[1] + 1 || currentSelect[1] === index[1] - 1)
      ) {
        boardState[index[0]][index[1]] = 4;
        boardState[currentSelect[0]][currentSelect[1]] = 0;
        setMatrix(boardState);
        setCurrentSelect([]);
        setPlayerTurn(!playerTurn);
      }
    }

    // player 2 take
    else if (
      value === 0 &&
      currentSelect &&
      !playerTurn &&
      boardState[currentSelect[0]][currentSelect[1]] === 2 &&
      (currentSelect[1] === index[1] + 2 || currentSelect[1] === index[1] - 2)
    ) {
      if (index[0] === currentSelect[0] + 2) {
        if (currentSelect[1] === index[1] + 2) {
          boardState[index[0]][index[1]] = 2;
          boardState[index[0] - 1][index[1] + 1] = 0;
          boardState[currentSelect[0]][currentSelect[1]] = 0;
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP1Pieces(p1Pieces - 1);
        } else if (currentSelect[1] === index[1] - 2) {
          boardState[index[0]][index[1]] = 2;
          boardState[index[0] - 1][index[1] - 1] = 0;
          boardState[currentSelect[0]][currentSelect[1]] = 0;
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP1Pieces(p1Pieces - 1);
        }
      }
    }

    // player 2 king take
    else if (
      value === 0 &&
      currentSelect &&
      !playerTurn &&
      boardState[currentSelect[0]][currentSelect[1]] === 4
    ) {
      if (index[0] === currentSelect[0] + 2) {
        if (index[1] === currentSelect[1] + 2) {
          boardState[index[0]][index[1]] = 4;
          boardState[index[0] - 1][index[1] - 1] = 0;
          boardState[currentSelect[0]][currentSelect[1]] = 0;
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP1Pieces(p1Pieces - 1);
        } else if (index[1] === currentSelect[1] - 2) {
          boardState[index[0]][index[1]] = 4;
          boardState[index[0] - 1][index[1] + 1] = 0;
          boardState[currentSelect[0]][currentSelect[1]] = 0;
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP1Pieces(p1Pieces - 1);
        }
      } else if (index[0] === currentSelect[0] - 2) {
        if (index[1] === currentSelect[1] + 2) {
          boardState[index[0]][index[1]] = 4;
          boardState[index[0] + 1][index[1] - 1] = 0;
          boardState[currentSelect[0]][currentSelect[1]] = 0;
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP1Pieces(p1Pieces - 1);
        } else if (index[1] === currentSelect[1] - 2) {
          boardState[index[0]][index[1]] = 4;
          boardState[index[0] + 1][index[1] + 1] = 0;
          boardState[currentSelect[0]][currentSelect[1]] = 0;
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP1Pieces(p1Pieces - 1);
        }
      }
    }
  };

  useEffect(() => {

    // p1 light up
    // p2 light up
    // diag 1
    // diag 2

  
  
    if (boardStyle.boardTheme === 'b/w') {
      console.log('lol')
      if (currentSelect[0] === index[0] && currentSelect[1] === index[1]) {
        if (playerTurn) buttonElement.current.style.backgroundColor = "blue";
        else if ((playerTurn && value === 3) || (!playerTurn && value === 4))
        buttonElement.current.style.backgroundColor = "yellow";
        else buttonElement.current.style.backgroundColor = "green";
      } else if (
        (index[0] % 2 === 0 && index[1] % 2 === 0) ||
        (index[0] % 2 !== 0 && index[1] % 2 !== 0)
        ) {
          buttonElement.current.style.backgroundColor = "white";
        } else {
          buttonElement.current.style.background = `black`;
        }
      }
      
      else {
        if (currentSelect[0] === index[0] && currentSelect[1] === index[1]) {
          if (playerTurn) buttonElement.current.style.backgroundColor = "white";
        else if ((playerTurn && value === 3) || (!playerTurn && value === 4))
        buttonElement.current.style.backgroundColor = "yellow";
        else buttonElement.current.style.backgroundColor = "green";
      } else if (
        (index[0] % 2 === 0 && index[1] % 2 === 0) ||
        (index[0] % 2 !== 0 && index[1] % 2 !== 0)
        ) {
          buttonElement.current.style.backgroundColor = "transparent";
        } else {
          buttonElement.current.style.background = `url(${darkwood}) 10px 10px repeat`;
        }
      }
      
      if (boardStyle.boardTiles) {
    
    
        if (currentSelect[0] === index[0] && currentSelect[1] === index[1]) {
          if (playerTurn && boardStyle.boardTiles.p1) buttonElement.current.style.backgroundColor = boardStyle.boardTiles.p1;
          else {
            if (boardStyle.boardTiles.p2) buttonElement.current.style.backgroundColor = boardStyle.boardTiles.p2;
          }
        } else if (
          ((index[0] % 2 === 0 && index[1] % 2 === 0) ||
          (index[0] % 2 !== 0 && index[1] % 2 !== 0)) && 
          boardStyle.boardTiles.diag1
        ) {
          buttonElement.current.style.backgroundColor = boardStyle.boardTiles.diag1;
        } else {
          if (boardStyle.boardTiles.diag1) buttonElement.current.style.background = boardStyle.boardTiles.diag2;
        }
      }
    }, [currentSelect]);
    
    useEffect(() => {
      if (value === 1 && index[0] === 0) {
        boardState[index[0]][index[1]] = 3;
        setMatrix(boardState);
      } else if (value === 2 && index[0] === boardState.length - 1) {
        boardState[index[0]][index[1]] = 4;
        setMatrix(boardState);
      }
    }, [boardState]);

  return (
    <button
      className="square"
      onClick={handleClick}
      ref={buttonElement}
    >
      <Piece val={value} />
    </button>
  );
};

export default Square;
