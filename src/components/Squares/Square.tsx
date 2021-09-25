import "./Square.css";

interface Props {
  coordinates: number;
  image?: string;
}
const Square = ({ coordinates, image }: Props) => {
  if (coordinates % 2 === 0)
    return (
      <div className="squares black-squares">
        <img className="image" alt="" src={image} />
      </div>
    );
  else
    return (
      <div className="squares white-squares">
        <img className="image" alt="" src={image} />
      </div>
    );
};
export default Square;
