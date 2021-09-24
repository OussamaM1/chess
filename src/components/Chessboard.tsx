import "./Chessboard.css";
const Chessboard = () => {
  //white squares : #7495af
  //dark squares : #4f80aa
  //background : #202020
  const horizontalCoordinates = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const verticalCoordinates = ["1", "2", "3", "4", "5", "6", "7", "8"];
  let board = [];
  for (let j = verticalCoordinates.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalCoordinates.length; i++) {
      if ((i + j) % 2 === 0)
        board.push(<div className="squares black-squares"></div>);
      else board.push(<div className="squares white-squares"></div>);
    }
  }
  return <div id="chessboard">{board}</div>;
};

export default Chessboard;
