"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./styles.css");
var _Piece = _interopRequireDefault(require("../Piece"));
var _brownwood = _interopRequireDefault(require("../assets/brownwood.jpeg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Square = _ref => {
  let {
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
    setP2Pieces
  } = _ref;
  const buttonElement = (0, _react.useRef)();
  const handleClick = () => {
    if (value === 0 && currentSelect.length === 0) return;
    if ((value === 1 || value === 3) && !playerTurn) return;
    if ((value === 2 || value === 4) && playerTurn) return;
    if (value === 1 && playerTurn || value === 2 && !playerTurn || value === 3 && playerTurn || value === 4 && !playerTurn) {
      setCurrentSelect(index);
    }

    // PLAYER 1 LOGIC

    // player 1 move
    if (value === 0 && currentSelect && playerTurn && index[0] === currentSelect[0] - 1 && (currentSelect[1] === index[1] + 1 || currentSelect[1] === index[1] - 1) && boardState[currentSelect[0]][currentSelect[1]] !== 3) {
      console.log("player 1 move");
      boardState[index[0]][index[1]] = 1;
      boardState[currentSelect[0]][currentSelect[1]] = 0;
      setMatrix(boardState);
      setCurrentSelect([]);
      setPlayerTurn(!playerTurn);
    }

    // player 1 king move
    else if (value === 0 && currentSelect && playerTurn && boardState[currentSelect[0]][currentSelect[1]] === 3 && (currentSelect[1] === index[1] + 1 || currentSelect[1] === index[1] - 1)) {
      console.log("player1 move king");
      if ((index[0] === currentSelect[0] - 1 || index[0] === currentSelect[0] + 1) && (currentSelect[1] === index[1] + 1 || currentSelect[1] === index[1] - 1)) {
        boardState[index[0]][index[1]] = 3;
        boardState[currentSelect[0]][currentSelect[1]] = 0;
        setMatrix(boardState);
        setCurrentSelect([]);
        setPlayerTurn(!playerTurn);
      }
    }

    // player 1 take
    else if (value === 0 && currentSelect && playerTurn && boardState[currentSelect[0]][currentSelect[1]] === 1 && (currentSelect[1] === index[1] + 2 || currentSelect[1] === index[1] - 2)) {
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
    else if (value === 0 && currentSelect && playerTurn && boardState[currentSelect[0]][currentSelect[1]] === 3) {
      console.log("king take logic", currentSelect);
      if (index[0] === currentSelect[0] + 2) {
        if (index[1] === currentSelect[1] + 2) {
          console.log(index[0], index[1]);
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

    if (value === 0 && currentSelect && !playerTurn && index[0] === currentSelect[0] + 1 && (currentSelect[1] === index[1] + 1 || currentSelect[1] === index[1] - 1) && boardState[currentSelect[0]][currentSelect[1]] !== 4) {
      console.log("player 2 move");
      boardState[index[0]][index[1]] = 2;
      boardState[currentSelect[0]][currentSelect[1]] = 0;
      setMatrix(boardState);
      setCurrentSelect([]);
      setPlayerTurn(!playerTurn);
    }

    // player 2 king move
    else if (value === 0 && currentSelect && !playerTurn && boardState[currentSelect[0]][currentSelect[1]] === 4 && (currentSelect[1] === index[1] + 1 || currentSelect[1] === index[1] - 1)) {
      console.log("player2 move king");
      if ((index[0] === currentSelect[0] - 1 || index[0] === currentSelect[0] + 1) && (currentSelect[1] === index[1] + 1 || currentSelect[1] === index[1] - 1)) {
        boardState[index[0]][index[1]] = 4;
        boardState[currentSelect[0]][currentSelect[1]] = 0;
        setMatrix(boardState);
        setCurrentSelect([]);
        setPlayerTurn(!playerTurn);
      }
    }

    // player 2 take
    else if (value === 0 && currentSelect && !playerTurn && boardState[currentSelect[0]][currentSelect[1]] === 2 && (currentSelect[1] === index[1] + 2 || currentSelect[1] === index[1] - 2)) {
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
    else if (value === 0 && currentSelect && !playerTurn && boardState[currentSelect[0]][currentSelect[1]] === 4) {
      console.log("king take logic", currentSelect);
      if (index[0] === currentSelect[0] + 2) {
        if (index[1] === currentSelect[1] + 2) {
          console.log(index[0], index[1]);
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
  (0, _react.useEffect)(() => {
    if (currentSelect[0] === index[0] && currentSelect[1] === index[1]) {
      if (playerTurn) buttonElement.current.style.backgroundColor = "white";else if (playerTurn && value === 3 || !playerTurn && value === 4) buttonElement.current.style.backgroundColor = "yellow";else buttonElement.current.style.backgroundColor = "green";
    } else if (index[0] % 2 === 0 && index[1] % 2 === 0 || index[0] % 2 !== 0 && index[1] % 2 !== 0) {
      buttonElement.current.style.backgroundColor = "transparent";
    } else {
      buttonElement.current.style.background = "url(".concat(_brownwood.default, ") 10px 10px repeat");
    }
  }, [currentSelect]);
  (0, _react.useEffect)(() => {
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
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "square",
    onClick: handleClick,
    ref: buttonElement
  }, /*#__PURE__*/_react.default.createElement(_Piece.default, {
    val: value
  }));
};
var _default = Square;
exports.default = _default;