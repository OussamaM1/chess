import "./Square.css";
import piece from "../../assets/images/bp.png";
const Square = ({ coordinates }: { coordinates: number }) => {
  if (coordinates % 2 === 0)
    return (
      <div className="squares black-squares">
        <img className="image" alt="pawn" src={piece} />
      </div>
    );
  else return <div className="squares white-squares"></div>;
};
export default Square;
