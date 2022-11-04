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
      console.log("player 1 move");
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
      console.log("player1 move king");
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
      console.log("piece take logic player1");
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
      console.log("king take logic", currentSelect);
      if (index[0] === currentSelect[0] + 2) {
        if (index[1] === currentSelect[1] + 2) {
          console.log(index[0], index[1])
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
          console.log(boardState);
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
      console.log("player 2 move");
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
      console.log("player2 move king");
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
      console.log("piece take logic player1");
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
      console.log("king take logic", currentSelect);
      if (index[0] === currentSelect[0] + 2) {
        if (index[1] === currentSelect[1] + 2) {
          console.log(index[0], index[1])
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
          console.log(boardState);
          setMatrix(boardState);
          setCurrentSelect([]);
          setPlayerTurn(!playerTurn);
          setP1Pieces(p1Pieces - 1);
        }
      }
    }
  };

  useEffect(() => {
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
  }, [currentSelect]);

  useEffect(() => {
    if (value === 1 && index[0] === 0) {
      console.log("KING TIME");
      boardState[index[0]][index[1]] = 3;
      setMatrix(boardState);
    } else if (value === 2 && index[0] === boardState.length - 1) {
      console.log("KING TIME (for player 2)");
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
