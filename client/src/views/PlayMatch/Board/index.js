import Square from "../Square";
import "./styles.css";
import { useEffect, useState } from "react";
import board from "./mockBoard";

const Board = () => {
  const [currentSelect, setCurrentSelect] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [matrix, setMatrix] = useState(board);
  const [p1Pieces, setP1Pieces] = useState(12);
  const [p2Pieces, setP2Pieces] = useState(12);
  const [winnerText, setWinnerText] = useState("");

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
        <header>{playerTurn ? "Player 1 turn" : "Player 2 turn"}</header>
        <p>Player 2 pieces: {p2Pieces}</p>
      </div>
      <div>{winnerText}</div>
      <div className="board-container">
        <div className="inner-board">
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
