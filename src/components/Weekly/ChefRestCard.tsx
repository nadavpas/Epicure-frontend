import "../../styles/ChefRestCard.scss";
import '../../App.scss'
interface ChefRestCardProps {
  name: string,
  image: string
}
function ChefRestCard({ name,image }: ChefRestCardProps) {
  return (
    <div className="chef-rest-container">
      <img src={image} alt="dish" />
      <div className="text-container">
        <h3 className="card-text">{name}</h3>
      </div>
    </div>
  );
}
export default ChefRestCard;
