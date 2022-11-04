"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./styles.css");
var _piecered = _interopRequireDefault(require("../assets/piecered.png"));
var _pieceblack = _interopRequireDefault(require("../assets/pieceblack.png"));
var _kingblack = _interopRequireDefault(require("../assets/kingblack.png"));
var _kingred = _interopRequireDefault(require("../assets/kingred.png"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Piece = _ref => {
  let {
    val
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "piece"
  }, val === 1 && /*#__PURE__*/_react.default.createElement("img", {
    className: "piece-img red",
    src: _piecered.default
  }), val === 2 && /*#__PURE__*/_react.default.createElement("img", {
    className: "piece-img",
    src: _pieceblack.default
  }), val === 0 && '', val === 3 && /*#__PURE__*/_react.default.createElement("img", {
    className: "piece-img redking",
    src: _kingred.default
  }), val === 4 && /*#__PURE__*/_react.default.createElement("img", {
    className: "piece-img blackking",
    src: _kingblack.default
  }));
};
var _default = Piece;
exports.default = _default;