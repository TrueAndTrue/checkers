import { useEffect, useRef } from 'react';
import './styles.css'

const Square = ({value, index, setCurrentSelect, currentSelect, boardState, setMatrix, playerTurn, setPlayerTurn}) => {

  const buttonElement = useRef();

  const handleClick = () => {

    
    if (value === 1 && playerTurn || value === 2 && !playerTurn) {
      setCurrentSelect(index);
    }

    // player 1 logic

    else if (value === 0 && currentSelect && playerTurn) {
      if (index[0] === (currentSelect[0] - 1) && (currentSelect[1] === (index[1] + 1) || currentSelect[1] === (index[1] - 1))) {
        boardState[index[0]][index[1]] = 1;
        boardState[currentSelect[0]][currentSelect[1]] = 0
        setMatrix(boardState);
        setCurrentSelect([]);
        setPlayerTurn(!playerTurn)
      }
    }

    // player 2 logic

    else if (value === 0 && currentSelect && !playerTurn) {
      if (index[0] === (currentSelect[0] + 1) && (currentSelect[1] === (index[1] + 1) || currentSelect[1] === (index[1] - 1))) {
        boardState[index[0]][index[1]] = 2;
        boardState[currentSelect[0]][currentSelect[1]] = 0
        setMatrix(boardState);
        setCurrentSelect([]);
        setPlayerTurn(!playerTurn)
      }
    }

  }

  useEffect(() => {

    if (currentSelect[0] === index[0] && currentSelect[1] === index[1]) {
      if (playerTurn) buttonElement.current.style.backgroundColor = "orange";
      else buttonElement.current.style.backgroundColor = "green";
      
    }
    else if (index[0] % 2 === 0 && index[1] % 2 === 0 || index[0] % 2 !== 0 && index[1] % 2 !== 0){
      buttonElement.current.style.backgroundColor = "white"
    }
    else {
      buttonElement.current.style.backgroundColor = "black"
    }


  }, [currentSelect])


  return (
    <button 
      className="square"
      onClick={handleClick}
      ref={buttonElement}
      >
      {value ? value : ''}
    </button>
  )


}

export default Square;