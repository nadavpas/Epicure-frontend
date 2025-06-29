import { eyalShani, asafGranit, avivMoshe } from "../../assets/chefs";
import '../../styles/ChefCard.scss'
interface ChefCardProps {
  name: "Eyal Shani" | "Asaf Granit" | "Aviv Moshe",
}
function ChefCard({name} : ChefCardProps) {
  const images = {
    'Eyal Shani': eyalShani,
    'Asaf Granit': asafGranit,
    'Aviv Moshe': avivMoshe,
  };
  return (
    <div className="chef-container" >
      <img src={images[name]} alt={name} />
      <span className="image-label">{name}</span>
    </div>
  );
}
export default ChefCard;
