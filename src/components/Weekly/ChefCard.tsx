import {Chefs} from '../../mockData/Chefs'
import '../../styles/ChefCard.scss'
import '../../App.scss'
import type { ChefNames } from '../../utils/enum';
interface ChefCardProps {
  name: ChefNames
}
function ChefCard({name} : ChefCardProps) {
  return (
    <div className="chef-container" >
      <img src={Chefs[name]} alt={name} />
      <span className="image-label h3">{name}</span>
    </div>
  );
}
export default ChefCard;
