import { CardProps } from "../utils/interfaces";
import "./styles.css";

export const Card: React.FC<CardProps> = ({ image, name, species }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt={image} />

      <div className="card__details">
        <p className="card__name">{name}</p>
        <p className="card__species">{species}</p>
      </div>
    </div>
  );
};
