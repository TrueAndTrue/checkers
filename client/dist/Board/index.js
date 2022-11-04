"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _Square = _interopRequireDefault(require("../Square"));
require("./styles.css");
var _react = _interopRequireWildcard(require("react"));
var _mockBoard = _interopRequireDefault(require("./mockBoard"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Board = () => {
  const [currentSelect, setCurrentSelect] = (0, _react.useState)([]);
  const [playerTurn, setPlayerTurn] = (0, _react.useState)(true);
  const [matrix, setMatrix] = (0, _react.useState)(_mockBoard.default);
  const [p1Pieces, setP1Pieces] = (0, _react.useState)(12);
  const [p2Pieces, setP2Pieces] = (0, _react.useState)(12);
  const [winnerText, setWinnerText] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    if (p2Pieces === 0) {
      setWinnerText("Player 1 has won!");
    } else if (p1Pieces === 0) {
      setWinnerText("Player 2 has won!");
    }
  }, [p1Pieces, p2Pieces]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "board-page-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "player-info"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Player 1 pieces: ", p1Pieces), winnerText.length > 0 ? /*#__PURE__*/_react.default.createElement("header", null, winnerText) : /*#__PURE__*/_react.default.createElement("header", null, playerTurn ? "Player 1 turn" : "Player 2 turn"), /*#__PURE__*/_react.default.createElement("p", null, "Player 2 pieces: ", p2Pieces)), /*#__PURE__*/_react.default.createElement("div", {
    className: "board-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-board"
  }, matrix.map((arr, i) => {
    return arr.map((square, j) => {
      return /*#__PURE__*/_react.default.createElement(_Square.default, {
        value: square,
        index: [i, j],
        setCurrentSelect: setCurrentSelect,
        currentSelect: currentSelect,
        boardState: [...matrix],
        setMatrix: setMatrix,
        playerTurn: playerTurn,
        setPlayerTurn: setPlayerTurn,
        p1Pieces: p1Pieces,
        p2Pieces: p2Pieces,
        setP1Pieces: setP1Pieces,
        setP2Pieces: setP2Pieces
      });
    });
  }))));
};
var _default = Board;
exports.default = _default;