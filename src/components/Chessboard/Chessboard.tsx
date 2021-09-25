import Square from "../Squares/Square";
import "./Chessboard.css";
const Chessboard = () => {
  //white squares : #7495af
  //dark squares : #4f80aa
  //background : #202020
  const horizontalCoordinates = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const verticalCoordinates = ["1", "2", "3", "4", "5", "6", "7", "8"];
  let board = [];
  let key = 0;
  for (let j = verticalCoordinates.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalCoordinates.length; i++) {
      board.push(<Square key={key} coordinates={i + j} />);
      key++;
    }
  }
  return <div id="chessboard">{board}</div>;
};

export default Chessboard;
