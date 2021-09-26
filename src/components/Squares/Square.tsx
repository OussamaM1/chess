import "./Square.css";

interface Props {
  coordinates: number;
  image?: string;
}
const Square = ({ coordinates, image }: Props) => {
  if (coordinates % 2 === 0)
    return (
      <div className="squares black-squares">
        {image && (
          <div
            className="image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
      </div>
    );
  else
    return (
      <div className="squares white-squares">
        {image && (
          <div
            className="image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        )}
      </div>
    );
};
export default Square;
